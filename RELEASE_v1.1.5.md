# RSSFlow v1.1.5

**Date:** 2026-08-10 (includes 2026-08-11 follow-up patches)  
**Scope:** Browser extension only (user-confirmed). Blog / `rssflow_ai_report` changes are out of scope for this note.

## Highlights

Engineering release focused on retrieval consistency, Flow/chat stability, and locale-aware feed/tag defaults.

## Changes

### Unified article search semantics
Extracted a shared search kernel so chat, discovery, and automation paths share the same retrieval semantics.

### Keyword normalization & unread / retrieval integrity
Refactored keyword normalization and unread/retrieval integrity across sidebar, discovery stats, and automation context builders.

### Flow scroll stability & session cleanup
- Pause idle prefetch and optimistic merges while scrolling
- Sticky column assignment to avoid reflow jumps
- Abort in-flight generation and reset filters after clearing a chat session

### JA/KO recommended feeds & feed catalog refactor
Added Japanese and Korean recommended feeds, expanded the catalog, and refactored feed settings categories.

### Locale-aware default tag sets
Default tag sets now adapt to the UI locale, with a broader tag coverage matrix.

## Links

- Product changelog: https://rssflow.oinchain.com/changelog
- Docs / site repo: https://github.com/oinzen/RSSFlow-doc

## 中文摘要

- 文章检索语义统一（共享检索内核）
- 关键词归一化 + 未读统计 / 检索完整性
- 流程视图滚动稳定性 + 清空会话状态残留修复
- 推荐源日语 / 韩语 + 订阅设置 / 分类重构
- 按语言环境适配默认标签集并扩展标签范围
