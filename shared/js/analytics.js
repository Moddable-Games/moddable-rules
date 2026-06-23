const GA_ID = 'G-N0N3JPVCBE';
const s = document.createElement('script');
s.async = true;
s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
document.head.appendChild(s);
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
window.gtag = gtag;
gtag('js', new Date());
gtag('config', GA_ID);

function track(event, params) {
  if (typeof window.gtag === 'function') window.gtag('event', event, params || {});
}

function getGameName() {
  const el = document.querySelector('.cover-title, .variant-cover-title');
  return el ? el.textContent.trim() : '';
}

document.addEventListener('click', function(e) {
  const link = e.target.closest('a');
  if (!link) return;
  const href = link.getAttribute('href') || '';

  if (href.match(/\.pdf(\?|$)/i)) {
    const parts = href.split('/');
    const fileName = parts[parts.length - 1].split('?')[0];
    const variantName = document.querySelector('.variant-cover-title');
    track('pdf_download', {
      game_name: getGameName(),
      variant_name: variantName ? variantName.textContent.trim() : '',
      file_name: fileName
    });
    return;
  }

  if (link.closest('.variant-pager') && !link.classList.contains('variant-pager-hub')) {
    const toText = link.textContent.trim();
    const fromEl = document.querySelector('.variant-cover-title');
    track('variant_navigate', {
      game_name: getGameName(),
      from_variant: fromEl ? fromEl.textContent.trim() : '',
      to_variant: toText
    });
    return;
  }

  if (link.closest('.toc')) {
    track('toc_click', {
      game_name: getGameName(),
      section_name: link.textContent.trim()
    });
    return;
  }

  if (link.closest('.game-card')) {
    const card = link.closest('.game-card');
    const title = card.querySelector('.card-title');
    track('game_select', {
      game_name: title ? title.textContent.trim() : ''
    });
    return;
  }

  if (href.match(/^https?:\/\//)) {
    track('outbound_click', {
      link_url: href,
      link_label: link.textContent.trim()
    });
  }
});
