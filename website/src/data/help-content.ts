export interface HelpDoc {
  id: string;
  title: string;
  contentCn: string;
  contentEn: string;
}

export interface HelpChapter {
  id: string;
  titleCn: string;
  titleEn: string;
  icon: string;
  docs: HelpDoc[];
}

export const helpChapters: HelpChapter[] = [
  {
    "id": "01-quick-start",
    "titleCn": "快速开始",
    "titleEn": "Quick Start",
    "icon": "Rocket",
    "docs": [
      {
        "id": "installation-setup",
        "title": "安装与初始化 / Installation & Initialization",
        "contentCn": "## 安装方式\n\nRSSFlow Pro **仅支持**从官方商店安装，不支持开发者模式加载或自行构建：\n\n- [Chrome 网上应用店](https://chromewebstore.google.com/detail/rssflow-ai-powered-rss-in/mefbfkpippglgoanjcbdjnkelcbdjija)\n- [Edge 外接程序](https://microsoftedge.microsoft.com/addons/detail/rssflow-aipowered-rss-/khgllclaeabkjgoblcipfpgaejblcelf)\n\n## 首次使用\n\n1. 安装完成后，点击浏览器工具栏的扩展图标区域，找到 **RSSFlow**。\n2. **建议**：将 RSSFlow **固定到工具栏**，方便随时打开，并查看未读角标。\n3. 点击 RSSFlow 图标后，**侧边栏**会自动打开，进入主界面。\n\n## 注意\n\n- 侧边栏是扩展的主界面，**不是**弹出式小窗口（popup）。\n- 再次点击工具栏图标可关闭 / 打开侧边栏。\n- 下一步请配置 AI 密钥，并添加第一个订阅源。",
        "contentEn": "## Installation\n\nRSSFlow Pro is **only** available through official stores. Developer mode loading or self-building is not supported:\n\n- [Chrome Web Store](https://chromewebstore.google.com/detail/rssflow-ai-powered-rss-in/mefbfkpippglgoanjcbdjnkelcbdjija)\n- [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/rssflow-aipowered-rss-/khgllclaeabkjgoblcipfpgaejblcelf)\n\n## First Use\n\n1. After installation, open the browser toolbar extensions area and find **RSSFlow**.\n2. **Recommended**: **Pin** RSSFlow to the toolbar for quick access and unread badges.\n3. Click the RSSFlow icon to open the **sidebar** main interface.\n\n## Notes\n\n- The sidebar is the main UI, **not** a popup.\n- Click the toolbar icon again to close or reopen the sidebar.\n- Next: configure an AI key, then add your first feed."
      },
      {
        "id": "ai-key-config",
        "title": "AI 密钥配置 / AI Key Configuration",
        "contentCn": "## 入口\n\n**设置 → AI 设置**\n\n## 前提\n\n必须先开启 **启用 AI 功能**，否则 AI 相关设置不可用。\n\n## 双配置文件\n\nRSSFlow Pro 提供两套独立的 AI 配置：\n\n| 配置 | 中文名 | 用途 | 默认 Max Tokens |\n|------|--------|------|-----------------|\n| Basic Model | 默认模型 | 轻量任务：摘要、评分、标签 | 8192 |\n| Advanced Model | 复杂模型（可选） | 深度任务：聊天、定时任务、热点发现 | 20000 |\n\n若未配置复杂模型，可点击 **从默认模型复制**，一键同步默认模型配置。\n\n## 支持的供应商\n\n| 供应商 | 代码标识 | 默认 Host |\n|--------|----------|-----------|\n| DeepSeek | `deepseek` | `https://api.deepseek.com` |\n| OpenAI | `openai` | `https://api.openai.com` |\n| OpenAI Compatible | `openai-compatible` | `https://api.siliconflow.cn` |\n| Anthropic Claude | `anthropic` | `https://api.anthropic.com` |\n| Google Gemini | `gemini` | `https://generativelanguage.googleapis.com` |\n| Local LLM (Ollama / LM Studio) | `local` | `http://localhost:11434` |\n\n## 配置步骤\n\n1. **选择供应商**：在供应商网格中点击图标。\n2. **填写 API Key**：按供应商要求输入密钥（密码输入框）。\n3. **填写 API Host**（可选）：默认使用官方地址，可改为兼容中转。\n4. **填写模型名称**：手动输入，或点击输入框旁按钮拉取模型列表后选择。\n5. **高级参数**（可选）：展开 **显示生成参数**，调整 Temperature（默认 0.7）、Top P（默认 0.9）、Max Tokens。\n6. **验证并暂存**：点击 **验证并暂存配置**，后台发送测试请求。\n7. **设为当前启用**：验证成功后点击 **设为当前启用供应商**，配置才会真正生效。\n\n> 仅「验证并暂存」不会生效；必须再点 **设为当前启用**。\n\n## 本地模型配置\n\n选择 Local LLM 后，API Host 下方会显示 **Ollama 跨域配置指引**：\n\n- **Ollama（桌面版）**：设置环境变量 `OLLAMA_ORIGINS=chrome-extension://*`\n- **Ollama（命令行）**\n  - PowerShell：`$env:OLLAMA_ORIGINS=\"chrome-extension://*\"; ollama serve`\n  - CMD：`set OLLAMA_ORIGINS=chrome-extension://* && ollama serve`\n- **LM Studio**：在设置中开启跨域访问\n\n## 标签范围设置\n\n在 AI 设置页底部可自定义文章分类标签范围。  \n该范围直接影响基础摘要的标签分类，请按自己的阅读领域填写。\n\n默认值示例：\n\n`#Chinese Economy, #US economy, #EU economy, #UK economy, #Japan economy, #AI, #Business, #Gold, #Oil, #Crypto, #Technology, #Culture, #Other`\n\n支持内置标签浏览器快速选择，以及 **恢复默认**。",
        "contentEn": "## Access\n\n**Settings → AI Settings**\n\n## Prerequisite\n\nTurn on **Enable AI Features** first; otherwise AI settings stay locked.\n\n## Dual Profiles\n\n| Profile | Usage | Default Max Tokens |\n|---------|-------|-------------------|\n| Basic Model (Default) | Light tasks: summaries, scoring, tags | 8192 |\n| Advanced Model (Optional) | Heavy tasks: chat, automation, discovery | 20000 |\n\nIf Advanced is empty, use **Copy from Default Model** to sync Basic settings.\n\n## Supported Providers\n\n| Provider | ID | Default Host |\n|----------|----|-------------|\n| DeepSeek | `deepseek` | `https://api.deepseek.com` |\n| OpenAI | `openai` | `https://api.openai.com` |\n| OpenAI Compatible | `openai-compatible` | `https://api.siliconflow.cn` |\n| Anthropic Claude | `anthropic` | `https://api.anthropic.com` |\n| Google Gemini | `gemini` | `https://generativelanguage.googleapis.com` |\n| Local LLM (Ollama / LM Studio) | `local` | `http://localhost:11434` |\n\n## Configuration Steps\n\n1. **Select Provider** — click an icon in the grid.\n2. **Enter API Key** — password field.\n3. **Enter API Host** (optional) — defaults to the official endpoint.\n4. **Enter Model Name** — type manually, or fetch the provider list.\n5. **Advanced Parameters** (optional) — Temperature (0.7), Top P (0.9), Max Tokens.\n6. **Validate & Stash** — runs a backend connectivity test.\n7. **Set as Active** — only then does the profile take effect.\n\n> Stashing alone is not enough; you must click **Set as Active Provider**.\n\n## Local Model Setup\n\nAfter choosing Local LLM, follow the CORS guide under API Host:\n\n- **Ollama (Desktop)**: `OLLAMA_ORIGINS=chrome-extension://*`\n- **Ollama (CLI)**: PowerShell or CMD commands shown above\n- **LM Studio**: enable CORS in settings\n\n## Tag Scope\n\nAt the bottom of AI Settings, customize classification tags used by basic summaries. Use the built-in browser to pick tags or restore defaults."
      },
      {
        "id": "interface-guide",
        "title": "界面导览 / Interface Guide",
        "contentCn": "## 侧边栏布局\n\nRSSFlow Pro 以浏览器 **侧边栏** 形式运行，包含四个标签页与底部工具栏。\n\n## 四个标签页\n\n| 标签 | 说明 |\n|------|------|\n| 未读 | 未读文章列表，支持无限滚动 |\n| 收藏 | 已收藏的文章 |\n| 图谱 | **在新标签页**打开知识图谱，便于多关键词组合搜索 |\n| Flow 视图 | **在新标签页**按日期 / 标签查看 AI 处理后的信息流 |\n\n> 点击「图谱」或「Flow 视图」时，会在新浏览器标签中打开，而不是在侧边栏内嵌显示。\n\n## 底部工具栏\n\n工具栏位于侧边栏底部（宽度较宽时可能显示在右侧）：\n\n| 按钮 | 功能 |\n|------|------|\n| 视图模式 | 标准模式 ↔ 极简模式（极简可扫视更多条目） |\n| 沉浸式阅读 | 在新标签打开阅读器。推荐快捷键：`R` 已读、`Space` 滚动、`F` 收藏 |\n| 智能图谱搜索 | 打开图谱搜索 |\n| AI 发现 | 基于 AI 处理后的数据评估趋势热点 |\n| AI 聊天 | 进入对话；可切换顶部分组，或在左侧过滤数据 |\n| 设置 | 打开选项页 |\n| 主题 | 浅色 / 深色 / 跟随系统 |\n\n## 选项页面\n\n工具栏 **设置**，或右键扩展图标 → **选项**。共 9 个标签：\n\n| 锚点 | 名称 |\n|------|------|\n| `#general` | 常规 |\n| `#feeds` | 订阅源 |\n| `#ai` | AI 设置 |\n| `#notifications` | 消息推送 |\n| `#sync` | 跨扩展同步 |\n| `#automation` | 工作流 |\n| `#mcp` | MCP 设置 |\n| `#account` | 我的账户 |\n| `#help` | 帮助 / 问题反馈 |\n\n## 主题切换\n\n选项页底部与侧边栏工具栏均提供主题切换：浅色、深色、跟随系统。",
        "contentEn": "## Sidebar Layout\n\nRSSFlow Pro runs as a browser **sidebar** with four tabs and a bottom toolbar.\n\n## Four Tabs\n\n| Tab | Description |\n|-----|-------------|\n| Inbox | Unread articles with infinite scroll |\n| Favorites | Bookmarked articles |\n| Graph | Opens Knowledge Graph **in a new tab** for multi-keyword search |\n| Flow View | Opens Flow **in a new tab**, grouped by date or tags |\n\n> Graph and Flow open in a new browser tab, not inside the sidebar.\n\n## Toolbar\n\n| Button | Function |\n|--------|----------|\n| View mode | Standard ↔ Mini (scan more items) |\n| Immersive Reader | Zen Reader in a new tab. Shortcuts: `R` read, `Space` scroll, `F` favorite |\n| Graph Search | Open graph search |\n| AI Discovery | Trend / hotspot analysis on AI-processed data |\n| AI Chat | Chat context; switch groups or filter on the left |\n| Settings | Options page |\n| Theme | Light / Dark / System |\n\n## Options Page\n\nToolbar **Settings**, or right-click the extension → **Options**. Nine tabs:\n\n| Anchor | Name |\n|--------|------|\n| `#general` | General |\n| `#feeds` | Feeds |\n| `#ai` | AI Settings |\n| `#notifications` | Notifications |\n| `#sync` | Sync |\n| `#automation` | Workflow |\n| `#mcp` | MCP Settings |\n| `#account` | Account |\n| `#help` | Help / Feedback |\n\n## Theme Toggle\n\nAvailable in the options footer and sidebar toolbar: Light, Dark, System."
      }
    ]
  },
  {
    "id": "02-feed-management",
    "titleCn": "订阅管理",
    "titleEn": "Feed Management",
    "icon": "Rss",
    "docs": [
      {
        "id": "adding-feeds",
        "title": "添加订阅源 / Adding Feeds",
        "contentCn": "## 入口\n\n**设置 → 订阅源**\n\n## 方法一：手动输入 URL\n\n1. 在 URL 输入框粘贴 RSS 地址（示例：`https://www.engadget.com/rss`）\n2. 点击 **添加订阅源**，或按 Enter\n3. 成功后源会出现在「已订阅源」列表\n\n## 方法二：导入 OPML / XML\n\n1. 点击 **导入订阅文件**\n2. 选择 `.opml` 或 `.xml` 备份文件（建议 UTF-8）\n3. 导入结束后会显示摘要，例如：成功 X / 共 Y，失败 Z\n\n## 方法三：从 SnagFlow 导入\n\n推荐使用配套扩展 [SnagFlow](https://snagflow.oinchain.com) 把任意网页变成稳定 RSS，再通过 **CatchFlow** 一键导入。\n\n详见帮助：**订阅源获取 (SnagFlow) → 配置 CatchFlow 导入**。\n\n## 方法四：推荐订阅源\n\n页面底部「推荐订阅源」按语言与分类展示，例如：\n\n- **中文**：财经、科技数码、AI、区块链、商业、心理、综合资讯、二次元、软件、技术博客、产品设计、读书等\n- **English**：Tech & Development、AI & Machine Learning、Global News、Business & Economics 等\n\n点击条目旁的 `+` 即可添加；已订阅显示 `✓`。",
        "contentEn": "## Access\n\n**Settings → Feeds**\n\n## Method 1: Manual URL\n\n1. Paste an RSS URL (e.g. `https://www.engadget.com/rss`)\n2. Click **Add Feed** or press Enter\n3. The feed appears in **Subscribed Feeds**\n\n## Method 2: Import OPML / XML\n\n1. Click **Import Feed File**\n2. Choose a `.opml` or `.xml` backup (UTF-8 recommended)\n3. A summary shows success / total / failed counts\n\n## Method 3: Import from SnagFlow\n\nUse the companion extension [SnagFlow](https://snagflow.oinchain.com) to turn almost any page into a stable RSS feed, then import via **CatchFlow**.\n\nSee **Feed Acquisition (SnagFlow) → Configure CatchFlow Import**.\n\n## Method 4: Recommended Feeds\n\nBrowse categories at the bottom of the Feeds page. Click `+` to subscribe; subscribed items show `✓`."
      },
      {
        "id": "feed-management",
        "title": "订阅源管理与分类 / Feed Management & Categories",
        "contentCn": "## 入口\n\n**设置 → 订阅源 → 已订阅源**\n\n## 列表信息\n\n每条订阅源通常包含：\n\n- **标题**：订阅源名称\n- **URL**：RSS 地址\n- **错误指示**\n  - 失败次数较多时显示警告\n  - 连续失败更多时显示错误，并可用悬停查看详情与最后尝试时间\n- **Auto AI 开关**：是否对该源自动生成 AI 摘要  \n  开启前会检查 AI 是否已配置；未配置时会引导前往 AI 设置\n- **删除**：确认后删除该源及其历史文章\n\n## 分类说明\n\n目前没有独立的「手动文件夹分类」界面。常见组织方式：\n\n1. **推荐源分类**：推荐列表按主题分组，仅影响发现，不改数据结构\n2. **AI 标签**：在 AI 设置中配置标签范围后，摘要阶段自动打标签，用于 Flow / 图谱 / 定时任务筛选\n\n## 为什么要开自动摘要\n\n自动摘要是后续高级 AI 能力的基础：\n\n- 先把每篇文章拆成要点、标签与评分，再按需取用\n- 若跳过摘要，直接对全文或大块上下文做聊天 / 报告，更容易超限，压缩也会丢细节\n- 定时任务、热点发现、引文对话都更依赖「已结构化」的文章\n\n建议：为主要阅读源开启 **Auto AI**。",
        "contentEn": "## Access\n\n**Settings → Feeds → Subscribed Feeds**\n\n## List Fields\n\nEach feed typically shows:\n\n- **Title** and **URL**\n- **Error indicators** after repeated update failures (hover for details)\n- **Auto AI** toggle for per-feed automatic summaries (requires AI setup)\n- **Delete** with confirmation (removes feed + historical articles)\n\n## Categories\n\nThere is no separate manual folder UI. Organization usually comes from:\n\n1. **Recommended feed categories** (discovery only)\n2. **AI tags** configured under AI Settings, applied during summarization and used by Flow / Graph / workflows\n\n## Why Enable Auto Summary\n\nAuto summary is the foundation for advanced AI:\n\n- Decompose each article into points, tags, and scores up front\n- Skipping it forces large full-text contexts later and loses quality after compression\n- Workflows, discovery, and cited chat work best on structured articles\n\nRecommendation: enable **Auto AI** on your primary feeds."
      }
    ]
  },
  {
    "id": "03-snagflow",
    "titleCn": "订阅源获取 (SnagFlow)",
    "titleEn": "Feed Acquisition (SnagFlow)",
    "icon": "Puzzle",
    "docs": [
      {
        "id": "snagflow-overview",
        "title": "SnagFlow 概述 / SnagFlow Overview",
        "contentCn": "## 什么是 SnagFlow？\n\nSnagFlow 是 **本地优先** 的浏览器扩展，能将任意网页转化为 **实时 RSS 订阅源**。  \n它是 RSSFlow Pro 的官方配套工具，通过 **CatchFlow** 与 RSSFlow 联动。\n\n## 核心能力\n\n- 对网页进行「视觉化抓取」，生成 RSS 结构\n- 在本地生成订阅规则，无需自建服务器\n- 支持后续自动更新\n\n## 相关链接\n\n| 资源 | 链接 |\n|------|------|\n| 官方网站 | [snagflow.oinchain.com](https://snagflow.oinchain.com) |\n| Chrome 网上应用店 | [安装 SnagFlow](https://chromewebstore.google.com/detail/snagflow-rss-converter/beafcjcdnfeajjpmienpdjmeabhjnljh) |\n\n## 与 RSSFlow 的集成\n\n在 RSSFlow **设置 → 订阅源 / CatchFlow** 中导入 SnagFlow 规则，无需手抄 URL。\n\n详见：**配置 CatchFlow 导入**。",
        "contentEn": "## What is SnagFlow?\n\nSnagFlow is a **local-first** browser extension that turns almost any webpage into a **live RSS feed**.  \nIt is the official companion for RSSFlow Pro and connects through **CatchFlow**.\n\n## Core Capabilities\n\n- Visually snag pages into RSS structure\n- Generate feed rules locally without a server\n- Support automated updates\n\n## Links\n\n| Resource | Link |\n|----------|------|\n| Website | [snagflow.oinchain.com](https://snagflow.oinchain.com) |\n| Chrome Web Store | [Install SnagFlow](https://chromewebstore.google.com/detail/snagflow-rss-converter/beafcjcdnfeajjpmienpdjmeabhjnljh) |\n\n## Integration with RSSFlow\n\nImport SnagFlow rules from RSSFlow **Settings → Feeds / CatchFlow** without pasting URLs by hand.\n\nSee **Configure CatchFlow Import**."
      },
      {
        "id": "catchflow-import",
        "title": "配置 CatchFlow 导入 / Configure CatchFlow Import",
        "contentCn": "## 入口\n\n**设置 → 订阅源 →「从 SnagFlow 订阅生成器导入」**（可折叠面板）\n\n## 前置条件\n\n已安装 [SnagFlow](https://chromewebstore.google.com/detail/snagflow-rss-converter/beafcjcdnfeajjpmienpdjmeabhjnljh) 扩展。\n\n## 操作步骤\n\n1. **展开面板**：点击「从 SnagFlow 订阅生成器导入」。\n2. **确认扩展 ID**：默认已预填官方扩展 ID；若使用其他实例可修改。\n3. **加载规则**：点击 **加载规则**。RSSFlow 与 SnagFlow 通过浏览器扩展间通信读取规则，**不依赖外网接口**。\n4. **选择规则**：列表中每项包含标题、描述、订阅 URL 与状态：\n   - `已订阅`：已在 RSSFlow 中，不可再选\n   - `已禁用`：SnagFlow 侧已关闭，不可选\n5. **添加选中**：勾选后点击 **添加选中的订阅源**。\n\n## 附加说明\n\n- 面板头部实时显示已选数量\n- 已订阅源自动禁用勾选\n- 面板支持展开 / 收起\n\n## 常见提示\n\n| 情境 | 反馈 |\n|------|------|\n| 加载成功 | 提示已加载规则 |\n| 加载失败 | 显示具体错误 |\n| 添加成功 | 提示已添加选中源 |\n| 未选择 | 提示先勾选要添加的源 |",
        "contentEn": "## Access\n\n**Settings → Feeds → “Import from SnagFlow Feed Generator”** (collapsible)\n\n## Prerequisite\n\nInstall the [SnagFlow](https://chromewebstore.google.com/detail/snagflow-rss-converter/beafcjcdnfeajjpmienpdjmeabhjnljh) extension.\n\n## Steps\n\n1. **Expand** the SnagFlow import panel.\n2. **Confirm extension ID** (official ID is pre-filled).\n3. **Load rules** — RSSFlow talks to SnagFlow via extension messaging (**no external API**).\n4. **Select rules** — each row shows title, description, URL, and status (`Subscribed` / `Disabled` are not selectable).\n5. **Add selected** feeds.\n\n## Notes\n\nSelection count updates live; already-subscribed feeds are disabled; the panel can collapse.\n\n## Feedback\n\n| Scenario | Toast |\n|----------|-------|\n| Load OK | Rules loaded |\n| Load fail | Error message |\n| Add OK | Feeds added |\n| Nothing selected | Select feeds first |"
      }
    ]
  },
  {
    "id": "04-reading-views",
    "titleCn": "阅读视图",
    "titleEn": "Reading Views",
    "icon": "BookOpen",
    "docs": [
      {
        "id": "sidebar-mode",
        "title": "侧边栏模式 / Sidebar Mode",
        "contentCn": "日常主界面：浏览列表、整理未读 / 收藏，并跳转到图谱、信息流等全屏视图。\n\n## 标签\n\n| 标签 | 说明 |\n|------|------|\n| 未读 | 默认；显示未读角标 |\n| 收藏 | 已收藏文章 |\n| 图谱 | 新标签打开知识图谱 |\n| 信息流 | 新标签打开 Flow |\n\n## 文章卡片\n\n- 展示来源、标题、摘要（优先 AI）、时间  \n- 悬停可收藏；悬停 AI 指示可预览要点  \n\n## 点击行为\n\n| 操作 | 结果 |\n|------|------|\n| 单击 | 打开沉浸式阅读器 |\n| 双击 | 标记已读 + 木鱼音效，卡片收起移除 |\n\n## 悬浮操作\n\n刷新、全部标记已读、新手指引。\n\n## 工具栏\n\n标准 / 极简、阅读器、图谱、AI 发现、AI 聊天、设置、主题。",
        "contentEn": "Main sidebar for scanning, favorites, and jumping to full-screen Graph / Flow.\n\n## Tabs\n\nInbox, Favorites, Graph (new tab), Flow (new tab).\n\n## Cards\n\nSource, title, summary (AI preferred), time; hover favorite; hover AI indicator for bullets.\n\n## Clicks\n\nSingle-click → Zen Reader; double-click → mark read with sound and collapse.\n\n## FAB & Toolbar\n\nRefresh, mark-all-read, help; plus view density, reader, graph, discovery, chat, settings, theme."
      },
      {
        "id": "flow-view",
        "title": "信息流模式 / Flow View",
        "contentCn": "全屏瀑布流，按日期或标签聚合文章，便于对照阅读与分组 AI 对话。\n\n## 入口\n\n侧边栏 **Flow 视图**（新标签打开）。\n\n## 分组方式\n\n| 模式 | 说明 |\n|------|------|\n| 日视图 Dayflow | 先按日期，再按标签；含「最近 24 小时」 |\n| 标签视图 Tagflow | 先按主题标签，再看各标签下资讯 |\n\n## 卡片密度\n\n- **标准**：标题 + AI 观点引用栏等  \n- **极简**：序号 + 单行标题，适合扫标题  \n\n## 导航与 AI\n\n- **右侧圆点锚点**：跳转到日期 / 标签分组  \n- **分组 AI 聊天**：每组右下角按钮，以该组文章为上下文  \n\n## 底部跑马灯\n\n- 滚动展示并可用语音播报 AI 摘要  \n- 可暂停 / 跳过；多标签页时仅一个发声  \n- 可在常规设置中关闭  \n\n## 多列\n\n随窗口宽度自动 1 / 2 / 多列；调整窗口后平滑适配。",
        "contentEn": "Full-screen waterfall of articles grouped by day or tags, with per-group AI chat.\n\n## Access\n\nSidebar **Flow View** (new tab).\n\n## Grouping\n\n**Dayflow** (date → tags, plus last 24h) or **Tagflow** (tag-first).\n\n## Density\n\nStandard (title + AI quotes) or Mini (headline scan).\n\n## Navigation & Chat\n\nRight-side dot rail jumps groups; floating chat uses the current group as context.\n\n## Ticker\n\nBottom marquee + optional TTS; one audio owner across tabs; disable under General settings.\n\n## Columns\n\nAuto multi-column by viewport width."
      },
      {
        "id": "zen-reader",
        "title": "沉浸式阅读器 / Zen Reader",
        "contentCn": "沉浸式阅读器（Zen Reader）在新标签页提供全屏、无干扰的阅读体验，并集成 AI 摘要侧栏与键盘快捷操作。\n\n## 入口\n\n- 在侧边栏 **单击** 文章卡片\n- 工具栏 **沉浸式阅读** 按钮\n\n## 顶栏布局\n\n- RSSFlow 水印（随明暗主题变化）\n- 当前上下文（订阅源或分组名称）\n- 打开原文链接\n- 暗色 / 浅色主题切换（默认暗色）\n\n## 背景主题\n\n- **暗色**：星空背景与星系雾效\n- **浅色**：暖白底色与轻量云层装饰\n\n## 响应式布局\n\n| 视口宽度 | 布局 |\n|---------|------|\n| &lt; 1000px | 单列；AI 区以底部抽屉展示 |\n| ≥ 1000px | 两列：AI 侧栏 + 正文 |\n| ≥ 1280px | 正文最大宽度约 900px |\n\n## 正文排版\n\n- 衬线字体，约 20px，行高 1.85，两端对齐\n- 引用块、图片、代码与表格均做圆角与间距优化\n\n## AI 侧栏\n\n显示当前文章的：\n\n- AI 摘要\n- 要点列表\n- 标签、评分、关键词\n- 生成 / 刷新状态\n\n未配置 AI 时，触发摘要会提示前往 AI 设置。\n\n## 阅读进度\n\n顶部细进度条，随滚动更新。\n\n## 快捷键\n\n| 按键 | 动作 |\n|------|------|\n| `J` / `→` | 下一篇 |\n| `K` / `←` | 上一篇 |\n| `Space` | 向下滚动约一屏（`Shift+Space` 向上） |\n| `F` | 切换收藏 |\n| `R` | 标记已读并跳转下一篇 |\n| `Enter` / `S` | 触发 AI 摘要 |\n| `Esc` | 关闭阅读器 |\n\n在输入框内、或按住 Ctrl / Cmd / Alt 时，快捷键不会抢占浏览器默认行为。\n\n> 完整说明见「阅读器核心操作 → Reader 快捷键大全」。",
        "contentEn": "Zen Reader opens in a new tab for full-screen, distraction-free reading with an AI sidebar and keyboard navigation.\n\n## Access\n\n- **Single-click** an article card in the sidebar\n- Toolbar **Immersive Reader** button\n\n## Top Bar\n\n- RSSFlow watermark\n- Context (feed or group name)\n- Open original link\n- Dark / light theme toggle (default: dark)\n\n## Background Themes\n\n- **Dark**: starfield and soft nebula accents\n- **Light**: warm white base with light cloud accents\n\n## Responsive Layout\n\n| Viewport | Layout |\n|----------|--------|\n| &lt; 1000px | Single column; AI panel as bottom drawer |\n| ≥ 1000px | Two columns: AI sidebar + content |\n| ≥ 1280px | Content max-width ~900px |\n\n## Typography\n\nSerif body ~20px, line-height 1.85, justified. Quotes, images, code, and tables use rounded, readable spacing.\n\n## AI Sidebar\n\nShows summary, bullet points, tags, score, keywords, and generation status. If AI is not configured, you are prompted to open AI Settings.\n\n## Progress\n\nA thin top progress bar tracks scroll position.\n\n## Shortcuts\n\n| Key | Action |\n|-----|--------|\n| `J` / `→` | Next article |\n| `K` / `←` | Previous article |\n| `Space` | Scroll down (~one screen; `Shift+Space` up) |\n| `F` | Toggle favorite |\n| `R` | Mark read + next |\n| `Enter` / `S` | Generate AI summary |\n| `Esc` | Close reader |\n\nShortcuts are disabled in text fields and when Ctrl / Cmd / Alt is held.\n\n> See **Core Reader Operations → Keyboard Shortcuts** for details."
      }
    ]
  },
  {
    "id": "05-reader-core",
    "titleCn": "阅读器核心操作",
    "titleEn": "Core Reader Operations",
    "icon": "Cpu",
    "docs": [
      {
        "id": "reader-shortcuts",
        "title": "Reader 快捷键大全 / Zen Reader Keyboard Shortcuts",
        "contentCn": "在沉浸式阅读器中可使用下列全局快捷键，适合连读与键盘优先工作流。\n\n## 快捷键一览\n\n| 按键 | 动作 | 说明 |\n|------|------|------|\n| `J` / `→` | 下一篇 | 约 100ms 节流；会预取相邻文章以降低延迟 |\n| `K` / `←` | 上一篇 | 同上 |\n| `Space` | 向下滚动 | 约 85% 视口高度，保留视线重叠；平滑滚动 |\n| `Shift+Space` | 向上滚动 | 与 Space 方向相反 |\n| `F` | 切换收藏 | 立即反馈 UI，失败时自动回滚并提示 |\n| `R` | 标记已读并下一篇 | 闪烁反馈，后台写入本地数据库 |\n| `Enter` / `S` | AI 摘要 | 约 30 秒超时；未配置 AI 时弹出提示 |\n| `Esc` | 关闭阅读器 | 关闭当前标签页 |\n\n## 输入焦点保护\n\n以下情况不触发快捷键：\n\n- 按住 `Ctrl` / `Cmd` / `Alt`（保留浏览器快捷键，如刷新、查找）\n- 焦点在输入框、文本域、下拉框中\n- 焦点在可编辑区域（contentEditable）\n\n导航类按键（`J` / `K` / `R` / 方向键）会忽略长按连发。\n\n## 导航预取\n\n每次切换文章后，会在后台预取：\n\n- 下一篇\n- 上一篇\n- 下下篇\n\n预取结果缓存在本地（约 16 篇 LRU），后续 `J` / `K` 导航可更快渲染。",
        "contentEn": "Global shortcuts in Zen Reader for continuous reading and keyboard-first workflows.\n\n## Shortcut Reference\n\n| Key | Action | Notes |\n|-----|--------|-------|\n| `J` / `→` | Next article | ~100ms throttle; adjacent prefetch |\n| `K` / `←` | Previous article | Same |\n| `Space` | Scroll down | ~85% viewport with overlap; smooth |\n| `Shift+Space` | Scroll up | Reverse of Space |\n| `F` | Toggle favorite | Optimistic UI; rollback on failure |\n| `R` | Mark read + next | Flash feedback; local DB write |\n| `Enter` / `S` | AI summary | ~30s timeout; prompts if AI is off |\n| `Esc` | Close reader | Closes the tab |\n\n## Input Focus Protection\n\nShortcuts are ignored when:\n\n- `Ctrl` / `Cmd` / `Alt` is held\n- Focus is in `input`, `textarea`, or `select`\n- Focus is in a contentEditable element\n\nLong-press key repeats are filtered for navigation keys.\n\n## Navigation Prefetch\n\nAfter each navigation, the reader prefetches previous, next, and next-next articles into a small local LRU cache (~16 items) for snappier `J` / `K` moves."
      },
      {
        "id": "card-layout",
        "title": "卡片阅读与多列自适应 / Card Layout & Multi-column",
        "contentCn": "侧边栏与信息流中的文章以 **卡片** 展示。可根据侧边栏宽度自动分列，并在标准 / 极简两种密度间切换。\n\n## 标准模式卡片\n\n典型结构（自上而下）：\n\n1. **首行**：订阅源名称 · AI 指示（有摘要 / 无摘要）· 相对时间 · 收藏按钮（悬停显示）\n2. **标题**：醒目标题，悬停高亮\n3. **摘要**：优先显示 AI 摘要，否则显示原文摘要，最多约 3 行\n4. **缩略图**（可选）：右侧小图，悬停可预览大图\n\n极简模式仅保留 AI 指示点、标题与时间，适合快速扫读。\n\n## 多列自适应\n\n侧边栏变宽时自动增加列数（约每 340px 一列）：\n\n- 约 ≥ 680px：2 列\n- 约 ≥ 1020px：3 列\n\n列表使用虚拟滚动，大量文章时仍保持流畅。  \n拖拽调整侧边栏宽度时，列数会暂时冻结，松手后再重新计算。\n\n## 标准 vs 极简\n\n| 特性 | 标准 | 极简 |\n|------|------|------|\n| 卡片高度 | 完整（摘要 + 可选缩略图） | 紧凑（标题行） |\n| 摘要 | 约 3 行截断 | 不显示 |\n| 缩略图 | 显示 | 不显示 |\n| AI 指示 | 图标 | 色点 |\n| 收藏 | 悬停显示 | 不显示 |\n| 日期分组 | 完整分组样式 | 简约标签 |\n\n通过工具栏 **视图模式** 切换；选择会保存在本地。",
        "contentEn": "Articles appear as **cards** in the sidebar and Flow. Column count adapts to sidebar width; density switches between Standard and Mini.\n\n## Standard Card\n\nTop to bottom:\n\n1. **Header**: feed name · AI indicator · relative time · favorite (on hover)\n2. **Title**: emphasized, highlight on hover\n3. **Summary**: AI summary preferred, else snippet (~3 lines)\n4. **Thumbnail** (optional): small image with hover preview\n\nMini mode keeps only the AI dot, title, and time for fast scanning.\n\n## Multi-column Grid\n\nWider sidebars add columns (~one column per 340px):\n\n- ~≥ 680px: 2 columns\n- ~≥ 1020px: 3 columns\n\nVirtualized lists keep long feeds smooth. Column count freezes while you resize, then recalculates on release.\n\n## Standard vs Mini\n\n| Feature | Standard | Mini |\n|---------|----------|------|\n| Height | Full (summary + optional image) | Compact title row |\n| Summary | ~3-line clamp | Hidden |\n| Thumbnail | Shown | Hidden |\n| AI indicator | Icon | Dot |\n| Favorite | Hover | Hidden |\n| Date groups | Full style | Compact labels |\n\nToggle via the toolbar **view mode** control; the choice is stored locally."
      },
      {
        "id": "double-click-dismiss",
        "title": "双击标记已读与木鱼音效 / Double-click Dismiss & Wooden Bell",
        "contentCn": "在侧边栏列表中 **双击** 卡片，即可标记已读并从当前未读列表移除。\n\n## 交互\n\n- 卡片短暂折叠动画后消失  \n- 与 **单击打开阅读器** 不冲突  \n\n## 木鱼音效\n\n- 双击已读时播放轻敲音效（默认开启，音量适中）  \n- 开关：**设置 → 常规 → 启用双击已读音效**  \n\n## 新手提示\n\n首次有未读文章时可能弹出引导；点「知道了」后不再自动出现。",
        "contentEn": "**Double-click** a sidebar card to mark it read and remove it from the unread list (with a short collapse animation). Single-click still opens Zen Reader.\n\nToggle the wooden-bell sound under **Settings → General**. First-run onboarding may introduce this gesture once."
      }
    ]
  },
  {
    "id": "06-ai-smart-core",
    "titleCn": "AI 智能核心",
    "titleEn": "AI Smart Core",
    "icon": "BrainCircuit",
    "docs": [
      {
        "id": "ai-chat-citation",
        "title": "AI 对话与引文追溯 / AI Chat & Citation Tracing",
        "contentCn": "基于选定的 RSS 文章集合与 AI 对话，并在回答中通过引文徽标追溯原文。\n\n## 如何打开\n\n| 入口 | 说明 |\n|------|------|\n| 侧边栏 **AI 聊天** | 在新标签打开对话 |\n| 信息流分组右下角 **AI 聊天** | 以该日期 / 标签组文章为上下文 |\n| 知识图谱页右侧 | 在图谱结果上继续对话 |\n| 热点 / 发现面板 | 将分析报告带入聊天继续追问 |\n\n## 引文追溯\n\n- AI 引用本地文章时，正文会出现 `[1]`、`[2]` 等徽标  \n- **悬停**：查看标题与摘要  \n- **点击**：新标签打开原文核对  \n\n## 能力要点\n\n- **流式输出**：边生成边渲染 Markdown  \n- **上下文压缩**：文章过多时自动压缩核心片段，控制长度与费用  \n- **会话历史**：本地保存，可继续上次对话  \n- **专家快捷指令**：内置多套专业指令（部分需专业版）",
        "contentEn": "Chat over selected RSS articles and trace claims back to sources via citation badges.\n\n## Access Points\n\n| Entry | Behavior |\n|-------|----------|\n| Sidebar **AI Chat** | Opens chat in a new tab |\n| Flow group **Chat** | Uses that date/tag group as context |\n| Graph page sidebar | Chat over graph results |\n| Discovery panel | Continue from an intelligence report |\n\n## Citation Tracing\n\n- Badges like `[1]`, `[2]` mark cited articles  \n- **Hover** for title + summary  \n- **Click** to open the original article  \n\n## Features\n\n- Streaming Markdown responses  \n- Smart context compression for large sets  \n- Local session history  \n- Expert command palette (some commands require Pro)"
      },
      {
        "id": "ai-discovery",
        "title": "AI 探索星系 / AI Discovery View",
        "contentCn": "分析近期文章，聚类热点话题，并以可视化 + 深度研报呈现趋势。\n\n## 布局\n\n左右分栏，中间分隔条可拖拽；位置会记住。\n\n## 左侧：仪表盘与话题宇宙\n\n- **趋势仪表盘**：文章量趋势、源分布、关键词关系、流向等  \n- **话题宇宙（3D 气泡，约最多 40 个）**  \n  - 气泡越大，关联文章越多  \n  - 置信度帮助判断话题是否值得深挖  \n\n## 右侧：深度研报\n\n点击气泡后流式生成分析，常见维度：\n\n1. **现象** — 事实与现状  \n2. **逻辑** — 商业 / 技术 / 政策动因  \n3. **二阶影响** — 连锁反应  \n4. **认知偏差** — 高估 / 低估与偏见  \n\n支持引文悬停预览与跳转原文。\n\n## 刷新与阈值\n\n| 项 | 说明 |\n|----|------|\n| 刷新频率 | 后台发现间隔（默认约 4 小时） |\n| 更新阈值 | 新增多少文章才触发新一轮挖掘 |\n| 强制刷新 | 忽略缓存，立即重跑 |",
        "contentEn": "Clusters recent articles into hot topics with charts and deep briefs.\n\n## Layout\n\nDraggable split panes; position is remembered.\n\n## Left: Dashboard & Galaxy\n\nTrend charts plus a 3D topic galaxy (~up to 40 bubbles). Size ≈ volume; confidence badges rank actionability.\n\n## Right: Insight Brief\n\nClick a topic for a structured brief: phenomenon → logic → second-order effects → cognitive mispricing, with citation badges.\n\n## Controls\n\nRefresh interval (default ~4h), new-article threshold, and force refresh."
      },
      {
        "id": "ai-auto-summary",
        "title": "AI 自动摘要 / AI Auto-Summary",
        "contentCn": "新文章入库后，AI 可在后台自动生成摘要与结构化字段，供侧边栏预览、聊天、定时任务等能力复用。\n\n## 后台流程\n\n1. **入队**：全局 **启用 AI 功能** 已开，且文章足够长时，自动进入处理队列。\n2. **串行处理**：按队列依次生成，文章之间留适度间隔（约 4 秒），降低 API 限流风险。\n3. **落库展示**：完成后写入本地，主界面卡片自动更新。\n\n## 生成内容\n\n| 维度 | 说明 |\n|------|------|\n| 摘要 | 全文精炼总结 |\n| 观点 | 作者核心论点 |\n| 要点 | 列表化关键事实（常带 emoji） |\n| 标签与类型 | 领域标签（如 `#AI`）与内容性质 |\n| 评分 | 信息密度 / 深度评分 |\n| 优化标题 | 更易扫读的标题（如适用） |\n\n## 卡片状态\n\n| 指示 | 含义 |\n|------|------|\n| **✦** | 已有 AI 摘要；悬停可预览标签、评分、摘要与要点 |\n| **•** | 无摘要或排队中 |\n\n## 按源开关\n\n在 **设置 → 订阅源** 可为每个源单独开关 **Auto AI**。低价值源可关闭以节省 Token。\n\n## 前置条件\n\n在 **设置 → AI 设置** 完成默认模型配置，并 **设为当前启用**。未配置时队列不会运行，手动触发也会提示配置。",
        "contentEn": "After articles are fetched, AI can generate summaries and structured fields in the background for previews, chat, and workflows.\n\n## Pipeline\n\n1. **Queue** when global AI is enabled and the article is long enough.\n2. **Process serially** with a short delay (~4s) between items to reduce rate limits.\n3. **Save locally** and refresh the UI when ready.\n\n## What Is Generated\n\n| Field | Purpose |\n|-------|---------|\n| Summary | Concise full-article recap |\n| Opinions | Author’s main arguments |\n| Key points | Bulleted facts |\n| Tags / type | Domain tags and content type |\n| Score | Density / depth score |\n| Optimized title | Cleaner title when applicable |\n\n## Card Indicators\n\n| Icon | Meaning |\n|------|---------|\n| **✦** | Summary ready; hover for tags, score, summary, bullets |\n| **•** | Missing or still queued |\n\n## Per-feed Toggle\n\n**Settings → Feeds → Auto AI** per subscription. Disable noisy feeds to save tokens.\n\n## Prerequisites\n\nConfigure and **activate** the Basic model under **Settings → AI Settings**. Without it, the queue stays paused."
      },
      {
        "id": "expert-commands",
        "title": "专家指令集 / Expert Command Set",
        "contentCn": "专家指令是**预调优的分析角色提示词**。在 AI 聊天或指令中心一键选用后，AI 会按该角色的视角、结构和关注点，对当前上下文中的 RSS 文章做深度加工。\n\n与「高级功能 → 快捷指令」是同一能力：本页侧重**22 个内置角色说明**；快捷指令页侧重入口、自定义与模板变量。\n\n> 部分高级指令需 **Pro** 激活后解锁。自定义指令可与系统指令合并出现在同一指令菜单中。\n\n## 如何使用\n\n1. 打开 **AI 聊天**（侧边栏、信息流分组、图谱等入口均可）。\n2. 在输入区打开 **指令菜单 / 指令中心**。\n3. 选中某一专家角色 → AI 立刻以该视角处理**当前加载的文章上下文**。\n4. 需要固定工作流时，可在 **设置** 中新建自定义指令，并与内置指令一起显示。\n\n## 按场景怎么选\n\n| 你的目标 | 优先尝试 |\n|----------|----------|\n| 选题、热点、社交分发 | Ideator / Trend Selector / Threader |\n| 写稿、润色、去 AI 腔 | Draft Builder / Humanizer |\n| 宏观、行业、公司战略 | Macro View / Sector Radar / CSO Board / Market Brief |\n| 风险、冲突信息、冲击推演 | Risk Radar / Fact Brief / Domino Sim / Dynamics |\n| 科技与工程落地 | Tech Daily / Tech Onboarding / De-noiser |\n| 加密与概率决策 | Crypto Intel / Bayesian Trade |\n| 长周期、瓶颈、心智执行 | Lindy Filter / Serenity Method / Mind Coach |\n\n## 内置 22 条指令详解\n\n### 创作与传播\n\n| 指令 | 英文名 | 做什么 | 适合场景 | 典型产出 |\n|------|--------|--------|----------|----------|\n| **创意构思者** | Ideator | 从多源资讯中发现可延展的话题集群，勾勒选题方向与角度组合 | 自媒体选题、内容规划、周选题会 | 选题清单、话题簇、切入角度建议 |\n| **趋势筛选器** | Trend Selector | 评估哪些话题更具传播潜力与时效热度，做优先级排序 | 当日热点筛选、运营排期 | 热点排序、传播潜力简评 |\n| **草稿构建器** | Draft Builder | 把多篇素材整合成结构清晰的大纲或初稿 | 深度文首稿、周报底稿 | 标题建议、章节大纲、成文草稿 |\n| **人性化改写** | Humanizer | 降低机械腔与模板感，提升可读性与语气自然度 | AI 初稿润色、对外发布前校对 | 口语化 / 专业但自然的改写稿 |\n| **推特长文** | Threader | 把长内容压缩为适合 X/Twitter 的连续短帖结构 | 社交传播、研究结论外发 | 分条 thread、钩子句、收束 CTA |\n\n### 研究与事实\n\n| 指令 | 英文名 | 做什么 | 适合场景 | 典型产出 |\n|------|--------|--------|----------|----------|\n| **事实简报** | Fact Brief | 对冲突、矛盾报道做交叉核对，剥离情绪与二次转述 | 争议事件、多源打架 | 已核实要点 / 未证实项 / 矛盾点列表 |\n| **去噪分析** | De-noiser | 用第一性原理去掉冗长与包装，提取不变量与核心结论 | 长文、论文腔材料、PR 稿 | 核心命题、关键参数、可执行结论 |\n| **动态分析** | Dynamics | 梳理多变量之间的因果链与反馈环，而不是单点新闻 | 政策—市场联动、行业连锁 | 因果图示化文字、反馈环说明 |\n| **多米诺模拟** | Domino Sim | 推演突发事件在供应链 / 产业链上的层层传导 | 黑天鹅、断供、区域冲突外溢 | 一阶 / 二阶 / 三阶影响清单 |\n\n### 宏观、行业与公司\n\n| 指令 | 英文名 | 做什么 | 适合场景 | 典型产出 |\n|------|--------|--------|----------|----------|\n| **宏观视图** | Macro View | 解读增长、通胀、流动性、央行与政策对行业的含义 | 宏观周报、资产配置背景 | 宏观叙事、关键变量、对行业含义 |\n| **行业雷达** | Sector Radar | 分析供需、竞争格局、份额与产品壁垒 | 赛道研究、竞品对照 | 格局图、玩家定位、机会/威胁 |\n| **战略官视角** | CSO Board | 从战略层看商业模式、护城河与价值捕获 | 公司深度、战略复盘 | 模式拆解、壁垒判断、战略选项 |\n| **市场简报** | Market Brief | 把上下游与价格/逻辑链路整理成可读的市场研报结构 | 行业早报、投研备忘 | 结构化简报、逻辑流、关注指标 |\n| **科技日报** | Tech Daily | 聚焦平台经济、资本开支、技术壁垒与商业化进展 | 科技巨头、云与 AI 基建 | 要点日报、CapEx/平台含义点评 |\n| **风险雷达** | Risk Radar | 扫描地缘、合规、监管与系统性外部风险信号 | 风控扫描、出海合规关注 | 风险清单、严重度、触发信号 |\n\n### 资产、加密与决策\n\n| 指令 | 英文名 | 做什么 | 适合场景 | 典型产出 |\n|------|--------|--------|----------|----------|\n| **外汇量化** | Forex Quant | 结合利率、利差与宏观情绪评估汇市相关逻辑 | 汇率、利差交易背景阅读 | 驱动因素、情绪与风险提示 |\n| **加密情报** | Crypto Intel | 跟踪链上、DeFi、代币经济与生态重要动向 | Crypto 日报、协议研究 | 事件要点、机制解读、风险点 |\n| **贝叶斯交易** | Bayesian Trade | 用概率思维评估关键事件影响，并讨论对冲思路 | 不确定事件下的决策备忘 | 情景概率粗估、盈亏结构、对冲思路 |\n| **Serenity 方法** | Serenity Method | 审计 BOM、关键物料与「卡脖子」瓶颈环节 | 制造、半导体、硬件供应链 | 依赖清单、瓶颈节点、缓释方向 |\n\n### 工程、认知与长周期\n\n| 指令 | 英文名 | 做什么 | 适合场景 | 典型产出 |\n|------|--------|--------|----------|----------|\n| **技术博主** | Tech Onboarding | 从工程视角评估新工具/框架的上手成本、迁移摩擦与演进路径 | 技术选型、开源评估 | 学习曲线、迁移成本、适用边界 |\n| **思维教练** | Mind Coach | 针对执行拖延与决策卡点，给出低成本微实验建议 | 个人效率、阅读执行 | 诊断问题、下一步小动作 |\n| **林迪过滤** | Lindy Filter | 过滤短期噪音，保留更可能长期有效的概念与原则 | 知识沉淀、去热点化阅读 | 长周期观点、可保留原则清单 |\n\n## 自定义指令\n\n- 在设置中的指令管理里 **新增 / 编辑 / 删除** 个人指令。  \n- 自定义项会与 22 条系统指令 **合并显示** 在同一菜单。  \n- 模板可使用变量（详见 **快捷指令**）：`{{summary_data}}`、`{{original_context}}`、`{{history}}` 等。\n\n## 使用提示\n\n- 指令效果依赖上下文：优先在 **信息流分组聊天** 或已加载相关文章的会话中使用。  \n- 先开 **自动摘要**，再跑专家指令，通常比直接塞全文更稳、更省 Token。  \n- 需要可引用结论时，配合聊天中的 **引文徽标** 回看原文。",
        "contentEn": "Expert Commands are **pre-tuned analysis roles**. Pick one in AI Chat / Command Center and the model rewrites its lens, structure, and priorities over the articles currently in context.\n\nSame capability as **Advanced → AI Commands**: this page is the **catalog of 22 built-ins**; that page covers entry points, custom prompts, and template variables.\n\n> Some advanced commands require **Pro**. Custom prompts merge into the same menu.\n\n## How to use\n\n1. Open **AI Chat** (sidebar, Flow group, Graph, etc.).\n2. Open the **command menu / Command Center**.\n3. Select a role → the model analyzes the **current article context** in that style.\n4. Add personal prompts under **Settings**; they appear next to built-ins.\n\n## Pick by goal\n\n| Goal | Try first |\n|------|-----------|\n| Topics, trends, social distribution | Ideator / Trend Selector / Threader |\n| Drafting & polish | Draft Builder / Humanizer |\n| Macro, sector, strategy | Macro View / Sector Radar / CSO Board / Market Brief |\n| Risk, conflicting facts, shock chains | Risk Radar / Fact Brief / Domino Sim / Dynamics |\n| Tech & engineering | Tech Daily / Tech Onboarding / De-noiser |\n| Crypto & probabilistic decisions | Crypto Intel / Bayesian Trade |\n| Longevity, bottlenecks, execution | Lindy Filter / Serenity Method / Mind Coach |\n\n## Built-in commands (22)\n\n### Creation & distribution\n\n| Command | What it does | Best for | Typical output |\n|---------|--------------|----------|----------------|\n| **Ideator** | Clusters multi-source items into expandable topic maps and angles | Content planning, editorial calendars | Topic clusters, angle list |\n| **Trend Selector** | Ranks what is timely and high-spread potential | Daily hot-topic triage | Priority ranking, brief rationale |\n| **Draft Builder** | Turns selected materials into a structured outline or first draft | Long-form starts, weekly writeups | Outline + draft body |\n| **Humanizer** | Reduces robotic tone; improves flow and natural voice | Pre-publish polish | Readable rewrite |\n| **Threader** | Compresses research into X/Twitter-style threads | Social distribution | Numbered thread + hooks |\n\n### Research & facts\n\n| Command | What it does | Best for | Typical output |\n|---------|--------------|----------|----------------|\n| **Fact Brief** | Cross-checks conflicting reports; separates verified vs unresolved | Contested events | Verified / disputed / unknown |\n| **De-noiser** | First-principles extraction of invariants from noisy long text | Papers, PR-heavy posts | Core claims + key numbers |\n| **Dynamics** | Causal chains and feedback loops across variables | Policy–market linkage | Causal narrative / loop notes |\n| **Domino Sim** | Multi-hop supply-chain / industry shock propagation | Black-swan spillover | 1st / 2nd / 3rd order impacts |\n\n### Macro, sector & company\n\n| Command | What it does | Best for | Typical output |\n|---------|--------------|----------|----------------|\n| **Macro View** | Growth, inflation, liquidity, policy implications | Macro briefings | Narrative + key variables |\n| **Sector Radar** | Supply/demand, competition, share, moats | Industry maps | Landscape + threats/opportunities |\n| **CSO Board** | Business model, moat, value capture | Company deep-dives | Strategy options |\n| **Market Brief** | Structured market logic / upstream–downstream map | Research memos | Structured brief |\n| **Tech Daily** | Platforms, CapEx, tech moats, commercialization | Big-tech / infra | Daily tech points |\n| **Risk Radar** | Geopolitical, regulatory, systemic external risks | Risk scans | Risk list + triggers |\n\n### Assets, crypto & decisions\n\n| Command | What it does | Best for | Typical output |\n|---------|--------------|----------|----------------|\n| **Forex Quant** | Rates, differentials, macro sentiment for FX context | FX background reading | Drivers + caveats |\n| **Crypto Intel** | On-chain, DeFi, tokenomics, ecosystem moves | Crypto dailies | Event + mechanism notes |\n| **Bayesian Trade** | Scenario probabilities and hedge framing under uncertainty | Decision memos | Scenarios + hedge ideas |\n| **Serenity Method** | BOM / bottleneck / choke-point audit | Hardware, semis, manufacturing | Dependency & bottleneck list |\n\n### Engineering, cognition & longevity\n\n| Command | What it does | Best for | Typical output |\n|---------|--------------|----------|----------------|\n| **Tech Onboarding** | Learning curve, migration cost, fit of new tools | Tech selection | Cost/friction assessment |\n| **Mind Coach** | Execution friction → low-cost micro-experiments | Personal productivity | Diagnosis + next small step |\n| **Lindy Filter** | Filters short-term noise; keeps longer-lived ideas | Knowledge retention | Durable principles list |\n\n## Custom commands\n\nCreate/edit/delete under Settings. Customs merge with the 22 system roles in one menu. Template variables are documented under **AI Commands** (`{{summary_data}}`, `{{original_context}}`, `{{history}}`).\n\n## Tips\n\n- Load a **relevant article set** (e.g. Flow group chat) before running a command.  \n- **Auto-summary first** usually beats dumping raw full text (quality + tokens).  \n- Use **citation badges** in chat when you need to verify claims against sources."
      },
      {
        "id": "graph-view",
        "title": "知识图谱模式 / Graph View",
        "contentCn": "用标签与共现关系把文章连成可视化网络，发现跨主题交集。\n\n## 入口\n\n侧边栏 **图谱**（新标签打开）；工具栏也可进入。\n\n## 搜索\n\n支持逻辑组合：\n\n- 空格 / `AND`：同时包含  \n- `OR`：任一  \n- `NOT`：排除  \n\n`Alt+K` 聚焦搜索框；`Esc` 退出搜索。结果会实时重组节点。\n\n## 图谱阅读\n\n| 元素 | 含义 |\n|------|------|\n| 气泡节点 | 主题标签 |\n| 连线粗细 | 共现频率 |\n| 琥珀色高亮 | 跨领域桥接概念 |\n| 颜色 | 目录词 / 热词 / 当前焦点等 |\n\n可拖拽、缩放；点击节点查看关联文章。\n\n## 时间线\n\n选中节点或边后，右侧按时间列出文章；滑块筛选时段，可播放演进。\n\n## 图谱对话\n\n对当前检索结果发起 AI 聊天；提供建议问题；回答支持引文预览与跳转。",
        "contentEn": "Visual association network of tags and co-occurrence across RSS articles.\n\n## Access\n\nSidebar **Graph** (new tab) or toolbar entry.\n\n## Search\n\n`AND` / `OR` / `NOT` logic; `Alt+K` focuses search; graph re-clusters live.\n\n## Reading the Web\n\nNodes = tags; edge thickness = co-occurrence; amber = cross-domain bridges. Pan/zoom; click for related articles.\n\n## Timeline & Chat\n\nFilter by time slider; discuss the current selection with cited AI chat."
      }
    ]
  },
  {
    "id": "07-scheduled-tasks",
    "titleCn": "定时任务核心",
    "titleEn": "Scheduled Tasks",
    "icon": "Timer",
    "docs": [
      {
        "id": "workflow-overview",
        "title": "定时任务概述 / Workflow Overview",
        "contentCn": "在后台按计划抓取、用 AI 分析，并把简报推送到手机或群聊。\n\n## 入口\n\n**设置 → 工作流**\n\n## 界面\n\n- **任务列表**：启用 / 禁用、编辑、删除；可手动立即运行  \n- **执行历史**：最近约 50 条运行日志  \n\n## 核心机制\n\n| 点 | 说明 |\n|----|------|\n| 排队执行 | 多任务串行，避免同时打爆 API |\n| 调度 | 固定间隔（如每 12 小时）或指定时间 |\n| 推送 | 每任务可配 Telegram / 飞书 / 桌面通知 / Webhook |\n| 额度 | 免费约 2 个活跃任务；专业版更高 |\n\n相关：**三种执行模式**、**三种报告发布模式**、**标签过滤与内容筛选**。",
        "contentEn": "Schedule background fetch + AI analysis and push briefings to your channels.\n\n## Access\n\n**Settings → Workflow**\n\n## UI\n\n- **Workflows**: enable/disable, edit, delete, or run now  \n- **Journal**: last ~50 execution logs  \n\n## Core Behavior\n\n| Topic | Detail |\n|-------|--------|\n| Queue | Serial execution to avoid API rate limits |\n| Schedule | Intervals or specific times |\n| Push | Telegram, Feishu, desktop notifications, webhooks |\n| Limits | ~2 active workflows on free tier; more on Pro |\n\nSee also: Execution Modes, Report Publish Modes, Filters & Content Selection."
      },
      {
        "id": "execution-modes",
        "title": "三种执行模式详解 / Execution Modes",
        "contentCn": "在工作流编辑器中可选择三种执行模式，按需聚合与加工文章。\n\n## 1. 单指令分析 (Single)\n\n- **做法**：选一条 AI 指令（如「每日简报」），多篇文章一次汇总成一份报告  \n- **适合**：日常要闻、轻量简报  \n\n## 2. 串行链式 (Sequential Chain)\n\n- **做法**：步骤一 → 步骤二…，上一步输出作为下一步输入  \n- **适合**：多阶段深加工（先提要点，再写综述 / 翻译 / 扩写）  \n\n## 3. 并行汇总 (Split-Merge)\n\n- **分析阶段**：多维度并行分析同一批文章（如技术影响 + 市场机会）  \n- **汇总阶段**：合并各维度结果，形成综合决策报告  \n- **适合**：多视角研报与交叉分析",
        "contentEn": "Three execution modes in the workflow editor.\n\n## 1. Single\n\nOne command aggregates many articles into a single brief. Best for daily roundups.\n\n## 2. Sequential Chain\n\nPipeline steps where each step consumes the previous output. Best for multi-stage polish (extract → rewrite / translate).\n\n## 3. Split-Merge\n\nParallel dimensional analyses (map), then a final synthesis (reduce). Best for multi-perspective research."
      },
      {
        "id": "report-modes",
        "title": "三种报告发布模式 / Report Publish Modes",
        "contentCn": "定时任务生成深度简报后，可将报告以网页形式发布。在任务列表上方的 **发布设置** 中配置全局通道。\n\n## 1. 默认通道（官方托管）\n\n- **说明**：使用官方安全发布通道  \n- **优点**：零配置；页面排版适合手机阅读与转发  \n\n## 2. 自定义通道（自建托管）\n\n- **说明**：简报数据托管在你自己的服务上  \n- **配置**：自建地址 + 安全密钥  \n- **优点**：数据自有；可设保留天数（如 180 天自动清理）  \n\n## 3. SEO 博客门户\n\n- **说明**：把精选报告推送到独立站点 / 博客  \n- **配置**：站点 URL + 安全密钥；可映射分类、专栏、作者  \n- **示例**：[blog.oinchain.com](https://blog.oinchain.com)（由 RSSFlow 全自动整理更新）  \n\n## 标签合并\n\n发布时自动合并三类标签，便于检索：\n\n1. AI 设置中的全局分类标签  \n2. 该定时任务的筛选标签  \n3. 发布配置中的默认附加标签",
        "contentEn": "After a workflow compiles a briefing, publish it as a web page via **Publish Settings**.\n\n## 1. Default (Official Hosting)\n\nZero-config, mobile-friendly pages for reading and sharing.\n\n## 2. Custom (Self-Hosted)\n\nHost on your own infrastructure with URL + security key. Control retention (e.g. purge after 180 days).\n\n## 3. Blog Portal (SEO Site)\n\nPush reports to your site with categories, series, and author mapping.  \nDemo: [blog.oinchain.com](https://blog.oinchain.com).\n\n## Tag Merging\n\nOn publish, tags merge from:\n\n1. Global AI classification tags  \n2. Workflow filter tags  \n3. Default publication tags"
      },
      {
        "id": "filters-content-selection",
        "title": "标签过滤与内容筛选 / Filters & Content Selection",
        "contentCn": "创建定时任务时，用内容筛选缩小输入，减少噪音并控制 Token。\n\n## 可配置维度\n\n| 维度 | 说明 |\n|------|------|\n| 时间范围 | 如最近 24h / 48h / 7 天 |\n| 指定订阅源 | 绑定部分源，或处理全部 |\n| 标签过滤 | 按 AI 分类标签（可多选，OR） |\n| 关键词 | 摘要 / 要点 / 关键词中匹配（可多词，OR） |\n| 最低 AI 评分 | 如只取 ≥ 80 的文章 |\n| 数量上限 | 单次最多处理篇数（默认约 100） |\n\n## 过滤逻辑（简版）\n\n1. 在时间窗口内取文章  \n2. 默认优先已有 AI 摘要的文章（保证简报质量）  \n3. 匹配订阅源与最低评分  \n4. 标签 / 关键词按「满足任一即可」匹配  \n\n## 高级搜索\n\n支持用 `AND` / `OR` / `NOT` 组合条件，例如：\n\n- `AI 芯片` 或 `AI AND 芯片`：同时包含  \n- `智能手机 NOT 苹果`：排除词  \n\n异常或超时会自动降级为标准检索，避免任务中断。",
        "contentEn": "Use content filters in the workflow editor to target high-value articles and control token cost.\n\n## Dimensions\n\nTime range, feeds, AI tags (OR), keywords (OR), minimum AI score, and max articles per run (~100 default).\n\n## Flow\n\nWindow → prefer AI-summarized items → feed + score gates → tag/keyword OR matching.\n\n## Advanced Search\n\nCombine with `AND` / `OR` / `NOT`. On failure or timeout, the system falls back to standard search so workflows keep running."
      }
    ]
  },
  {
    "id": "08-ai-config",
    "titleCn": "AI 配置详解",
    "titleEn": "AI Configuration",
    "icon": "Settings2",
    "docs": [
      {
        "id": "provider-config",
        "title": "模型提供商配置 / Provider Configuration",
        "contentCn": "配置大模型供应商后，才能使用摘要、热点、对话等 AI 能力。\n\n## 入口\n\n**设置 → AI 设置**\n\n## 总开关\n\n页面顶部 **启用 AI 功能** 关闭时，AI 配置与相关功能均不可用。\n\n## 两套配置\n\n| 配置 | 适用场景 | 建议模型类型 |\n|------|----------|--------------|\n| 默认模型 (Basic) | 自动摘要、打标、评分等高频轻量任务 | 快、便宜、稳定 |\n| 复杂模型 (Advanced) | 深度对话、研报、热点聚合等 | 强推理、大上下文 |\n\n## 支持的供应商\n\n- **DeepSeek** — 高性价比推理与聊天  \n- **OpenAI** — GPT 系列  \n- **Anthropic Claude** — 长文逻辑与研报风格  \n- **Google Gemini** — 大上下文  \n- **OpenAI Compatible** — 兼容中转 / 聚合（如 SiliconFlow、火山引擎）  \n- **Local LLM** — Ollama / LM Studio 等本机模型  \n\n## 参数说明\n\n| 字段 | 说明 |\n|------|------|\n| API Key | 供应商密钥（密码框隐藏） |\n| API Host | 默认官方地址；中转可改写 |\n| Model Name | 模型代号；可手动输入或刷新列表选择 |\n\n## 验证与生效\n\n1. 填写参数后点 **验证并暂存配置**（后台连通性测试）。  \n2. 通过后点 **设为当前启用供应商** — **只有这一步后配置才真正生效**。\n\n## 本地模型\n\n选择 Local LLM 时，按页面内跨域指引操作：\n\n- Ollama：允许 `chrome-extension://*` 来源  \n- LM Studio：开启 CORS  \n\n更完整的步骤见：**快速开始 → AI 密钥配置**。",
        "contentEn": "Configure a provider before using summaries, discovery, or chat.\n\n## Access\n\n**Settings → AI Settings**\n\n## Master Switch\n\n**Enable AI Features** must be on.\n\n## Two Profiles\n\n| Profile | Use for | Prefer |\n|---------|---------|--------|\n| Basic | Auto summary, tags, scores | Fast / cost-efficient |\n| Advanced | Deep chat, reports, clustering | Strong reasoning / large context |\n\n## Providers\n\nDeepSeek, OpenAI, Anthropic Claude, Google Gemini, OpenAI-compatible aggregates, and Local LLM (Ollama / LM Studio).\n\n## Fields\n\n| Field | Notes |\n|-------|-------|\n| API Key | Masked token from your provider |\n| API Host | Official default; override for proxies |\n| Model Name | Type or refresh the list |\n\n## Validate & Activate\n\n1. **Validate & Stash** — connectivity test  \n2. **Set as Active Provider** — required for the profile to take effect  \n\n## Local Models\n\nFollow the in-app CORS guide for Ollama / LM Studio.  \nSee **Quick Start → AI Key Configuration** for full steps."
      },
      {
        "id": "tag-scope",
        "title": "Tag 枚举与范围设定 / Tag Scope",
        "contentCn": "自定义 AI 自动分类时可用的标签范围，影响摘要打标、Flow 标签视图与定时任务过滤。\n\n## 入口\n\n**设置 → AI 设置 → 自定义分类标签范围**\n\n## 默认列表\n\n```\n#Chinese Economy, #US economy, #EU economy, #UK economy, #Japan economy, #AI, #Business, #Gold, #Oil, #Crypto, #Technology, #Culture, #Other\n```\n\n## 作用\n\n| 用途 | 说明 |\n|------|------|\n| 引导 AI 分类 | 摘要阶段优先从该列表选标签 |\n| Flow 标签视图 | 通常只展示列表内标签，界面更干净 |\n| 定时任务过滤 | 任务的标签筛选可引用该范围 |\n\n## 内置推荐（可一键添加）\n\n| 方向 | 示例 |\n|------|------|\n| 宏观经济 | `#MacroEconomy` `#FederalReserve` `#Gold` `#Oil` |\n| 投资理财 | `#USStocks` `#A-Shares` `#ValueInvesting` |\n| 行业 | `#Business` `#SaaS` `#SupplyChain` |\n| 科技 | `#Technology` `#CyberSecurity` `#Semiconductors` |\n| AI | `#AI` `#LLM` `#Robotics` `#AISafety` |\n| Crypto | `#Bitcoin` `#DeFi` `#Web3` |\n| 科学健康 | `#Science` `#Biotech` `#Energy&Climate` |\n| 社会文化 | `#Geopolitics` `#History` `#Philosophy` |\n\n## 规范\n\n- 自定义标签以 `#` 开头，英文逗号分隔  \n- 点击推荐标签可快速加入（已在列表中会高亮）  \n- 标签不宜过多，以免分类发散、增加调用成本  \n- 可用 **恢复默认** 一键还原",
        "contentEn": "Define the tag vocabulary AI may use for classification, Flow tag views, and workflow filters.\n\n## Access\n\n**Settings → AI Settings → Custom Classification Tags**\n\n## Defaults\n\nSame default comma-separated `#tag` list as above.\n\n## Why It Matters\n\nGuides AI labeling, keeps Flow tag views focused, and feeds workflow tag filters.\n\n## Built-in Browser\n\nEight topic groups (Economics, Investment, Industry, Tech, AI, Crypto, Science, Society) with one-click add.\n\n## Rules\n\nStart with `#`, comma-separated, keep the list focused, restore defaults when needed."
      },
      {
        "id": "generation-parameters",
        "title": "高级参数说明 / Generation Parameters",
        "contentCn": "在 AI 设置中展开 **显示生成参数**，可调节输出风格与长度。\n\n## 参数\n\n| 参数 | 范围 / 默认 | 说明 | 建议 |\n|------|-------------|------|------|\n| Temperature | 0–2，默认 0.7 | 随机性 / 创造力 | 摘要 0.3–0.5；对话约 0.7；脑暴 0.7–0.9 |\n| Top P | 0–1，默认约 0.7 | 核采样 | 多数情况只调 Temperature 即可 |\n| Max Tokens | 100–65536 | 单次输出上限 | Basic 常约 8192；Advanced 常约 20000；过小会截断 |\n\n## 恢复默认\n\n相关区域提供 **恢复默认**（标签范围与参数区可能各自独立），用于回到出厂预设。",
        "contentEn": "Open **Show Generation Parameters** under AI Settings.\n\n## Parameters\n\n| Param | Range / default | Role | Tips |\n|-------|-----------------|------|------|\n| Temperature | 0–2 / 0.7 | Creativity | 0.3–0.5 summaries; ~0.7 chat; higher for brainstorming |\n| Top P | 0–1 / ~0.7 | Nucleus sampling | Prefer tuning Temperature only |\n| Max Tokens | 100–65536 | Max output length | ~8192 Basic / ~20000 Advanced; too low truncates |\n\n## Defaults\n\nUse **Restore defaults** where available to reset factory presets."
      }
    ]
  },
  {
    "id": "09-multi-language",
    "titleCn": "多语言支持",
    "titleEn": "Multi-language Support",
    "icon": "Languages",
    "docs": [
      {
        "id": "supported-languages",
        "title": "支持语言一览 / Supported Languages",
        "contentCn": "界面与 AI 输出可切换多种语言（随版本可能增减）。\n\n## 常见语言\n\n| 语言 | 代码 |\n|------|------|\n| English | `en` |\n| 简体中文 | `zh-cn` |\n| 繁體中文 | `zh-tw` |\n| 日本語 | `ja` |\n| 한국어 | `ko` |\n| Español | `es` |\n| Português | `pt-br` |\n| Français | `fr` |\n| Deutsch | `de` |\n| Italiano | `it` |\n| Русский | `ru` |\n| العربية | `ar` |\n| हिन्दी | `hi` |\n| Nederlands | `nl` |\n\n## 如何切换\n\n**设置 → 常规 → 语言**\n\n## 影响范围\n\n- 侧边栏、选项页、聊天等 UI 文案  \n- AI 摘要、对话、定时任务报告、热点发现的语言偏好  \n\n## 首次启动\n\n默认跟随浏览器语言；手动选择后覆盖自动检测，并保存在本地。",
        "contentEn": "Switch UI and AI output language under **Settings → General → Language**.\n\nCommon codes: `en`, `zh-cn`, `zh-tw`, `ja`, `ko`, `es`, `pt-br`, `fr`, `de`, `it`, `ru`, `ar`, `hi`, `nl` (availability may vary by version).\n\nAffects UI strings plus AI summaries, chat, workflow reports, and discovery copy. First launch follows the browser locale until you override it."
      }
    ]
  },
  {
    "id": "10-push-notifications",
    "titleCn": "多端推送",
    "titleEn": "Push Notifications",
    "icon": "Bell",
    "docs": [
      {
        "id": "telegram-push",
        "title": "Telegram 推送配置 / Telegram Push",
        "contentCn": "将 AI 摘要、热点发现与定时任务简报推送到 Telegram 私聊或群组。\n\n## 入口\n\n**设置 → 消息推送设置**\n\n## 推送类型\n\n| 选项 | 说明 |\n|------|------|\n| 开启 Telegram 推送 | 总开关 |\n| 发送文章摘要 | 新摘要生成后即时推送 |\n| 发送定时任务报告 | 工作流完成后推送链接与结论（推荐） |\n| 发送热点发现通知 | 推送热点 / 趋势分析 |\n\n## 配置步骤\n\n### 1. 创建机器人\n\n1. 在 Telegram 搜索 **@BotFather**  \n2. 发送 `/newbot`，按提示设置名称与用户名（用户名以 `bot` 结尾）  \n3. 复制返回的 **Bot Token**  \n\n### 2. 获取 Chat ID\n\n- **个人**：用 **@userinfobot**，发送 `/start` 获取数字 ID  \n- **群组**：先把机器人拉进群，再用 **@getidsbot** 获取群 ID（通常以 `-` 开头，**负号要保留**）  \n\n### 3. 填入 RSSFlow\n\n1. 填写 Bot Token 与 Chat ID  \n2. 勾选需要的推送类型，打开总开关  \n\n### 4. 测试与激活\n\n1. **先**打开与机器人的对话，点击 **Start** 或发送 `/start`  \n2. 再点 **发送测试消息**  \n\n> 未 `/start` 时机器人无权给你发消息。",
        "contentEn": "Push summaries, discovery alerts, and workflow briefings to Telegram.\n\n## Access\n\n**Settings → Notifications**\n\n## Toggles\n\n| Option | Purpose |\n|--------|---------|\n| Enable Telegram Push | Master switch |\n| Article summaries | Instant push after AI summary |\n| Scheduled briefings | Workflow report + link (recommended) |\n| Hot topic alerts | Trend discovery push |\n\n## Setup\n\n1. Create a bot via **@BotFather** (`/newbot`) and copy the **Bot Token**.  \n2. Get **Chat ID** with **@userinfobot** (DM) or **@getidsbot** (group; keep the leading `-`).  \n3. Paste Token + Chat ID in RSSFlow and enable the types you want.  \n4. **Start** the bot chat first (`/start`), then **Send test message**."
      },
      {
        "id": "feishu-push",
        "title": "飞书 Webhook 推送配置 / Feishu Push",
        "contentCn": "将 AI 摘要、热点发现与定时任务简报推送到飞书群聊。可与 Telegram 同时开启，互不影响。\n\n## 入口\n\n**设置 → 消息推送设置**\n\n## 推送类型\n\n| 选项 | 说明 |\n|------|------|\n| 开启飞书推送 | 总开关 |\n| 发送文章摘要 | 新摘要生成后推到群 |\n| 发送定时任务报告 | 工作流完成后推送链接与结论（推荐） |\n| 发送热点发现通知 | 推送热点 / 趋势分析 |\n\n## 配置步骤\n\n### 1. 创建群机器人\n\n1. 打开目标飞书群 → **群设置 → 群机器人 → 添加机器人 → 自定义机器人**  \n2. 设置名称 / 头像，同意协议后复制 **Webhook URL**  \n\n### 2. 安全校验（可选，推荐）\n\n开启 **签名校验** 时，复制飞书生成的 **Secret**。未开启则 RSSFlow 的 Secret **留空**。\n\n### 3. 填入 RSSFlow\n\n1. 粘贴 Webhook URL  \n2. 按需填写 Secret  \n3. 勾选推送类型并打开总开关  \n\n### 4. 测试\n\n点击 **发送测试消息**，群内应立刻收到测试通知。",
        "contentEn": "Push summaries, discovery alerts, and workflow briefings to a Feishu group. Independent from Telegram.\n\n## Access\n\n**Settings → Notifications**\n\n## Toggles\n\nMaster switch, article summaries, scheduled briefings, and hot-topic alerts.\n\n## Setup\n\n1. Create a **Custom Bot** in the Feishu group and copy the **Webhook URL**.  \n2. Optionally enable **signature verification** and copy the **Secret** (leave blank if off).  \n3. Paste URL / Secret in RSSFlow and enable the notification types you want.  \n4. **Send test message**."
      }
    ]
  },
  {
    "id": "11-settings-personalization",
    "titleCn": "设置与个性化",
    "titleEn": "Settings & Personalization",
    "icon": "Paintbrush",
    "docs": [
      {
        "id": "theme",
        "title": "主题与外观 / Theme",
        "contentCn": "在浅色、深色与跟随系统之间切换，覆盖侧边栏、设置、阅读器、聊天与图谱等界面。\n\n## 切换\n\n侧边栏工具栏 **主题** 图标（太阳 / 月亮）循环三种模式：\n\n| 模式 | 适用 |\n|------|------|\n| 浅色 | 明亮环境 |\n| 深色 | 夜间 / 暗光 |\n| 跟随系统 | 与系统外观同步 |\n\n选择保存在本地浏览器，重启后仍有效。",
        "contentEn": "Cycle Light / Dark / System via the sidebar theme control. Applies across sidebar, settings, reader, chat, and graph. Preference is stored locally."
      },
      {
        "id": "general-settings",
        "title": "常规设置 / General Settings",
        "contentCn": "控制抓取频率、列表时间范围、历史保留、界面语言与音效。\n\n## 入口\n\n**设置 → 常规**\n\n## 配置项\n\n| 项 | 范围 / 说明 | 建议 |\n|----|-------------|------|\n| **更新间隔** | 1–1440 分钟，后台拉取所有订阅源 | 新闻源可 60 分钟；省资源可 240 分钟+ |\n| **查询范围** | 1–365 天，侧边栏 / Flow 默认加载窗口 | 源很多时用 7–14 天提升流畅度 |\n| **最大保存时间** | 1–365 天，超期文章自动清理 | 常用 30–90 天；磁盘紧张则缩短 |\n| **界面语言** | 手动选择；默认跟随浏览器 | 也会影响 AI 摘要 / 报告语言偏好 |\n| **音效** | 双击已读时的木鱼提示音 | 可按喜好开关 |",
        "contentEn": "Controls fetch interval, list window, retention, UI language, and sound.\n\n## Access\n\n**Settings → General**\n\n## Options\n\n| Setting | Range / role | Tips |\n|---------|--------------|------|\n| **Update interval** | 1–1440 minutes | ~60m for news; longer to save resources |\n| **Query range** | 1–365 days loaded in lists / Flow | 7–14 days if you have many feeds |\n| **Retention** | 1–365 days before auto-purge | 30–90 days typical |\n| **Language** | UI language (default: browser) | Also steers AI summary language |\n| **Sound** | Wooden-bell on double-click dismiss | Toggle as preferred |"
      }
    ]
  },
  {
    "id": "12-advanced-features",
    "titleCn": "高级功能",
    "titleEn": "Advanced Features",
    "icon": "Wrench",
    "docs": [
      {
        "id": "mcp-bridge",
        "title": "MCP 桥接 / MCP Bridge",
        "contentCn": "在浏览器扩展与外部机器人（Telegram / 飞书）或本地 AI 客户端（Cursor、Claude 等）之间建立安全桥接，共享上下文与远程指令。\n\n## 入口\n\n**设置 → MCP 设置**\n\n## 配置\n\n1. **启用桥接轮询** — 定期拉取外部任务 / 指令  \n2. **Worker 网址** — Cloudflare Worker 网关地址  \n3. **安全密钥** — 本地生成的配对密钥，绑定时复制使用  \n4. **飞书事件 Webhook** — 由 Worker 地址推导，用于飞书事件订阅  \n\n## 场景\n\n- 本地 AI 工具经 MCP 读取 RSS / 摘要作为上下文  \n- 通过机器人远程触发检索或分析",
        "contentEn": "Secure bridge between the extension and external bots or local AI clients (Cursor, Claude) for context sharing and remote commands.\n\n## Access\n\n**Settings → MCP Settings**\n\n## Setup\n\n1. Enable polling  \n2. Worker URL  \n3. Identity / pairing key (generated locally)  \n4. Feishu event webhook (derived from Worker URL)  \n\n## Use Cases\n\nMCP clients reading local RSS context; bot-driven remote triggers."
      },
      {
        "id": "cloud-report-portal",
        "title": "云报告门户 / RSSFlow AI Report Portal",
        "contentCn": "定时任务生成的 AI 报告可同步到你的独立站点，便于手机阅读与分享。\n\n## 特点\n\n- 碎片资讯 → 结构化博文  \n- 跨设备阅读，无需打开扩展  \n- 可分享、利于归档  \n- 分类 / 系列 / 标签归档  \n\n演示：[blog.oinchain.com](https://blog.oinchain.com)\n\n## 配置（任务报告设置）\n\n| 字段 | 说明 |\n|------|------|\n| 站点 URL | 门户地址 |\n| Auth Token | 发布鉴权 |\n| 默认语言 | 中 / 英等 |\n| 分类 / 系列 | 栏目映射 |\n| 作者 / 标签 | 署名与标签 |\n\n## 流程\n\n1. 工作流生成报告  \n2. 扩展安全推送到站点  \n3. 站点发布为可分享页面  \n\n相关：**定时任务 → 三种报告发布模式**。",
        "contentEn": "Publish workflow AI briefings to your personal portal for mobile reading and sharing.\n\n## Features\n\nStructured posts, cross-device access, shareable URLs, category/series/tag archives.  \nDemo: [blog.oinchain.com](https://blog.oinchain.com)\n\n## Config\n\nSite URL, auth token, language, category/series, author/tags — under workflow report settings.\n\n## Flow\n\nWorkflow generates → extension pushes securely → portal publishes a unique page.  \nSee **Report Publish Modes**."
      },
      {
        "id": "ai-commands",
        "title": "快捷指令 / AI Commands",
        "contentCn": "快捷指令（指令中心）用于对**单篇或多篇文章**一键调用预置 / 自定义提示词，完成提炼、改写或专业研判。\n\n**22 条内置专家角色的详细说明**（做什么、适用场景、典型产出）见：\n\n> **AI 智能核心 → 专家指令集**\n\n本页说明：**入口、自定义、模板变量**。\n\n## 入口\n\n- AI 聊天 / 阅读侧栏底部的 **指令中心**  \n- **设置** 中的指令管理（创建、编辑、删除）  \n- 信息流分组、图谱等对话上下文中同样可打开指令菜单  \n\n## 内置指令速查\n\n| 中文 | 英文 | 一句话 |\n|------|------|--------|\n| 创意构思者 | Ideator | 多源聚合成选题与话题簇 |\n| 趋势筛选器 | Trend Selector | 评估并排序高传播潜力热点 |\n| 草稿构建器 | Draft Builder | 素材 → 大纲 / 初稿 |\n| 人性化改写 | Humanizer | 去机械腔，提升可读性 |\n| 风险雷达 | Risk Radar | 地缘 / 合规 / 系统性风险扫描 |\n| 行业雷达 | Sector Radar | 供需、竞争与壁垒 |\n| 宏观视图 | Macro View | 宏观、流动性与政策含义 |\n| 外汇量化 | Forex Quant | 利率、利差与汇市情绪 |\n| 战略官视角 | CSO Board | 商业模式、护城河与价值捕获 |\n| 加密情报 | Crypto Intel | 链上 / DeFi / 代币经济 |\n| 事实简报 | Fact Brief | 冲突信息交叉验证 |\n| 动态分析 | Dynamics | 因果链与反馈环 |\n| 推特长文 | Threader | 长文 → 社交 thread |\n| 市场简报 | Market Brief | 结构化市场逻辑简报 |\n| 科技日报 | Tech Daily | 平台、CapEx 与商业化 |\n| 去噪分析 | De-noiser | 第一性原理提纯核心结论 |\n| 技术博主 | Tech Onboarding | 上手成本与迁移摩擦 |\n| 思维教练 | Mind Coach | 执行卡点与微实验 |\n| 多米诺模拟 | Domino Sim | 冲击的多层传导 |\n| 林迪过滤 | Lindy Filter | 过滤短噪，保留长周期概念 |\n| Serenity 方法 | Serenity Method | BOM / 瓶颈 / 卡脖子审计 |\n| 贝叶斯交易 | Bayesian Trade | 情景概率与对冲思路 |\n\n部分高级指令需 **Pro**。完整场景表与产出说明以 **专家指令集** 为准。\n\n## 自定义指令\n\n可按个人工作流新增指令。\n\n| 字段 | 说明 |\n|------|------|\n| **指令名称** | 菜单中显示的短名称 |\n| **提示词模板** | 发给模型的完整要求（System / 主提示） |\n| **上下文开关** | 是否自动附带摘要、对话历史等 |\n\n### 模板变量\n\n运行时会替换为真实内容：\n\n| 变量 | 含义 |\n|------|------|\n| `{{summary_data}}` | 当前文章的摘要与基础元数据 |\n| `{{original_context}}` | 原文全文（按实现可能截断） |\n| `{{history}}` | 链式 / 多步任务中，上一步 AI 输出 |\n\n> 编写自定义指令时写清：**角色、输入、输出结构、禁止事项**，效果通常更稳定。\n\n## 使用建议\n\n1. 先保证相关文章已进入当前对话上下文。  \n2. 优先依赖已生成的 **AI 摘要**，再跑专家指令。  \n3. 需要可核验结论时，使用聊天中的 **引文** 回看原文。",
        "contentEn": "AI Commands run preset or custom prompts over one or many articles.  \n**Full role catalog (what / when / output)** lives in **AI Smart Core → Expert Command Set**. This page covers access, custom prompts, and variables.\n\n## Access\n\nCommand Center in chat/reader; manage library under Settings; also available in Flow/Graph chat contexts.\n\n## Built-in quick list\n\n22 roles (Ideator, Trend Selector, Draft Builder, Humanizer, Risk/Sector/Macro radars, Forex Quant, CSO Board, Crypto Intel, Fact Brief, Dynamics, Threader, Market Brief, Tech Daily, De-noiser, Tech Onboarding, Mind Coach, Domino Sim, Lindy Filter, Serenity Method, Bayesian Trade). Some require **Pro**.\n\n## Custom commands\n\n| Field | Purpose |\n|-------|---------|\n| Name | Menu label |\n| Prompt template | Full instruction to the model |\n| Context toggles | Attach summary / chat history |\n\n### Variables\n\n| Variable | Meaning |\n|----------|---------|\n| `{{summary_data}}` | Summary + metadata |\n| `{{original_context}}` | Source text (may be truncated) |\n| `{{history}}` | Previous step output in chains |\n\n## Tips\n\nLoad relevant context first; prefer auto-summaries before heavy commands; use citation badges to verify claims."
      },
      {
        "id": "cross-extension-sync",
        "title": "跨扩展同步 / Cross-Extension Sync",
        "contentCn": "把已处理的文章元数据与 AI 结果，推送给本机其他已授权浏览器扩展，实现工具链联动。\n\n## 入口\n\n**设置 → 跨扩展同步**\n\n## 选项\n\n| 项 | 说明 |\n|----|------|\n| 启用同步 | 总开关 |\n| 目标扩展 ID | 白名单；填 `*` 表示允许本机扩展查询（需谨慎） |\n| 自动推送 | 新摘要完成后自动广播 |\n\n## 共享内容\n\n- 基础：标题、链接、日期、订阅源  \n- AI：优化标题、摘要、要点、观点  \n- 标签与评分  \n\n## 步骤\n\n1. 在 `chrome://extensions`（或 Edge 对应页）复制目标扩展 32 位 ID  \n2. 粘贴到 RSSFlow 目标 ID  \n3. 打开 **启用同步** 与 **自动推送**",
        "contentEn": "Stream processed articles and AI fields to other **authorized** extensions on the same browser.\n\n## Access\n\n**Settings → Sync**\n\n## Options\n\nEnable sync, whitelist target extension ID (`*` allows broader local queries—use carefully), and auto-push after summaries.\n\n## Payload\n\nMetadata (title, URL, date, feed) plus AI summary, bullets, opinions, tags, and score.\n\n## Setup\n\nCopy the 32-char ID from the extensions page → paste in RSSFlow → enable sync and auto-push."
      }
    ]
  },
  {
    "id": "13-faq",
    "titleCn": "常见问题",
    "titleEn": "FAQ",
    "icon": "HelpCircle",
    "docs": [
      {
        "id": "troubleshooting-faq",
        "title": "故障排除与 FAQ / Troubleshooting & FAQ",
        "contentCn": "## AI 智能\n\n**Q：新文章为什么没有自动摘要？**\n\n1. **总开关**：AI 设置页顶部 **启用 AI 功能** 已开启  \n2. **默认模型**：Basic 已验证，并已 **设为当前启用**  \n3. **订阅源**：该源的 **Auto AI** 已打开；未开则不会自动摘要  \n\n**Q：验证模型一直超时？**\n\n测试超时约 20 秒。常见原因：\n\n- API Key 拼写错误  \n- API Host 不可达（部分境外服务需网络或兼容中转，如 SiliconFlow）  \n- 模型名称不正确；可点刷新拉取模型列表  \n\n**Q：获取模型列表失败？**\n\n先确认 Key 与 Host 正确；部分供应商需先能连通，才会返回模型目录。\n\n---\n\n## 订阅源\n\n**Q：更新经常失败？**\n\n- 在浏览器直接打开 RSS URL，确认仍是有效 XML  \n- 部分外网源可能超时  \n- 使用列表中的 **手动同步** 重试  \n\n**Q：OPML 导入失败？**\n\n确认文件为标准 OPML / XML，编码建议 UTF-8。\n\n---\n\n## 消息推送\n\n**Q：Telegram 收不到？**\n\n- Bot Token 与 Chat ID 是否正确（群组 ID 常带负号 `-`）  \n- **必须先**在机器人对话中点 **Start** 或发送 `/start`  \n- 推送设置中对应类别是否勾选  \n\n**Q：飞书机器人收不到？**\n\n- Webhook 是否完整复制  \n- 若飞书开启签名校验，Secret 必须一致；未开启则 Secret 留空  \n\n---\n\n## 定时任务\n\n**Q：到点不执行？**\n\n- 任务开关是否开启  \n- 深度报告默认用 **复杂模型 (Advanced)**，请确认已配置  \n- 过滤条件是否过严，导致窗口内无文章  \n- 查看执行历史中的错误  \n- 未激活版本最多约 2 个活跃任务  \n\n**Q：执行成功但推送内容为空？**\n\n- 任务内是否关联并启用了推送通道  \n- 在执行历史中预览报告，确认模型是否生成了正文  \n\n---\n\n## 数据与恢复\n\n**Q：如何恢复默认？**\n\n各面板（如标签范围）有 **恢复默认值**。若要清空全部数据，可卸载扩展后重装。\n\n**Q：数据存在哪里？会上传吗？**\n\n采用 **本地优先**：文章、摘要、图谱等多在浏览器本地（IndexedDB / 本地存储）。  \n只有在你主动配置的 AI / 推送 / 云门户 / 激活等场景才会发出必要数据。  \n\n详见：**隐私与安全 → 数据隐私说明**。",
        "contentEn": "## AI\n\n**Q: Why no auto summaries?**\n\n1. **Enable AI Features** is on  \n2. **Basic** profile is validated and **set as active**  \n3. Per-feed **Auto AI** is enabled  \n\n**Q: Validate keeps timing out?**\n\n~20s timeout. Check API Key, Host reachability (proxy / compatible provider if needed), and model name (use refresh to list models).\n\n**Q: Model list fails to load?**\n\nConfirm Key and Host first; some providers require a working connection before listing models.\n\n---\n\n## Feeds\n\n**Q: Feed updates fail often?**\n\nOpen the RSS URL in a browser to verify XML; some remote sites time out; use **manual sync**.\n\n**Q: OPML import fails?**\n\nUse standard OPML/XML, preferably UTF-8.\n\n---\n\n## Push\n\n**Q: No Telegram messages?**\n\nVerify Bot Token and Chat ID (group IDs often start with `-`).  \n**Start** the bot once (`/start`). Enable the relevant notification categories.\n\n**Q: No Feishu/Lark messages?**\n\nCopy the full Webhook URL. Match Secret if signature verification is on; leave Secret empty if off.\n\n---\n\n## Workflows\n\n**Q: Schedule did not run?**\n\nTask enabled? **Advanced** model configured? Filters too strict? Check execution history. Free tiers may limit active workflows (~2).\n\n**Q: Run succeeded but empty push?**\n\nChannel linked inside the task? Preview the report in history for empty model output.\n\n---\n\n## Data & Reset\n\n**Q: Restore defaults?**\n\nUse **Restore defaults** on panels, or reinstall the extension for a full wipe.\n\n**Q: Where is data stored?**\n\n**Local-first**: core content stays in the browser. Data leaves only for integrations you enable (AI, push, portal, activation).\n\nSee **Privacy & Security → Privacy Statement**."
      }
    ]
  },
  {
    "id": "14-privacy-security",
    "titleCn": "隐私与安全",
    "titleEn": "Privacy & Security",
    "icon": "Shield",
    "docs": [
      {
        "id": "privacy-statement",
        "title": "数据隐私说明 / Privacy & Data Security",
        "contentCn": "## 本地优先\n\n默认数据保存在你的浏览器本地，不会自动上传到任意服务器。\n\n## 存储位置\n\n| 类型 | 位置 |\n|------|------|\n| 文章 / 摘要 / 评分等 | 浏览器本地数据库 |\n| 设置、AI 配置、推送、工作流 | 本地存储 |\n| 临时会话状态 | 内存；关闭浏览器后清除 |\n\n## API 密钥\n\n- 密钥保存在本地  \n- 仅在你配置的供应商请求中使用，不发给第三方中转（除非你自己配置了中转 Host）  \n- 密码框默认遮罩  \n\n## 无追踪\n\n不含分析 / 行为统计 / 遥测代码。\n\n## 何时会离开本机\n\n仅在你主动配置时发送必要数据：\n\n- **AI**：文章内容 → 你配置的模型服务  \n- **推送**：简报 → Telegram / 飞书等  \n- **云门户 / MCP**：报告 / 桥接 → 你自己的 Worker / 站点  \n- **激活**：许可证校验  \n\n## 清理\n\n删除订阅源会删除其历史文章；卸载扩展或清除站点数据会抹掉本地库，通常不可恢复。",
        "contentEn": "## Local-First\n\nData stays in the browser by default and is not auto-uploaded.\n\n## Storage\n\nArticles and AI fields in local DB; settings and workflows in local storage; session state in memory.\n\n## API Keys\n\nStored locally, used only for your configured providers/hosts, masked in the UI.\n\n## No Telemetry\n\nNo analytics or behavior tracking.\n\n## When Data Leaves\n\nOnly integrations you enable: AI providers, push bots, your portal/MCP worker, license activation.\n\n## Deletion\n\nDeleting a feed removes its articles; uninstall / clear site data wipes local state."
      }
    ]
  }
];
