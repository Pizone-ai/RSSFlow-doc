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
  ChevronDown
} from 'lucide-react';

const PRICING_I18N = {
  'zh-CN': {
    badge: '简单透明的定价',
    title: '选择适合你的',
    titleGradient: 'RSSFlow 进阶方案',
    desc: '无论你是重度信息极客，还是日常阅读者，都能找到最契合的信息获取与 AI 提炼体验。',
    billingCycle: {
      annual: '按年订阅 (省 30%)',
      lifetime: '终身买断 (最划算)',
      monthly: '按月订阅'
    },
    popular: '最受欢迎',
    bestValue: '超值买断',
    plans: {
      free: {
        name: '基础版 (Free)',
        price: '¥0',
        period: '永久免费',
        desc: '纯粹本地的现代 RSS 阅读器体验',
        button: '免费安装扩展',
        features: [
          '全量 RSS / Atom 订阅源管理',
          'OPML 导入与导出',
          '极速本地 SQLite (OPFS) 离线存储',
          '内置智能全文正文提取',
          '基础 AI 总结功能 (试用体验)'
        ]
      },
      annual: {
        name: 'Pro 年度会员',
        price: '$29.99',
        period: '/ 年 (约 $2.49/月)',
        desc: '为信息深度处理与日常高频阅读者打造',
        button: '立即开通 Pro 年度版',
        features: [
          '无限次 AI 核心提炼与多维度观点洞察',
          'Portal 信息闭环与热点星图探索 (Constellation)',
          'AI 每日/每周深度研究报告自动生成',
          '支持绑定 3 台设备多端同步权益',
          '自定义 AI 快捷指令与 Prompt 流水线',
          'RSA-PSS 密码学防篡改证书',
          '优先技术支持与新功能抢先体验'
        ]
      },
      lifetime: {
        name: 'Pro 终身买断版',
        price: '$49.99',
        period: '一次性支付，终身享有',
        desc: '一次买断，终身尊享全部 Pro 进阶能力与后续所有大版本升级',
        button: '获取终身授权 License',
        features: [
          '包含全部 Pro 年度会员的所有进阶功能',
          '永久享有未来所有 v2.x、v3.x 重大版本更新',
          '支持 3 台设备随时自主解绑与换机恢复',
          '支持作为激活码赠送亲友或同事 (Giftable)',
          '专属早期测试通道与开发者直通支持'
        ]
      },
      monthly: {
        name: 'Pro 月度会员',
        price: '$3.99',
        period: '/ 月',
        desc: '弹性体验全部 Pro 进阶功能，随时可退订',
        button: '开通月度订阅',
        features: [
          '全部 Pro 进阶功能',
          '支持 3 台设备多端同步',
          '支持随时在 Creem 客户门户退订'
        ]
      }
    },
    faqTitle: '常见问题解答',
    faqs: [
      {
        q: '购买后如何激活 RSSFlow Pro？',
        a: '如果您在官网登录了 Clerk 账号并完成购买，扩展内登录相同账号会自动无缝激活，无需任何额外操作；如果您选择免登录直接购买，我们会通过网页与邮件向您发放 16 位激活码（ACT-XXXX），在扩展选项页输入即可激活。'
      },
      {
        q: '购买可以在几台电脑上使用？',
        a: '每个 Pro 授权默认支持同时激活并在 3 台设备（例如：公司电脑、家用电脑、笔记本）上使用。登录账号后还可在选项页随时自助管理与解绑旧设备。'
      },
      {
        q: '支持哪些支付方式？发票如何获取？',
        a: '我们通过全球合规支付平台 Creem.io 处理支付，支持信用卡 (Visa/Mastercard/Amex)、Apple Pay、Google Pay 等。支付成功后会通过邮件自动发送标准电子收据与发票。'
      },
      {
        q: '购买后可以退款吗？',
        a: '如果您对产品有任何不满意，可在购买后 7 天内联系我们申请无条件全额退款。'
      }
    ]
  },
  'en': {
    badge: 'Simple, Transparent Pricing',
    title: 'Choose the Perfect Plan for',
    titleGradient: 'RSSFlow Pro',
    desc: 'Supercharge your RSS reading with AI distillation, insight graphs, and multi-device sync.',
    billingCycle: {
      annual: 'Annual (Save 30%)',
      lifetime: 'Lifetime (Best Value)',
      monthly: 'Monthly'
    },
    popular: 'Most Popular',
    bestValue: 'Lifetime Access',
    plans: {
      free: {
        name: 'Starter',
        price: '$0',
        period: 'Free forever',
        desc: 'Pure local modern RSS reader experience',
        button: 'Install Extension',
        features: [
          'Unlimited RSS/Atom feed management',
          'OPML import & export',
          'High-performance local SQLite OPFS storage',
          'Built-in fulltext article extractor',
          'Basic AI summary trial'
        ]
      },
      annual: {
        name: 'Pro Annual',
        price: '$29.99',
        period: '/ year (~$2.49/mo)',
        desc: 'For power readers seeking deep intelligence & insights',
        button: 'Get Pro Annual',
        features: [
          'Unlimited AI core synthesis & insights',
          'Portal loop & topic constellation explorer',
          'Automated daily & weekly AI research reports',
          'Sync across up to 3 devices simultaneously',
          'Custom prompt workflows & shortcuts',
          'RSA-PSS cryptographic zero-tamper certificates',
          'Priority support & early beta access'
        ]
      },
      lifetime: {
        name: 'Pro Lifetime',
        price: '$49.99',
        period: 'One-time payment, forever',
        desc: 'Pay once, own forever. Enjoy all future major version upgrades.',
        button: 'Get Lifetime License',
        features: [
          'All Pro features included permanently',
          'All future v2.x & v3.x major upgrades included',
          'Self-serve device management for 3 devices',
          'Can be transferred or gifted as activation key',
          'Direct developer contact & VIP support'
        ]
      },
      monthly: {
        name: 'Pro Monthly',
        price: '$3.99',
        period: '/ month',
        desc: 'Flexible monthly billing, cancel anytime',
        button: 'Start Monthly Plan',
        features: [
          'Full Pro features unlocked',
          'Multi-device sync on 3 devices',
          'Cancel anytime via customer portal'
        ]
      }
    },
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'How do I activate after purchasing?',
        a: 'If you sign in with your account when purchasing, your Pro access will automatically activate in the extension upon login. If you checkout as a guest, an activation code (ACT-XXXX) is displayed immediately and sent to your email.'
      },
      {
        q: 'How many devices are supported?',
        a: 'Each license supports up to 3 devices concurrently (e.g., work PC, home PC, laptop). You can also unbind older devices anytime.'
      },
      {
        q: 'What payment methods are supported?',
        a: 'We use Creem.io (Merchant of Record) for global tax compliance, supporting Credit Cards, Apple Pay, Google Pay, and standard invoices.'
      },
      {
        q: 'Can I get a refund?',
        a: 'Yes, we offer a 7-day no-questions-asked refund policy. Simply contact our support team.'
      }
    ]
  }
};

export default function PricingPage() {
  const { lang } = useLanguage();
  const [cycle, setCycle] = useState<'annual' | 'lifetime' | 'monthly'>('lifetime');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const t = PRICING_I18N[lang === 'zh-CN' || lang === 'zh-TW' ? 'zh-CN' : 'en'];

  // Creem Checkout Links (可由环境变量覆盖，或者默认指向 Creem 结账链接)
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
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-white/5 flex flex-col items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <div className="font-semibold text-white text-sm">7 天无理由退款</div>
              <div className="text-xs text-slate-400">不满意随时联系我们，快速全额退回原账户</div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-white/5 flex flex-col items-center gap-2">
              <Laptop className="w-6 h-6 text-emerald-400" />
              <div className="font-semibold text-white text-sm">支持 3 台设备同时使用</div>
              <div className="text-xs text-slate-400">台式机、笔记本无缝多端同步，随时可解绑</div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-white/5 flex flex-col items-center gap-2">
              <Gift className="w-6 h-6 text-emerald-400" />
              <div className="font-semibold text-white text-sm">支持免注册买码赠送</div>
              <div className="text-xs text-slate-400">生成的 16 位激活码可自由绑定或作为礼物赠送</div>
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
                    className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between font-semibold text-white hover:text-emerald-400 transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
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
