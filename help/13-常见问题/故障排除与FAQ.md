# 故障排除与 FAQ / Troubleshooting & FAQ

### 中文

#### AI 智能相关问题

**Q: 新文章进来后，为什么没有自动生成 AI 摘要？**
A: 请按照以下步骤进行排查：
1. **总开关**：确认在“AI 设置”页面顶部的“启用 AI 功能”总开关已经开启。
2. **默认模型配置**：确认您的“默认模型 (Basic)”已经成功配置、测试通过，并点击了“设为当前启用”。
3. **订阅源设置**：在“订阅源管理”中，检查该订阅源是否勾选开启了“自动 AI 摘要”功能。如果该源未开启，系统将不会主动为其生成摘要。

**Q: 验证大模型配置时，为什么一直提示测试超时？**
A: 系统设定的测试超时时间为 20 秒。如果超时，通常是因为：
- 填入的 **API 密钥 (API Key)** 存在拼写错误。
- 填入的 **API 接口地址 (API Host)** 无法连接。部分境外大模型服务商（如 OpenAI、Anthropic）在国内直接连网时会遭遇网络屏蔽，您可能需要配置合适的网络环境（如代理服务）或者改用国内的兼容服务商（如 SiliconFlow 硅基流动、火山引擎等）。
- 模型名称不正确。建议点击输入框右侧的刷新按钮自动获取最新的模型列表。

**Q: 点击获取模型列表时提示失败？**
A: 请先仔细检查您的 API 密钥 and 接口地址是否填写正确。对于部分模型服务商，必须先确保输入了有效的密钥并点击“测试”，服务商才会允许我们拉取他们支持的模型名录。

---

#### 订阅源相关问题

**Q: 为什么某些订阅源经常提示更新失败？**
A: 可以在订阅源列表中查看该源具体的错误提示。请确认：
- 该 RSS 订阅源网址是否仍然有效（可以在浏览器中直接访问该网址，看是否能输出标准的 XML/RSS 数据）。
- 部分外网网站（如 TechCrunch、BBC 等）由于网络环境限制，在更新时可能会超时。
- 您可以随时点击列表右侧的“手动同步”按钮重新尝试触发抓取。

**Q: 导入订阅文件（OPML）时提示失败？**
A: 导入前，请确保您上传的文件是符合行业标准的 OPML 格式文件（文件后缀通常为 `.opml` 或 `.xml`），并且文件编码为通用的 UTF-8。

---

#### 消息推送问题

**Q: 配置好之后，Telegram 为什么收不到推送？**
A: 请确认：
- 您的机器人密钥 (Bot Token) 是否准确无误（由 `@BotFather` 发给您的那一长串字符）。
- 接收 ID (Chat ID) 是否正确。如果是群组，请确保群组 ID 前面的负号 `-` 没有被漏掉。
- **最关键的一步**：您必须先在手机上点进您的机器人对话框，点击底部的“开始”或发送一条 `/start` 指令。机器人只有在获得您的主动授权后，才有权限向您推送消息。
- 确认在推送设置中，勾选开启了您希望接收的消息类别。

**Q: 飞书群聊机器人收不到推送？**
A: 请确认：
- Webhook 网址是否完整无缺地复制自飞书群聊中的机器人设置。
- 如果您在飞书后台勾选了“签名校验”，请确保您在 RSSFlow 的安全密钥 (Secret) 输入框中填写了匹配的密钥。如果未开启签名校验，请确保 RSSFlow 的 Secret 输入框留空。

---

#### 自动化定时任务

**Q: 定时任务时间到了，为什么没有自动执行？**
A: 请确认：
- 该定时任务右侧的“启用开关”处于开启状态（显示为蓝色激活态）。
- **模型配置**：定时任务在生成深度简报时，默认使用的是“复杂模型 (Advanced)”。请确保您已经在 AI 设置中配置了此模型。
- **条件过滤**：您的过滤条件是否设置得过于严苛（例如限制了极高的评分或非常罕见的标签），导致在规定时间内系统没有抓取到任何符合条件的文章。
- 定时任务运行日志中是否有具体的红字报错信息。
- 如果您使用的是非激活版本，系统限制最多同时启用 2 个活跃任务。

**Q: 定时任务运行成功了，但推送的消息内容是空的？**
A: 请确认：
- 您在此定时任务的配置中，是否正确关联并启用了对应的推送通道（Telegram 或飞书）。
- 点击定时任务的“执行历史”，查看最近一次运行的“报告预览”，确认大模型是否因为无网络连接或模型超额而生成了空白报告。

---

#### 基础数据与恢复

**Q: 如果我想清空当前的配置，如何恢复默认设置？**
A: 在各个功能面板（如 AI 设置中的标签范围设定）的右侧，均有“恢复默认值”按钮，这会重置该区域的配置。如果您希望重置整个扩展的数据，可以通过浏览器的扩展程序管理页面，将 RSSFlow 移除并重新安装。

**Q: 我的阅读历史、AI 摘要和密钥数据存储在哪里？会泄露吗？**
A: RSSFlow Pro 采用本地优先（Local-First）的安全架构。除了您自己配置的云发布门户，所有核心数据都**百分之百存储在您自己的电脑浏览器本地**：
- 设置项、任务清单、激活状态等保存在浏览器本地配置中（Local Storage）。
- 下载的文章原文、生成的 AI 摘要、标签和图谱节点保存在您本地的浏览器数据库中（IndexedDB）。
- 数据绝不会上传至任何第三方服务器。具体安全详情请参阅 [数据隐私说明](file:///D:/github/RSSFlow-doc/help/14-隐私与安全/数据隐私说明.md)。

---

### English

#### AI Configuration

**Q: Why are AI summaries not automatically generating for new articles?**
A: Please check the following:
1. **Master Switch**: Ensure "Enable AI Features" is turned on at the top of the AI Settings page.
2. **Base Model**: Verify that your "Base Model (Basic)" profile is correctly configured, tested, and set as active.
3. **Feed Settings**: Go to Feed Management and confirm that "Auto AI Summary" is enabled for that specific feed. If a feed is not configured to auto-summarize, the queue will skip it.

**Q: "Validate & Save" connection test keeps timing out?**
A: The connection timeout limit is 20 seconds. If a test fails:
- Double-check that your **API Key** is correct.
- Ensure the **API Host** address is accessible. Certain global providers (such as OpenAI and Anthropic) might be restricted in your region. You may need to route the connection through a local proxy or switch to a compatible local aggregator (e.g., SiliconFlow, OpenRouter).
- Verify the **Model Name** matches your provider's official model catalog code. You can click the refresh button to load available models automatically.

**Q: Clicking the refresh button fails to load the model list?**
A: Ensure your API Key and API Host are filled in correctly first. Some providers require a basic connection check before they expose their model catalog.

---

#### Feed Management

**Q: Why do some of my feeds consistently show update errors?**
A: You can inspect specific error messages directly in your feed list. Please verify:
- The RSS feed URL is still active and online (try visiting the link directly in your browser to see if it displays clean XML/RSS data).
- The host website isn't blocking extension scrapers or experiencing downtime.
- You can manually click the "Sync" button next to any feed to force an update check immediately.

**Q: Importing a subscription file fails?**
A: Make sure you are uploading a valid OPML file format (typically ending in `.opml` or `.xml`) encoded in UTF-8.

---

#### Push Channels

**Q: I configured Telegram push, but I'm not receiving any notifications?**
A: Please verify:
- The Bot Token is copied exactly from your chat with `@BotFather`.
- The Chat ID is correct. For group chats, ensure the negative prefix `-` is included.
- **Crucial Step**: You must open a direct chat with your bot and click **Start** (or send `/start`) first. Bots cannot send messages to users who haven't initialized them.
- Check that the specific notification toggles (summaries, briefings) are turned on under settings.

**Q: Feishu/Lark group bot notifications are not showing up?**
A: Please verify:
- The Webhook URL is copied completely from the Feishu group bot settings.
- If "Signature Verification" is turned on in Feishu, make sure you paste the matching signature key into RSSFlow's **Secret** field. If signature verification is off, leave the Secret field empty.

---

#### Automation & Workflows

**Q: Why is my scheduled automation task not executing at the set time?**
A: Check the following configurations:
- Ensure the task toggle switch on the task list is active (turns blue).
- **Advanced Model**: Automation briefs use the "Advanced Model" profile by default. Ensure this profile is properly set up in AI Settings.
- **Filter Rules**: Verify that your search or rating filters aren't so strict that they exclude all articles from the execution window.
- Check the task execution logs in the history panel for error outputs.
- If you are on an unactivated version, the extension limits you to a maximum of 2 active concurrent scheduled tasks.

**Q: My scheduled task runs successfully, but the pushed message content is empty?**
A: Check:
- Ensure you have linked and enabled the push channel (Telegram/Feishu) inside that specific task's settings.
- Click "Execution History" and preview the report. Verify if the model failed to generate text due to rate limits or connectivity issues.

---

#### Troubleshooting & Backups

**Q: How do I clear configurations and restore factory settings?**
A: Individual panels (such as AI settings or tag lists) feature a "Restore Defaults" button. If you wish to wipe the entire database and start fresh, we recommend removing the RSSFlow extension from your browser and installing it again.

**Q: Where is my personal data stored? Is it secure?**
A: RSSFlow Pro operates on a Local-First privacy model. All core data is stored **exclusively on your local machine**:
- App preferences, credentials, and automation tasks are saved in Local Storage.
- Article text, generated AI summaries, and the Topic Galaxy nodes are stored in your local browser database (IndexedDB).
- No data is uploaded to third-party servers. For more details, see our [Privacy Statement](file:///D:/github/RSSFlow-doc/help/14-隐私与安全/数据隐私说明.md).
