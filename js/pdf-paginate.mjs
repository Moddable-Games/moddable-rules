export function buildPaginateScript(pageHMm, padMm) {
  const contentHMm = pageHMm - (2 * padMm);
  return `
(() => {
  const MM_TO_PX = 3.7795275591;
  // Eight pixels short of the frame: heights are measured once, in the source
  // column, and rounding across a page's worth of elements put the last line
  // of Yari Shogi's first page 2px past the foot.
  const CONTENT_H = ${contentHMm} * MM_TO_PX - 8;
  const MIN_AFTER_HEADING = CONTENT_H * 0.20;

  const source = document.querySelector('#pdf-source');
  if (!source) return;

  function getHeight(el) {
    const rect = el.getBoundingClientRect();
    const style = getComputedStyle(el);
    const mt = parseFloat(style.marginTop) || 0;
    const mb = parseFloat(style.marginBottom) || 0;
    return rect.height + mt + mb;
  }

  function isMajorSectionStart(el) {
    return el.tagName === 'DIV' && el.classList.contains('eyebrow');
  }

  function isAnyHeading(el) {
    return /^H[2-6]$/.test(el.tagName) || isMajorSectionStart(el);
  }

  // --- Split blocks too tall for one page ---
  // Every page frame clips its overflow, so an element taller than a page loses
  // whatever does not fit, and nothing reports it. Zung Jung's 44-row pattern
  // table stopped at row 9.2 in its PDF, and the paragraph after it went too.
  // Tables split at row boundaries with the header repeated; lists split at
  // item boundaries. A piece is kept to three quarters of a page so a heading
  // still fits above the first one.
  const SPLIT_LIMIT = CONTENT_H * 0.75;

  function chunkByHeight(items, fixedH) {
    const chunks = [];
    let cur = [];
    let h = fixedH;
    for (const item of items) {
      const ih = item.getBoundingClientRect().height;
      if (cur.length && h + ih > SPLIT_LIMIT) {
        chunks.push(cur);
        cur = [];
        h = fixedH;
      }
      cur.push(item);
      h += ih;
    }
    if (cur.length) chunks.push(cur);
    return chunks;
  }

  function splitTable(el) {
    const table = el.tagName === 'TABLE' ? el : el.querySelector(':scope > table');
    if (!table || !table.tBodies.length) return null;
    const rows = Array.from(table.tBodies[0].rows);
    const head = table.tHead;
    const headH = head ? head.getBoundingClientRect().height : 0;
    const chunks = chunkByHeight(rows, headH + (getHeight(el) - table.getBoundingClientRect().height));
    if (chunks.length < 2) return null;
    return chunks.map(chunk => {
      const t = table.cloneNode(false);
      if (head) t.appendChild(head.cloneNode(true));
      const body = document.createElement('tbody');
      for (const row of chunk) body.appendChild(row);
      t.appendChild(body);
      if (el === table) return t;
      const wrap = el.cloneNode(false);
      wrap.appendChild(t);
      return wrap;
    });
  }

  // A list, or a wrapper holding only a list (a hub's div.variant-grid): the
  // wrapper is repeated around each piece, as a table's is.
  function splitList(el) {
    const wrapped = el.tagName === 'DIV';
    const outer = el;
    if (wrapped) el = el.children[0];
    const items = Array.from(el.children).filter(c => c.tagName === 'LI');
    const chunks = chunkByHeight(items, getHeight(outer) - el.getBoundingClientRect().height);
    if (chunks.length < 2) return null;
    let start = el.tagName === 'OL' ? (parseInt(el.getAttribute('start'), 10) || 1) : 0;
    return chunks.map(chunk => {
      const list = el.cloneNode(false);
      if (el.tagName === 'OL') {
        list.setAttribute('start', String(start));
        start += chunk.length;
      }
      for (const item of chunk) list.appendChild(item);
      if (!wrapped) return list;
      const wrap = outer.cloneNode(false);
      wrap.appendChild(list);
      return wrap;
    });
  }

  // A diagram cannot be split, so one taller than a page is scaled down to fit
  // instead: Raumschach's five stacked levels and the 8x14 Klein Bottle board
  // were cut off at the page foot. Only a diagram that cannot fit is touched,
  // and it keeps nine tenths of a page, so a board that fitted before is
  // drawn exactly as it was.
  const DIAGRAM_LIMIT = CONTENT_H * 0.9;
  function fitDiagram(el) {
    const svg = /^svg$/i.test(el.tagName) ? el : el.querySelector('svg');
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    if (!rect.height) return;
    const target = DIAGRAM_LIMIT - (getHeight(el) - rect.height);
    if (target <= 0 || rect.height <= target) return;
    const scale = target / rect.height;
    svg.style.width = (rect.width * scale) + 'px';
    svg.style.height = target + 'px';
    svg.style.maxWidth = 'none';
  }

  for (const el of Array.from(source.children)) {
    if (/^svg$/i.test(el.tagName) || (el.querySelector && el.querySelector('svg'))) {
      if (getHeight(el) > DIAGRAM_LIMIT) fitDiagram(el);
      continue;
    }
    if (getHeight(el) <= SPLIT_LIMIT) continue;
    const isTable = el.tagName === 'TABLE' || (el.tagName === 'DIV' && el.querySelector(':scope > table'));
    const pieces = isTable ? splitTable(el)
      : (el.tagName === 'UL' || el.tagName === 'OL') ? splitList(el)
      : (el.tagName === 'DIV' && el.children.length === 1 && /^(UL|OL)$/.test(el.children[0].tagName)) ? splitList(el)
      : null;
    if (pieces) el.replaceWith(...pieces);
  }
  const children = Array.from(source.children);

  // Build atomic groups that must stay together. A group takes a following
  // sibling only while the whole still fits on one page: a heading kept with
  // a long table and the paragraph after it was a group no page could hold.
  function fitsWith(grp, el) {
    let h = getHeight(el);
    for (const g of grp) h += getHeight(g);
    return h <= CONTENT_H;
  }

  let groups = [];
  let i = 0;
  while (i < children.length) {
    const el = children[i];

    if (isMajorSectionStart(el)) {
      // eyebrow + h2 + first content element = new page trigger
      let grp = [el];
      if (i + 1 < children.length) grp.push(children[i + 1]);
      if (i + 2 < children.length && !isMajorSectionStart(children[i + 2])
          && fitsWith(grp, children[i + 2])) {
        grp.push(children[i + 2]);
      }
      groups.push({ els: grp, newPage: true });
      i += grp.length;
    } else if (/^H[3-6]$/.test(el.tagName)) {
      // Subheading: keep with next two siblings
      let grp = [el];
      if (i + 1 < children.length) grp.push(children[i + 1]);
      if (i + 2 < children.length && !isAnyHeading(children[i + 2])
          && !isMajorSectionStart(children[i + 2])
          && fitsWith(grp, children[i + 2])) {
        grp.push(children[i + 2]);
      }
      groups.push({ els: grp, newPage: false });
      i += grp.length;
    } else if (el.tagName === 'DIV' && /box|highlight|meltdown/.test(el.className)) {
      // Callout boxes: attach to preceding group if possible
      if (groups.length > 0 && !groups[groups.length - 1].newPage) {
        groups[groups.length - 1].els.push(el);
      } else {
        groups.push({ els: [el], newPage: false });
      }
      i++;
    } else if (/^svg$/i.test(el.tagName) || (el.tagName === 'DIV' && el.querySelector && el.querySelector('svg'))) {
      // SVG diagram: keep with following caption paragraph
      let grp = [el];
      if (i + 1 < children.length) {
        const next = children[i + 1];
        const nextCls = (typeof next.className === 'string') ? next.className : (next.getAttribute && next.getAttribute('class')) || '';
        if (next.tagName === 'P' && /diagram-caption/.test(nextCls)) {
          grp.push(next);
        }
      }
      groups.push({ els: grp, newPage: false });
      i += grp.length;
    } else {
      groups.push({ els: [el], newPage: false });
      i++;
    }
  }

  // Paginate with section gaps and smart page breaks
  const SECTION_GAP = 24 * MM_TO_PX;
  const SUB_GAP = 10 * MM_TO_PX;
  let pages = [];
  let currentPage = [];
  let currentHeight = 0;

  function commitPage() {
    if (currentPage.length > 0) {
      pages.push(currentPage);
      currentPage = [];
      currentHeight = 0;
    }
  }

  for (let g = 0; g < groups.length; g++) {
    const group = groups[g];
    let groupH = 0;
    for (const el of group.els) groupH += getHeight(el);

    if (group.newPage && currentPage.length > 0) {
      // If page is thin (<30% full) and the section would fit with a gap, keep on same page
      if (currentHeight < CONTENT_H * 0.30 && currentHeight + SECTION_GAP + groupH <= CONTENT_H) {
        group.els[0].style.marginTop = SECTION_GAP + 'px';
        currentHeight += SECTION_GAP;
      } else {
        commitPage();
      }
      for (const el of group.els) currentPage.push(el);
      currentHeight += groupH;
      continue;
    }

    // Subheading gap
    const isSubhead = /^H[3-6]$/.test(group.els[0].tagName);
    const gap = (isSubhead && currentPage.length > 0) ? SUB_GAP : 0;

    if (currentHeight + gap + groupH <= CONTENT_H) {
      // Check: if this is a heading group near the bottom, ensure enough room for content after it
      if (/^H[2]$/.test(group.els[0].tagName)) {
        const remaining = CONTENT_H - (currentHeight + gap + groupH);
        // What follows must fit under the heading, or the heading ends the
        // page alone: Surakarta's "The Board" sat at a page foot with its
        // diagram overleaf.
        let nextH = 0;
        if (g + 1 < groups.length) for (const el of groups[g + 1].els) nextH += getHeight(el);
        if ((remaining < MIN_AFTER_HEADING || nextH > remaining) && g + 1 < groups.length) {
          commitPage();
          for (const el of group.els) currentPage.push(el);
          currentHeight = groupH;
          continue;
        }
      }
      if (gap > 0) group.els[0].style.marginTop = gap + 'px';
      for (const el of group.els) currentPage.push(el);
      currentHeight += gap + groupH;
      continue;
    }

    // Doesn't fit — new page
    commitPage();
    for (const el of group.els) currentPage.push(el);
    currentHeight = groupH;
  }
  commitPage();

  // Post-pass: merge thin trailing pages into the next page
  // Only merge if the next page does NOT start with a major section (eyebrow)
  const MIN_PAGE_FILL = CONTENT_H * 0.30;
  // and only when the two together still fit: Toroidal Byzantine's short
  // opening page was folded onto a page already filled by its board.
  for (let p = 0; p < pages.length - 1; p++) {
    let pageH = 0;
    for (const el of pages[p]) pageH += getHeight(el);
    let nextH = 0;
    for (const el of pages[p + 1]) nextH += getHeight(el);
    const nextStart = pages[p + 1][0];
    if (pageH < MIN_PAGE_FILL && !isMajorSectionStart(nextStart) && pageH + nextH <= CONTENT_H) {
      pages[p + 1] = pages[p].concat(pages[p + 1]);
      pages.splice(p, 1);
      p--;
    }
  }

  // Render page frames
  source.remove();
  document.body.innerHTML = '';

  for (const pageEls of pages) {
    const frame = document.createElement('div');
    frame.style.cssText = [
      'width: 210mm',
      'height: ${pageHMm}mm',
      'padding: ${padMm}mm',
      'box-sizing: border-box',
      'overflow: hidden',
      'page-break-after: always',
    ].join(';');
    for (const el of pageEls) frame.appendChild(el);
    document.body.appendChild(frame);
  }

  // A frame whose content is taller than the frame has been clipped. Record
  // it for the caller to report: content lost here is otherwise lost silently.
  // Measured from where the content actually ends, not scrollHeight: a last
  // element's bottom margin counts toward scrollHeight and loses nothing.
  window.__pdfOverflow = [];
  Array.from(document.body.children).forEach((frame, n) => {
    const frameBottom = frame.getBoundingClientRect().bottom;
    let contentBottom = frameBottom;
    for (const child of frame.children) {
      contentBottom = Math.max(contentBottom, child.getBoundingClientRect().bottom);
    }
    const over = contentBottom - frameBottom;
    if (over > 1) {
      const last = frame.lastElementChild;
      window.__pdfOverflow.push({
        page: n + 1,
        overflowPx: Math.round(over),
        lastText: (last ? last.textContent : '').replace(/\\s+/g, ' ').trim().slice(0, 80),
      });
    }
  });
})();
`;
}
