# 配置 CatchFlow 导入

## 入口

设置 → 订阅源（选项页中的“订阅源”标签页）→ 折叠面板"从 snagFlow 订阅生成器导入"。

## 前置条件

已安装 SnagFlow 扩展（从 Chrome 网上应用店安装，扩展 ID：`beafcjcdnfeajjpmienpdjmeabhjnljh`）。

## 操作步骤

1. **展开面板**：点击"从 snagFlow 订阅生成器导入"标题栏
2. **输入扩展 ID**：文本框中已预填默认扩展 ID（`beafcjcdnfeajjpmienpdjmeabhjnljh`），如需使用其他实例可修改
3. **加载规则**：点击"加载规则"按钮，代码通过 已经与SnagFlow 进行了扩展内部直连的通信来获取数据，类似调用接口，不依赖于网络请求。
4. **选择订阅源**：加载成功后显示可订阅的规则列表，每项包含：
   - 复选框（勾选即选中）
   - 标题和描述
   - 状态标签：`已订阅`（已存在于 RSSFlow 中，不可选）、`已禁用`（规则已禁用，不可选）
   - 订阅 URL
5. **添加选中**：勾选所需源后点击"添加选中的订阅源"，后台发送 后台指令 批量添加

## 附加功能

- 选中数量会实时显示在面板头部
- 已订阅的源自动标记为"已订阅"并禁用勾选
- 支持展开/收起面板

## 验证反馈

| 情境 | 反馈 |
|------|------|
| 加载成功 | Toast：`已加载 snagFlow 规则：` |
| 加载失败 | Toast：显示具体错误信息 |
| 添加成功 | Toast：`已添加选中的 snagFlow 订阅源：` |
| 未选择 | Toast：`请先勾选要添加的订阅源` |

---

# Configure CatchFlow Import

## Access

Settings → Feeds tab → Collapsible section "Import from SnagFlow Feed Generator".

## Prerequisite

SnagFlow extension must be installed from Chrome Web Store (extension ID: `beafcjcdnfeajjpmienpdjmeabhjnljh`).

## Steps

1. **Expand Panel**: Click the "Import from SnagFlow Feed Generator" header
2. **Enter Extension ID**: The input is pre-filled with the default ID (`beafcjcdnfeajjpmienpdjmeabhjnljh`), modify for other instances
3. **Load Rules**: Click the "Load Rules" button. The extension communicates directly with SnagFlow locally to retrieve feed rules, acting like an internal API call without relying on external network requests.
4. **Select Feeds**: After loading, available rules are displayed with:
   - Checkbox (click to select)
   - Title and description
   - Status badges: `Subscribed` (already in RSSFlow, not selectable), `Disabled` (rule disabled, not selectable)
   - Feed URL
5. **Add Selected**: Click "Add Selected Feeds" to batch-add selected items

## Additional Features

- Selection count shows in real-time on the panel header
- Already-subscribed feeds are auto-marked and disabled from selection
- Supports expand/collapse

## Feedback

| Scenario | Feedback |
|----------|----------|
| Load success | Toast: `snagFlow rules loaded` |
| Load failure | Toast: specific error message |
| Add success | Toast: `Selected snagFlow feeds added` |
| No selection | Toast: `Please select feeds to add first` |
