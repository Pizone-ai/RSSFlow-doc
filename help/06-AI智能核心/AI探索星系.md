# AI 探索星系 / AI Discovery View

### 中文

分析近期文章，聚类热点话题，并以可视化 + 深度研报呈现趋势。

## 布局

左右分栏，中间分隔条可拖拽；位置会记住。

## 左侧：仪表盘与话题宇宙

- **趋势仪表盘**：文章量趋势、源分布、关键词关系、流向等  
- **话题宇宙（3D 气泡，约最多 40 个）**  
  - 气泡越大，关联文章越多  
  - 置信度帮助判断话题是否值得深挖  

## 右侧：深度研报

点击气泡后流式生成分析，常见维度：

1. **现象** — 事实与现状  
2. **逻辑** — 商业 / 技术 / 政策动因  
3. **二阶影响** — 连锁反应  
4. **认知偏差** — 高估 / 低估与偏见  

支持引文悬停预览与跳转原文。

## 刷新与阈值

| 项 | 说明 |
|----|------|
| 刷新频率 | 后台发现间隔（默认约 4 小时） |
| 更新阈值 | 新增多少文章才触发新一轮挖掘 |
| 强制刷新 | 忽略缓存，立即重跑 |

### English

Clusters recent articles into hot topics with charts and deep briefs.

## Layout

Draggable split panes; position is remembered.

## Left: Dashboard & Galaxy

Trend charts plus a 3D topic galaxy (~up to 40 bubbles). Size ≈ volume; confidence badges rank actionability.

## Right: Insight Brief

Click a topic for a structured brief: phenomenon → logic → second-order effects → cognitive mispricing, with citation badges.

## Controls

Refresh interval (default ~4h), new-article threshold, and force refresh.
