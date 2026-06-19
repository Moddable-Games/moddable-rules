const pills = document.querySelectorAll('.filter-pill');
const cards = document.querySelectorAll('.game-card');
const searchInput = document.querySelector('.search-input');

function filterCards() {
  const activePill = document.querySelector('.filter-pill.active');
  const filter = activePill ? activePill.dataset.filter : 'all';
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

  cards.forEach(card => {
    const matchesFilter = filter === 'all' || card.dataset.type === filter;
    const title = card.querySelector('.card-title').textContent.toLowerCase();
    const desc = card.querySelector('.card-desc').textContent.toLowerCase();
    const matchesSearch = !query || title.includes(query) || desc.includes(query);
    card.style.display = (matchesFilter && matchesSearch) ? '' : 'none';
  });
}

pills.forEach(pill => {
  pill.addEventListener('click', () => {
    pills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    filterCards();
  });
});

if (searchInput) {
  searchInput.addEventListener('input', filterCards);
}
