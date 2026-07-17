# Reader 快捷键大全 / Zen Reader Keyboard Shortcuts

在 Zen Reader 沉浸阅读器中，全局键盘快捷键定义在  的 `handleKeyDown` 事件中。

---

Global keyboard shortcuts are defined in 's `handleKeyDown` handler.

---

## 快捷键表 Shortcut Reference

| 按键 | 动作 | 详细说明 |
|------|------|---------|
| **J** / **ArrowRight** | 下一篇 Next Article | 100ms 节流；预取邻接 3 篇文章（下一篇、上一篇、下下篇）；支持本地缓存短路（LRU 16 篇） |
| **K** / **ArrowLeft** | 上一篇 Prev Article | 同上 |
| **Space** | 向下滚动 Scroll Down | 滚动 85% 视口高度（留 15% 视线重叠）；`behavior: smooth`；Shift+Space 向上滚动 |
| **Shift+Space** | 向上滚动 Scroll Up | 同 Space，方向相反 |
| **F** | 切换收藏 Toggle Favorite | 乐观更新 UI → 后台异步写入 浏览器本地数据库 → 失败时回滚；Toast 提示 |
| **R** | 标记已读 + 下一篇 Mark Read & Next | 视觉闪烁反馈 (read-flash-active)；通过 系统空闲调度 延迟写入 DB 避免主线程争抢 |
| **Enter** / **S** | AI 摘要 AI Summary | 触发 AI 生成摘要（30 秒超时保护）；若 AI 未配置显示提示弹窗 |
| **Escape** | 关闭 Close | `window.close()` |

---

| Key | Action | Details |
|-----|--------|---------|
| **J** / **ArrowRight** | Next Article | 100ms throttle; pre-fetches 3 adjacent articles; local cache support (LRU 16) |
| **K** / **ArrowLeft** | Prev Article | Same |
| **Space** | Scroll Down | 85% viewport height (15% overlap); `behavior: smooth`; Shift+Space scroll up |
| **Shift+Space** | Scroll Up | Same as Space, reverse direction |
| **F** | Toggle Favorite | Optimistic UI → async 浏览器本地数据库 write → rollback on failure; Toast notification |
| **R** | Mark Read & Next | Flash feedback (read-flash-active); 系统空闲调度 deferred DB write |
| **Enter** / **S** | AI Summary | Triggers AI generation (30s timeout); shows config reminder if AI not set up |
| **Escape** | Close | `window.close()` |

---

## 输入焦点保护 Input Focus Protection

以下情况不触发快捷键：

- `ctrlKey` / `metaKey` / `altKey` 按下时（保留浏览器快捷键如 Ctrl+R、Ctrl+F）
- 焦点在 `INPUT`、`TEXTAREA`、`SELECT` 元素上
- `contentEditable` 为 true 的元素

长按重复键（`e.repeat`）在导航类按键（J/K/R/←/→）中被拦截。

---

Shortcuts are blocked when:

- `ctrlKey` / `metaKey` / `altKey` is pressed (preserves browser shortcuts like Ctrl+R, Ctrl+F)
- Focus is on `INPUT`, `TEXTAREA`, or `SELECT` elements
- Element has `contentEditable = true`

Long-press repeats (`e.repeat`) are filtered for navigation keys (J/K/R/←/→).

---

## 导航预取 Navigation Prefetch

`prefetchArticles` 在每次导航后预取 3 篇文章全文：

- 下一篇（index + 1）
- 上一篇（index - 1）
- 下下篇（index + 2）

预取结果缓存在 `articleCacheRef`（Map，LRU 16 篇限制），后续 J/K 导航直接命中缓存实现零延迟渲染。

---

`prefetchArticles` fetches 3 full articles after each navigation:

- Next article (index + 1)
- Previous article (index - 1)
- Next-next article (index + 2)

Results cached in `articleCacheRef` (Map, LRU 16), subsequent J/K navigation renders instantly from cache.
