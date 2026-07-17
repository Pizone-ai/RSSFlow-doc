# 飞书 Webhook 推送配置 / Feishu Push

### 中文

将 AI 摘要、热点发现与定时任务简报推送到飞书群聊。可与 Telegram 同时开启，互不影响。

## 入口

**设置 → 消息推送设置**

## 推送类型

| 选项 | 说明 |
|------|------|
| 开启飞书推送 | 总开关 |
| 发送文章摘要 | 新摘要生成后推到群 |
| 发送定时任务报告 | 工作流完成后推送链接与结论（推荐） |
| 发送热点发现通知 | 推送热点 / 趋势分析 |

## 配置步骤

### 1. 创建群机器人

1. 打开目标飞书群 → **群设置 → 群机器人 → 添加机器人 → 自定义机器人**  
2. 设置名称 / 头像，同意协议后复制 **Webhook URL**  

### 2. 安全校验（可选，推荐）

开启 **签名校验** 时，复制飞书生成的 **Secret**。未开启则 RSSFlow 的 Secret **留空**。

### 3. 填入 RSSFlow

1. 粘贴 Webhook URL  
2. 按需填写 Secret  
3. 勾选推送类型并打开总开关  

### 4. 测试

点击 **发送测试消息**，群内应立刻收到测试通知。

### English

Push summaries, discovery alerts, and workflow briefings to a Feishu group. Independent from Telegram.

## Access

**Settings → Notifications**

## Toggles

Master switch, article summaries, scheduled briefings, and hot-topic alerts.

## Setup

1. Create a **Custom Bot** in the Feishu group and copy the **Webhook URL**.  
2. Optionally enable **signature verification** and copy the **Secret** (leave blank if off).  
3. Paste URL / Secret in RSSFlow and enable the notification types you want.  
4. **Send test message**.  
