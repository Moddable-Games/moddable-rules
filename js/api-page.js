(async function () {
  const res = await fetch('../dist/api/index.json');
  if (!res.ok) return;
  const data = await res.json();

  const stats = data.stats || {};
  document.getElementById('stat-games').textContent = stats.totalGames || 0;
  document.getElementById('stat-variants').textContent = stats.totalVariants || 0;
  document.getElementById('stat-oracles').textContent = stats.totalOracleTables || 0;
  document.getElementById('stat-entities').textContent = stats.totalEntities || 0;
  document.getElementById('stat-endpoints').textContent = data.endpoints?.length || 0;

  const tbody = document.getElementById('endpoint-tbody');
  if (tbody && data.endpoints) {
    for (const ep of data.endpoints) {
      const tr = document.createElement('tr');
      const badgeClass = ep.type === 'json' ? 'type-badge--json'
        : ep.type === 'markdown' ? 'type-badge--markdown'
        : 'type-badge--directory';
      tr.innerHTML = `
        <td class="endpoint-path"><a href="../dist${ep.path}" target="_blank" rel="noopener">${ep.path}</a></td>
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
