'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Starfield } from '@/components/Starfield';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { createCreemCheckout } from '@/lib/accountApi';
import { 
  Check, 
  Minus,
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Infinity as InfinityIcon, 
  ArrowRight, 
  Loader2,
  HelpCircle, 
  Gift, 
  Laptop, 
  Cpu, 
  Layers,
  ChevronDown,
  Lock,
  Receipt,
  Network,
  Bot,
  Compass,
  Table as TableIcon,
  Globe,
  Wand2,
  Workflow,
  Sparkle,
  Crown
} from 'lucide-react';

const PRICING_I18N = {
  'zh-CN': {
    badge: '简单透明的专业定价 · 释放信息洞察力',
    title: '选择适合你的',
    titleGradient: 'RSSFlow Pro 进阶方案',
    desc: '付费只买相对免费版多出来的配额与授权。',
    checkoutError: '无法创建支付会话。请稍后重试；若持续失败，说明 Creem 尚未完成配置。',
    checkoutPaused: '支付通道正在接受支付机构审核，暂未开放正式购买。价格与套餐如下，审核通过后即可下单。',
    checkoutPausedButton: '即将开放购买',
    billingCycle: {
      annual: '按年订阅 (省 17% · 赠全新 Skill)',
      lifetime: '终身买断 (内容站定制 + 全产品 VIP)',
      monthly: '按月订阅'
    },
    popular: '热门 · 一对一全新 Skill',
    bestValue: '终身 · 内容站定制 + 全产品 VIP',
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
          '自备 API Key 使用摘要与对话'
        ]
      },
      annual: {
        name: 'Pro 年度订阅',
        price: '$50',
        period: '/ 年 (折合 $4.17/月)',
        desc: '适合长期使用，比月付大约省 17%',
        button: '立即开通 Pro 年度版',
        features: [
          '含月付全部 Pro 配额',
          '一对一量身定制 2 个全新 Skill（不是改现成指令）'
        ]
      },
      lifetime: {
        name: 'Pro 终身买断版',
        price: '$100',
        period: '一次性买断 · 终身享有',
        desc: '含月付与年付全部权益，另加内容站与全产品 VIP',
        button: '获取终身授权',
        features: [
          '含月付 + 年付全部权益',
          '内容站点可专门定制风格',
          '作者后续所有产品的 VIP 使用权',
          '激活码可赠送'
        ]
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
          '可在 Creem 门户取消续订'
        ]
      }
    },
    guarantees: [
      {
        icon: 'Lock',
        title: '即时交付与秒级生效',
        desc: '支付完成后生成激活码（ACT-XXXX-XXXX-XXXX），或写入已登录账号'
      },
      {
        icon: 'Laptop',
        title: '最多 3 台设备授权',
        desc: '登录后可在选项页解绑换机；各设备阅读库仍默认本地存储'
      },
      {
        icon: 'Receipt',
        title: '全球合规与安全支付',
        desc: '由 Creem.io (MoR) 处理全球税务合规并提供官方电子账单发票'
      }
    ],
    tableSection: {
      badge: '核心差异对比',
      title: '和免费版差在哪',
      desc: '只对比配额与授权。',
      lifetimeBadge: '👑 最强权益 · 超值买断',
      cols: {
        feature: '核心特性与权益项',
        free: '免费基础版',
        monthly: 'Pro 月度版 ($5/月)',
        annual: 'Pro 年度版 ($50/年)',
        lifetime: 'Pro 终身版 ($100 买断)'
      },
      categories: [
        {
          categoryName: '配额',
          items: [
            { name: '专家指令', free: '3 条', monthly: '23 条', annual: '23 条', lifetime: '23 条' },
            { name: '定时任务', free: '最多 2 个', monthly: '不限', annual: '不限', lifetime: '不限' },
            { name: 'MCP 桥接', free: false, monthly: true, annual: true, lifetime: true },
            { name: '授权设备', free: '本机', monthly: '最多 3 台', annual: '最多 3 台', lifetime: '最多 3 台' }
          ]
        },
        {
          categoryName: '套餐之间',
          items: [
            { name: '一对一全新 Skill ×2', free: false, monthly: false, annual: true, lifetime: true },
            { name: '内容站定制风格', free: false, monthly: false, annual: false, lifetime: true },
            { name: '作者后续产品 VIP', free: false, monthly: false, annual: false, lifetime: true }
          ]
        }
      ]
    },
    faqTitle: '常见问题解答 (FAQ)',
    faqs: [
      {
        q: '1. 免费版与 Pro 版在快捷指令和定时任务上有何具体限制？',
        a: '免费版可使用 3 条专家指令（创意构思、市场简报、科技日报），最多创建并启用 2 个定时任务。Pro 解锁全部 23 条内置专家指令，定时任务数量不限，支持单指令、串行链式与并行汇总。阅读库始终默认存在本机，不随授权做全文云同步。'
      },
      {
        q: '2. 年付附赠的 2 个全新 Skill 如何兑现？',
        a: '年付（终身亦包含此项）提供一对一量身定制：按你的工作流从零编写 2 个全新 Skill，而不是改现成快捷指令。购买后发邮件到 support@oinchain.com 说明场景即可。'
      },
      {
        q: '3. 终身版的内容站点与全产品 VIP 是什么？',
        a: '终身含年付全部权益，另外提供可专门定制风格的内容站点，以及作者后续发布的所有产品的 VIP 使用权益。站点风格与 VIP 兑现请购买后联系 support@oinchain.com。'
      },
      {
        q: '4. 什么是 MCP 协议桥接 (Model Context Protocol)？',
        a: 'MCP 桥接允许您将 RSSFlow 本地沉淀的 RSS 资讯与 AI 摘要上下文，直接暴露给外部 AI 客户端（如 Cursor、Claude Desktop、本地终端 Agent 等）读取和调度，无需手动复制粘贴即可让外部 AI 工具基于您的订阅库进行深度工作。'
      },
      {
        q: '5. 购买后如何激活 RSSFlow Pro？',
        a: '游客购买会生成激活码 ACT-XXXX-XXXX-XXXX（三组四位字符），在扩展选项页输入即可。若购买时已登录同一账号，扩展登录后会拉取授权。'
      },
      {
        q: '6. 授权支持在几台电脑上使用？如何更换设备？',
        a: '每个 Pro 授权最多同时在 3 台设备上使用。换机时，已登录用户可在扩展设置里解绑旧设备。各电脑上的订阅与文章仍保存在本地，不会自动整库云同步。'
      },
      {
        q: '7. 关于退款政策与数字商品说明？',
        a: '由于 RSSFlow Pro 属于即时交付与生效的数字虚拟商品与软件授权码（License Key），一旦完成激活或发放，原则上不支持无理由退款。若遇到重复扣费、支付异常或系统未交付激活码等技术问题，请在订单生成后及时联系官方技术支持人工核验处理。'
      },
      {
        q: '8. AI 提炼与对话功能需要额外配置 API Key 吗？',
        a: 'RSSFlow 支持用户自带 API Key（BYOK 模式），兼容 Google Gemini、OpenAI、Claude、DeepSeek、Ollama 等多种主流模型接口。扩展本身不会对您的模型调用收取额外 Token 溢价费用。'
      }
    ]
  },
  'en': {
    badge: 'Simple, Transparent Pricing · Unlock Information Intelligence',
    title: 'Choose the Perfect Plan for',
    titleGradient: 'RSSFlow Pro',
    desc: 'You pay for quotas and the license, not for features the free tier already has.',
    checkoutError: 'Unable to start checkout. Please try again shortly. Persistent failures mean Creem is not configured yet.',
    checkoutPaused: 'Card payments are pending processor approval. Plans and prices below are final; checkout will open after the live store is approved.',
    checkoutPausedButton: 'Checkout opening soon',
    billingCycle: {
      annual: 'Annual (Save 17% · 2 new Skills)',
      lifetime: 'Lifetime (Styled site + all-product VIP)',
      monthly: 'Monthly'
    },
    popular: 'Popular · 1:1 new Skills',
    bestValue: 'Lifetime · Styled site + VIP',
    plans: {
      free: {
        name: 'Starter (Free)',
        price: '$0',
        period: 'Free forever',
        desc: 'Sidebar RSS reading: feeds, Flow, Zen Reader. Bring your own AI key.',
        button: 'Install Extension',
        features: [
          'RSS / Atom, OPML import, SnagFlow import',
          'Local library, Zen Reader, Flow, graph',
          '3 expert commands, up to 2 scheduled tasks',
          'BYOK summaries and chat'
        ]
      },
      annual: {
        name: 'Pro Annual',
        price: '$50',
        period: '/ year (~$4.17/mo)',
        desc: 'Best for regular use — about 17% less than monthly',
        button: 'Get Pro Annual',
        features: [
          'Everything in Monthly',
          'Plus two brand-new Skills, 1:1 tailored (not edits of built-in commands)'
        ]
      },
      lifetime: {
        name: 'Pro Lifetime',
        price: '$100',
        period: 'One-time payment · Forever',
        desc: 'Includes Monthly and Annual, plus a styled site and all-product VIP',
        button: 'Get Lifetime License',
        features: [
          'Everything in Monthly and Annual',
          'Content site with custom styling',
          'VIP access to all later products from the author',
          'Giftable activation code'
        ]
      },
      monthly: {
        name: 'Pro Monthly',
        price: '$5',
        period: '/ month',
        desc: 'Month to month. Cancel the next renewal anytime',
        button: 'Start Monthly Plan',
        features: [
          'All 23 expert commands (3 on Free)',
          'Unlimited scheduled tasks (2 on Free)',
          'MCP bridge',
          'License on up to 3 devices',
          'Cancel in the Creem portal'
        ]
      }
    },
    guarantees: [
      {
        icon: 'Lock',
        title: 'Instant Delivery & Activation',
        desc: 'An ACT-XXXX-XXXX-XXXX key is issued, or entitlement is written to your signed-in account'
      },
      {
        icon: 'Laptop',
        title: 'Up to 3 licensed devices',
        desc: 'Unbind in settings when switching machines. Feed libraries stay local on each device.'
      },
      {
        icon: 'Receipt',
        title: 'Global Tax Compliance & Invoicing',
        desc: 'Processed securely by Creem.io (MoR) with official VAT/sales tax invoices'
      }
    ],
    tableSection: {
      badge: 'Core Differences',
      title: 'What you pay for',
      desc: 'Quotas and license only — not features already in Free.',
      lifetimeBadge: '👑 VIP · Best Value',
      cols: {
        feature: 'Feature & Capability',
        free: 'Free Starter',
        monthly: 'Pro Monthly ($5/mo)',
        annual: 'Pro Annual ($50/yr)',
        lifetime: 'Pro Lifetime ($100)'
      },
      categories: [
        {
          categoryName: 'Quotas',
          items: [
            { name: 'Expert commands', free: '3', monthly: '23', annual: '23', lifetime: '23' },
            { name: 'Scheduled tasks', free: 'Up to 2', monthly: 'Unlimited', annual: 'Unlimited', lifetime: 'Unlimited' },
            { name: 'MCP bridge', free: false, monthly: true, annual: true, lifetime: true },
            { name: 'Licensed devices', free: 'This browser', monthly: 'Up to 3', annual: 'Up to 3', lifetime: 'Up to 3' }
          ]
        },
        {
          categoryName: 'Between plans',
          items: [
            { name: '2 brand-new 1:1 Skills', free: false, monthly: false, annual: true, lifetime: true },
            { name: 'Content site custom style', free: false, monthly: false, annual: false, lifetime: true },
            { name: 'VIP on later author products', free: false, monthly: false, annual: false, lifetime: true }
          ]
        }
      ]
    },
    faqTitle: 'Frequently Asked Questions (FAQ)',
    faqs: [
      {
        q: '1. What are the exact differences between Free and Pro regarding prompts and scheduled tasks?',
        a: 'Free includes 3 expert commands (Ideator, Market Brief, Tech Daily) and up to 2 scheduled tasks. Pro unlocks all 23 built-in expert commands and unlimited tasks in Single, Sequential Chain, and Split-Merge modes. Your feed library stays on-device; the license does not cloud-sync articles.'
      },
      {
        q: '2. How do I redeem the two brand-new Skills on Annual?',
        a: 'Annual (and Lifetime, which includes Annual) includes two Skills built from scratch around your workflow — not tweaks of existing commands. Email support@oinchain.com after purchase with your use case.'
      },
      {
        q: '3. What are the Lifetime content site and all-product VIP?',
        a: 'Lifetime includes everything in Annual, plus a content site with custom styling, and VIP access to later products from the author. Redeem site style and VIP via support@oinchain.com after purchase.'
      },
      {
        q: '4. What is the MCP Protocol Bridge (Model Context Protocol)?',
        a: 'The MCP Bridge allows local RSS articles and AI summaries accumulated in RSSFlow to be accessed by external AI tools (such as Cursor, Claude Desktop, or local AI agents) as immediate context, enabling external AI assistants to read your personal feeds seamlessly.'
      },
      {
        q: '5. How do I activate RSSFlow Pro after purchasing?',
        a: 'Guest checkout issues an ACT-XXXX-XXXX-XXXX key (three groups of four characters) to paste in extension options. If you purchase while signed in, the extension picks up the license after you sign in with the same account.'
      },
      {
        q: '6. How many devices are supported? How do I transfer devices?',
        a: 'Each Pro license may run on up to 3 devices at once. Signed-in users can unbind a device in extension settings. Subscriptions and articles remain local on each computer and are not automatically cloud-synced.'
      },
      {
        q: '7. What is the refund policy for digital licenses?',
        a: 'Due to the nature of instant digital software goods and cryptographic license keys, licenses are non-refundable once delivered or activated. If you encounter duplicate billing or payment errors, please contact technical support for manual verification.'
      },
      {
        q: '8. Do I need my own AI API key for AI summaries & chat?',
        a: 'RSSFlow supports Bring Your Own Key (BYOK) mode, compatible with Google Gemini, OpenAI, Claude, DeepSeek, Ollama, etc. RSSFlow does not charge token markups on your own model calls.'
      }
    ]
  }
};

const CHECKOUT_OPEN = false;

export default function PricingPage() {
  const { lang } = useLanguage();
  const [cycle, setCycle] = useState<'annual' | 'lifetime' | 'monthly'>('lifetime');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [checkoutBusy, setCheckoutBusy] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  const t = PRICING_I18N[lang === 'zh-CN' || lang === 'zh-TW' ? 'zh-CN' : 'en'];

  const handleCheckout = async () => {
    if (checkoutBusy || !CHECKOUT_OPEN) return;
    setCheckoutBusy(true);
    setCheckoutError(null);
    try {
      const { checkoutUrl } = await createCreemCheckout(cycle);
      window.location.assign(checkoutUrl);
    } catch {
      setCheckoutError(t.checkoutError);
      setCheckoutBusy(false);
    }
  };

  const renderCell = (val: boolean | string, isLifetime: boolean = false, isAnnual: boolean = false) => {
    if (typeof val === 'boolean') {
      if (val) {
        return (
          <div className="flex justify-center items-center">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
              isLifetime 
                ? 'bg-emerald-500/30 text-emerald-300 border border-emerald-400/40 shadow-[0_0_12px_rgba(16,185,129,0.35)]' 
                : 'bg-emerald-500/20 text-emerald-400'
            }`}>
              <Check className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </div>
        );
      }
      return (
        <div className="flex justify-center items-center">
          <Minus className="w-4 h-4 text-slate-600" />
        </div>
      );
    }

    // Special string rendering with highlighted badges
    if (val.includes('附赠') || val.includes('Included') || val.includes('终身永久')) {
      return (
        <div className="flex justify-center items-center">
          <span className={`px-2.5 py-1 rounded-lg text-xs font-bold tracking-wide inline-flex items-center gap-1 shadow-sm ${
            isLifetime 
              ? 'bg-gradient-to-r from-emerald-500/25 to-teal-500/25 text-emerald-200 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
              : 'bg-teal-500/20 text-teal-200 border border-teal-500/30'
          }`}>
            {val}
          </span>
        </div>
      );
    }

    return (
      <span className={`text-xs font-semibold ${
        isLifetime ? 'text-emerald-200 font-bold' : (isAnnual ? 'text-teal-200' : 'text-slate-300')
      }`}>
        {val}
      </span>
    );
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500/30">
      <Navbar />
      <Starfield />

      <div className="relative pt-32 pb-24 overflow-hidden">
        {/* Glow Ambient */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[140px] pointer-events-none -z-10" />

        <div className="container mx-auto max-w-6xl px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              {t.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6"
            >
              {t.title}{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                {t.titleGradient}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 leading-relaxed"
            >
              {t.desc}
            </motion.p>

            {/* Cycle Selector Pills */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex p-1.5 mt-8 rounded-2xl bg-slate-900/90 border border-white/10 backdrop-blur-xl shadow-2xl"
            >
              <button
                onClick={() => setCycle('lifetime')}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  cycle === 'lifetime'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.billingCycle.lifetime}
              </button>
              <button
                onClick={() => setCycle('annual')}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  cycle === 'annual'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.billingCycle.annual}
              </button>
              <button
                onClick={() => setCycle('monthly')}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  cycle === 'monthly'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.billingCycle.monthly}
              </button>
            </motion.div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            {/* Free Plan Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
              className="relative rounded-3xl bg-slate-900/50 border border-white/10 p-8 flex flex-col justify-between backdrop-blur-xl hover:border-white/20 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{t.plans.free.name}</h3>
                  <div className="p-2 rounded-xl bg-white/5 text-slate-400">
                    <Layers className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-6">{t.plans.free.desc}</p>
                <div className="mb-8">
                  <span className="text-4xl font-extrabold text-white">{t.plans.free.price}</span>
                  <span className="text-slate-500 text-sm ml-2">{t.plans.free.period}</span>
                </div>

                <div className="space-y-3.5 mb-8">
                  {t.plans.free.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-slate-400" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://chromewebstore.google.com/detail/rssflow-reader/mefbfkpippglgoanjcbdjnkelcbdjija?utm_source=rssflow_io&utm_medium=pricing_free"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-semibold text-center border border-white/10 transition-all block"
              >
                {t.plans.free.button}
              </a>
            </motion.div>

            {/* Pro Plan Card (Dynamic based on cycle) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border-2 border-emerald-500/50 p-8 flex flex-col justify-between backdrop-blur-2xl shadow-[0_0_50px_rgba(16,185,129,0.15)] overflow-hidden"
            >
              {/* Top Highlight Badge */}
              <div className="absolute top-0 right-0">
                <div className="bg-gradient-to-l from-emerald-500 to-teal-500 text-slate-950 text-xs font-extrabold uppercase px-4 py-1.5 rounded-bl-2xl shadow-lg">
                  {cycle === 'lifetime' ? t.bestValue : t.popular}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-emerald-400 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-emerald-400" />
                    {cycle === 'lifetime' ? t.plans.lifetime.name : (cycle === 'annual' ? t.plans.annual.name : t.plans.monthly.name)}
                  </h3>
                </div>

                <p className="text-slate-400 text-sm mb-6">
                  {cycle === 'lifetime' ? t.plans.lifetime.desc : (cycle === 'annual' ? t.plans.annual.desc : t.plans.monthly.desc)}
                </p>

                <div className="mb-8">
                  <span className="text-5xl font-black text-white tracking-tight">
                    {cycle === 'lifetime' ? t.plans.lifetime.price : (cycle === 'annual' ? t.plans.annual.price : t.plans.monthly.price)}
                  </span>
                  <span className="text-emerald-400/80 text-sm ml-2 font-medium">
                    {cycle === 'lifetime' ? t.plans.lifetime.period : (cycle === 'annual' ? t.plans.annual.period : t.plans.monthly.period)}
                  </span>
                </div>

                <div className="space-y-3.5 mb-8">
                  {(cycle === 'lifetime' ? t.plans.lifetime.features : (cycle === 'annual' ? t.plans.annual.features : t.plans.monthly.features)).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-emerald-400" />
                      </div>
                      <span className={feat.includes('【专属') || feat.includes('【顶级') || feat.includes('【Bonus】') || feat.includes('【Premium') ? 'text-emerald-300 font-bold' : ''}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={handleCheckout}
                disabled={checkoutBusy || !CHECKOUT_OPEN}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 hover:from-emerald-400 hover:to-teal-400 disabled:opacity-70 disabled:hover:scale-100 text-slate-950 font-bold text-center shadow-lg shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                {checkoutBusy ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                <span>
                  {CHECKOUT_OPEN
                    ? (cycle === 'lifetime' ? t.plans.lifetime.button : (cycle === 'annual' ? t.plans.annual.button : t.plans.monthly.button))
                    : t.checkoutPausedButton}
                </span>
                {checkoutBusy || !CHECKOUT_OPEN ? null : <ArrowRight className="w-4 h-4" />}
              </button>
              <p className="mt-3 text-xs text-amber-200/90 text-center leading-relaxed">{t.checkoutPaused}</p>
              {checkoutError ? (
                <p className="mt-3 text-xs text-rose-300 text-center leading-relaxed">{checkoutError}</p>
              ) : null}
            </motion.div>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
            {t.guarantees.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 flex flex-col items-center gap-2.5 backdrop-blur-xl">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-1">
                  {item.icon === 'Lock' && <Lock className="w-5 h-5" />}
                  {item.icon === 'Laptop' && <Laptop className="w-5 h-5" />}
                  {item.icon === 'Receipt' && <Receipt className="w-5 h-5" />}
                </div>
                <div className="font-bold text-white text-sm">{item.title}</div>
                <div className="text-xs text-slate-400 leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* Feature Comparison Table Section (Spacious & Highlighted) */}
          <div className="mt-28">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <TableIcon className="w-3.5 h-3.5" />
                {t.tableSection.badge}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                {t.tableSection.title}
              </h2>
              <p className="text-slate-400 text-sm">
                {t.tableSection.desc}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[860px] table-fixed">
                  <thead>
                    <tr className="border-b border-white/10 bg-slate-950/90">
                      <th className="p-5 text-sm font-bold text-slate-300 w-[26%]">
                        {t.tableSection.cols.feature}
                      </th>
                      <th className="p-5 text-sm font-bold text-center text-slate-400 w-[15%]">
                        {t.tableSection.cols.free}
                      </th>
                      <th className="p-5 text-sm font-bold text-center text-slate-300 w-[17%]">
                        {t.tableSection.cols.monthly}
                      </th>
                      <th className="p-5 text-sm font-bold text-center text-teal-300 w-[18%]">
                        {t.tableSection.cols.annual}
                      </th>
                      {/* Highlighted Lifetime Column Header */}
                      <th className="p-5 text-center bg-gradient-to-b from-emerald-500/20 to-emerald-500/10 w-[24%] border-l-2 border-r-2 border-emerald-500/40 relative shadow-inner">
                        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-wider mb-1 shadow-md">
                          <Crown className="w-3 h-3 fill-slate-950" />
                          {t.tableSection.lifetimeBadge}
                        </div>
                        <div className="text-sm font-extrabold text-emerald-300">
                          {t.tableSection.cols.lifetime}
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {t.tableSection.categories.map((cat, catIdx) => (
                      <React.Fragment key={catIdx}>
                        <tr className="bg-white/5 border-y border-white/5">
                          <td colSpan={5} className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-emerald-400">
                            {cat.categoryName}
                          </td>
                        </tr>
                        {cat.items.map((item, itemIdx) => (
                          <tr 
                            key={itemIdx} 
                            className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                          >
                            <td className="px-5 py-4 text-sm text-slate-300 font-medium">
                              {item.name}
                            </td>
                            <td className="px-4 py-4 text-center">
                              {renderCell(item.free)}
                            </td>
                            <td className="px-4 py-4 text-center">
                              {renderCell(item.monthly)}
                            </td>
                            <td className="px-4 py-4 text-center">
                              {renderCell(item.annual, false, true)}
                            </td>
                            {/* Highlighted Lifetime Cell */}
                            <td className="px-4 py-4 text-center bg-emerald-500/[0.08] border-l-2 border-r-2 border-emerald-500/30">
                              {renderCell(item.lifetime, true)}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* FAQ Accordion Section */}
          <div className="mt-28 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-10 flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-emerald-400" />
              {t.faqTitle}
            </h2>

            <div className="space-y-4">
              {t.faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl overflow-hidden transition-all hover:border-white/20"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between font-semibold text-white hover:text-emerald-400 transition-colors cursor-pointer"
                    >
                      <span className="text-base">{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ml-4 ${
                          isOpen ? 'rotate-180 text-emerald-400' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-6 pb-5 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
