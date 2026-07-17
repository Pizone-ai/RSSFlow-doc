## MCP 桥接 / MCP Bridge

### 中文

MCP 桥接是一项高级功能，能够建立浏览器扩展与外部聊天机器人（如 Telegram、飞书机器人）或您的本地大模型（如 Cursor、Claude 等客户端）之间的安全连接，实现双向互动和数据共享。

**入口：** 设置页面 → "MCP 设置"

**配置指南：**

1. **启用桥接轮询**：开启此开关允许扩展定期拉取外部的任务或交互指令。
2. **Worker 网址**：填写您的 Cloudflare Worker 桥接网关地址。
3. **安全密钥（配对密钥）**：系统会自动为您在本地生成唯一的加密配对密钥。点击“复制”按钮，在与 Telegram 机器人或飞书绑定时提供此密钥完成验证。
4. **飞书事件订阅 Webhook**：系统根据您的 Worker 网址自动生成的地址，用于飞书开放平台的事件订阅接收。

**主要应用场景：**
- **外部 AI 客户端读取数据**：允许 Cursor、Claude 等支持 MCP 协议的本地 AI 工具直接调取并参考您浏览器中的 RSS 订阅内容作为上下文。
- **聊天机器人互动**：您可以通过 Telegram 或飞书机器人发送特定指令，让其远程调用您的 RSSFlow 进行信息搜集或分析。

---

### English

MCP Bridge is a premium feature that establishes a secure connection between your browser extension and external bots (like Telegram or Feishu) or local AI editors (like Cursor or Claude), enabling interactive context sharing and remote commands.

**Access:** Settings → "MCP Settings" in the sidebar.

**Setup Steps:**

1. **Enable Polling**: Allows the extension to fetch remote commands and tasks.
2. **Worker URL**: Enter your Cloudflare Worker bridge address.
3. **Identity Key**: A unique security key generated locally on your device. Use this key to authenticate and pair your Telegram or Feishu bots.
4. **Feishu Webhook**: An automatically generated address used to configure event subscriptions in the Feishu Open Platform.

**Key Use Cases:**
- **Context Sharing**: Allows Cursor or Claude editors to read and use your local RSS articles as context via the MCP protocol.
- **Bot Interactions**: Send remote triggers or commands to RSSFlow through your paired Telegram or Feishu bot.
