# MCP 桥接 / MCP Bridge

### 中文

在浏览器扩展与外部机器人（Telegram / 飞书）或本地 AI 客户端（Cursor、Claude 等）之间建立安全桥接，共享上下文与远程指令。

## 入口

**设置 → MCP 设置**

## 配置

1. **启用桥接轮询** — 定期拉取外部任务 / 指令  
2. **Worker 网址** — Cloudflare Worker 网关地址  
3. **安全密钥** — 本地生成的配对密钥，绑定时复制使用  
4. **飞书事件 Webhook** — 由 Worker 地址推导，用于飞书事件订阅  

## 场景

- 本地 AI 工具经 MCP 读取 RSS / 摘要作为上下文  
- 通过机器人远程触发检索或分析  

### English

Secure bridge between the extension and external bots or local AI clients (Cursor, Claude) for context sharing and remote commands.

## Access

**Settings → MCP Settings**

## Setup

1. Enable polling  
2. Worker URL  
3. Identity / pairing key (generated locally)  
4. Feishu event webhook (derived from Worker URL)  

## Use Cases

MCP clients reading local RSS context; bot-driven remote triggers.
