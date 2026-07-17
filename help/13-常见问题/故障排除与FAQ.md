# 故障排除与 FAQ / Troubleshooting & FAQ

### 中文

## AI 智能

**Q：新文章为什么没有自动摘要？**

1. **总开关**：AI 设置页顶部 **启用 AI 功能** 已开启  
2. **默认模型**：Basic 已验证，并已 **设为当前启用**  
3. **订阅源**：该源的 **Auto AI** 已打开；未开则不会自动摘要  

**Q：验证模型一直超时？**

测试超时约 20 秒。常见原因：

- API Key 拼写错误  
- API Host 不可达（部分境外服务需网络或兼容中转，如 SiliconFlow）  
- 模型名称不正确；可点刷新拉取模型列表  

**Q：获取模型列表失败？**

先确认 Key 与 Host 正确；部分供应商需先能连通，才会返回模型目录。

---

## 订阅源

**Q：更新经常失败？**

- 在浏览器直接打开 RSS URL，确认仍是有效 XML  
- 部分外网源可能超时  
- 使用列表中的 **手动同步** 重试  

**Q：OPML 导入失败？**

确认文件为标准 OPML / XML，编码建议 UTF-8。

---

## 消息推送

**Q：Telegram 收不到？**

- Bot Token 与 Chat ID 是否正确（群组 ID 常带负号 `-`）  
- **必须先**在机器人对话中点 **Start** 或发送 `/start`  
- 推送设置中对应类别是否勾选  

**Q：飞书机器人收不到？**

- Webhook 是否完整复制  
- 若飞书开启签名校验，Secret 必须一致；未开启则 Secret 留空  

---

## 定时任务

**Q：到点不执行？**

- 任务开关是否开启  
- 深度报告默认用 **复杂模型 (Advanced)**，请确认已配置  
- 过滤条件是否过严，导致窗口内无文章  
- 查看执行历史中的错误  
- 未激活版本最多约 2 个活跃任务  

**Q：执行成功但推送内容为空？**

- 任务内是否关联并启用了推送通道  
- 在执行历史中预览报告，确认模型是否生成了正文  

---

## 数据与恢复

**Q：如何恢复默认？**

各面板（如标签范围）有 **恢复默认值**。若要清空全部数据，可卸载扩展后重装。

**Q：数据存在哪里？会上传吗？**

采用 **本地优先**：文章、摘要、图谱等多在浏览器本地（IndexedDB / 本地存储）。  
只有在你主动配置的 AI / 推送 / 云门户 / 激活等场景才会发出必要数据。  

详见：**隐私与安全 → 数据隐私说明**。

### English

## AI

**Q: Why no auto summaries?**

1. **Enable AI Features** is on  
2. **Basic** profile is validated and **set as active**  
3. Per-feed **Auto AI** is enabled  

**Q: Validate keeps timing out?**

~20s timeout. Check API Key, Host reachability (proxy / compatible provider if needed), and model name (use refresh to list models).

**Q: Model list fails to load?**

Confirm Key and Host first; some providers require a working connection before listing models.

---

## Feeds

**Q: Feed updates fail often?**

Open the RSS URL in a browser to verify XML; some remote sites time out; use **manual sync**.

**Q: OPML import fails?**

Use standard OPML/XML, preferably UTF-8.

---

## Push

**Q: No Telegram messages?**

Verify Bot Token and Chat ID (group IDs often start with `-`).  
**Start** the bot once (`/start`). Enable the relevant notification categories.

**Q: No Feishu/Lark messages?**

Copy the full Webhook URL. Match Secret if signature verification is on; leave Secret empty if off.

---

## Workflows

**Q: Schedule did not run?**

Task enabled? **Advanced** model configured? Filters too strict? Check execution history. Free tiers may limit active workflows (~2).

**Q: Run succeeded but empty push?**

Channel linked inside the task? Preview the report in history for empty model output.

---

## Data & Reset

**Q: Restore defaults?**

Use **Restore defaults** on panels, or reinstall the extension for a full wipe.

**Q: Where is data stored?**

**Local-first**: core content stays in the browser. Data leaves only for integrations you enable (AI, push, portal, activation).

See **Privacy & Security → Privacy Statement**.
