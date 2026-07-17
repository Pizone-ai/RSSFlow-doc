# Tag 枚举与范围设定 / Tag Scope

### 中文

自定义 AI 自动分类时可用的标签范围，影响摘要打标、Flow 标签视图与定时任务过滤。

## 入口

**设置 → AI 设置 → 自定义分类标签范围**

## 默认列表

```
#Chinese Economy, #US economy, #EU economy, #UK economy, #Japan economy, #AI, #Business, #Gold, #Oil, #Crypto, #Technology, #Culture, #Other
```

## 作用

| 用途 | 说明 |
|------|------|
| 引导 AI 分类 | 摘要阶段优先从该列表选标签 |
| Flow 标签视图 | 通常只展示列表内标签，界面更干净 |
| 定时任务过滤 | 任务的标签筛选可引用该范围 |

## 内置推荐（可一键添加）

| 方向 | 示例 |
|------|------|
| 宏观经济 | `#MacroEconomy` `#FederalReserve` `#Gold` `#Oil` |
| 投资理财 | `#USStocks` `#A-Shares` `#ValueInvesting` |
| 行业 | `#Business` `#SaaS` `#SupplyChain` |
| 科技 | `#Technology` `#CyberSecurity` `#Semiconductors` |
| AI | `#AI` `#LLM` `#Robotics` `#AISafety` |
| Crypto | `#Bitcoin` `#DeFi` `#Web3` |
| 科学健康 | `#Science` `#Biotech` `#Energy&Climate` |
| 社会文化 | `#Geopolitics` `#History` `#Philosophy` |

## 规范

- 自定义标签以 `#` 开头，英文逗号分隔  
- 点击推荐标签可快速加入（已在列表中会高亮）  
- 标签不宜过多，以免分类发散、增加调用成本  
- 可用 **恢复默认** 一键还原  

### English

Define the tag vocabulary AI may use for classification, Flow tag views, and workflow filters.

## Access

**Settings → AI Settings → Custom Classification Tags**

## Defaults

Same default comma-separated `#tag` list as above.

## Why It Matters

Guides AI labeling, keeps Flow tag views focused, and feeds workflow tag filters.

## Built-in Browser

Eight topic groups (Economics, Investment, Industry, Tech, AI, Crypto, Science, Society) with one-click add.

## Rules

Start with `#`, comma-separated, keep the list focused, restore defaults when needed.
