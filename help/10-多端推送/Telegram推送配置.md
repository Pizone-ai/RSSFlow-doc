# Telegram 推送配置 / Telegram Push

### 中文

将 AI 摘要、热点发现与定时任务简报推送到 Telegram 私聊或群组。

## 入口

**设置 → 消息推送设置**

## 推送类型

| 选项 | 说明 |
|------|------|
| 开启 Telegram 推送 | 总开关 |
| 发送文章摘要 | 新摘要生成后即时推送 |
| 发送定时任务报告 | 工作流完成后推送链接与结论（推荐） |
| 发送热点发现通知 | 推送热点 / 趋势分析 |

## 配置步骤

### 1. 创建机器人

1. 在 Telegram 搜索 **@BotFather**  
2. 发送 `/newbot`，按提示设置名称与用户名（用户名以 `bot` 结尾）  
3. 复制返回的 **Bot Token**  

### 2. 获取 Chat ID

- **个人**：用 **@userinfobot**，发送 `/start` 获取数字 ID  
- **群组**：先把机器人拉进群，再用 **@getidsbot** 获取群 ID（通常以 `-` 开头，**负号要保留**）  

### 3. 填入 RSSFlow

1. 填写 Bot Token 与 Chat ID  
2. 勾选需要的推送类型，打开总开关  

### 4. 测试与激活

1. **先**打开与机器人的对话，点击 **Start** 或发送 `/start`  
2. 再点 **发送测试消息**  

> 未 `/start` 时机器人无权给你发消息。

### English

Push summaries, discovery alerts, and workflow briefings to Telegram.

## Access

**Settings → Notifications**

## Toggles

| Option | Purpose |
|--------|---------|
| Enable Telegram Push | Master switch |
| Article summaries | Instant push after AI summary |
| Scheduled briefings | Workflow report + link (recommended) |
| Hot topic alerts | Trend discovery push |

## Setup

1. Create a bot via **@BotFather** (`/newbot`) and copy the **Bot Token**.  
2. Get **Chat ID** with **@userinfobot** (DM) or **@getidsbot** (group; keep the leading `-`).  
3. Paste Token + Chat ID in RSSFlow and enable the types you want.  
4. **Start** the bot chat first (`/start`), then **Send test message**.  
