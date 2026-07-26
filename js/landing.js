const pills = document.querySelectorAll('.filter-pill');
const cards = document.querySelectorAll('.game-card');
const searchInput = document.querySelector('.search-input');

const filterGroups = {
  game: ['game', 'original'],
  classic: ['classic', 'standalone', 'hub'],
};

function filterCards() {
  const activePill = document.querySelector('.filter-pill.active');
  const filter = activePill ? activePill.dataset.filter : 'all';
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const types = filterGroups[filter] || [filter];

  cards.forEach(card => {
    const matchesFilter = filter === 'all' || types.includes(card.dataset.type);
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

fetch('api/stats.json')
  .then(r => r.ok ? r.json() : null)
  .then(stats => {
    if (!stats) return;
    const g = document.getElementById('stat-games');
    const v = document.getElementById('stat-variants');
    if (g) g.textContent = stats.games.total;
    if (v) v.textContent = stats.content.variants + stats.content.componentGames;
  })
  .catch(() => {});
