# Reader 快捷键大全 / Zen Reader Keyboard Shortcuts

### 中文

在沉浸式阅读器中可使用下列全局快捷键，适合连读与键盘优先工作流。

## 快捷键一览

| 按键 | 动作 | 说明 |
|------|------|------|
| `J` / `→` | 下一篇 | 约 100ms 节流；会预取相邻文章以降低延迟 |
| `K` / `←` | 上一篇 | 同上 |
| `Space` | 向下滚动 | 约 85% 视口高度，保留视线重叠；平滑滚动 |
| `Shift+Space` | 向上滚动 | 与 Space 方向相反 |
| `F` | 切换收藏 | 立即反馈 UI，失败时自动回滚并提示 |
| `R` | 标记已读并下一篇 | 闪烁反馈，后台写入本地数据库 |
| `Enter` / `S` | AI 摘要 | 约 30 秒超时；未配置 AI 时弹出提示 |
| `Esc` | 关闭阅读器 | 关闭当前标签页 |

## 输入焦点保护

以下情况不触发快捷键：

- 按住 `Ctrl` / `Cmd` / `Alt`（保留浏览器快捷键，如刷新、查找）
- 焦点在输入框、文本域、下拉框中
- 焦点在可编辑区域（contentEditable）

导航类按键（`J` / `K` / `R` / 方向键）会忽略长按连发。

## 导航预取

每次切换文章后，会在后台预取：

- 下一篇
- 上一篇
- 下下篇

预取结果缓存在本地（约 16 篇 LRU），后续 `J` / `K` 导航可更快渲染。

### English

Global shortcuts in Zen Reader for continuous reading and keyboard-first workflows.

## Shortcut Reference

| Key | Action | Notes |
|-----|--------|-------|
| `J` / `→` | Next article | ~100ms throttle; adjacent prefetch |
| `K` / `←` | Previous article | Same |
| `Space` | Scroll down | ~85% viewport with overlap; smooth |
| `Shift+Space` | Scroll up | Reverse of Space |
| `F` | Toggle favorite | Optimistic UI; rollback on failure |
| `R` | Mark read + next | Flash feedback; local DB write |
| `Enter` / `S` | AI summary | ~30s timeout; prompts if AI is off |
| `Esc` | Close reader | Closes the tab |

## Input Focus Protection

Shortcuts are ignored when:

- `Ctrl` / `Cmd` / `Alt` is held
- Focus is in `input`, `textarea`, or `select`
- Focus is in a contentEditable element

Long-press key repeats are filtered for navigation keys.

## Navigation Prefetch

After each navigation, the reader prefetches previous, next, and next-next articles into a small local LRU cache (~16 items) for snappier `J` / `K` moves.
