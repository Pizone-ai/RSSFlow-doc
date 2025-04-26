# RssFlowPlus Chrome Extension

RssFlow 是一个浏览器 RSS 阅读器扩展，专注于提供流畅的RSS阅读体验和智能的内容处理。它采用 TypeScript 开发，具有模块化的架构设计，并集成了多个 AI 服务来增强内容理解。通过先进的对话聊天模式和快捷指令系统，提供了更智能、更有效的内容交互方式,同时也支持语音播客功能，支持针对日期或者某个标题生成语音播客。

## 核心特性

### RSS 管理与阅读
- **订阅管理**
  - 一键添加 RSS 源
  - 订阅源自动更新检测
  - 订阅源级别自动摘要开关，接收到新文章时候，自动生成AI摘要。
- **阅读体验**
  - 自适应阅读视图，侧边栏支持宽度自适应
  - 支持全文/摘要切换
  - 已读/未读状态同步
  - 历史记录管理
  - 快捷键导航操作（双击鼠标左键标记为已读、N下一篇、M标记为marked、V标记为已读）
- **内容管理**
  - 按日期范围查询文章
  - 内容删除与清理
  - 文章保留期限设置

### 智能阅读体验
- **多视图模式**
  - All View: 展示所有未读文章
  - DayFlow: 按日期智能分组
  - TagFlow: 基于 AI 标签分类
  - Marked view: 收藏内容管理
- **阅读增强**
  - 支持全文/摘要视图切换
  - 木鱼模式(标记已读时播放禅音)
  - 无限滚动与虚拟列表
  - 响应式布局适配

### AI 驱动
- **多引擎支持**
  - OpenAI 格式，只要支持openai格式的都可以进行配置
  - Google Gemini
  - SiliconFlow
  - DeepSeek
- **智能处理**
  - 自动生成文章摘要
  - 关键信息提取
  - 观点分析与评分
  - 智能标签分类
- **对话式交互**
  - 基于文章内容的智能对话
  - 多轮对话历史记录，基于摘要信息用户可以进行提问或发送指定指令
  - 快捷指令(文章创作、自媒体选题、风险评估、财经日报、外汇市场评估等)
  - 自定义 AI 参数设置

### 语音与多媒体
- **语音播客功能**
  - 支持自定义提示词生成播客，及语音朗读
  - 多种语音风格选择
  - 语速与音调调整
  - 朗读进度控制
  - 后台播放支持


### 多语言与本地化
- **多语言支持**
  - 界面支持多种语言(中文、英文、日文等12种语言)
  - 内容翻译功能（根据界面语言，摘要和快捷指令语言都与界面语言保持一致）
  - 本地化阅读体验
  - 区域性内容适配（不同的语言，推荐不同的订阅源）

### 高性能架构
- **数据处理**
  - IndexedDB 高性能存储
  - 文章内容懒加载
  - 智能缓存机制
  - 异步处理优化
- **后台服务**
  - 自动订阅源更新
  - 智能重试机制
  - Service Worker 持久化

## 技术实现

### 前端技术
- TypeScript + Chrome Extension APIs
- 模块化 CSS (支持深色模式)
- Material Design Icons
- WebWorkers 多线程处理

### 核心服务
```
services/
  ├── articleManager.ts    // 文章数据管理
  ├── rssManager.ts       // RSS 源处理
  ├── settingsManager.ts  // 用户配置管理
  ├── alarmManager.ts     // 定时任务处理
  ├── unreadCountManager.ts // 未读计数维护
  ├── activationService.ts // 激活服务
  ├── promptManager.ts     // 提示词与快捷指令管理
  ├── ttsManager.ts       // 语音播报管理
  └── summaryQueue.ts     // AI 摘要队列
```

### 交互功能
- **对话式聊天**
  - 基于文章内容的智能对话
  - 上下文感知回复
  - 支持 Markdown 格式输出
  - 聊天历史记录保存
  
- **快捷指令系统**
  - 预设指令模板(公众号文章、风险洞察等)
  - 一键触发复杂 AI 任务
  - 自定义指令参数
  - 上下文感知处理

- **快捷键操作**
  - 文章导航: J (下一篇), K (上一篇)
  - 文章操作: M (标记已读/未读), S (收藏/取消收藏), O (打开原文链接), E (展开/折叠全文)
  - 视图切换: 1 (全部文章), 2 (收藏), 3 (DayFlow), 4 (TagFlow) 
  - 功能操作: R (刷新订阅), F (搜索), Esc (关闭弹窗)
  - 自定义快捷键: 可在设置页面自定义所有操作的快捷键

### 工具链
- Webpack 5 构建优化
- 自动化字体内联
- 多语言国际化支持
- 错误追踪与日志

## 开发指南

### 环境准备
1. 克隆仓库
```bash
git clone https://github.com/yourusername/RssFlowPlus.git
```

2. 安装依赖
```bash
cd RssFlowPlus
npm install
```

3. 开发构建
```bash
# 开发模式
npm run dev

# 生产构建
npm run build
```

### 目录结构
```
RssFlowPlus/
├── src/
│   ├── background.ts     // 后台服务
│   ├── sidebar.ts        // 侧边栏界面
│   ├── options.ts        // 设置页面
│   ├── components/       // UI 组件
│   │   ├── FlowSummaryModal.ts
│   │   └── SummaryModal.ts
│   ├── services/         // 核心服务
│   ├── i18n/            // 多语言支持
│   ├── utils/           // 工具函数
│   └── types/           // 类型定义
├── dist/                // 构建输出
└── scripts/             // 构建脚本
```

### 开发规范
- 使用 TypeScript 严格模式
- 统一错误处理
- 日志分级记录
- 组件化开发
- 性能优化实践

### 性能优化
- 虚拟滚动列表
- 图片懒加载
- 多级缓存策略
- Web Worker 处理
- 异步组件加载

## 安装使用

1. 构建项目
```bash
npm run build
```

2. Chrome 加载
- 访问 `chrome://extensions/`
- 开启"开发者模式"
- 选择"加载已解压的扩展程序"
- 选择 `dist` 目录

## 贡献指南

欢迎提交 Pull Request 改进项目。重大更新请先提 Issue 讨论。

### 参与方式
1. Fork 项目
2. 创建特性分支
3. 提交改动
4. 推送分支
5. 创建 Pull Request

## 许可证

[MIT](https://choosealicense.com/licenses/mit/)

