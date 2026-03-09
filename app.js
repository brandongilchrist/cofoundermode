// ThreatDigest — Crypto Security Intelligence
// Loads threat intel from feed.json and renders incident cards

const FEED_PATH = './feed.json';

function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    }).format(date);
}

function formatUSD(amount) {
    if (amount >= 1_000_000) return `$${(amount / 1_000_000).toFixed(1)}M`;
    if (amount >= 1_000) return `$${(amount / 1_000).toFixed(0)}K`;
    return `$${amount}`;
}

function updateStatsBar(data) {
    const incidents = data.items.filter(i => i.type === 'incident').length;
    const totalLoss = data.items.reduce((sum, i) => sum + (i.loss_usd || 0), 0);
    const vulns = data.items.filter(i => i.type === 'vulnerability').length;
    const maxSev = data.items.reduce((max, i) => {
        const order = { critical: 4, high: 3, medium: 2, low: 1 };
        return (order[i.severity] || 0) > (order[max] || 0) ? i.severity : max;
    }, 'low');

    document.getElementById('stat-incidents').textContent = incidents;
    document.getElementById('stat-incidents').className = `stat-value ${incidents > 3 ? 'critical' : ''}`;

    document.getElementById('stat-losses').textContent = totalLoss > 0 ? formatUSD(totalLoss) : '—';
    document.getElementById('stat-losses').className = `stat-value ${totalLoss > 1_000_000 ? 'critical' : totalLoss > 100_000 ? 'high' : ''}`;

    document.getElementById('stat-vulns').textContent = vulns;
    document.getElementById('stat-severity').textContent = maxSev.toUpperCase();
    document.getElementById('stat-severity').className = `stat-value ${maxSev}`;
}

function renderDigest(data) {
    const content = document.getElementById('digest-content');

    if (!data || !data.items || data.items.length === 0) {
        content.innerHTML = `<div class="loading"><p>No intel for today. All clear.</p></div>`;
        return;
    }

    updateStatsBar(data);

    // Group: incidents first, then vulnerabilities, then analysis
    const groups = {
        incident: { label: '🚨 Incidents & Exploits', items: [] },
        vulnerability: { label: '🔓 Vulnerabilities & Disclosures', items: [] },
        analysis: { label: '📊 Analysis & Reports', items: [] },
        news: { label: '📡 Industry Intel', items: [] }
    };

    data.items.forEach(item => {
        const type = item.type || 'news';
        if (groups[type]) groups[type].items.push(item);
        else groups.news.items.push(item);
    });

    let html = '';
    for (const [type, group] of Object.entries(groups)) {
        if (group.items.length === 0) continue;

        html += `<section class="digest-section">`;
        html += `<h2 class="section-title">${group.label}</h2>`;

        group.items.forEach(item => {
            const sevClass = item.severity ? `severity-${item.severity}` : '';
            const tags = (item.tags || []).map(t =>
                `<span class="card-tag tag-${t}">${t}</span>`
            ).join('');

            const lossMeta = item.loss_usd
                ? `<span class="loss-amount">${formatUSD(item.loss_usd)} lost</span>`
                : '';

            const sevBadge = item.severity
                ? `<span class="severity-badge sev-${item.severity}">${item.severity}</span>`
                : '';

            html += `
                <a href="${item.url || '#'}" target="_blank" rel="noopener" class="digest-card ${sevClass}">
                    <div class="card-header">
                        <h3 class="card-title">${item.title}</h3>
                        <div class="card-tags">${sevBadge}${tags}</div>
                    </div>
                    <p class="card-summary">${item.summary}</p>
                    <div class="card-meta">
                        ${lossMeta}
                        <span>${item.chain || ''}</span>
                        <span>${item.source || ''}</span>
                        <span>${item.date || ''}</span>
                    </div>
                </a>
            `;
        });

        html += `</section>`;
    }

    content.innerHTML = html;
}

async function loadDigest() {
    document.getElementById('current-date').textContent = formatDate(new Date());

    try {
        const response = await fetch(FEED_PATH);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        renderDigest(data);
    } catch {
        renderDigest(SEED_DATA);
    }
}

// ── Seed Data ──────────────────────────────────────────────────────
// Realistic crypto threat intel items — replaced by live pipeline later
const SEED_DATA = {
    date: new Date().toISOString().split('T')[0],
    curated_by: 'CSO Sentinel + CRO Horizon',
    items: [
        {
            title: 'Abracadabra (MIM) Exploit — $13M Drained via Cauldron Logic Bug',
            summary: 'Attacker exploited a rounding error in the liquidation logic of Abracadabra\'s cauldron contracts on Ethereum. Funds swapped to ETH and bridged to Arbitrum. Root cause: unchecked return value in borrow() leading to inflated collateral position.',
            type: 'incident',
            severity: 'critical',
            tags: ['exploit', 'defi'],
            chain: 'Ethereum',
            loss_usd: 13_000_000,
            source: 'On-chain analysis',
            url: '#',
            date: '2026-03-08'
        },
        {
            title: 'Bybit Hot Wallet Compromise — $1.4B Unauthorized Transfer',
            summary: 'Largest CEX breach since FTX. Attacker compromised multi-sig signing infrastructure via supply chain attack on Safe{Wallet} UI. Lazarus Group attribution with high confidence based on on-chain clustering.',
            type: 'incident',
            severity: 'critical',
            tags: ['exploit', 'bridge'],
            chain: 'Ethereum',
            loss_usd: 1_400_000_000,
            source: 'ZachXBT / Arkham Intel',
            url: '#',
            date: '2026-03-08'
        },
        {
            title: 'Critical Re-entrancy in Uniswap V4 Hook Interface',
            summary: 'White-hat disclosure of re-entrancy vector in custom hook callbacks. Hooks that modify pool state during beforeSwap() can be exploited to drain LP positions. Patch released, no exploit in the wild.',
            type: 'vulnerability',
            severity: 'critical',
            tags: ['vulnerability', 'defi'],
            chain: 'Ethereum',
            loss_usd: 0,
            source: 'Immunefi Bug Bounty',
            url: '#',
            date: '2026-03-08'
        },
        {
            title: 'Solana Program Upgrade Authority Phishing Campaign',
            summary: 'Coordinated phishing campaign targeting Solana program deployers. Fake Squads multisig UI harvests upgrade authority keys. 3 programs compromised affecting ~$2M TVL.',
            type: 'incident',
            severity: 'high',
            tags: ['phishing'],
            chain: 'Solana',
            loss_usd: 2_000_000,
            source: 'OtterSec',
            url: '#',
            date: '2026-03-08'
        },
        {
            title: 'OpenZeppelin Releases Defender 2.0 with AI Threat Detection',
            summary: 'New Defender release includes ML-based anomaly detection for governance proposals, automated pause triggers, and integration with Forta bot network. Free tier available for protocols with <$10M TVL.',
            type: 'analysis',
            severity: 'low',
            tags: ['audit'],
            chain: 'Multi-chain',
            source: 'OpenZeppelin Blog',
            url: '#',
            date: '2026-03-08'
        },
        {
            title: 'DPRK Threat Actor TTP Update: Fake Job Interview Vector',
            summary: 'Updated TTPs for DPRK-affiliated groups targeting DeFi developers. New variant uses malicious npm packages disguised as technical assessments. Payloads exfiltrate .env files and browser extension keystores.',
            type: 'analysis',
            severity: 'high',
            tags: ['phishing'],
            chain: 'N/A',
            source: 'Mandiant / FBI IC3',
            url: '#',
            date: '2026-03-07'
        },
        {
            title: 'Cosmos IBC Channel Misconfiguration Allows Token Inflation',
            summary: 'Audit finding: 12 Cosmos chains have misconfigured IBC channels that could allow unbounded minting of bridged tokens. Coordinated disclosure in progress with affected chains.',
            type: 'vulnerability',
            severity: 'high',
            tags: ['vulnerability', 'bridge'],
            chain: 'Cosmos',
            loss_usd: 0,
            source: 'Informal Systems',
            url: '#',
            date: '2026-03-07'
        },
        {
            title: 'Q1 2026 DeFi Exploit Losses Hit $2.1B — Up 340% YoY',
            summary: 'BlockThreat quarterly report shows $2.1B in DeFi exploit losses for Q1 2026, driven by the Bybit incident. Bridge exploits account for 67% of losses. Smart contract bugs down 15% but severity increasing.',
            type: 'analysis',
            severity: 'medium',
            tags: ['defi'],
            chain: 'Multi-chain',
            source: 'BlockThreat Newsletter',
            url: '#',
            date: '2026-03-07'
        }
    ]
};

// Boot
loadDigest();
