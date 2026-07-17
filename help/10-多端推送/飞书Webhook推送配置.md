# 飞书 Webhook 推送配置 / Feishu Push

### 中文

通过配置飞书自定义群机器人，您可以将 RSSFlow 自动生成的文章摘要、热点趋势分析以及定时任务生成的深度阅读简报，实时推送到您所在的飞书群聊中，实现团队或个人的快捷资讯追踪。

**配置入口：** 设置页面 → 侧边栏的“消息推送设置”标签页。

**推送选项说明：**
您可以勾选开启以下几种推送类型：
- **开启飞书推送**：飞书消息推送的总开关。
- **发送文章摘要**：新文章在后台自动生成 AI 摘要后，立即把摘要内容发送到群里。
- **发送定时任务报告**：当您的自动化定时任务运行完毕并生成简报时，自动将报告网页链接和结论发送到群里（强烈推荐开启）。
- **发送热点发现通知**：当系统自动评估出最近 24 小时的热门话题和趋势变化时，自动将热点分析推送给您。

**分步配置指南：**

1. **第一步：在飞书中创建群机器人**
   - 进入您希望接收通知的飞书群聊中。
   - 点击群聊右上角设置图标（群设置），选择 **“群机器人”**。
   - 点击 **“添加机器人”**，然后选择 **“自定义机器人”**。
   - 为机器人设置一个可爱的头像和名称。
   - 勾选同意协议后，系统会生成一个唯一的 **Webhook 地址 (Webhook URL)**，点击将其复制下来。

2. **第二步：设置安全校验（可选，推荐）**
   - 为了防止他人盗用您的机器人，可以在配置项中勾选 **“安全设置 - 签名校验”**。
   - 勾选后，飞书会生成一串签名密钥 (Secret)，请将其复制。

3. **第三步：在 RSSFlow 中填写配置**
   - 将第一步获取的 **Webhook 地址** 粘贴到 Webhook 文本框中。
   - 如果您启用了安全校验，将第二步复制的 **Secret 密钥** 粘贴到对应输入框中（未开启安全设置则留空即可）。
   - 选择您需要的推送消息类型，并开启“飞书推送总开关”。

4. **第四步：发送测试消息**
   - 点击“发送测试消息”按钮。如果配置正确，您所在的飞书群里会立刻收到一条测试推送消息，显示连接成功。

*注：飞书推送与 Telegram 推送完全独立，您可以同时开启两个渠道，将不同的文章分类推送给不同的接收平台。*

---

### English

By setting up a Feishu custom group bot, you can push AI article summaries, trending hot topics, and scheduled workflow briefings directly to your Feishu group chats.

**Access:** Settings page → "Notifications" tab in the sidebar.

**Notification Toggles:**
Choose what kind of content you want to push to Feishu:
- **Enable Feishu Push**: The master switch for Feishu group notifications.
- **Push Article Summaries**: Sends new article summaries to the group as soon as they are processed.
- **Push Scheduled Briefings**: Sends the summary and web link of your automation workflows as soon as they run successfully (highly recommended).
- **Push Hot Topic Alerts**: Delivers trending topic analysis reports compiled from recent article collections.

**Step-by-Step Guide:**

1. **Step 1: Create a Custom Bot in Feishu**
   - Open the Feishu group chat where you want to receive notifications.
   - Go to group Settings and select **"Group Bots"**.
   - Click **"Add Bot"** and choose **"Custom Bot"**.
   - Assign a name and custom icon to your bot.
   - Read and accept terms, then copy the generated **Webhook URL**.

2. **Step 2: Set Up Security Verification (Optional, Recommended)**
   - To secure your webhook from unauthorized triggers, check **"Security Settings - Signature Verification"** in the bot settings.
   - Feishu will generate a security key (Secret). Copy this key.

3. **Step 3: Save Configurations in RSSFlow**
   - Paste the **Webhook URL** into the webhook address field.
   - If signature verification is enabled, paste your **Secret** key into the password field (otherwise, leave it blank).
   - Select the notification types you want and toggle the "Feishu Push" master switch.

4. **Step 4: Test Your Connection**
   - Click "Send Test Message". If configured correctly, your Feishu group will immediately receive a success notification.

*Note: Feishu and Telegram notifications are fully independent. You can activate both channels simultaneously to stream insights to different platforms.*
