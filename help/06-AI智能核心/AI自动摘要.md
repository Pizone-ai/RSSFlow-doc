# AI 自动摘要 / AI Auto-Summary

### 中文

新文章入库后，AI 可在后台自动生成摘要与结构化字段，供侧边栏预览、聊天、定时任务等能力复用。

## 后台流程

1. **入队**：全局 **启用 AI 功能** 已开，且文章足够长时，自动进入处理队列。
2. **串行处理**：按队列依次生成，文章之间留适度间隔（约 4 秒），降低 API 限流风险。
3. **落库展示**：完成后写入本地，主界面卡片自动更新。

## 生成内容

| 维度 | 说明 |
|------|------|
| 摘要 | 全文精炼总结 |
| 观点 | 作者核心论点 |
| 要点 | 列表化关键事实（常带 emoji） |
| 标签与类型 | 领域标签（如 `#AI`）与内容性质 |
| 评分 | 信息密度 / 深度评分 |
| 优化标题 | 更易扫读的标题（如适用） |

## 卡片状态

| 指示 | 含义 |
|------|------|
| **✦** | 已有 AI 摘要；悬停可预览标签、评分、摘要与要点 |
| **•** | 无摘要或排队中 |

## 按源开关

在 **设置 → 订阅源** 可为每个源单独开关 **Auto AI**。低价值源可关闭以节省 Token。

## 前置条件

在 **设置 → AI 设置** 完成默认模型配置，并 **设为当前启用**。未配置时队列不会运行，手动触发也会提示配置。

### English

After articles are fetched, AI can generate summaries and structured fields in the background for previews, chat, and workflows.

## Pipeline

1. **Queue** when global AI is enabled and the article is long enough.
2. **Process serially** with a short delay (~4s) between items to reduce rate limits.
3. **Save locally** and refresh the UI when ready.

## What Is Generated

| Field | Purpose |
|-------|---------|
| Summary | Concise full-article recap |
| Opinions | Author’s main arguments |
| Key points | Bulleted facts |
| Tags / type | Domain tags and content type |
| Score | Density / depth score |
| Optimized title | Cleaner title when applicable |

## Card Indicators

| Icon | Meaning |
|------|---------|
| **✦** | Summary ready; hover for tags, score, summary, bullets |
| **•** | Missing or still queued |

## Per-feed Toggle

**Settings → Feeds → Auto AI** per subscription. Disable noisy feeds to save tokens.

## Prerequisites

Configure and **activate** the Basic model under **Settings → AI Settings**. Without it, the queue stays paused.
