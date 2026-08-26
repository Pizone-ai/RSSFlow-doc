'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Starfield } from '@/components/Starfield';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Check, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Infinity as InfinityIcon, 
  ArrowRight, 
  HelpCircle, 
  Gift, 
  Laptop, 
  Cpu, 
  Layers,
  ChevronDown,
  Lock,
  Receipt
} from 'lucide-react';

const PRICING_I18N = {
  'zh-CN': {
    badge: '简单透明的专业定价',
    title: '选择适合你的',
    titleGradient: 'RSSFlow Pro 方案',
    desc: '从纯粹本地的快速阅读，到 AI 深度提炼与全景星图探索，让洞察力触手可及。',
    billingCycle: {
      annual: '按年订阅 (省 30%)',
      lifetime: '终身买断 (最受欢迎)',
      monthly: '按月订阅'
    },
    popular: '热门推荐',
    bestValue: '终身买断 · 超值',
    plans: {
      free: {
        name: '基础版 (Free)',
        price: '¥0',
        period: '永久免费',
        desc: '纯粹本地的现代 RSS 阅读器体验',
        button: '免费安装扩展',
        features: [
          '全量 RSS / Atom 订阅源管理与自定义分组',
          'OPML 导入与导出支持',
          '极速本地 SQLite (OPFS) 隐私离线存储',
          '内置智能全文正文提取与沉浸阅读器',
          '基础 AI 总结与试用体验额度'
        ]
      },
      annual: {
        name: 'Pro 年度订阅',
        price: '$29.99',
        period: '/ 年 (约 $2.49/月)',
        desc: '适合深度信息处理与日常高频阅读者',
        button: '立即开通 Pro 年度版',
        features: [
          '无限次 AI 核心提炼、多维度洞察与智能对话',
          'Portal 知识星图 (Constellation Explorer) 全景探索',
          'AI 每日 / 每周自动化深度研究简报',
          '支持 3 台设备同时使用与多端权益同步',
          '自定义 AI 快捷指令与 Prompt 流水线',
          'RSA-PSS 密码学防篡改离线凭证',
          '优先技术支持与新功能抢先体验'
        ]
      },
      lifetime: {
        name: 'Pro 终身买断版',
        price: '$49.99',
        period: '一次性买断 · 终身享有',
        desc: '一次买断，终身尊享全部 Pro 进阶能力与后续所有大版本升级',
        button: '获取终身授权 License',
        features: [
          '包含全部 Pro 进阶功能的终身使用权',
          '永久享有未来所有 v2.x、v3.x 重大版本更新',
          '支持 3 台设备同时使用，随时自助解绑换机',
          '支持作为 16 位激活码赠送亲友或同事 (Giftable)',
          '专属早期测试通道与开发者优先技术支持'
        ]
      },
      monthly: {
        name: 'Pro 月度订阅',
        price: '$3.99',
        period: '/ 月',
        desc: '按月弹性体验全部 Pro 进阶能力，随时可调整',
        button: '开通月度订阅',
        features: [
          '全部 Pro 进阶功能按月解锁',
          '支持 3 台设备多端同步权益',
          '随时在 Creem 客户门户管理或取消下期续订'
        ]
      }
    },
    guarantees: [
      {
        icon: 'Lock',
        title: '即时交付与秒级生效',
        desc: '支付完成后系统即刻生成授权码或自动下发至账号'
      },
      {
        icon: 'Laptop',
        title: '支持 3 台设备同时使用',
        desc: '台式机、笔记本多端同步，可在选项页随时自助解绑换机'
      },
      {
        icon: 'Receipt',
        title: '全球合规与安全支付',
        desc: '由 Creem.io (MoR) 处理全球税务合规并提供电子账单发票'
      }
    ],
    faqTitle: '常见问题解答 (FAQ)',
    faqs: [
      {
        q: '1. 购买后如何激活 RSSFlow Pro？',
        a: '系统支持双轨智能激活：如果您在官网登录了 Clerk 账号并完成购买，打开扩展登录相同账号将【自动无缝激活】；如果您选择免登录直接购买，系统会即时生成 16 位激活码（ACT-XXXX-XXXX-XXXX）并在页面展示且发送至您的支付邮箱，在扩展选项页输入即可激活（支持单机匿名激活或绑定账号）。'
      },
      {
        q: '2. 授权支持在几台电脑上使用？如何更换设备？',
        a: '每个 Pro 授权默认支持同时在 3 台设备（例如：公司电脑、家用电脑、笔记本）上激活使用。若需更换电脑，登录账号的用户可随时在扩展选项页的「设备管理」中一键解绑旧设备，在新设备上登录即可继续激活。'
      },
      {
        q: '3. 关于退款政策与数字商品说明？',
        a: '由于 RSSFlow Pro 属于即时交付与生效的数字虚拟商品与软件授权码（License Key），一旦完成激活或发放，原则上不支持无理由退款。若遇到重复扣费、支付异常或系统未交付激活码等技术问题，请在订单生成后及时联系官方技术支持人工核验处理。'
      },
      {
        q: '4. 终身买断版与周期订阅版有何区别？',
        a: '【终身买断版】为一次性单次支付，永久享有当前及未来所有重大版本（如 v2.x、v3.x）的全部 Pro 进阶功能，无任何后续费用；【按年/按月订阅版】按周期自动扣费续订，适合需要弹性预算的用户，可随时在 Creem 客户门户自主取消下一计费周期的续订。'
      },
      {
        q: '5. AI 提炼与对话功能需要额外配置 API Key 吗？',
        a: 'RSSFlow 支持用户自带 API Key（BYOK 模式），兼容 Google Gemini、OpenAI、Claude、DeepSeek、Ollama 等多种主流模型接口。扩展本身不会对您的模型调用收取额外 Token 溢价费用。'
      }
    ]
  },
  'en': {
    badge: 'Simple, Transparent Pricing',
    title: 'Choose the Perfect Plan for',
    titleGradient: 'RSSFlow Pro',
    desc: 'From local-first fast reading to deep AI synthesis and constellation insight exploration.',
    billingCycle: {
      annual: 'Annual (Save 30%)',
      lifetime: 'Lifetime (Most Popular)',
      monthly: 'Monthly'
    },
    popular: 'Popular',
    bestValue: 'Lifetime · Best Value',
    plans: {
      free: {
        name: 'Starter (Free)',
        price: '$0',
        period: 'Free forever',
        desc: 'Pure local modern RSS reader experience',
        button: 'Install Extension',
        features: [
          'Unlimited RSS / Atom feed management & custom grouping',
          'OPML import & export support',
          'Ultra-fast local SQLite (OPFS) private offline storage',
          'Built-in fulltext extraction & immersive reader',
          'Basic AI summary trial quota'
        ]
      },
      annual: {
        name: 'Pro Annual',
        price: '$29.99',
        period: '/ year (~$2.49/mo)',
        desc: 'For power readers seeking deep intelligence & insights',
        button: 'Get Pro Annual',
        features: [
          'Unlimited AI core synthesis, multi-angle insights & chat',
          'Portal loop & topic constellation explorer',
          'Automated daily & weekly AI research reports',
          'Simultaneous usage & sync on up to 3 devices',
          'Custom prompt workflows & automated shortcuts',
          'RSA-PSS cryptographic zero-tamper offline certificate',
          'Priority support & early beta access'
        ]
      },
      lifetime: {
        name: 'Pro Lifetime',
        price: '$49.99',
        period: 'One-time payment · Forever',
        desc: 'Pay once, own forever. Enjoy all future major version upgrades.',
        button: 'Get Lifetime License',
        features: [
          'Permanent access to all current and future Pro features',
          'All future v2.x & v3.x major upgrades included forever',
          'Supports up to 3 concurrent devices with self-serve transfer',
          'Can be transferred or gifted as a 16-digit activation key',
          'Direct developer channel & priority support'
        ]
      },
      monthly: {
        name: 'Pro Monthly',
        price: '$3.99',
        period: '/ month',
        desc: 'Flexible monthly billing, cancel anytime',
        button: 'Start Monthly Plan',
        features: [
          'All Pro features unlocked on monthly billing',
          'Multi-device sync on 3 devices',
          'Manage or cancel anytime via Creem customer portal'
        ]
      }
    },
    guarantees: [
      {
        icon: 'Lock',
        title: 'Instant Delivery & Activation',
        desc: 'License key is generated instantly or bound directly to your account upon checkout'
      },
      {
        icon: 'Laptop',
        title: '3 Concurrent Devices',
        desc: 'Sync across desktop & laptop with easy self-serve unbind & transfer anytime'
      },
      {
        icon: 'Receipt',
        title: 'Global Tax Compliance & Invoicing',
        desc: 'Processed securely by Creem.io (MoR) with official VAT/sales tax invoices'
      }
    ],
    faqTitle: 'Frequently Asked Questions (FAQ)',
    faqs: [
      {
        q: '1. How do I activate RSSFlow Pro after purchasing?',
        a: 'RSSFlow supports dual-track activation: If you sign in with your account on our website before purchasing, your Pro access will automatically activate in the extension upon login. If you checkout as a guest, a 16-digit activation code (ACT-XXXX-XXXX-XXXX) will be generated instantly on the receipt page and emailed to you.'
      },
      {
        q: '2. How many devices are supported? How do I transfer devices?',
        a: 'Each Pro license supports up to 3 devices simultaneously (e.g., work PC, home PC, laptop). When switching to a new machine, signed-in users can unbind older devices with one click in the extension settings.'
      },
      {
        q: '3. What is the refund policy for digital licenses?',
        a: 'Due to the nature of instant digital software goods and cryptographic license keys, licenses are non-refundable once delivered or activated. If you encounter duplicate billing or payment errors, please contact technical support for manual verification.'
      },
      {
        q: '4. What is the difference between Lifetime and Subscription plans?',
        a: 'The Lifetime plan is a single one-time payment that grants permanent access to all current and future major releases (v2.x, v3.x) with no recurring fees. Monthly and Annual plans renew automatically on a recurring schedule and can be canceled anytime via the Creem customer portal.'
      },
      {
        q: '5. Do I need my own AI API key for AI summaries & chat?',
        a: 'RSSFlow supports Bring Your Own Key (BYOK) mode, compatible with Google Gemini, OpenAI, Claude, DeepSeek, Ollama, etc. RSSFlow does not charge token markups on your own model calls.'
      }
    ]
  }
};

export default function PricingPage() {
  const { lang } = useLanguage();
  const [cycle, setCycle] = useState<'annual' | 'lifetime' | 'monthly'>('lifetime');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const t = PRICING_I18N[lang === 'zh-CN' || lang === 'zh-TW' ? 'zh-CN' : 'en'];

  // Creem Checkout Links
  const getCheckoutUrl = (plan: 'annual' | 'lifetime' | 'monthly') => {
    const urls = {
      annual: process.env.NEXT_PUBLIC_CREEM_ANNUAL_URL || 'https://creem.io/checkout/rssflow-pro-annual',
      lifetime: process.env.NEXT_PUBLIC_CREEM_LIFETIME_URL || 'https://creem.io/checkout/rssflow-pro-lifetime',
      monthly: process.env.NEXT_PUBLIC_CREEM_MONTHLY_URL || 'https://creem.io/checkout/rssflow-pro-monthly'
    };
    return urls[plan];
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
                href="https://chromewebstore.google.com"
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
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={getCheckoutUrl(cycle)}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-center shadow-lg shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span>
                  {cycle === 'lifetime' ? t.plans.lifetime.button : (cycle === 'annual' ? t.plans.annual.button : t.plans.monthly.button)}
                </span>
                <ArrowRight className="w-4 h-4" />
              </a>
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
