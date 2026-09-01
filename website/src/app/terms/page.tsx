'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Starfield } from '@/components/Starfield';
import { Footer } from '@/components/Footer';
import {
  Scale,
  Package,
  Key,
  CreditCard,
  Ban,
  Laptop,
  RefreshCw,
  Headphones,
  FileText,
  ChevronRight,
  Mail,
  ShieldCheck,
} from 'lucide-react';

const SUPPORT_EMAIL = 'support@oinchain.com';
const SECONDARY_EMAIL = 'oinchain@gmail.com';

interface ContentSection {
  title: string;
  icon: React.ReactNode;
  content: {
    subtitle?: string;
    text?: string;
    list?: string[];
  }[];
}

interface TermsLanguageContent {
  title: string;
  lastUpdated: string;
  intro: string;
  breadcrumb: string;
  sections: ContentSection[];
  footer: {
    contact: string;
    email: string;
    secondaryEmail: string;
    developer: string;
  };
}

const content: Record<'en' | 'zh', TermsLanguageContent> = {
  zh: {
    title: '服务条款',
    lastUpdated: '最后更新：2026年9月1日',
    breadcrumb: '服务条款',
    intro:
      '欢迎使用 RSSFlow。本服务条款（“条款”）约束您访问 rssflow.oinchain.com、安装与使用 RSSFlow 浏览器扩展，以及购买 RSSFlow Pro 数字授权的行为。继续使用或完成支付，即表示您同意本条款及我们的隐私政策。',
    sections: [
      {
        title: '1. 协议主体与产品',
        icon: <Package className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: '1.1 我们提供什么',
            text: 'RSSFlow 是一款本地优先的 AI RSS 阅读浏览器扩展（Chrome / Edge），商店可安装。免费版提供基础阅读；RSSFlow Pro 是付费数字软件授权（非实物），用于解锁专家指令配额、不限数量定时任务、MCP 桥接，以及最多 3 台设备授权。本产品不是图像/视频生成工具。',
          },
          {
            subtitle: '1.2 不包含的内容',
            list: [
              '我们不出售实物商品。',
              'AI 模型调用采用 BYOK（自带 API Key）。扩展不对您的第三方模型用量收取 Token 溢价。',
              '年付含一对一量身定制的 2 个全新 Skill。终身另含可定制风格的内容站点，以及对作者以 oinchain 品牌后续发布的软件产品申请 VIP/Pro 授权（人工开通，不含现金返利、分成或推荐奖励）。增值项按购买后邮件沟通交付，不属于即时激活码本身。',
            ],
          },
        ],
      },
      {
        title: '2. 账户、授权与设备',
        icon: <Key className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: '2.1 激活方式',
            text: '购买后支持双轨激活：若支付时已登录同一 Clerk 账号，打开扩展登录即可同步权益；游客购买会生成激活码（ACT-XXXX-XXXX-XXXX），在扩展选项页输入即可激活。',
          },
          {
            subtitle: '2.2 许可范围',
            list: [
              '每个 Pro 授权默认可同时在最多 3 台设备上使用。',
              '您获得的是非独占、不可转售的使用权，不获得源代码或知识产权所有权。',
              '终身激活码可赠予他人自用；订阅授权仅限订户在已付费周期内使用，不得转售席位。',
              '登录用户可在扩展设置中解绑设备后更换电脑。',
            ],
          },
        ],
      },
      {
        title: '3. 价格、支付与税务',
        icon: <CreditCard className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: '3.1 定价',
            text: '现行价格公布于 /pricing：免费版 $0；Pro 月付 $5；年付 $50；终身买断 $100。我们可能调整未来价格，已购授权按成交时套餐履行。',
          },
          {
            subtitle: '3.2 支付处理',
            text: '全球收款、销售税/VAT 与发票由 Creem.io 作为 Merchant of Record（名义商户）处理。您在 Creem 托管收银台付款。换卡、下载发票、取消订阅请使用购买邮箱登录 Creem 客户门户（入口见收据邮件）。',
          },
        ],
      },
      {
        title: '4. 交付',
        icon: <Laptop className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            text: '支付成功后，系统通过 webhook 履约：即时生成激活码和/或写入账号授权。激活码会在支付成功页展示。请妥善保存激活码与收据邮件。',
          },
        ],
      },
      {
        title: '5. 退款政策（数字商品）',
        icon: <Ban className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: '5.1 原则',
            text: 'RSSFlow Pro 属于即时交付并生效的数字虚拟商品与软件授权。一旦完成激活或发放激活码，原则上不支持无理由退款。',
          },
          {
            subtitle: '5.2 可处理的异常',
            list: [
              '重复扣费或支付系统错误。',
              '已付款但系统未交付激活码或未写入账号授权。',
              '经核验的欺诈或未授权交易。',
            ],
          },
          {
            subtitle: '5.3 如何申请',
            text: '请在订单生成后及时联系 support@oinchain.com，并提供 Creem 订单号或 checkout_id，以便人工核验。退款获准后，对应授权将被吊销。',
          },
        ],
      },
      {
        title: '6. 订阅的取消与续费',
        icon: <RefreshCw className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            text: '月付与年付为自动续费。您可随时在 Creem 客户门户取消下一期，无需联系我们批准。取消后当前已付周期结束前仍可使用；到期停止。终身一次买断、无续费。门户入口在 Creem 发给您的收据邮件中。',
          },
        ],
      },
      {
        title: '7. 可接受使用',
        icon: <Scale className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            list: [
              '不得破解、篡改本地授权凭证或绕过设备限制。',
              '不得将订阅账号大规模共享给未授权第三方用于商业转售。',
              '不得利用本产品从事违法或侵害他人权利的活动。',
              '违反本条款时，我们可暂停或撤销授权。',
            ],
          },
        ],
      },
      {
        title: '8. 免责声明',
        icon: <FileText className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            text: '软件按“现状”提供。在适用法律允许的范围内，我们不对因第三方 AI 接口中断、您本地数据丢失、或超出合理控制的故障承担责任。隐私处理见隐私政策。',
          },
        ],
      },
      {
        title: '9. 变更',
        icon: <FileText className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            text: '我们可能更新本条款。修订后的版本将发布于本页并更新日期。重大变更后继续使用或续费，视为接受更新条款。',
          },
        ],
      },
      {
        title: '10. 客户支持',
        icon: <Headphones className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            text: '官方客服邮箱：support@oinchain.com。订单、激活与授权问题我们将在 3 个工作日内回复。请在 Creem 商户资料中填写同一地址。',
          },
        ],
      },
    ],
    footer: {
      contact: '订单、激活码或退款相关问题，请联系：',
      email: SUPPORT_EMAIL,
      secondaryEmail: SECONDARY_EMAIL,
      developer: 'RSSFlow 团队',
    },
  },
  en: {
    title: 'Terms of Service',
    lastUpdated: 'Last updated: September 1, 2026',
    breadcrumb: 'Terms',
    intro:
      'These Terms of Service (“Terms”) govern your use of rssflow.oinchain.com, the RSSFlow browser extension, and purchases of RSSFlow Pro digital licenses. By using the product or completing payment, you agree to these Terms and our Privacy Policy.',
    sections: [
      {
        title: '1. Parties and product',
        icon: <Package className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: '1.1 What we provide',
            text: 'RSSFlow is a local-first AI RSS reader for Chrome and Edge, available in the official stores. The free tier is a reader. RSSFlow Pro is a paid digital software license (not a physical good) for expert-command quotas, unlimited scheduled tasks, MCP, and use on up to 3 devices. It is not an image/video generator.',
          },
          {
            subtitle: '1.2 What is not included',
            list: [
              'We do not sell physical goods.',
              'AI model calls use BYOK (bring your own API key). RSSFlow does not add a token markup on your provider usage.',
              'Annual includes two brand-new 1:1 Skills. Lifetime also includes a custom-styled content site, and the right to request VIP/Pro access to later software products published under the oinchain brand (granted manually as a license; no cashback, referral payouts, or resale). These perks are fulfilled by email after purchase and are separate from the instant key.',
            ],
          },
        ],
      },
      {
        title: '2. Accounts, license, and devices',
        icon: <Key className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: '2.1 Activation',
            text: 'Dual-track activation: if you check out while signed in with the same Clerk account, the extension unlocks after you sign in. Guest checkout issues an activation code (ACT-XXXX-XXXX-XXXX) to redeem in extension options.',
          },
          {
            subtitle: '2.2 License grant',
            list: [
              'Each Pro license may be used on up to 3 devices at a time.',
              'You receive a non-exclusive, non-sublicensable right to use the software. You do not acquire source code or IP ownership.',
              'A Lifetime key may be gifted for personal use. Subscription access is only for the paying subscriber during the paid term and may not be resold as seats.',
              'Signed-in users may unbind a device in extension settings and activate on a new machine.',
            ],
          },
        ],
      },
      {
        title: '3. Pricing, payment, and tax',
        icon: <CreditCard className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: '3.1 Pricing',
            text: 'Current prices are listed at /pricing: Free $0; Pro Monthly $5; Annual $50; Lifetime $100. Future list prices may change; completed purchases are honored as sold.',
          },
          {
            subtitle: '3.2 Payments',
            text: 'Checkout, sales tax/VAT, and invoices are handled by Creem.io as Merchant of Record. You pay on Creem hosted checkout. Update cards, download invoices, and cancel subscriptions in the Creem customer portal using the email on your receipt.',
          },
        ],
      },
      {
        title: '4. Delivery',
        icon: <Laptop className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            text: 'After successful payment, our systems fulfill via webhook: an activation code is generated and/or account entitlements are written immediately. The code is shown on the payment success page. Keep your code and receipt.',
          },
        ],
      },
      {
        title: '5. Refunds (digital goods)',
        icon: <Ban className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: '5.1 Policy',
            text: 'RSSFlow Pro is an instantly delivered digital software license. Once a key is issued or access is activated, purchases are generally non-refundable.',
          },
          {
            subtitle: '5.2 Exceptions we will review',
            list: [
              'Duplicate charges or payment-processor errors.',
              'Payment succeeded but no activation code or account grant was delivered.',
              'Verified unauthorized or fraudulent transactions.',
            ],
          },
          {
            subtitle: '5.3 How to request',
            text: 'Email support@oinchain.com promptly with your Creem order id or checkout_id. Approved refunds revoke the corresponding license.',
          },
        ],
      },
      {
        title: '6. Subscriptions and cancellation',
        icon: <RefreshCw className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            text: 'Monthly and annual plans renew automatically. Cancel the next renewal anytime in the Creem customer portal — no approval needed. Access continues until the end of the paid period. Lifetime is a one-time purchase with no renewal. The portal link is in your Creem receipt email.',
          },
        ],
      },
      {
        title: '7. Acceptable use',
        icon: <Scale className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            list: [
              'Do not crack, tamper with, or bypass license or device limits.',
              'Do not resell subscription seats or share an account at commercial scale.',
              'Do not use the product for unlawful purposes.',
              'We may suspend or revoke licenses for material breaches.',
            ],
          },
        ],
      },
      {
        title: '8. Disclaimer',
        icon: <FileText className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            text: 'The software is provided “as is.” To the extent permitted by law, we are not liable for third-party AI outages, local data loss, or failures outside reasonable control. Privacy practices are described in the Privacy Policy.',
          },
        ],
      },
      {
        title: '9. Changes',
        icon: <FileText className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            text: 'We may update these Terms. The latest version is published on this page with a new date. Continued use or renewal after material changes constitutes acceptance.',
          },
        ],
      },
      {
        title: '10. Support',
        icon: <Headphones className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            text: 'Official support: support@oinchain.com. We respond to order, activation, and license requests within 3 business days. Use the same address in your Creem Business Details.',
          },
        ],
      },
    ],
    footer: {
      contact: 'For orders, activation codes, or refunds, contact:',
      email: SUPPORT_EMAIL,
      secondaryEmail: SECONDARY_EMAIL,
      developer: 'RSSFlow Team',
    },
  },
};

export default function TermsPage() {
  const { lang, setLang } = useLanguage();
  const displayLang = lang === 'zh-CN' || lang === 'zh-TW' ? 'zh' : 'en';
  const t = content[displayLang];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30">
      <Navbar />
      <Starfield />

      <div className="relative pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/5 pb-12"
          >
            <div>
              <nav className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-slate-300">{t.breadcrumb}</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{t.title}</h1>
              <p className="text-emerald-400/80 font-medium">{t.lastUpdated}</p>
            </div>

            <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 self-start md:self-auto">
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  lang !== 'zh-CN' && lang !== 'zh-TW'
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLang('zh-CN')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  lang === 'zh-CN' || lang === 'zh-TW'
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                中文
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-16"
          >
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-emerald-400 mt-1 shrink-0" />
                <p className="text-lg text-slate-200 leading-relaxed font-medium">{t.intro}</p>
              </div>
            </div>

            <div className="grid gap-8">
              {t.sections.map((section, idx) => (
                <motion.section
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-colors group shadow-lg shadow-black/20"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-emerald-500/10 rounded-2xl group-hover:scale-110 transition-transform">
                      {section.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    {section.content.map((block, bIdx) => (
                      <div key={bIdx} className={block.subtitle ? 'space-y-4' : 'md:col-span-2 space-y-4'}>
                        {block.subtitle ? (
                          <h3 className="text-lg font-semibold text-emerald-400/90">{block.subtitle}</h3>
                        ) : null}
                        {block.text ? (
                          <p className="text-slate-300 leading-relaxed text-sm md:text-base">{block.text}</p>
                        ) : null}
                        {block.list ? (
                          <ul className="space-y-3">
                            {block.list.map((item, iIdx) => (
                              <li key={iIdx} className="flex gap-3 text-slate-300 text-sm md:text-base">
                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </motion.section>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-10 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-slate-900/40 to-transparent border border-emerald-500/30 text-center shadow-xl shadow-black/30"
            >
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-500/20">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{t.footer.developer}</h3>
              <p className="text-slate-400 mb-6 max-w-lg mx-auto">{t.footer.contact}</p>
              <div className="flex flex-wrap justify-center gap-4 text-lg">
                <a
                  href={`mailto:${t.footer.email}`}
                  className="px-6 py-3 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-medium hover:bg-emerald-500 hover:text-white transition-all shadow-md shadow-emerald-500/10"
                >
                  {t.footer.email}
                </a>
                <a
                  href={`mailto:${t.footer.secondaryEmail}`}
                  className="px-6 py-3 rounded-xl bg-white/5 text-slate-300 border border-white/10 font-medium hover:bg-white/10 hover:text-white transition-all"
                >
                  {t.footer.secondaryEmail}
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
