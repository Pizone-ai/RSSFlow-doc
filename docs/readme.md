# RSSFlow Reader Chrome Extension

RSSFlow Reader 是一个功能强大的 Chrome 浏览器扩展，旨在提供一个现代化、高效的 RSS 阅读体验。它不仅能够管理和阅读 RSS 订阅源，还集成了多个 AI 提供商的摘要生成功能，帮助用户快速获取文章要点。

## 主要特性

- RSS 源管理
  - 添加、删除和更新 RSS 订阅源
  - 支持多种 RSS 格式解析
  - 智能处理内容编码和格式化
  - 自动重试机制确保订阅源稳定性

- 文章阅读与管理
  - 支持全文和摘要视图切换
  - 标记已读/未读、收藏/取消收藏
  - 支持键盘快捷键操作
  - 支持木鱼阅读模式（标记已读时播放木鱼音效）
  - 文章内容懒加载优化

- AI 摘要功能
  - 支持多个 AI 提供商（OpenAI、Gemini、SiliconFlow）
  - 自动生成文章摘要和关键词
  - 智能提取文章观点和评分
  - 异步生成避免阻塞用户操作

- 多视图模式
  - 全部（未读）视图
  - 收藏视图
  - DayFlow（按日期分组）
  - TagFlow（按标签分组）
  - 支持无限滚动加载

- 自动化功能
  - 定期刷新订阅源获取最新文章
  - 自动清理过期内容
  - 后台更新未读计数
  - 智能错误重试机制

- 用户体验优化
  - 响应式设计适配不同屏幕尺寸
  - 支持深色/浅色主题切换
  - 实时搜索和过滤功能
  - 流畅的动画过渡效果

## 技术栈

- TypeScript：类型安全的代码实现
- Chrome Extension API：浏览器扩展功能
- IndexedDB：高性能本地数据存储
- 多个 AI API 集成
  - OpenAI API
  - Google Gemini API
  - SiliconFlow API
- Webpack：模块打包和资源管理
- Material Icons：UI 图标支持
- 现代 CSS 特性：动画、响应式设计

## 系统架构

- 核心服务
  - DBManager：数据库管理
  - ArticleManager：文章管理
  - RSSManager：订阅源管理
  - SettingsManager：设置管理
  - UnreadCountManager：未读计数管理

- 工具模块
  - HtmlProcessor：HTML 内容处理
  - NetworkUtils：网络请求处理
  - LogManager：日志管理
  - CustomError：统一错误处理

- UI 组件
  - Sidebar：主界面侧边栏
  - SummaryModal：AI 摘要模态框
  - ArticleList：文章列表组件
  - ViewControls：视图控制组件

## 安装

1. 克隆仓库：
   ```
   git clone https://github.com/yourusername/RssFlowPlus.git
   ```

2. 安装依赖：
   ```
   cd RssFlowPlus
   npm install
   ```

3. 构建项目：
   ```
   npm run build
   ```

4. 在 Chrome 浏览器中加载扩展：
   - 打开 Chrome 浏览器，进入 `chrome://extensions/`
   - 开启"开发者模式"
   - 点击"加载已解压的扩展程序"
   - 选择项目的 `dist` 目录

## 开发指南

- `npm run build`: 构建项目
- `npm run watch`: 监视文件变化并自动重新构建
- 代码规范：使用 TypeScript 严格模式
- 错误处理：统一使用 CustomError 进行错误管理
- 日志记录：使用 LogManager 进行统一日志记录
- 性能优化：实现了缓存、懒加载等多项优化措施

## 贡献

欢迎提交 Pull Requests 来改进这个项目。对于重大变更，请先开 issue 讨论您想要改变的内容。

## 许可证

[MIT](https://choosealicense.com/licenses/mit/)

