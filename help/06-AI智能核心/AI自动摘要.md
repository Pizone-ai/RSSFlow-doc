# AI 自动摘要 / AI Auto-Summary

### 中文

自动 AI 摘要是 RSSFlow Pro 的核心自动化特性。当新文章被系统抓取后，AI 会在后台静默为文章生成摘要，无需人工干涉，为您在主界面提供即时的信息预览。

**后台静默处理：**
1. **自动入队**：新抓取的文章入库后，如果全局“启用 AI 功能”开关打开，且该文章内容足够长，将自动进入后台处理队列。
2. **排队处理**：为保证大模型 API 稳定，系统会自动对文章进行串行依次处理，并在文章之间自动加入适度的延时（通常为 4 秒），以防止触发您的 API 接口频率限制。
3. **完成广播**：AI 摘要生成后将自动保存，并在主界面无缝渲染展示。

**AI 自动生成的摘要维度：**
AI 不仅仅是缩写文章，它会从以下维度对内容进行深层提炼：
- **AI 摘要**：对文章的全文进行精简流畅的总结。
- **AI 观点**：提炼文章里作者的核心论点和主要观点。
- **关键要点**：使用精美的 Emoji 图标将核心事实列表式展现，一目了然。
- **主题标签与分类**：AI 自动判断文章的领域标签（如 `#AI`、`#Technology`）和内容性质（如“新闻”、“访谈”、“行业研报”）。
- **AI 评分**：AI 根据文章的信息量和深度给出的客观评分。
- **AI 优化标题**：AI 生成的更具提炼性、更易读的中文标题。

**卡片 AI 状态指示器：**
在侧边栏文章列表中，每个卡片标题栏右侧都会有一个状态指示器：
- **✦**（亮青色图标）：表示 AI 已经成功为该文章生成了摘要。
- **•**（灰色圆点）：表示该文章无 AI 摘要或正在等待队列处理。
- **悬浮预览**：当您将鼠标悬停在亮青色的 **✦** 图标上时，会弹出一个精美的悬浮气泡，直接显示 AI 提取的分类标签、文章评分、深度摘要和关键要点列表，无需点击即可极速筛选出高价值资讯。

**订阅源的独立开关：**
在设置的“订阅源”页面中，您可以为每个订阅源单独开启或关闭“自动 AI”开关。对于废话较多或价值较低的订阅源，可以随时关闭以节省您的 API Token 消耗。

**前置条件：**
请确保您已在“选项 → AI 设置”中成功配置并测试了 AI 大模型供应商和密钥。如果未进行配置，系统将无法开启自动摘要队列，并在您手动使用 AI 时提示进行配置。

---

### English

Automatic AI Summary is a core automated feature of RSSFlow Pro. When new articles are fetched, the AI engine processes them silently in the background, providing immediate information previews in the main interface.

**Background Silent Processing:**
1. **Auto-Queueing**: Newly fetched articles are queued for AI processing automatically, provided that the global "Enable AI" switch is turned on and the article length meets the minimum requirement.
2. **Sequential Processing**: To prevent hitting API rate limits, the system processes articles serially with a moderate adaptive delay (typically 4 seconds) between items.
3. **Auto-rendering**: Once the summary is ready, it is saved locally and instantly rendered in the interface.

**AI Synthesis Dimensions:**
Rather than simply shortening text, the AI dissects the content across several dimensions:
- **AI Summary**: A concise and readable summary of the entire article.
- **AI Opinions**: Extracts the main arguments or perspectives of the author.
- **Key Points**: A bulleted list representing core facts decorated with emojis.
- **Tags & Categories**: Auto-assigns domain tags (e.g. `#AI`, `#Technology`) and defines the content format (e.g. News, Interview, Research).
- **AI Score**: A numeric rating evaluating the article's information density and depth.
- **AI-Optimized Title**: A clean and readable title optimized by AI.

**Card AI Indicators:**
In the sidebar article list, each card header has a visual state indicator:
- **✦** (Cyan Star): Indicates that the AI summary has been successfully generated.
- **•** (Gray Dot): Indicates no AI summary, or that the article is waiting in the processing queue.
- **Hover Preview**: Hover your cursor over the **✦** star to instantly show a summary bubble displaying assigned tags, AI rating, the full summary, and key bullet points.

**Per-feed AI Toggles:**
In the "Feeds" tab of the settings page, you can toggle the "Auto AI" switch for each subscription independently. Disabling it skips that feed to conserve your API token usage.

**Prerequisites:**
Please ensure that you have configured and successfully tested your AI provider and API keys under "Options → AI Settings". Without a valid AI configuration, the background queue remains paused, and manual triggers will prompt a configuration alert.
