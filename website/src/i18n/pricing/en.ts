import type { PricingCopy } from './types';

export const pricingEn: PricingCopy = {
  badge: 'Simple, Transparent Pricing · Unlock Information Intelligence',
  title: 'Choose the Perfect Plan for',
  titleGradient: 'RSSFlow Pro',
  desc: 'You pay for quotas and the license, not for features the free tier already has.',
  checkoutError: 'Checkout is unavailable until the payment processor finishes store review.',
  checkoutPaused:
    'Card payments are pending processor approval. Plans and prices below are final; checkout will open after the live store is approved.',
  checkoutPausedButton: 'Checkout opening soon',
  billingCycle: {
    annual: 'Annual (Save 17% · 2 new Skills)',
    lifetime: 'Lifetime (styled site + software VIP)',
    monthly: 'Monthly',
  },
  popular: 'Popular · 1:1 new Skills',
  bestValue: 'Lifetime · Styled site + VIP',
  plans: {
    free: {
      name: 'Starter (Free)',
      price: '$0',
      period: 'Free forever',
      desc: 'Sidebar RSS reading: feeds, Flow, Zen Reader. Bring your own AI key.',
      button: 'Install Extension',
      features: [
        'RSS / Atom, OPML import, SnagFlow import',
        'Local library, Zen Reader, Flow, graph',
        '3 expert commands, up to 2 scheduled tasks',
        'BYOK summaries and chat',
      ],
    },
    annual: {
      name: 'Pro Annual',
      price: '$50',
      period: '/ year (~$4.17/mo)',
      desc: 'Best for regular use — about 17% less than monthly',
      button: 'Get Pro Annual',
      features: [
        'Everything in Monthly',
        'Plus two brand-new Skills, 1:1 tailored (not edits of built-in commands)',
      ],
    },
    lifetime: {
      name: 'Pro Lifetime',
      price: '$100',
      period: 'One-time payment · Forever',
      desc: 'Includes Monthly and Annual, plus a styled site and software VIP',
      button: 'Get Lifetime License',
      features: [
        'Everything in Monthly and Annual',
        'Content site with custom styling',
        'VIP/Pro on later oinchain-branded software (manual grant, no cashback)',
        'Giftable activation code',
      ],
    },
    monthly: {
      name: 'Pro Monthly',
      price: '$5',
      period: '/ month',
      desc: 'Month to month. Cancel the next renewal anytime',
      button: 'Start Monthly Plan',
      features: [
        'All 23 expert commands (3 on Free)',
        'Unlimited scheduled tasks (2 on Free)',
        'MCP bridge',
        'License on up to 3 devices',
        'Cancel in the Creem portal',
      ],
    },
  },
  guarantees: [
    {
      icon: 'Lock',
      title: 'Instant Delivery & Activation',
      desc: 'An ACT-XXXX-XXXX-XXXX key is issued, or entitlement is written to your signed-in account',
    },
    {
      icon: 'Laptop',
      title: 'Up to 3 licensed devices',
      desc: 'Unbind in settings when switching machines. Feed libraries stay local on each device.',
    },
    {
      icon: 'Receipt',
      title: 'Global Tax Compliance & Invoicing',
      desc: 'Processed securely by Creem.io (MoR) with official VAT/sales tax invoices',
    },
  ],
  tableSection: {
    badge: 'Core Differences',
    title: 'What you pay for',
    desc: 'Quotas and license only — not features already in Free.',
    lifetimeBadge: 'VIP · Best Value',
    cols: {
      feature: 'Feature & Capability',
      free: 'Free Starter',
      monthly: 'Pro Monthly ($5/mo)',
      annual: 'Pro Annual ($50/yr)',
      lifetime: 'Pro Lifetime ($100)',
    },
    categories: [
      {
        categoryName: 'Quotas',
        items: [
          { name: 'Expert commands', free: '3', monthly: '23', annual: '23', lifetime: '23' },
          { name: 'Scheduled tasks', free: 'Up to 2', monthly: 'Unlimited', annual: 'Unlimited', lifetime: 'Unlimited' },
          { name: 'MCP bridge', free: false, monthly: true, annual: true, lifetime: true },
          { name: 'Licensed devices', free: 'This browser', monthly: 'Up to 3', annual: 'Up to 3', lifetime: 'Up to 3' },
        ],
      },
      {
        categoryName: 'Between plans',
        items: [
          { name: '2 brand-new 1:1 Skills', free: false, monthly: false, annual: true, lifetime: true },
          { name: 'Content site custom style', free: false, monthly: false, annual: false, lifetime: true },
          { name: 'VIP on later oinchain software', free: false, monthly: false, annual: false, lifetime: true },
        ],
      },
    ],
  },
  faqTitle: 'Frequently Asked Questions (FAQ)',
  faqs: [
    {
      q: '1. What are the exact differences between Free and Pro regarding prompts and scheduled tasks?',
      a: 'Free includes 3 expert commands (Ideator, Market Brief, Tech Daily) and up to 2 scheduled tasks. Pro unlocks all 23 built-in expert commands and unlimited tasks in Single, Sequential Chain, and Split-Merge modes. Your feed library stays on-device; the license does not cloud-sync articles.',
    },
    {
      q: '2. How do I redeem the two brand-new Skills on Annual?',
      a: 'Annual (and Lifetime, which includes Annual) includes two Skills built from scratch around your workflow — not tweaks of existing commands. Email support@oinchain.com after purchase with your use case.',
    },
    {
      q: '3. What are the Lifetime content site and software VIP?',
      a: 'Lifetime includes Annual, plus a custom-styled content site, and the right to request VIP/Pro access to later software published under the oinchain brand (manual license grant; no cashback or referral payouts). Email support@oinchain.com after purchase.',
    },
    {
      q: '4. What is the MCP Protocol Bridge (Model Context Protocol)?',
      a: 'The MCP Bridge allows local RSS articles and AI summaries accumulated in RSSFlow to be accessed by external AI tools (such as Cursor, Claude Desktop, or local AI agents) as immediate context, enabling external AI assistants to read your personal feeds seamlessly.',
    },
    {
      q: '5. How do I activate RSSFlow Pro after purchasing?',
      a: 'Guest checkout issues an ACT-XXXX-XXXX-XXXX key (three groups of four characters) to paste in extension options. If you purchase while signed in, the extension picks up the license after you sign in with the same account.',
    },
    {
      q: '6. How many devices are supported? How do I transfer devices?',
      a: 'Each Pro license may run on up to 3 devices at once. Signed-in users can unbind a device in extension settings. Subscriptions and articles remain local on each computer and are not automatically cloud-synced.',
    },
    {
      q: '7. What is the refund policy for digital licenses?',
      a: 'Due to the nature of instant digital software goods and cryptographic license keys, licenses are non-refundable once delivered or activated. If you encounter duplicate billing or payment errors, please contact technical support for manual verification.',
    },
    {
      q: '8. Do I need my own AI API key for AI summaries & chat?',
      a: 'RSSFlow supports Bring Your Own Key (BYOK) mode, compatible with Google Gemini, OpenAI, Claude, DeepSeek, Ollama, etc. RSSFlow does not charge token markups on your own model calls.',
    },
    {
      q: '9. How do I cancel Monthly or Annual?',
      a: 'Open the Creem customer portal from your receipt email and cancel the next renewal. No prior approval is required. Access continues until the paid period ends. Lifetime has no renewal. Support: support@oinchain.com.',
    },
  ],
};
