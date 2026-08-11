# RSSFlow Changelog

> Full release history of the RSSFlow browser extension (documentation mirror of the product site).
> Live page: https://rssflow.oinchain.com/changelog

| Version | Date | Summary |
| :--- | :--- | :--- |
| v1.1.5 | 2026-08-10 | Unified search kernel, Flow view stability, and recommended-feed / tag localization. |
| v1.1.4 | 2026-08-06 | Full i18n coverage, background DB worker, and full-text extraction. (store) |
| v1.1.2 | 2026-08-04 | AI report dashboard and Clerk authentication integration. |
| v1.1.1 | 2026-07-28 | Subscription/query rewrite, Rspack migration, and SQLite WASM. |
| v1.1.0 | 2026-07-15 | V3 chat rewrite, SQLite worker, and graph page. (milestone) |
| v1.0.9 | 2026-07-13 | Graph search and one-click workflow creation. |
| v1.0.8 | 2026-06-24 | SQLite + knowledge graph, prompt and command upgrades. (milestone) |
| v1.0.6 | 2026-06-17 | Clerk account registration and desktop client prototype. |
| v1.0.5 | 2026-06-05 | Unattended scheduled workflows and context compression. |
| v1.0.4 | 2026-06-01 | Sequential chain and split-merge workflow orchestration. (store) |
| v1.0.3 | 2026-05-23 | Direct report publish, starfield theme, and Gemini Web. |
| v1.0.2 | 2026-05-13 | MCP multi-turn chat, Feishu IM, and AI report portal work. |
| v1.0.1 | 2026-04-30 | Standard MCP bridge and WorkflowService. |
| v1.0.0 | 2026-03-24 | V1.0 GA: Zustand data layer, standalone reader, and Vercel AI SDK unification. (milestone, store) |
| v0.2.7 | 2026-03-19 | Discovery polish, Feishu notifications, and MCP stability. |
| v0.2.3 | 2026-02-22 | Store submission node carrying v0.2.2 work. (store) |
| v0.2.2 | 2026-02-21 | Report compliance and multi-channel push polish. |
| v0.2.1 | 2026-02-18 | Scheduled workflows; React chat/settings (absorbs long 0.1.x→0.2 gap work). (milestone) |
| v0.1.11 | 2025-06-19 | 0.1.x series close-out and cleanup. |
| v0.1.10 | 2025-06-08 | Prompt system adjustments and native Gemini fixes. |
| v0.1.9 | 2025-06-01 | Stability fixes and TXT-format prompts. |
| v0.1.7 | 2025-05-30 | Style/effects follow-up fixes. |
| v0.1.6 | 2025-05-28 | Chat effects reduced for performance. |
| v0.1.5 | 2025-04-28 | Light theme, HTML preview, and keyword filtering. (milestone) |
| v0.1.4 | 2025-04-24 | Redeem dialog and full-text read visual fixes. |
| v0.1.3 | 2025-03-21 | Trial period, chat mode, auto-summary, and command palette seeds. (milestone, store) |
| v0.1.2 | 2025-01-24 | First Chrome Web Store release. (milestone, store) |
| v0.1.1.999 | 2024-12-25 | Internal build: full-text loading, date-range queries, reader fixes. |
| v0.1.0.999 | 2024-12-22 | Internal build: streaming AI, audio download, locale switching. |
| v0.1.0 | 2024-12-22 | Initial release: RSS subscribe/read, AI summary, and TTS prototype. (milestone) |

---

## v1.1.5 (2026-08-10)

Unified search kernel, Flow view stability, and recommended-feed / tag localization.

> 检索内核统一、流程视图稳定性与推荐源/标签适配。

- **Unified article search semantics** — Shared search kernel so chat, discovery, and automation share the same retrieval semantics.
  - ZH: 文章检索语义统一 — 抽出共享检索内核，聊天 / 发现 / 自动化等路径对齐。
- **Keyword normalization & unread / retrieval integrity** — Refactored keyword normalization and unread/retrieval integrity across sidebar, discovery stats, and automation context.
  - ZH: 关键词归一化与未读统计/检索完整性 — 重构侧边栏、发现统计、自动化上下文中的关键词归一化与未读统计链路。
- **Flow scroll stability & session cleanup** — Pause idle prefetch / optimistic merges while scrolling; sticky columns; abort generation and reset filters after clearing chat.
  - ZH: 流程视图滚动稳定性与会话清理 — 滚动时暂停闲时预取与乐观合入，列粘性分配；清空会话后清理生成中请求与筛选残留。
- **JA/KO recommended feeds & catalog refactor** — Added Japanese and Korean recommended feeds, expanded the catalog, and refactored feed settings categories.
  - ZH: 推荐源日语/韩语与分类重构 — 推荐源新增日语 / 韩语并扩充订阅源；订阅设置与推荐源分类重构。
- **Locale-aware default tag sets** — Default tag sets adapt to UI locale with broader coverage.
  - ZH: 语言环境默认标签集适配 — 按语言环境适配默认标签集，并扩展标签涵盖范围。

## v1.1.4 (2026-08-06) — Store

Full i18n coverage, background DB worker, and full-text extraction.

> 多语言 i18n、后台数据库与全文提取服务。

- **Broad multi-language i18n coverage**
  - ZH: 多语言 i18n 全面支持
- **Background database handling via db.worker**
  - ZH: 后台数据库处理（db.worker）
- **Full-text extraction services**
  - ZH: 全文提取服务

## v1.1.2 (2026-08-04)

AI report dashboard and Clerk authentication integration.

> AI 报告 Dashboard 与 Clerk 认证集成。

- **AI report dashboard shipped**
  - ZH: AI 报告 Dashboard 落地
- **Clerk auth components and localization**
  - ZH: Clerk 认证组件与本地化
- **Graph portal and AI report components with SQLite**
  - ZH: Graph Portal 与 AI 报告组件（SQLite）
- **Admin dashboard and telemetry cleanup**
  - ZH: Admin Dashboard 与遥测清理
- **Modular build assets and localization polish**
  - ZH: 模块化构建资源与多语言完善
- **Performance: image loading, parallel queries, first paint**
  - ZH: 性能优化：图片加载、并行查询、首屏速度

## v1.1.1 (2026-07-28)

Subscription/query rewrite, Rspack migration, and SQLite WASM.

> 订阅/查询重构，Rspack 迁移与 SQLite WASM。

- **Large-scale subscription and query-layer rewrite**
  - ZH: 订阅与查询层大规模重构
- **SQLite WASM with OPFS async proxy**
  - ZH: SQLite WASM + OPFS 异步代理
- **Build toolchain migrated to Rspack**
  - ZH: 构建工具迁移至 Rspack
- **AI chat, ticker, and custom prompt management**
  - ZH: AI Chat + Ticker + 自定义 Prompt 管理
- **Automation task management and pricing table**
  - ZH: 自动化任务管理服务 + 定价表组件
- **Sidebar redesign and multilingual store descriptions**
  - ZH: Sidebar 重设计 + 多语言商店描述

## v1.1.0 (2026-07-15) — Milestone

V3 chat rewrite, SQLite worker, and graph page.

> V3 聊天重构，SQLite Worker 与知识图谱页面。

- **V3 chat interface rewrite** — SmartInput, CommandPalette, command surface, automation orchestration.
  - ZH: V3 聊天界面大重构 — SmartInput / CommandPalette / 命令面板 / 自动化编排。
- **SQLite worker + GraphPage**
  - ZH: SQLite Worker + GraphPage
- **AI report portal and admin surfaces**
  - ZH: AI 报告门户与内部管理后台
- **HTML preview modal with theme, loading, and i18n**
  - ZH: HTML 预览 Modal（主题/加载态/i18n）
- **Background animation engine, activation service, email-link auth (Clerk)**
  - ZH: 环境背景动画、激活服务、邮箱链接认证（Clerk）
- **Six additional locales; AdminEditor XSS hardening**
  - ZH: 本地化新增 6 种语言；AdminEditor XSS 防护
- **flow.html: voice toggle and mini mode as default**
  - ZH: flow.html：语音播报开关、极简模式默认开启

## v1.0.9 (2026-07-13)

Graph search and one-click workflow creation.

> Graph 图谱搜索与一键创建定时任务。

- **Graph search surface on graph.html**
  - ZH: 新增 Graph 图谱搜索（graph.html）
- **Create scheduled workflows from graph search**
  - ZH: 图谱搜索支持一键创建定时任务
- **Suggested question chips and sidebar tab layout tweaks**
  - ZH: 推荐提问胶囊、sidebar 顶部标签视图调整
- **Flow view performance and activation UX polish**
  - ZH: flow 视图显示与性能优化；激活界面体验优化

## v1.0.8 (2026-06-24) — Milestone

SQLite + knowledge graph, prompt and command upgrades.

> SQLite + 知识图谱接入，Prompt 与快捷指令升级。

- **SQLite + knowledge graph integration**
  - ZH: 接入 SQLite + 知识图谱方案
- **contentType field on extension and desktop paths**
  - ZH: 扩展端/桌面端新增 contentType 字段
- **Context compression rules: removed 3-bullet cap**
  - ZH: 上下文压缩规则优化（移除 3 条要点上限）
- **Prompt catalog expanded (+6) and existing prompts polished**
  - ZH: Prompt 体系扩充：新增 6 个并优化现有 Prompt
- **Command hover cards rebuilt with portal positioning and motion**
  - ZH: 快捷指令悬浮卡片重构（Portal 定位、动画）
- **Mobile reading UX polish; desktop feature parity sync**
  - ZH: 手机端文章阅读体验优化；桌面版功能同步

## v1.0.6 (2026-06-17)

Clerk account registration and desktop client prototype.

> Clerk 账号注册与桌面客户端雏形。

- **Version archive (Edge / store sync node)**
  - ZH: 版本归档（Edge/商店同步节点）
- **Long-context compression and truncation improvements**
  - ZH: 超长上下文压缩与截断逻辑优化
- **Clerk account registration**
  - ZH: 新增 Clerk 账号注册
- **reader.html shortcuts and theme switching polish**
  - ZH: reader.html 快捷键与主题风格切换优化
- **Desktop client prototype (cross-window IPC, tabs API polyfill)**
  - ZH: 桌面客户端雏形（跨窗口 IPC、tabs API polyfill）

## v1.0.5 (2026-06-05)

Unattended scheduled workflows and context compression.

> 全自动无人值守定时任务与上下文压缩。

- **Fixed reader TOC scroll-spy flicker**
  - ZH: 修复文章页目录定位（scroll spy 闪烁）
- **Prompts split into Markdown source files**
  - ZH: Prompt 分离改造：支持 MD 格式 Prompt 文件
- **Fully unattended scheduled-workflow loop**
  - ZH: 真正全自动无人值守的定时任务闭环
- **Activation permission hardening; report retention default 180 days**
  - ZH: 激活码权限逻辑加固；报告默认保存期 180 天
- **Dutch locale; Gemini Web truncation fix**
  - ZH: 新增荷兰语；修复 Gemini Web 数据截断
- **Sidebar/chat performance and faster reader shortcuts**
  - ZH: sidebar/聊天性能优化、reader 快捷键提速
- **Context compression levels 3/4 for key-point reduction**
  - ZH: 上下文压缩方案落地（Level 3/4 要点压缩）

## v1.0.4 (2026-06-01) — Store

Sequential chain and split-merge workflow orchestration.

> 定时任务链式调用与并行汇总编排。

- **Sequential Chain and Split-Merge agentic workflows**
  - ZH: 链式调用（Sequential Chain）与并行汇总（Split-Merge）
- **Fixed date-range filter after feed selection**
  - ZH: 修复筛选订阅源后未按日期区间过滤
- **Global unread count consistency**
  - ZH: 未读计数全局统一

## v1.0.3 (2026-05-23)

Direct report publish, starfield theme, and Gemini Web.

> 报告免审核发布、星空主题与 Gemini Web。

- **Fixed discovery index refs and chat overlay positioning**
  - ZH: 修复发现模块索引引用、聊天浮层定位
- **Reader next/prev follows selected feed; faster loads**
  - ZH: reader 按选中订阅源切换上/下一篇；加载提速
- **Scroll-up keyboard shortcut**
  - ZH: 新增向上滚动快捷键
- **Starfield theme with glow and sky backgrounds**
  - ZH: 星空主题 + 光晕效果（蓝天白云背景）
- **Direct publish toggle for reports (skip review)**
  - ZH: 报告支持「免审核直接发布」开关
- **Gemini Web support and boundary bug fixes**
  - ZH: Gemini Web 支持及边界漏洞修复

## v1.0.2 (2026-05-13)

MCP multi-turn chat, Feishu IM, and AI report portal work.

> MCP 多轮对话、飞书聊天端与 AI 报告门户。

- **Chat filter panel polish; suggestions surface discovery topics**
  - ZH: 聊天筛选面板优化；建议展示热点发现内容
- **MCP tools: command permissions and 3-turn multi-round chat**
  - ZH: MCP 工具完善：快捷指令权限、3 轮多轮对话
- **Feishu chat endpoint (IM dialogue)**
  - ZH: 新增飞书聊天端支持（IM 对话）
- **Fixed render stalls from large chains / fast streams and maxToken overflows**
  - ZH: 修复思维链过大/响应过快导致的渲染中断、maxToken 超限
- **Chat mermaid/color polish; automation composite index**
  - ZH: 聊天 mermaid / 配色优化；自动化查询复合索引

## v1.0.1 (2026-04-30)

Standard MCP bridge and WorkflowService.

> 标准 MCP 桥接与 WorkflowService。

- **Fixed custom command creation bug**
  - ZH: 修复添加自定义快捷指令的 bug
- **Standard MCP bridge for external AI tools to read local reading data**
  - ZH: 标准 MCP 协议桥接（外部 AI 可读本地阅读数据）
- **One-click import from SnagFlow / CatchFlow generators**
  - ZH: snagFlow/CatchFlow 订阅生成器一键导入
- **WorkflowService shipped with encoded prompt precompilation**
  - ZH: WorkflowService 落地 + 编码 Prompt 预编译
- **More robust LLM call pipeline**
  - ZH: LLM 调用流程稳定性与健壮性提升

## v1.0.0 (2026-03-24) — Milestone / Store

V1.0 GA: Zustand data layer, standalone reader, and Vercel AI SDK unification.

> V1.0 定稿：Zustand 数据层、独立阅读器与 Vercel AI SDK。

- **Zustand data-loading rewrite across the sidebar pipeline**
  - ZH: 数据加载 Zustand 架构重构（sidebar 全链路）
- **Standalone full-text reader (reader.html)** — Shortcuts, TOC, light/dark themes, AI summary rail, typewriter effect, source links, adaptive layout.
  - ZH: 独立全文阅读页 reader.html — 快捷键、目录、深浅色主题、AI 摘要栏、打字效果、原文链接、自适应布局。
- **Sidebar moved to React + Tailwind; mini density mode**
  - ZH: sidebar 迁移 React + Tailwind；极简模式
- **Card images with hover zoom; empty states for four views**
  - ZH: 文章卡片图片与悬停放大；四视图空状态
- **Flow performance: composite indexes, incremental summaries, date-range queries**
  - ZH: flow 性能重构：复合索引、增量摘要、日期范围查询
- **LLM stack unified on Vercel AI SDK; AI settings rebuilt**
  - ZH: LLM 统一改造为 Vercel AI SDK；AI 配置界面重做
- **Mermaid fullscreen polish; TypeScript upgrade and locale completion**
  - ZH: mermaid 全屏与样式统一；TypeScript / 多语言补全

## v0.2.7 (2026-03-19)

Discovery polish, Feishu notifications, and MCP stability.

> 发现模式完善，飞书通知与 MCP 稳定化。

- **Fixed per-feed auto AI summary toggle**
  - ZH: 修复「AI 自动开启摘要」无法开启
- **Workflows use AI summaries as context; manual retry after failure**
  - ZH: 定时任务上下文改为 AI 摘要文章；失败可手动重试
- **24h discovery auto-run with browser notifications**
  - ZH: 24H 热点发现后台自动运行 + 浏览器通知
- **Dual AI profiles: default + complex model**
  - ZH: AI 调用统一：默认模型 + 复杂模型双配置
- **Feishu notifications with per-feature toggles**
  - ZH: 飞书通知接入（摘要/定时任务/热点分开关）
- **Stable MCP bridge: multi-bot worker, MCP↔Telegram**
  - ZH: MCP 桥接稳定：一 Worker 多 Bot、MCP↔Telegram
- **Local model support; memory-leak and crash fixes**
  - ZH: 本地模型支持；内存泄漏与崩溃修复

## v0.2.3 (2026-02-22) — Store

Store submission node carrying v0.2.2 work.

> 应用商店发布节点（承接 v0.2.2）。

- **Submitted v0.2.2 deliverables to the extension store** — Manifest bump only; no extra feature delta.
  - ZH: 将 v0.2.2 成果提交应用商店 — manifest 升版，无额外功能提交。

## v0.2.2 (2026-02-21)

Report compliance and multi-channel push polish.

> 报告生成合规与多端推送优化。

- **Report generation adjusted for store-policy compliance**
  - ZH: 优化报告生成逻辑，解决商店审核违规
- **Telegram push formatting; browser notification toggle**
  - ZH: 电报推送格式优化；浏览器通知开关
- **Worker report archive plus style/font iteration**
  - ZH: Worker 报告代码存档、样式与字体迭代

## v0.2.1 (2026-02-18) — Milestone

Scheduled workflows; React chat/settings (absorbs long 0.1.x→0.2 gap work).

> 定时任务自动化；聊天与设置页 React 化（含 0.1.x→0.2 长跨度能力）。

- **Scheduled workflows running in the background**
  - ZH: 新增定时任务（后台自动化工作流）
- **Chat rewrite: React + Tailwind, new-tab mode, filters, date grouping**
  - ZH: 聊天模块重构：React + Tailwind、新标签页、过滤与日期分组
- **Mermaid rendering hardened; smaller bundle**
  - ZH: Mermaid 渲染增强；打包体积精简
- **Options page migrated to React + Tailwind**
  - ZH: Option 设置页迁移 React + Tailwind
- **Gap work folded in: discovery, streaming TTS, Telegram, cross-extension push, RSA activation, OPML, flow.html**
  - ZH: 长跨度并入：发现模式、TTS 流式、Telegram、跨扩展推送、RSA 激活、OPML、flow.html

## v0.1.11 (2025-06-19)

0.1.x series close-out and cleanup.

> 0.1.x 系列收官与代码清理。

- **Code cleanup (dead code, logs, whitespace)**
  - ZH: 代码清理（冗余、日志、空白）
- **End of the 0.1.x line**
  - ZH: 0.1.x 系列收官

## v0.1.10 (2025-06-08)

Prompt system adjustments and native Gemini fixes.

> Prompt 体系调整与 Gemini 原生修复。

- **Prompt tuning; hide prompt settings entry**
  - ZH: Prompt 调整优化；隐藏 Prompt 设置入口
- **Fixed native Gemini API calls**
  - ZH: 修复 Gemini 原生 API 调用问题
- **Recommended feeds for more locales**
  - ZH: 推荐订阅源支持多国家语言
- **HTML card generation improvements**
  - ZH: HTML 卡片生成逻辑优化

## v0.1.9 (2025-06-01)

Stability fixes and TXT-format prompts.

> 稳定性修复与 Prompt TXT 格式改造。

- **Memory cleanup fix; HTTP image display errors**
  - ZH: 修复内存清理 bug、HTTP 图片显示报错
- **Help center added; prompt tweaks**
  - ZH: 新增帮助中心；Prompt 调整
- **Prompts moved to TXT for broader adaptability**
  - ZH: Prompt 改造为 TXT 格式，增强适配性
- **Fixed broken context structure**
  - ZH: 修复上下文结构错乱

## v0.1.7 (2025-05-30)

Style/effects follow-up fixes.

> 样式特效收尾修复。

- **Style fixes after 0.1.6 effect removal**
  - ZH: 样式特效修复（0.1.6 去特效后的收尾）

## v0.1.6 (2025-05-28)

Chat effects reduced for performance.

> 聊天特效精简与性能优化。

- **Removed chat visual effects for performance**
  - ZH: 去除聊天模式特效，优化性能
- **Log cleanup and font updates**
  - ZH: 日志清理、字体修改
- **Fixed missing Portuguese strings and card-generation AI errors**
  - ZH: 修复葡萄牙语缺失、生成卡片 AI 错误

## v0.1.5 (2025-04-28) — Milestone

Light theme, HTML preview, and keyword filtering.

> 浅色主题、HTML 预览与关键词过滤。

- **Fixed date-query bugs**
  - ZH: 修复查询日期问题
- **Chat mode fully separated and rebuilt** — AiUtils, XML-tagged context, multi-turn messages, session history.
  - ZH: 聊天模式彻底分离重构 — AiUtils、XML 标签化上下文、多轮消息、会话记录。
- **Light theme overhaul** — Dropped matrix/scanline effects; glass and card styling.
  - ZH: 浅色主题大改版 — 去除数字雨/扫描线，毛玻璃与卡片风格。
- **HTML preview via sandboxed offline iframe snapshots with cache**
  - ZH: HTML 预览（安全 iframe 离线快照 + 缓存）
- **Keyword filtering with tag filters and reset hints**
  - ZH: 关键词过滤（标签过滤、重置提示）
- **Multiple card styles, image export; commands expanded to 15**
  - ZH: 多种卡片风格与图片导出；快捷指令扩至 15 个
- **Trial length set to 5 days; feed management UX polish**
  - ZH: 试用期调整为 5 天；订阅管理交互优化

## v0.1.4 (2025-04-24)

Redeem dialog and full-text read visual fixes.

> 兑换窗口与全文已读视觉修复。

- **Redeem dialog i18n and Gemini call errors**
  - ZH: 修复兑换窗口参数配置多语言、Gemini 调用报错
- **Fixed scroll jump when marking read in full-text mode**
  - ZH: 修复全文模式标记已读时的视觉滚动问题

## v0.1.3 (2025-03-21) — Milestone / Store

Trial period, chat mode, auto-summary, and command palette seeds.

> 试用期、聊天对话模式、自动摘要与快捷指令。

- **Trial period introduced (7→10→5 day iterations)**
  - ZH: 新增试用期概念（7→10→5 天迭代）
- **Conversational chat mode** — Session isolation, context rewrite, streaming fixes, delete chat, chat prompts, model params.
  - ZH: 聊天对话模式 — 会话分离、上下文重构、流式修复、删除对话、聊天 Prompt、模型参数。
- **Background auto-summary (~2s concurrency gap)**
  - ZH: 自动摘要（后台静默，约 2 秒并发间隔）
- **Command shortcuts (prototype → 11 commands)**
  - ZH: 快捷指令（雏形 → 11 个）
- **DeepSeek and OpenRouter model support**
  - ZH: DeepSeek、OpenRouter 模型支持
- **Immersive reading polish; TTS panel and default rate**
  - ZH: 沉浸式阅读完善；TTS 面板与默认语速

## v0.1.2 (2025-01-24) — Milestone / Store

First Chrome Web Store release.

> Chrome 网上应用店首发版本。

- **Dedup fix when 100-item cap broke per-feed uniqueness**
  - ZH: 修复去重问题（100 条限制导致单源去重失败）
- **Single-summary display polish; font and icon fixes**
  - ZH: 优化单条摘要显示；修复字体与图标

## v0.1.1.999 (2024-12-25)

Internal build: full-text loading, date-range queries, reader fixes.

> 内部迭代：全文加载、日期范围查询与阅读 bug 修复。

- **Error hiding and dev/prod log separation**
  - ZH: 错误隐藏与开发/生产日志区分
- **Faster full-text mode loading**
  - ZH: 优化全文模式加载速度与逻辑
- **Date-range queries and search field adjustments**
  - ZH: 按日期范围查询、搜索字段调整
- **Summary modal and immersive reader display fixes**
  - ZH: 修复 summary 弹窗、沉浸式阅读显示 bug
- **Podcast regenerate trigger logic**
  - ZH: 优化播客触发重新生成逻辑

## v0.1.0.999 (2024-12-22)

Internal build: streaming AI, audio download, locale switching.

> 内部迭代：流式 AI、音频下载与多语言切换。

- **Font load, post-summary jitter, and repeat hotkey audio fixes**
  - ZH: 修复字体加载、摘要后抖动、快捷键重复播报
- **Audio download; streaming AI output**
  - ZH: 新增音频下载；AI 输出流式传输
- **Unread count fix; TTS panel download strings**
  - ZH: 修复未读计数；TTS 面板下载翻译
- **Locale switching (Japanese no longer forced by browser locale)**
  - ZH: 多语言切换（修复日语跟随浏览器语言）

## v0.1.0 (2024-12-22) — Milestone

Initial release: RSS subscribe/read, AI summary, and TTS prototype.

> 初始版本：RSS 订阅/阅读、AI 摘要与 TTS 雏形。

- **RSSFlow extension foundation** — RSS subscribe/read, AI summarization, and early TTS playback.
  - ZH: RSSFlow 扩展基础架构 — RSS 订阅与阅读、AI 摘要、TTS 播报雏形。

