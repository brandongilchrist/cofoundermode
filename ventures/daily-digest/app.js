// ═══════════════════════════════════════════════════════════════
// ThreatDigest — Feed Renderer
// Loads feed.json, renders incidents, updates stats
// ═══════════════════════════════════════════════════════════════

(function () {
  'use strict';

  // ── Date display ──────────────────────────────────────────
  const dateEl = document.getElementById('current-date');
  const now = new Date();
  dateEl.textContent = now.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // ── Seed data (fallback when feed.json unavailable) ───────
  const SEED_DATA = {
    items: [
      {
        title: 'Abracadabra (MIM) Exploit — $13M Drained via Cauldron Logic Bug',
        summary: 'Attacker exploited a rounding error in the liquidation logic of Abracadabra\'s cauldron contracts on Ethereum. Funds swapped to ETH and bridged to Arbitrum. Root cause: unchecked return value in borrow() leading to inflated collateral position.',
        severity: 'critical',
        type: 'incident',
        tags: ['exploit', 'defi'],
        chain: 'Ethereum',
        loss_usd: 13000000,
        source: 'On-chain analysis',
        date: '2026-03-08'
      },
      {
        title: 'Bybit Hot Wallet Compromise — $1.4B Unauthorized Transfer',
        summary: 'Largest CEX breach since FTX. Attacker compromised multi-sig signing infrastructure via supply chain attack on Safe{Wallet} UI. Lazarus Group attribution with high confidence based on on-chain clustering.',
        severity: 'critical',
        type: 'incident',
        tags: ['exploit', 'bridge'],
        chain: 'Ethereum',
        loss_usd: 1400000000,
        source: 'ZachXBT / Arkham Intel',
        date: '2026-03-08'
      },
      {
        title: 'Solana Program Upgrade Authority Phishing Campaign',
        summary: 'Coordinated phishing campaign targeting Solana program deployers. Fake Squads multisig UI harvests upgrade authority keys. 3 programs compromised affecting ~$2M TVL.',
        severity: 'high',
        type: 'incident',
        tags: ['phishing'],
        chain: 'Solana',
        loss_usd: 2000000,
        source: 'OtterSec',
        date: '2026-03-08'
      },
      {
        title: 'Critical Re-entrancy in Uniswap V4 Hook Interface',
        summary: 'White-hat disclosure of re-entrancy vector in custom hook callbacks. Hooks that modify pool state during beforeSwap() can be exploited to drain LP positions. Patch released, no exploit in the wild.',
        severity: 'critical',
        type: 'vulnerability',
        tags: ['vulnerability', 'defi'],
        chain: 'Ethereum',
        loss_usd: 0,
        source: 'Immunefi Bug Bounty',
        date: '2026-03-08'
      },
      {
        title: 'Cosmos IBC Channel Misconfiguration Allows Token Inflation',
        summary: 'Audit finding: 12 Cosmos chains have misconfigured IBC channels that could allow unbounded minting of bridged tokens. Coordinated disclosure in progress with affected chains.',
        severity: 'high',
        type: 'vulnerability',
        tags: ['vulnerability', 'bridge'],
        chain: 'Cosmos',
        loss_usd: 0,
        source: 'Informal Systems',
        date: '2026-03-07'
      },
      {
        title: 'DPRK Lazarus Group: Updated TTP Analysis for DeFi Targeting',
        summary: 'New report mapping evolution of Lazarus Group tactics for DeFi protocol exploitation. Shift from social engineering to supply-chain attacks on frontend infrastructure. Known wallet clusters updated.',
        severity: 'high',
        type: 'analysis',
        tags: ['apt', 'defi'],
        chain: 'Multi-chain',
        loss_usd: 0,
        source: 'Chainalysis',
        date: '2026-03-07'
      },
      {
        title: 'MEV Bot Sandwich Attack Surge on Base L2',
        summary: 'MEV sandwich attacks on Base L2 increased 340% in the past week. New bot clusters exploiting lack of private mempool options. Estimated $4.2M extracted from DEX traders.',
        severity: 'medium',
        type: 'analysis',
        tags: ['mev', 'defi'],
        chain: 'Ethereum',
        loss_usd: 4200000,
        source: 'Flashbots Research',
        date: '2026-03-07'
      }
    ]
  };

  // ── Helpers ───────────────────────────────────────────────
  function formatLoss(usd) {
    if (!usd || usd <= 0) return null;
    if (usd >= 1e9) return `$${(usd / 1e9).toFixed(1)}B`;
    if (usd >= 1e6) return `$${(usd / 1e6).toFixed(1)}M`;
    if (usd >= 1e3) return `$${(usd / 1e3).toFixed(0)}K`;
    return `$${usd.toLocaleString()}`;
  }

  function severityClass(severity) {
    return `badge-${severity || 'low'}`;
  }

  function severityBarClass(severity) {
    return severity || 'low';
  }

  function typeLabel(type) {
    const labels = {
      incident: '🔴',
      vulnerability: '🟡',
      analysis: '📊',
      news: '📰'
    };
    return labels[type] || '📋';
  }

  function sectionTitle(type) {
    const titles = {
      incident: 'INCIDENTS & EXPLOITS',
      vulnerability: 'VULNERABILITIES & DISCLOSURES',
      analysis: 'ANALYSIS & REPORTS',
      news: 'INDUSTRY INTEL'
    };
    return titles[type] || type.toUpperCase();
  }

  function sectionIcon(type) {
    const icons = {
      incident: '🚨',
      vulnerability: '🔒',
      analysis: '📐',
      news: '📡'
    };
    return icons[type] || '📋';
  }

  // ── Render ────────────────────────────────────────────────
  function renderCard(item) {
    const loss = formatLoss(item.loss_usd);
    const tags = (item.tags || []).map(t =>
      `<span class="tag">${t}</span>`
    ).join('');

    const metaParts = [];
    if (loss) metaParts.push(`<span class="meta-item loss">${loss} lost</span>`);
    if (item.chain) metaParts.push(`<span class="meta-item">${item.chain}</span>`);
    if (item.source) metaParts.push(`<span class="meta-item">${item.source}</span>`);
    if (item.date) metaParts.push(`<span class="meta-item">${item.date}</span>`);

    const metaHtml = metaParts.join('<span class="meta-separator"></span>');

    return `
      <article class="incident-card" ${item.url && item.url !== '#' ? `onclick="window.open('${item.url}', '_blank')" style="cursor:pointer;"` : ''}>
        <div class="incident-severity-bar ${severityBarClass(item.severity)}"></div>
        <div class="incident-body">
          <div class="incident-title-row">
            <h3 class="incident-title">${item.title}</h3>
            <span class="badge ${severityClass(item.severity)}">${(item.severity || 'low').toUpperCase()}</span>
          </div>
          <p class="incident-summary">${item.summary}</p>
          <div class="incident-meta">${metaHtml}</div>
        </div>
        <div class="incident-tags">${tags}</div>
      </article>`;
  }

  function renderSection(type, items) {
    if (!items.length) return '';
    return `
      <section class="feed-section">
        <div class="section-header">
          <span class="section-icon">${sectionIcon(type)}</span>
          <span class="section-title">${sectionTitle(type)}</span>
          <span class="section-count">${items.length}</span>
        </div>
        <div class="incident-list">
          ${items.map(renderCard).join('')}
        </div>
      </section>`;
  }

  function renderFeed(data) {
    const items = data.items || [];
    const container = document.getElementById('feed-container');

    if (!items.length) {
      container.innerHTML = '<div class="empty-state">no items in current feed // check pipeline</div>';
      return;
    }

    // Group by type
    const groups = {};
    const typeOrder = ['incident', 'vulnerability', 'analysis', 'news'];
    items.forEach(item => {
      const type = item.type || 'news';
      if (!groups[type]) groups[type] = [];
      groups[type].push(item);
    });

    // Render sections in type order
    let html = '';
    typeOrder.forEach(type => {
      if (groups[type]) {
        html += renderSection(type, groups[type]);
        delete groups[type];
      }
    });
    // Remaining types
    Object.keys(groups).forEach(type => {
      html += renderSection(type, groups[type]);
    });

    container.innerHTML = html;

    // Update stats
    const incidents = items.filter(i => i.type === 'incident');
    const vulns = items.filter(i => i.type === 'vulnerability');
    const totalLoss = items.reduce((sum, i) => sum + (i.loss_usd || 0), 0);
    const severities = ['critical', 'high', 'medium', 'low'];
    const maxSev = severities.find(s => items.some(i => i.severity === s)) || 'low';

    document.getElementById('stat-incidents').textContent = incidents.length;
    document.getElementById('stat-losses').textContent = formatLoss(totalLoss) || '$0';
    document.getElementById('stat-vulns').textContent = vulns.length;

    const sevEl = document.getElementById('stat-severity');
    sevEl.textContent = maxSev.toUpperCase();
    sevEl.className = `stat-value ${maxSev}`;
  }

  // ── Load ──────────────────────────────────────────────────
  fetch('feed.json')
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then(data => renderFeed(data))
    .catch(() => {
      console.log('[ThreatDigest] feed.json unavailable, using seed data');
      renderFeed(SEED_DATA);
    });

})();
