(async function () {
  const [res, statsRes] = await Promise.all([
    fetch('./index.json'),
    fetch('./stats.json'),
  ]);
  if (!res.ok) return;
  const data = await res.json();

  if (statsRes.ok) {
    const stats = await statsRes.json();
    document.getElementById('stat-games').textContent = stats.games.total;
    document.getElementById('stat-variants').textContent = stats.content.variants + stats.content.componentGames;
    document.getElementById('stat-oracles').textContent = stats.data.oracleTables;
    document.getElementById('stat-entities').textContent = stats.data.entities;
    document.getElementById('stat-endpoints').textContent = stats.site.apiEndpoints;
  }

  const tbody = document.getElementById('endpoint-tbody');
  if (tbody && data.endpoints) {
    for (const ep of data.endpoints) {
      const tr = document.createElement('tr');
      const badgeClass = ep.type === 'json' ? 'type-badge--json'
        : ep.type === 'markdown' ? 'type-badge--markdown'
        : 'type-badge--directory';
      tr.innerHTML = `
        <td class="endpoint-path"><a href="${ep.path}" target="_blank" rel="noopener">${ep.path}</a></td>
        <td><span class="type-badge ${badgeClass}">${ep.type}</span></td>
        <td class="endpoint-desc">${ep.description}</td>
      `;
      tbody.appendChild(tr);
    }
  }

  const dtbody = document.getElementById('deprecation-tbody');
  if (dtbody && data.deprecations) {
    for (const dep of data.deprecations) {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="old">${dep.old}</td>
        <td class="new">${dep.replacement}</td>
        <td>${dep.consumer}</td>
      `;
      dtbody.appendChild(tr);
    }
  }

})();
