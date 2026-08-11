export type ReleaseChange = {
  titleZh: string;
  titleEn: string;
  detailZh?: string;
  detailEn?: string;
};

export type ReleaseEntry = {
  version: string;
  date: string;
  tag: string;
  summaryZh: string;
  summaryEn: string;
  changes: ReleaseChange[];
};

/**
 * Public engineering release notes for the RSSFlow browser extension.
 * Keep in sync with D:/github/RSSFlowpro/CHANGELOG.md after user-confirmed scope.
 */
export const RELEASES: ReleaseEntry[] = [
  {
    version: '1.1.5',
    date: '2026-08-10',
    tag: 'v1.1.5',
    summaryZh: '检索内核统一、流程视图稳定性与推荐源/标签适配。',
    summaryEn:
      'Unified search kernel, Flow view stability, and recommended-feed / tag localization work.',
    changes: [
      {
        titleZh: '文章检索语义统一',
        titleEn: 'Unified article search semantics',
        detailZh: '抽出共享检索内核，聊天 / 发现 / 自动化等路径对齐。',
        detailEn:
          'Extracted a shared search kernel so chat, discovery, and automation paths share the same retrieval semantics.',
      },
      {
        titleZh: '关键词归一化与未读统计/检索完整性',
        titleEn: 'Keyword normalization & unread / retrieval integrity',
        detailZh: '重构侧边栏、发现统计、自动化上下文中的关键词归一化与未读统计链路。',
        detailEn:
          'Refactored keyword normalization and unread/retrieval integrity across sidebar, discovery stats, and automation context builders.',
      },
      {
        titleZh: '流程视图滚动稳定性与会话清理',
        titleEn: 'Flow scroll stability & session cleanup',
        detailZh:
          '滚动时暂停闲时预取与乐观合入，列粘性分配；清空会话后清理生成中请求与筛选残留。',
        detailEn:
          'Pause idle prefetch / optimistic merges while scrolling; sticky column assignment; abort in-flight generation and reset filters after clearing a chat session.',
      },
      {
        titleZh: '推荐源日语/韩语与分类重构',
        titleEn: 'JA/KO recommended feeds & feed catalog refactor',
        detailZh: '推荐源新增日语 / 韩语并扩充订阅源；订阅设置与推荐源分类重构。',
        detailEn:
          'Added Japanese and Korean recommended feeds, expanded the catalog, and refactored feed settings categories.',
      },
      {
        titleZh: '语言环境默认标签集适配',
        titleEn: 'Locale-aware default tag sets',
        detailZh: '按语言环境适配默认标签集，并扩展标签涵盖范围。',
        detailEn:
          'Default tag sets now adapt to the UI locale, with a broader tag coverage matrix.',
      },
    ],
  },
  {
    version: '1.1.4',
    date: '2026-08-06',
    tag: 'v1.1.4',
    summaryZh: '多语言 i18n、后台数据库与全文提取服务。',
    summaryEn: 'Full i18n coverage, background DB worker, and full-text extraction services.',
    changes: [
      {
        titleZh: '多语言 i18n 全面支持',
        titleEn: 'Broad multi-language i18n coverage',
      },
      {
        titleZh: '后台数据库处理（db.worker）',
        titleEn: 'Background database handling via db.worker',
      },
      {
        titleZh: '全文提取服务',
        titleEn: 'Full-text extraction services',
      },
    ],
  },
  {
    version: '1.1.2',
    date: '2026-08-04',
    tag: 'v1.1.2',
    summaryZh: 'AI 报告 Dashboard 与 Clerk 认证集成。',
    summaryEn: 'AI report dashboard and Clerk authentication integration.',
    changes: [
      {
        titleZh: 'AI 报告 Dashboard 落地',
        titleEn: 'AI report dashboard shipped',
      },
      {
        titleZh: 'Clerk 认证组件与本地化',
        titleEn: 'Clerk auth components and localization',
      },
      {
        titleZh: 'Graph Portal / Admin 与性能优化',
        titleEn: 'Graph portal / admin surfaces and performance work',
      },
    ],
  },
  {
    version: '1.1.1',
    date: '2026-07-28',
    tag: 'v1.1.1',
    summaryZh: '订阅/查询重构，Rspack 迁移与 SQLite WASM。',
    summaryEn: 'Subscription/query rewrite, Rspack migration, and SQLite WASM.',
    changes: [
      {
        titleZh: '订阅与查询层大规模重构',
        titleEn: 'Large-scale subscription and query-layer rewrite',
      },
      {
        titleZh: 'SQLite WASM + OPFS 异步代理',
        titleEn: 'SQLite WASM with OPFS async proxy',
      },
      {
        titleZh: '构建工具迁移至 Rspack',
        titleEn: 'Build toolchain migrated to Rspack',
      },
    ],
  },
  {
    version: '1.1.0',
    date: '2026-07-15',
    tag: 'v1.1.0',
    summaryZh: 'V3 聊天重构，SQLite Worker 与知识图谱页面。',
    summaryEn: 'V3 chat rewrite, SQLite worker, and graph page.',
    changes: [
      {
        titleZh: 'V3 聊天界面大重构',
        titleEn: 'V3 chat interface rewrite',
        detailZh: 'SmartInput / CommandPalette / 命令面板 / 自动化编排。',
        detailEn: 'SmartInput, CommandPalette, command surface, and automation orchestration.',
      },
      {
        titleZh: 'SQLite Worker + GraphPage',
        titleEn: 'SQLite worker + GraphPage',
      },
      {
        titleZh: 'AI 报告门户与管理后台',
        titleEn: 'AI report portal and admin surfaces',
      },
    ],
  },
];

export const LATEST_RELEASE = RELEASES[0];
