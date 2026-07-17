# 配置 SnagFlow 导入 / Configure SnagFlow Import

### 中文

## 入口

**设置 → 订阅源 →「从 SnagFlow 订阅生成器导入」**（可折叠面板）

## 前置条件

已安装 [SnagFlow](https://chromewebstore.google.com/detail/snagflow-rss-converter/beafcjcdnfeajjpmienpdjmeabhjnljh) 扩展。

## 操作步骤

1. **展开面板**：点击「从 SnagFlow 订阅生成器导入」。
2. **确认扩展 ID**：默认已预填官方扩展 ID；若使用其他实例可修改。
3. **加载规则**：点击 **加载规则**。RSSFlow 与 SnagFlow 通过浏览器扩展间通信读取规则，**不依赖外网接口**。
4. **选择规则**：列表中每项包含标题、描述、订阅 URL 与状态：
   - `已订阅`：已在 RSSFlow 中，不可再选
   - `已禁用`：SnagFlow 侧已关闭，不可选
5. **添加选中**：勾选后点击 **添加选中的订阅源**。

## 附加说明

- 面板头部实时显示已选数量
- 已订阅源自动禁用勾选
- 面板支持展开 / 收起

## 常见提示

| 情境 | 反馈 |
|------|------|
| 加载成功 | 提示已加载规则 |
| 加载失败 | 显示具体错误 |
| 添加成功 | 提示已添加选中源 |
| 未选择 | 提示先勾选要添加的源 |

### English

## Access

**Settings → Feeds → “Import from SnagFlow Feed Generator”** (collapsible)

## Prerequisite

Install the [SnagFlow](https://chromewebstore.google.com/detail/snagflow-rss-converter/beafcjcdnfeajjpmienpdjmeabhjnljh) extension.

## Steps

1. **Expand** the SnagFlow import panel.
2. **Confirm extension ID** (official ID is pre-filled).
3. **Load rules** — RSSFlow talks to SnagFlow via extension messaging (**no external API**).
4. **Select rules** — each row shows title, description, URL, and status (`Subscribed` / `Disabled` are not selectable).
5. **Add selected** feeds.

## Notes

Selection count updates live; already-subscribed feeds are disabled; the panel can collapse.

## Feedback

| Scenario | Toast |
|----------|-------|
| Load OK | Rules loaded |
| Load fail | Error message |
| Add OK | Feeds added |
| Nothing selected | Select feeds first |
