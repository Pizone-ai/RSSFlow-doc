# RSSFlow - AI 驱动的跨维度智能情报中心

RSSFlow (原 RssFlowPlus) 是一款专为信息深度消费者打造的现代 Chrome RSS 阅读器。它通过将传统的 RSS 订阅与前沿的 AI 技术（包括本地 LLM 支持）深度融合，重塑您的信息获取与处理逻辑。

## 🌟 核心特性

### 1. 跨维度阅读体验
- **多维度视图系统**
  - **All View**: 极简信息流，快速扫描。
  - **DayFlow**: 按日期智能分组，清晰复盘每日资讯脉络。
  - **TagFlow**: 基于 AI 语义标签的主题化探索。
  - **Favorites**: 核心知识的持久化沉淀。
- **极致流动感**
  - 基于 IndexedDB 的高性能本地架构，支持数万条目。
  - 虚拟列表与图片延时加载，丝滑滚动。
  - 双索引（Dual-Index）查询优化，毫秒级响应。

### 2. AI 深度赋能 (Privacy First)
- **全模型生态支持**
  - **云端**: 原生支持 OpenAI (GPT-4o/o1), Gemini, DeepSeek, SiliconFlow。
  - **本地 (Local AI)**: 完美适配 **Ollama**，支持 `Llama 3`, `Gemma` 等本地模型，确保敏感数据不出本地。
- **MCP (Model Context Protocol)**
  - 支持集成外部工具和服务，让 AI 具备更广阔的上下文处理能力。
- **智能摘要与洞察**
  - 自动提取核心观点、关键信息，并提供多维度价值评分。
- **V2 对话系统**
  - **引用追踪**: 对话内容与原文精准关联，支持点击跳转。
  - **专业指令集**: 11+ 套预设指令（文章创作、商业洞察、学术分析）。
  - **智能 UI**: 沉浸式 HTML 卡片预览，支持 Mermaid 图表与 Katex 公式。

### 3. AI 发现模式 (Discovery)
- **话题星系 (Topic Galaxy)**: 采用 ECharts 实现的可视化话题图谱，直观发现信息热点与关联。
- **深度分析层**: 对订阅源进行健康度、更新频率及内容分布的 360 度剖析。

### 4. 自动化与播客
- **智能流自动化**: 基于事件触发的 AI 过滤、总结与推送任务。
- **个人播客系统**: 
  - 集成 Azure TTS 与本地语音引擎，一键转为高品质音频。
  - 现代化 React 播放器，支持倍速控制与后台播放。
- **多渠道推送**: 集成 Telegram Bot，实现关键情报的主动触达。

### 5. 极客细节
- **全键盘操作**: 经典的 J/K 导航模式。
- **全语种覆盖**: 界面原生支持 12 种语言（中、英、日、法、德、意、俄、韩、西、语、印、阿）。
- **木鱼模式**: 标记已读时的禅意交互，提升阅读心流。

## 🛠️ 技术实现

### 现代前端栈
- **核心**: React 18 + TypeScript (严格类型守卫)
- **样式引擎**: **Tailwind CSS 4** + PostCSS 8 (极致性能与暗色模式适配)
- **动画**: Framer Motion
- **可视化**: ECharts 5 + WordCloud
- **内容引擎**: Streamdown (流式 Markdown) + Katex + Mermaid
- **构建**: Webpack 5 + Babel

### 目录结构概览
```
RSSFlow/
├── src/
│   ├── components/       // 模块化 UI 组件
│   │   ├── chat/        // V2 对话系统
│   │   ├── discovery/   // 话题星系可视化
│   │   ├── podcast/     // 沉浸式音频组件
│   ├── services/         // 核心逻辑层 (AI, DB, Automation)
│   ├── i18n/            // 12 国语言包
│   └── background.ts     // Service Worker 后台任务
├── docs/                 // 详细功能设计与协议文档
└── scripts/              // 开发辅助工具
```

## 🚀 开发与安装

### 环境准备
1. 安装依赖: `npm install`
2. 预构建提示词: `npm run build:prompts`

### 构建指令
- **开发模式**: `npm run dev` (支持自动监听文件变化)
- **生产构建**: `npm run build`

### 安装步骤
1. 打开 Chrome 扩展管理页面 (`chrome://extensions/`)。
2. 开启 "开发者模式"。
3. 点击 "加载已解压的扩展程序"，选择项目下的 `dist` 目录。

## 📜 许可证

[MIT](https://choosealicense.com/licenses/mit/)
