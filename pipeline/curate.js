// ThreatDigest — Content Curation Pipeline
// Fetches from crypto security RSS feeds, categorizes, and outputs feed.json
//
// Agent mapping:
//   CRO (Horizon) → source discovery + feed selection
//   CSO (Sentinel) → severity classification
//   CMO (Beacon)   → summary editing
//
// Run: npm run curate

import Parser from 'rss-parser';
import { writeFileSync, readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');

// ── Feed Sources (CRO Horizon: source discovery) ────────────────────

const FEEDS = [
  {
    url: 'https://samczsun.com/rss/',
    source: 'samczsun',
    defaultType: 'analysis',
    defaultTags: ['vulnerability']
  },
  {
    url: 'https://blog.trailofbits.com/feed/',
    source: 'Trail of Bits',
    defaultType: 'analysis',
    defaultTags: ['audit']
  },
  {
    url: 'https://www.coindesk.com/arc/outboundfeeds/rss/',
    source: 'CoinDesk',
    defaultType: 'news',
    defaultTags: ['defi']
  },
  {
    url: 'https://cointelegraph.com/rss',
    source: 'CoinTelegraph',
    defaultType: 'news',
    defaultTags: ['defi']
  },
  {
    url: 'https://blog.chainalysis.com/feed/',
    source: 'Chainalysis',
    defaultType: 'analysis',
    defaultTags: ['exploit']
  },
  {
    url: 'https://www.halborn.com/blog/rss.xml',
    source: 'Halborn',
    defaultType: 'analysis',
    defaultTags: ['audit']
  }
];

// ── Severity Classification (CSO Sentinel: threat assessment) ───────

const SEVERITY_KEYWORDS = {
  critical: [
    'exploit', 'drained', 'stolen', 'hack', 'breach', 'compromise',
    'rug pull', 'rugpull', 'flash loan', 'reentrancy', 're-entrancy',
    'infinite mint', 'private key', 'lazarus', '$1b', '$500m', '$100m'
  ],
  high: [
    'vulnerability', 'critical bug', 'emergency', 'patch', 'upgrade',
    'phishing', 'social engineering', 'supply chain', 'backdoor',
    'access control', 'privilege escalation', '$50m', '$10m'
  ],
  medium: [
    'audit', 'finding', 'disclosure', 'misconfiguration', 'warning',
    'deprecated', 'risk', 'concern', 'best practice'
  ],
  low: [
    'report', 'analysis', 'review', 'update', 'release', 'new feature',
    'partnership', 'integration', 'research'
  ]
};

function classifySeverity(title, content) {
  const text = `${title} ${content}`.toLowerCase();
  for (const [severity, keywords] of Object.entries(SEVERITY_KEYWORDS)) {
    if (keywords.some(kw => text.includes(kw))) return severity;
  }
  return 'low';
}

// ── Chain Detection ────────────────────────────────────────────────

const CHAIN_KEYWORDS = {
  'Ethereum': ['ethereum', 'eth', 'erc-20', 'erc20', 'uniswap', 'aave', 'compound'],
  'Solana': ['solana', 'sol', 'spl'],
  'BSC': ['bsc', 'binance smart chain', 'bnb', 'pancakeswap'],
  'Polygon': ['polygon', 'matic'],
  'Arbitrum': ['arbitrum', 'arb'],
  'Optimism': ['optimism', 'op'],
  'Avalanche': ['avalanche', 'avax'],
  'Cosmos': ['cosmos', 'atom', 'ibc'],
  'Multi-chain': ['cross-chain', 'bridge', 'multi-chain', 'multichain']
};

function detectChain(title, content) {
  const text = `${title} ${content}`.toLowerCase();
  for (const [chain, keywords] of Object.entries(CHAIN_KEYWORDS)) {
    if (keywords.some(kw => text.includes(kw))) return chain;
  }
  return '';
}

// ── Loss Amount Extraction ─────────────────────────────────────────

function extractLoss(title, content) {
  const text = `${title} ${content}`;
  // Match patterns like $13M, $1.4B, $500K, $13,000,000
  const patterns = [
    /\$(\d+(?:\.\d+)?)\s*[Bb](?:illion)?/,
    /\$(\d+(?:\.\d+)?)\s*[Mm](?:illion)?/,
    /\$(\d+(?:\.\d+)?)\s*[Kk]/,
    /\$(\d{1,3}(?:,\d{3})+)/
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) {
      const num = parseFloat(match[1].replace(/,/g, ''));
      if (text.match(/\$\d+(?:\.\d+)?\s*[Bb]/)) return num * 1_000_000_000;
      if (text.match(/\$\d+(?:\.\d+)?\s*[Mm]/)) return num * 1_000_000;
      if (text.match(/\$\d+(?:\.\d+)?\s*[Kk]/)) return num * 1_000;
      return num;
    }
  }
  return 0;
}

// ── Main Pipeline ──────────────────────────────────────────────────

async function curate() {
  const parser = new Parser({
    timeout: 10000,
    headers: { 'User-Agent': 'ThreatDigest/1.0 (CoFounderMode)' }
  });

  console.log('🔍 ThreatDigest Pipeline — Curating crypto threat intel...\n');

  const allItems = [];
  const errors = [];

  for (const feed of FEEDS) {
    try {
      console.log(`  📡 Fetching: ${feed.source} (${feed.url})`);
      const parsed = await parser.parseURL(feed.url);

      // Take last 7 days of items
      const cutoff = Date.now() - 30 * 24 * 60 * 60 * 1000;

      for (const item of parsed.items || []) {
        const pubDate = item.pubDate ? new Date(item.pubDate) : new Date();
        if (pubDate.getTime() < cutoff) continue;

        const title = item.title || 'Untitled';
        const content = item.contentSnippet || item.content || '';
        const summary = content.slice(0, 280).replace(/\n/g, ' ').trim();

        allItems.push({
          title,
          summary: summary || 'No summary available.',
          type: feed.defaultType,
          severity: classifySeverity(title, content),
          tags: [...feed.defaultTags],
          chain: detectChain(title, content),
          loss_usd: extractLoss(title, content),
          source: feed.source,
          url: item.link || '#',
          date: pubDate.toISOString().split('T')[0]
        });
      }

      console.log(`     ✅ ${parsed.items?.length || 0} items found`);
    } catch (err) {
      console.log(`     ❌ Failed: ${err.message}`);
      errors.push({ source: feed.source, error: err.message });
    }
  }

  // Sort by severity (critical first), then by date (newest first)
  const severityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
  allItems.sort((a, b) => {
    const sevDiff = (severityOrder[a.severity] || 3) - (severityOrder[b.severity] || 3);
    if (sevDiff !== 0) return sevDiff;
    return b.date.localeCompare(a.date);
  });

  // Deduplicate by similar titles
  const seen = new Set();
  const deduped = allItems.filter(item => {
    const key = item.title.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 40);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  // Cap at 20 items per digest
  const final = deduped.slice(0, 20);

  const feedData = {
    date: new Date().toISOString().split('T')[0],
    generated_at: new Date().toISOString(),
    curated_by: 'CSO Sentinel + CRO Horizon',
    pipeline_version: '1.0.0',
    sources_checked: FEEDS.length,
    sources_failed: errors.length,
    items_found: allItems.length,
    items_curated: final.length,
    items: final,
    errors
  };

  const outputPath = join(ROOT, 'feed.json');
  writeFileSync(outputPath, JSON.stringify(feedData, null, 2));
  console.log(`\n✅ Curated ${final.length} items → feed.json`);
  console.log(`   Sources: ${FEEDS.length - errors.length}/${FEEDS.length} successful`);

  if (errors.length > 0) {
    console.log(`\n⚠️  Failed sources:`);
    errors.forEach(e => console.log(`   - ${e.source}: ${e.error}`));
  }

  return feedData;
}

curate().catch(err => {
  console.error('❌ Pipeline failed:', err);
  process.exit(1);
});
