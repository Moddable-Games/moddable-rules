const KEY = 'moddable-rules-surface';
const html = document.documentElement;

function getPreferred() {
  const stored = localStorage.getItem(KEY);
  if (stored) return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function apply(surface) {
  html.setAttribute('data-surface', surface);
  localStorage.setItem(KEY, surface);
  const btn = document.querySelector('.surface-toggle');
  if (btn) btn.setAttribute('aria-label', surface === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}

function toggle() {
  const current = html.getAttribute('data-surface') || getPreferred();
  apply(current === 'dark' ? 'light' : 'dark');
}

const authored = html.getAttribute('data-surface');
if (!localStorage.getItem(KEY) && authored) {
  apply(authored);
} else {
  apply(getPreferred());
}

document.addEventListener('click', e => {
  if (e.target.closest('.surface-toggle')) toggle();
});
