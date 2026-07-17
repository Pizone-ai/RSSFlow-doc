# Telegram 推送配置 / Telegram Push

### 中文

通过配置 Telegram 机器人，您可以将 RSSFlow 自动生成的文章摘要、热点趋势分析以及定时任务生成的深度阅读简报，实时推送到您的手机端。

**配置入口：** 设置页面 → 侧边栏的“消息推送设置”标签页。

**推送选项说明：**
您可以自由勾选开启以下几种推送类型：
- **开启 Telegram 推送**：消息推送的总开关。
- **发送文章摘要**：每当有新文章在后台自动生成 AI 摘要后，立即把摘要内容发送给您（适合重点资讯频道的即时提醒）。
- **发送定时任务报告**：当您的自动化定时任务运行完毕并生成简报时，自动将报告网页链接和结论发送给您（强烈推荐开启）。
- **发送热点发现通知**：当系统自动评估出最近 24 小时的热门话题和趋势变化时，自动将热点分析推送给您。

**分步配置指南：**

1. **第一步：创建您专属的 Telegram 机器人 (Bot)**
   - 打开 Telegram 软件，在搜索框中搜索官方机器人助手 **`@BotFather`**。
   - 向它发送聊天指令 `/newbot`。
   - 按照提示为您的机器人设置一个**显示名称**以及一个**唯一用户名**（用户名必须以 `bot` 结尾，例如 `my_rssflow_bot`）。
   - 创建成功后，`@BotFather` 会发给您一长串 API 密钥（即 **Bot Token**），请复制并保存好。

2. **第二步：获取您的接收 ID (Chat ID)**
   - **如果您想推送到个人对话**：
     - 在 Telegram 中搜索接收 ID 获取助手 **`@userinfobot`**，点击开始（`/start`），它会立刻回复您一串纯数字的 ID，这就是您的个人 Chat ID。
   - **如果您想推送到群组或频道**：
     - 先将您刚刚创建的机器人（第一步中的 Bot）拉进该群组中。
     - 在群组中拉入助手 **`@getidsbot`**，它会自动输出该群组的 ID（通常是以负号 `-` 开头的一串数字，请务必连同负号一起复制）。

3. **第三步：在 RSSFlow 中填写配置**
   - 将第一步获取的 **Bot Token** 填入密码输入框中。
   - 将第二步获取的 **Chat ID** 填入接收 ID 输入框中。
   - 勾选您希望接收的通知类型，并打开“开启 Telegram 推送”总开关。

4. **第四步：发送测试与激活**
   - 点击“发送测试消息”按钮。如果配置正确，您的手机 Telegram 应该会立刻收到一条测试推送消息。
   - *（提示：在发送测试前，请务必先点进您自己的机器人对话框中，点击底部的“开始”或发送 `/start` 激活机器人，否则机器人没有向您发送消息的权限）。*

---

### English

By setting up a Telegram Bot, you can push AI article summaries, trending hot topics, and scheduled workflow briefings directly to your Telegram chat or group in real-time.

**Access:** Settings page → "Notifications" tab in the sidebar.

**Notification Toggles:**
Customize what kind of content you want to receive:
- **Enable Telegram Push**: The master switch for Telegram notifications.
- **Push Article Summaries**: Sends the summary of a new article instantly once the background AI queues process it.
- **Push Scheduled Briefings**: Sends the summary and web link of your automation workflows as soon as they run successfully (highly recommended).
- **Push Hot Topic Alerts**: Delivers trending topic analysis reports compiled from recent article collections.

**Step-by-Step Guide:**

1. **Step 1: Create a Telegram Bot**
   - Search for **`@BotFather`** in Telegram.
   - Send the `/newbot` command to initiate creation.
   - Follow the instructions to give your bot a **Display Name** and a **Username** (the username must end with "bot", e.g., `my_rssflow_bot`).
   - Copy the API token (known as the **Bot Token**) provided in the success message.

2. **Step 2: Get Your Chat ID**
   - **For Personal Notifications**:
     - Search for **`@userinfobot`** in Telegram, and send `/start`. It will reply with a string of numbers—this is your personal Chat ID.
   - **For Group Notifications**:
     - Add your newly created bot to the target group.
     - Add **`@getidsbot`** to the group temporarily. It will output the group's Chat ID (typically a string starting with a minus sign `-`, make sure to copy the negative sign as well).

3. **Step 3: Save Configurations in RSSFlow**
   - Paste your **Bot Token** into the token field.
   - Enter your **Chat ID** into the receiver ID field.
   - Toggle on "Enable Telegram Push" and select the notification types you want.

4. **Step 4: Test and Activate**
   - Click "Send Test Message". If configured correctly, your bot will send a test message to your Telegram app.
   - *(Note: Before clicking test, make sure you open the chat with your bot and click **Start** or send `/start` to authorize it to message you).*
