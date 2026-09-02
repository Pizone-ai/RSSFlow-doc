import type { PricingCopy } from './types';

export const pricingZhCN: PricingCopy = {
  badge: '简单透明的专业定价 · 释放信息洞察力',
  title: '选择适合你的',
  titleGradient: 'RSSFlow Pro 进阶方案',
  desc: '付费只买相对免费版多出来的配额与授权。',
  checkoutError: '暂时无法创建支付会话。正式收款需支付机构审核通过。',
  checkoutPaused: '支付通道正在接受支付机构审核，暂未开放正式购买。价格与套餐如下，审核通过后即可下单。',
  checkoutPausedButton: '即将开放购买',
  billingCycle: {
    annual: '按年订阅 (省 17% · 赠全新 Skill)',
    lifetime: '终身买断 (内容站定制 + 软件 VIP)',
    monthly: '按月订阅',
  },
  popular: '热门 · 一对一全新 Skill',
  bestValue: '终身 · 内容站定制 + 软件 VIP',
  plans: {
    free: {
      name: '基础版 (Free)',
      price: '$0',
      period: '永久免费',
      desc: '侧边栏 RSS 阅读：订阅、Flow、沉浸阅读；AI 需自备 Key',
      button: '免费安装扩展',
      features: [
        'RSS / Atom、OPML 导入、SnagFlow 导入',
        '本地阅读库、沉浸阅读、Flow、图谱',
        '3 条专家指令，最多 2 个定时任务',
        '自备 API Key 使用摘要与对话',
      ],
    },
    annual: {
      name: 'Pro 年度订阅',
      price: '$50',
      period: '/ 年 (折合 $4.17/月)',
      desc: '适合长期使用，比月付大约省 17%',
      button: '立即开通 Pro 年度版',
      features: ['含月付全部 Pro 配额', '一对一量身定制 2 个全新 Skill（不是改现成指令）'],
    },
    lifetime: {
      name: 'Pro 终身买断版',
      price: '$100',
      period: '一次性买断 · 终身享有',
      desc: '含月付与年付全部权益，另加内容站与软件 VIP',
      button: '获取终身授权',
      features: [
        '含月付 + 年付全部权益',
        '内容站点可专门定制风格',
        'oinchain 品牌后续软件产品可申请 VIP/Pro 授权（人工开通，无现金返利）',
        '激活码可赠送',
      ],
    },
    monthly: {
      name: 'Pro 月度订阅',
      price: '$5',
      period: '/ 月',
      desc: '按月付费，可随时取消下期',
      button: '开通月度订阅',
      features: [
        '全部 23 条专家指令（免费 3 条）',
        '不限数量定时任务（免费最多 2 个）',
        'MCP 桥接',
        '授权最多 3 台设备',
        '可在 Creem 门户取消续订',
      ],
    },
  },
  guarantees: [
    {
      icon: 'Lock',
      title: '即时交付与秒级生效',
      desc: '支付完成后生成激活码（ACT-XXXX-XXXX-XXXX），或写入已登录账号',
    },
    {
      icon: 'Laptop',
      title: '最多 3 台设备授权',
      desc: '登录后可在选项页解绑换机；各设备阅读库仍默认本地存储',
    },
    {
      icon: 'Receipt',
      title: '全球合规与安全支付',
      desc: '由 Creem.io (MoR) 处理全球税务合规并提供官方电子账单发票',
    },
  ],
  tableSection: {
    badge: '核心差异对比',
    title: '和免费版差在哪',
    desc: '只对比配额与授权。',
    lifetimeBadge: '最强权益 · 超值买断',
    cols: {
      feature: '核心特性与权益项',
      free: '免费基础版',
      monthly: 'Pro 月度版 ($5/月)',
      annual: 'Pro 年度版 ($50/年)',
      lifetime: 'Pro 终身版 ($100 买断)',
    },
    categories: [
      {
        categoryName: '配额',
        items: [
          { name: '专家指令', free: '3 条', monthly: '23 条', annual: '23 条', lifetime: '23 条' },
          { name: '定时任务', free: '最多 2 个', monthly: '不限', annual: '不限', lifetime: '不限' },
          { name: 'MCP 桥接', free: false, monthly: true, annual: true, lifetime: true },
          { name: '授权设备', free: '本机', monthly: '最多 3 台', annual: '最多 3 台', lifetime: '最多 3 台' },
        ],
      },
      {
        categoryName: '套餐之间',
        items: [
          { name: '一对一全新 Skill ×2', free: false, monthly: false, annual: true, lifetime: true },
          { name: '内容站定制风格', free: false, monthly: false, annual: false, lifetime: true },
          { name: '后续软件 VIP 授权', free: false, monthly: false, annual: false, lifetime: true },
        ],
      },
    ],
  },
  faqTitle: '常见问题解答 (FAQ)',
  faqs: [
    {
      q: '1. 免费版与 Pro 版在快捷指令和定时任务上有何具体限制？',
      a: '免费版可使用 3 条专家指令（创意构思、市场简报、科技日报），最多创建并启用 2 个定时任务。Pro 解锁全部 23 条内置专家指令，定时任务数量不限，支持单指令、串行链式与并行汇总。阅读库始终默认存在本机，不随授权做全文云同步。',
    },
    {
      q: '2. 年付附赠的 2 个全新 Skill 如何兑现？',
      a: '年付（终身亦包含此项）提供一对一量身定制：按你的工作流从零编写 2 个全新 Skill，而不是改现成快捷指令。购买后发邮件到 support@oinchain.com 说明场景即可。',
    },
    {
      q: '3. 终身版的内容站点与后续产品 VIP 是什么？',
      a: '终身含年付全部权益，另提供可定制风格的内容站点，以及对作者以 oinchain 品牌后续发布的软件产品申请 VIP/Pro 授权（人工开通许可证，不含现金返利或推荐分成）。请购买后联系 support@oinchain.com。',
    },
    {
      q: '4. 什么是 MCP 协议桥接 (Model Context Protocol)？',
      a: 'MCP 桥接允许您将 RSSFlow 本地沉淀的 RSS 资讯与 AI 摘要上下文，直接暴露给外部 AI 客户端（如 Cursor、Claude Desktop、本地终端 Agent 等）读取和调度，无需手动复制粘贴即可让外部 AI 工具基于您的订阅库进行深度工作。',
    },
    {
      q: '5. 购买后如何激活 RSSFlow Pro？',
      a: '游客购买会生成激活码 ACT-XXXX-XXXX-XXXX（三组四位字符），在扩展选项页输入即可。若购买时已登录同一账号，扩展登录后会拉取授权。',
    },
    {
      q: '6. 授权支持在几台电脑上使用？如何更换设备？',
      a: '每个 Pro 授权最多同时在 3 台设备上使用。换机时，已登录用户可在扩展设置里解绑旧设备。各电脑上的订阅与文章仍保存在本地，不会自动整库云同步。',
    },
    {
      q: '7. 关于退款政策与数字商品说明？',
      a: '由于 RSSFlow Pro 属于即时交付与生效的数字虚拟商品与软件授权码（License Key），一旦完成激活或发放，原则上不支持无理由退款。若遇到重复扣费、支付异常或系统未交付激活码等技术问题，请在订单生成后及时联系官方技术支持人工核验处理。',
    },
    {
      q: '8. AI 提炼与对话功能需要额外配置 API Key 吗？',
      a: 'RSSFlow 支持用户自带 API Key（BYOK），兼容 Gemini、OpenAI、Claude、DeepSeek 等。扩展不对你的模型调用加收 Token 费用。',
    },
    {
      q: '9. 如何取消月付或年付订阅？',
      a: '在 Creem 发给你的收据邮件中打开客户门户，使用购买邮箱登录即可取消下一期，无需事先批准。取消后当前已付周期内仍可使用。终身买断无续费。客服：support@oinchain.com。',
    },
  ],
};
