# 帮助文档写作规范

面向 `help/**/*.md` 与官网 `/help` 渲染管线（`website/scripts/generate-help.js` + `MarkdownRenderer`）。

## 1. 双语结构（强制统一）

推荐 **Format B**（生成器优先识别）：

```markdown
# 中文标题 / English Title

### 中文

导语（1–2 句说明「是什么 / 解决什么」）。

## 小节标题

正文……

### English

One or two sentences on what this is for.

## Section Title

Body…
```

也可使用 **Format A**（全文仅一个 `---` 分隔中英）：

```markdown
# 中文标题

## 小节

正文

---

# English Title

## Section

Body
```

**禁止 Format A2**（每个小节都用 `---` 夹中英）。历史 A2 文档必须改写为 A 或 B。

## 2. 标题层级

| 层级 | 用途 |
|------|------|
| `#` | 文档总标题（页面会再显示一次标题，正文可从 `##` 起） |
| `##` | 主章节（入口、步骤、注意等） |
| `###` | 仅用于语言分区 `### 中文` / `### English`，或 B 格式内的次级小节 |
| `####` | FAQ 分类、步骤组 |

避免中英双语挤在同一标题：`## 全屏布局 Full-screen Layout` → 中文区写 `## 全屏布局`，英文区写 `## Full-screen Layout`。

## 3. 链接

- 外链必须用 Markdown 链接：`[Chrome 网上应用店](https://…)`，**禁止**裸 URL 或仅 `` `https://…` ``。
- 站内帮助交叉引用用相对路径，生成后在文案中写**章节名 + 文档名**即可，勿写 `file:///` 本机路径。
  - 正确：`详见「隐私与安全 → 数据隐私说明」。`
  - 错误：`[隐私](file:///D:/github/...)`
- 禁止仓库内相对路径作为可点击链接（官网渲染后无法跳转）：`../03-xxx/yyy.md` → 改为纯文字导航提示。

## 4. 文案风格

- **用户语言**：写操作路径与结果，不写组件名 / 源码符号（`ArticleCard`、`handleKeyDown`、`tagEnumerationValues`）。
- **一句一事**：步骤用有序列表；并列能力用无序列表；对比用表格。
- **长段拆分**：单段超过约 3 行或 120 字时拆成列表或两段。
- **中英空格**：中英文之间加空格：`启用 AI 功能`，`RSS 订阅源`。
- **UI 文案**：与产品界面一致，用引号或加粗：`设置 → AI 设置`、**启用 AI 功能**。
- 去掉口语冗余与未闭合括号、`---` 夹在句中的注释。

## 5. 推荐信息架构

每篇尽量按此骨架（可省略无用小节）：

1. **导语**（是什么）
2. **入口**（从哪里打开）
3. **操作步骤 / 功能说明**
4. **注意 / 限制**
5. **相关文档**（文字交叉引用）

## 6. 生成与预览

```bash
cd website
npm run generate-help   # 从 help/ 生成 src/data/help-content.ts
npm run dev             # 打开 /help 预览
```

修改 `help/**/*.md` 后必须重新 `generate-help`，否则官网仍读旧数据。
