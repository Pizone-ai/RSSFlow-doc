<p align="right">
  <a href="./README.md">简体中文</a> | <strong>English</strong>
</p>

# RSSFlow

> Local-first RSS reader with optional AI — Chrome / Edge extension

<p align="center">
  <a href="https://chromewebstore.google.com/detail/rssflow-ai-powered-rss-in/mefbfkpippglgoanjcbdjnkelcbdjija">
    <img src="./docs/chrome.svg" width="28" height="28" alt="Chrome" />
    Chrome Web Store
  </a>
  &nbsp;·&nbsp;
  <a href="https://microsoftedge.microsoft.com/addons/detail/rssflow-aipowered-rss-/khgllclaeabkjgoblcipfpgaejblcelf">
    <img src="./docs/edge.svg" width="28" height="28" alt="Edge" />
    Edge Add-ons
  </a>
  &nbsp;·&nbsp;
  <a href="https://rssflow.oinchain.com">
    <img src="./docs/icon.png" width="28" height="28" alt="Site" style="border-radius:6px" />
    Website
  </a>
</p>

<p align="center">
  <a href="./CHANGELOG.md">Changelog</a> ·
  <a href="https://rssflow.oinchain.com/changelog">Product changelog</a> ·
  <a href="https://rssflow.oinchain.com/help">Help</a> ·
  <a href="https://rssflow.oinchain.com/privacy">Privacy</a>
</p>

---

## What this repository is

**RSSFlow-doc** hosts the product website, help center, and public release notes.  
It is **not** the extension binary / install package repo.

| Path | Role |
| --- | --- |
| `website/` | Next.js site source (static export) |
| `help/` | Help markdown sources |
| `docs/` | Built static site (Cloudflare Pages / GitHub Pages) |
| [CHANGELOG.md](./CHANGELOG.md) | Full extension release history mirror |

Install the extension from the store links above.

Current extension version: **v1.1.5** (2026-08-10)

---

## What RSSFlow does

RSSFlow is a side-panel RSS reader: feeds, timelines, and immersive reading stay on your machine.  
When you want more, plug in **your own** AI API keys for summaries, chat, scheduled briefings, and push.

**Local-first by default.** Cloud report publish, Feishu / Telegram, and MCP only run when you turn them on.

---

## Features

### Reading & feeds
- Sidebar views: Flow / day / tags / unread
- Zen Reader: keyboard nav, TOC, themes
- Recommended feeds (including JA / KO) and feed management
- Companion [SnagFlow](https://snagflow.oinchain.com) turns webpages into RSS and imports in one click

### AI pre-read & chat
- Background auto-summary, tags, structured fields
- Multi-article chat with clickable citations back to source
- Expert command presets (research, macro, writing, crypto, …) plus custom prompts
- Bring your own models: OpenAI-compatible, Anthropic, Gemini, DeepSeek, local endpoints, …

### Discovery & structure
- Hot-topic discovery with visual clustering
- Knowledge graph / Graph search; can seed scheduled workflows
- Shared search kernel across chat, discovery, and automation (v1.1.5)

### Automation & delivery
- Scheduled workflows: single, sequential chain, split-merge
- Publish reports to a cloud portal or blog channel
- Telegram, Feishu webhooks, browser notifications
- MCP bridge: expose local reading data to tools like Cursor / Claude

### Local storage
- Extension uses SQLite (WASM + OPFS) with a background worker for heavier search / graph work
- Settings, feeds, and read state stay local by default

---

## Recent releases (excerpt)

Full history (30 versions): [CHANGELOG.md](./CHANGELOG.md) · https://rssflow.oinchain.com/changelog

| Version | Date | Notes |
| :--- | :--- | :--- |
| **v1.1.5** | 2026-08-10 | Shared search kernel, Flow scroll stability, JA/KO feeds, locale tag defaults |
| v1.1.4 | 2026-08-06 | Broad i18n, db.worker, full-text extraction |
| v1.1.1 | 2026-07-28 | Subscription/query rewrite, Rspack, SQLite WASM |
| v1.1.0 | 2026-07-15 | V3 chat, SQLite worker, Graph page |
| v1.0.0 | 2026-03-24 | Standalone reader, Zustand data layer, Vercel AI SDK |

---

## How the pieces fit

```text
RSS feeds ──► extension background fetch ──► local SQLite / read state
                      │
                      ├─► sidebar / Flow / Reader
                      ├─► AI summary / chat / graph / workflows (your API keys)
                      ├─► Telegram / Feishu / desktop notify (optional)
                      ├─► report portal / blog publish (optional)
                      └─► MCP bridge → external AI tools (optional)
```

Related projects (separate; not install packages in this repo):

- **Extension** — RSSFlow Reader on Chrome / Edge stores
- **rssflow_ai_report** — cloud report portal
- **rssflow-mcp-bridge** — MCP gateway
- **SnagFlow** — webpage → RSS companion extension

---

## Develop the website locally

```bash
cd website
npm install
npm run dev
```

Production static build:

```bash
cd website
npm run build
# output: website/out/ — deploy tree used online is docs/ at repo root
```

Help content generation (when needed):

```bash
cd website
npm run generate-help
```

---

## Install the extension

1. [Chrome Web Store](https://chromewebstore.google.com/detail/rssflow-ai-powered-rss-in/mefbfkpippglgoanjcbdjnkelcbdjija)
2. [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/rssflow-aipowered-rss-/khgllclaeabkjgoblcipfpgaejblcelf)
3. Open the side panel → add feeds → (optional) set AI keys in Settings

Docs: https://rssflow.oinchain.com/help

---

## Privacy

Reading data stays local by default. Network calls only happen for features you enable (AI APIs, push, report publish, MCP, …).  
Policy: https://rssflow.oinchain.com/privacy

---

## Links

| | |
| --- | --- |
| Website | https://rssflow.oinchain.com |
| Changelog | [CHANGELOG.md](./CHANGELOG.md) / https://rssflow.oinchain.com/changelog |
| Help | https://rssflow.oinchain.com/help |
| Blog / sample reports | https://blog.oinchain.com |
| Feedback | GitHub Issues or contacts on the site footer |

---

## License

Site and docs follow this repository’s license notices. Extension install/use follows Chrome / Edge store terms.
