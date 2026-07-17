# 标签范围设定 / Tag Scope

### 中文

**配置位置：** 选项页中的“AI 设置” → “高级设置” → “自定义分类标签范围”输入框。

**默认标签列表：**
```
#Chinese Economy, #US economy, #EU economy, #UK economy, #Japan economy, #AI, #Business, #Gold, #Oil, #Crypto, #Technology, #Culture, #Other
```

**为什么设定标签范围？**
- **引导 AI 分类**：AI 自动为新文章划分领域时，会优先参考该列表中的标签。这样可以让 AI 按照您设定的主题框架进行归纳。
- **构建个人分类视图**：仅在这个列表中的标签才会在您的信息流（Flow）标签分类视图中显示，有助于保持您的阅读空间干净整洁。
- **任务过滤依据**：定时自动任务中的“标签过滤器”可以直接引用这个范围，方便一键批量过滤。

**内置标签推荐浏览器（8 大热门方向）：**
为了方便您快速构建分类框架，系统内置了 8 个主流方向的常用标签供您一键选用：

| 分类 | 推荐标签示例 |
|------|---------|
| Economics 宏观经济 | #MacroEconomy (宏观经济), #FederalReserve (美联储), #Gold (黄金), #Oil (原油) |
| Investment 投资理财 | #USStocks (美股), #A-Shares (A股), #ValueInvesting (价值投资) |
| Industry 行业分析 | #Business (商业), #SaaS (软件服务), #SupplyChain (供应链) |
| Tech & Digital 科技数码 | #Technology (科技), #CyberSecurity (网络安全), #Semiconductors (半导体) |
| AI & Future 智能未来 | #AI (人工智能), #LLM (大语言模型), #Robotics (机器人), #AISafety (AI安全) |
| Crypto & Web3 加密科技 | #Bitcoin (比特币), #DeFi (去中心化金融), #Web3 |
| Science & Health 科学健康 | #Science (科学), #Biotech (生物技术), #Energy&Climate (能源与气候) |
| Society & Culture 社会文化 | #Geopolitics (地缘政治), #History (历史), #Philosophy (哲学) |

**使用小贴士：**
- **快速添加**：点击下方浏览器中的标签，它会自动填入上方的配置框中（蓝色高亮表示该标签已在您的列表中）。
- **格式规范**：如果您添加自定义标签，请保证以英文井号 `#` 开头，并使用英文逗号进行分隔。
- **按需设定**：设定过多的分类标签可能会让 AI 在归类时产生犹豫，导致调用流量有所增加。建议根据自己的关注领域精简配置。

---

### English

**Location:** Options page → "AI Settings" → "Advanced Settings" → "Custom Classification Tags" text field.

**Default Tags:**
```
#Chinese Economy, #US economy, #EU economy, #UK economy, #Japan economy, #AI, #Business, #Gold, #Oil, #Crypto, #Technology, #Culture, #Other
```

**Why Configure Tags?**
- **Guide AI Classification**: AI references this list when automatically categorizing new articles. This shapes the AI's taxonomy around your areas of interest.
- **Personalized Grouping**: Only tags from this list appear in your Flow View tags category. This ensures a clean and clutter-free reading environment.
- **Workflow Filters**: The tag filters in your automated workflows pull from this list for easy selection.

**Built-in Tag Browser (8 Main Topics):**
To help you set up your reading structure, the system provides suggested tags across 8 major domains:

| Category | Recommended Tags |
|----------|------------------|
| Economics | #MacroEconomy, #FederalReserve, #Gold, #Oil |
| Investment | #USStocks, #A-Shares, #ValueInvesting |
| Industry | #Business, #SaaS, #SupplyChain |
| Tech & Digital | #Technology, #CyberSecurity, #Semiconductors |
| AI & Future | #AI, #LLM, #Robotics, #AISafety |
| Crypto & Web3 | #Bitcoin, #DeFi, #Web3 |
| Science & Health | #Science, #Biotech, #Energy&Climate |
| Society & Culture | #Geopolitics, #History, #Philosophy |

**Tips:**
- **Quick Add**: Simply click any tag in the browser to append it to your list (highlighted in blue means it is already selected).
- **Formatting**: When adding custom tags, make sure they start with `#` and are separated by commas.
- **Keep it Focused**: Adding too many tags might make categorization less distinct and slightly increase API usage. It is best to stick to your actual areas of interest.
