<p align="right">
  <strong>简体中文</strong> | <a href="./README_EN.md">English</a>
</p>

# RSSFlow

> 带 AI 能力的本地优先 RSS 阅读器（Chrome / Edge 扩展）

<p align="center">
  <a href="https://chromewebstore.google.com/detail/rssflow-ai-powered-rss-in/mefbfkpippglgoanjcbdjnkelcbdjija">
    <img src="./docs/chrome.svg" width="28" height="28" alt="Chrome" />
    Chrome 应用商店
  </a>
  &nbsp;·&nbsp;
  <a href="https://microsoftedge.microsoft.com/addons/detail/rssflow-aipowered-rss-/khgllclaeabkjgoblcipfpgaejblcelf">
    <img src="./docs/edge.svg" width="28" height="28" alt="Edge" />
    Edge 加载项
  </a>
  &nbsp;·&nbsp;
  <a href="https://rssflow.oinchain.com">
    <img src="./docs/icon.png" width="28" height="28" alt="Site" style="border-radius:6px" />
    产品官网
  </a>
</p>

<p align="center">
  <a href="./CHANGELOG.md">更新日志</a> ·
  <a href="https://rssflow.oinchain.com/changelog">官网 Changelog</a> ·
  <a href="https://rssflow.oinchain.com/help">帮助中心</a> ·
  <a href="https://rssflow.oinchain.com/privacy">隐私政策</a>
</p>

---

## 这个仓库是什么

**RSSFlow-doc** 是产品官网、帮助文档与公开版本说明仓库，不是扩展安装包仓库。

| 内容 | 说明 |
| --- | --- |
| 官网源码 | `website/`（Next.js 静态导出） |
| 帮助文稿 | `help/` |
| 线上静态站 | `docs/`（Cloudflare Pages / GitHub Pages 部署产物） |
| 版本记录 | [CHANGELOG.md](./CHANGELOG.md) |

扩展本体在独立工程维护；安装请走上面的商店链接。

当前扩展版本：**v1.1.5**（2026-08-10）

---

## RSSFlow 做什么

RSSFlow 是浏览器侧边栏里的 RSS 阅读器：订阅源、信息流、沉浸阅读都在本地完成。  
需要时再接你自己的 AI Key，做摘要、对话、定时简报和推送。

默认 **数据留在本机**；报告发布、飞书 / Telegram、MCP 桥接等联网能力按需开启。

---

## 主要能力

### 阅读与订阅
- 侧边栏多视图：信息流 / 日视图 / 标签 / 未读
- 沉浸式阅读页（Zen Reader）：快捷键、目录、主题
- 推荐源（含日语 / 韩语等）与订阅分类管理
- 配套 [SnagFlow](https://snagflow.oinchain.com) 可将网页做成 RSS 一键导入

### AI 预读与对话
- 后台自动摘要、标签与结构化字段
- 多篇文章一起问；回答带可点击引文，能回到原文
- 专家快捷指令（研报、宏观、写作、加密等），也可自定义
- 你自己的模型与 API：OpenAI 兼容、Anthropic、Gemini、DeepSeek、本地模型等

### 发现与知识结构
- 热点发现：近期话题聚类与可视化
- 知识图谱 / Graph 检索，可一键带进定时任务
- 关键词归一化与检索内核统一（聊天 / 发现 / 自动化共用语义）

### 自动化与分发
- 定时任务：单次、链式、并行汇总
- 报告可发布到云端门户或博客通道
- Telegram、飞书 Webhook、浏览器通知
- MCP 桥接：把本地阅读数据接到 Cursor / Claude 等外部工具

### 本地存储
- 扩展侧使用 SQLite（WASM + OPFS）与后台 Worker，适合更重的检索与图谱场景
- 设置、订阅、阅读状态默认本机保存

---

## 最近版本（摘录）

完整 30 个版本见 [CHANGELOG.md](./CHANGELOG.md) 与 https://rssflow.oinchain.com/changelog

| 版本 | 日期 | 要点 |
| :--- | :--- | :--- |
| **v1.1.5** | 2026-08-10 | 检索内核统一、Flow 滚动稳定性、日韩推荐源、语言默认标签 |
| v1.1.4 | 2026-08-06 | 多语言 i18n、db.worker、全文提取 |
| v1.1.1 | 2026-07-28 | 订阅/查询重构、Rspack、SQLite WASM |
| v1.1.0 | 2026-07-15 | V3 聊天、SQLite Worker、Graph 页面 |
| v1.0.0 | 2026-03-24 | 独立阅读器、Zustand 数据层、Vercel AI SDK |

---

## 结构示意

```text
RSS 源 ──► 扩展后台拉取 ──► 本地 SQLite / 阅读状态
                │
                ├─► 侧边栏 / Flow / Reader
                ├─► AI 摘要 / 对话 / 图谱 / 定时任务（你的 API Key）
                ├─► Telegram / 飞书 / 桌面通知（可选）
                ├─► 报告门户 / 博客发布（可选）
                └─► MCP 桥接 → 外部 AI 工具（可选）
```

相关工程（独立仓库或子项目，不在本仓发布安装包）：

- **扩展本体**：Chrome / Edge 商店上的 RSSFlow Reader
- **rssflow_ai_report**：云端报告门户
- **rssflow-mcp-bridge**：MCP 网关
- **SnagFlow**：网页 → RSS 抓取扩展

---

## 官网本地开发

```bash
cd website
npm install
npm run dev
```

生产静态构建：

```bash
cd website
npm run build
# 产物在 website/out/；线上部署目录为仓库根下的 docs/
```

帮助文稿生成（如有需要）：

```bash
cd website
npm run generate-help
```

---

## 安装扩展

1. [Chrome Web Store](https://chromewebstore.google.com/detail/rssflow-ai-powered-rss-in/mefbfkpippglgoanjcbdjnkelcbdjija)
2. [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/rssflow-aipowered-rss-/khgllclaeabkjgoblcipfpgaejblcelf)
3. 打开侧边栏 → 添加订阅源 →（可选）在设置里配置 AI Key

更细的使用说明：https://rssflow.oinchain.com/help

---

## 隐私

阅读数据默认本地存储。只有你主动开启的功能（AI API、推送、报告发布、MCP 等）才会产生对应网络请求。  
详见：https://rssflow.oinchain.com/privacy

---

## 链接

| | |
| --- | --- |
| 官网 | https://rssflow.oinchain.com |
| 更新日志 | [CHANGELOG.md](./CHANGELOG.md) / https://rssflow.oinchain.com/changelog |
| 帮助 | https://rssflow.oinchain.com/help |
| 博客 / 报告示例 | https://blog.oinchain.com |
| 反馈 | Issues 或 Telegram / 邮件（见官网页脚） |

---

## License

文档与本站源码以仓库内声明为准。扩展安装与使用请遵守 Chrome / Edge 商店条款。
