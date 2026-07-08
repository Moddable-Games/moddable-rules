const toc = document.getElementById('toc');
if (toc) {
  const h2s = document.querySelectorAll('.content h2');
  const hasH2s = h2s.length > 0;
  const headings = hasH2s
    ? document.querySelectorAll('.content h2, .content h3')
    : document.querySelectorAll('.content h3');

  if (headings.length > 0) {
    const list = document.createElement('ul');
    const links = [];
    let currentH2Li = null;
    let currentSubList = null;

    headings.forEach((h, i) => {
      const id = h.id || 'section-' + i;
      h.id = id;

      const a = document.createElement('a');
      a.href = '#' + id;
      a.textContent = h.textContent;
      links.push({ a, id });

      if (!hasH2s || h.tagName === 'H2') {
        const li = document.createElement('li');
        li.appendChild(a);
        list.appendChild(li);
        currentH2Li = li;
        currentSubList = null;
      } else {
        if (!currentSubList) {
          currentSubList = document.createElement('ul');
          (currentH2Li || list).appendChild(currentSubList);
        }
        const li = document.createElement('li');
        li.appendChild(a);
        currentSubList.appendChild(li);
      }
    });

    const title = document.createElement('div');
    title.className = 'toc-title';
    title.textContent = 'Contents';
    toc.appendChild(title);
    toc.appendChild(list);

    let activeLink = null;

    function setActive(id) {
      if (activeLink) activeLink.classList.remove('active');
      const match = links.find(l => l.id === id);
      if (match) {
        match.a.classList.add('active');
        activeLink = match.a;
      }
    }

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      }
    }, {
      rootMargin: '-80px 0px -60% 0px',
      threshold: 0
    });

    headings.forEach(h => observer.observe(h));

    links.forEach(({ a, id }) => {
      a.addEventListener('click', () => setActive(id));
    });
  }
}
