'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Starfield } from '@/components/Starfield';
import { Footer } from '@/components/Footer';
import { Shield, Globe, Clock, ChevronRight, Mail, Database, Lock, EyeOff, FileText, CheckCircle2, ShieldCheck, UserCheck, Key } from 'lucide-react';

interface ContentSection {
  title: string;
  icon: React.ReactNode;
  content: {
    subtitle?: string;
    text?: string;
    list?: string[];
  }[];
}

interface PrivacyLanguageContent {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: ContentSection[];
  footer: {
    contact: string;
    email: string;
    secondaryEmail?: string;
    developer: string;
  };
}

const content: Record<'en' | 'zh', PrivacyLanguageContent> = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last Updated: August 12, 2026",
    intro: "RSSFlow Reader (\"RSSFlow\" or \"the Extension\") values your privacy and data security above all else. This Privacy Policy comprehensively discloses how we collect, process, store, and share your data (including account credentials, local reading data, and AI interactions), and details our strict compliance with Google Chrome Web Store Developer Program Policies.",
    sections: [
      {
        title: "1. Data Collection (What Data We Collect)",
        icon: <Database className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "1.1 User Account & Authentication Data (Email, Password & Verification Code)",
            text: "When you optionally register or sign in to an RSSFlow account to synchronize licenses and preferences across devices, we collect:",
            list: [
              "Email Address: Collected during account registration or sign-in to identify your account, send email verification codes, and manage multi-device license synchronization.",
              "Password & Login Credentials: Submitted during account registration and login to authenticate your identity. Passwords are never stored in plain text; they are securely salted, hashed, and processed via our trusted authentication infrastructure (Clerk).",
              "Verification Codes & Activation Codes: Collected when verifying your email during registration/login, password resets, or when applying Pro license keys to unlock advanced features.",
              "Anonymous Device & Session Identifiers: Generated to securely associate license entitlements and manage active signed-in devices."
            ]
          },
          {
            subtitle: "1.2 RSS Subscriptions & Content Cache",
            text: "Stored locally in your browser to enable RSS feed reading, offline access, and feed management:",
            list: [
              "RSS/Atom Feed URLs actively added or imported (OPML) by you",
              "Article titles, web links, author names, publication dates, summaries, and full-text HTML/plain text cache",
              "User reading records: read/unread states, starred/bookmarked articles, custom categories, tags, and reading notes",
              "Local content caches from Discovery, Summary, and Flow timeline views"
            ]
          },
          {
            subtitle: "1.3 User Configuration & Integration Credentials",
            text: "Stored locally to provide personalized reading experiences and user-initiated integrations:",
            list: [
              "UI & Display preferences: themes, layout densities, language, and font settings",
              "AI model configuration: selected model providers, model names, custom Prompts, and user-provided API Keys (e.g., OpenAI, Google Gemini, SiliconFlow, DeepSeek)",
              "Integration tokens: Telegram Bot Token / Chat ID, Feishu Webhook URL, and MCP Bridge configurations",
              "Task automation schedules, notification preferences, and speech (TTS) settings"
            ]
          },
          {
            subtitle: "1.4 AI Interaction & Chat Data",
            text: "When you explicitly trigger AI summarization, chat assistant, or translation features:",
            list: [
              "Selected article excerpts, user queries, and chat conversation context",
              "Custom instructions, prompt templates, and AI-generated responses (summaries, insights, mindmaps)"
            ]
          },
          {
            subtitle: "1.5 Explicit Non-Collection & Data Boundaries",
            text: "Except for the account credentials (Email, Password, Verification Code) you voluntarily provide when creating an optional account, RSSFlow strictly adheres to data minimization:",
            list: [
              "NO unnecessary Personally Identifiable Information (PII) such as home addresses, phone numbers, or government IDs",
              "NO general browser web surfing history outside of your explicitly subscribed RSS feeds",
              "NO financial banking credentials, credit card numbers, or payment data"
            ]
          }
        ]
      },
      {
        title: "2. Data Processing & Purpose (How We Use Your Data)",
        icon: <Globe className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "2.1 Account Authentication & Multi-Device Sync",
            text: "Your email, password, and verification codes are processed exclusively to verify your identity, maintain secure login sessions, and synchronize Pro license status across your authorized devices."
          },
          {
            subtitle: "2.2 Core RSS Aggregation & Offline Reading",
            text: "The extension fetches RSS/Atom feeds in the background, using an offscreen document to safely parse HTML/XML feeds into clean articles stored in your local SQLite WASM database."
          },
          {
            subtitle: "2.3 AI-Powered Summaries & Conversations",
            text: "When you actively request an AI summary or chat query, the relevant article snippet and prompt are transmitted solely to your chosen AI provider endpoint to generate the requested analysis."
          },
          {
            subtitle: "2.4 Scheduled Automations & Push Notifications",
            text: "When automated digest tasks execute, article updates and summaries are formatted and forwarded directly to your configured Telegram or Feishu webhook endpoints."
          },
          {
            subtitle: "2.5 Text-to-Speech (TTS)",
            text: "Selected article content is synthesized locally using the browser Speech API or sent to your chosen cloud TTS provider to generate audio playback."
          }
        ]
      },
      {
        title: "3. Data Storage, Retention & Security (Where and How Long Data Is Stored)",
        icon: <Lock className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "3.1 Local-First Architecture for Content",
            text: "Over 95% of RSSFlow's data (reading lists, cached articles, local settings, and AI chat history) is stored strictly on your local device using Chrome's storage API and local SQLite WebAssembly (unlimitedStorage)."
          },
          {
            subtitle: "3.2 Account & Credential Security",
            text: "Account authentication data (Email, Password, Verification Codes) is transmitted exclusively over encrypted HTTPS/TLS connections. Passwords are cryptographic salted hashes managed by enterprise-grade identity provider Clerk; plain-text passwords are never accessible to or stored by us."
          },
          {
            subtitle: "3.3 Data Retention Period",
            text: "Local reading data persists until you manually clear it, reset the extension, or uninstall it. Account authentication data is retained for as long as your account remains active; you can delete your account and all associated data at any time."
          }
        ]
      },
      {
        title: "4. Data Sharing & Third-Party Disclosure (Who We Share Data With)",
        icon: <Shield className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "4.1 Affirmative Declaration on Data Sharing",
            text: "We do NOT sell, rent, monetize, or trade your personal data under any circumstances. Data is transmitted only when you actively initiate features:",
            list: [
              "Authentication Provider (Clerk): Processes your email, password (hashed), and verification codes solely to authenticate your account and manage multi-device sign-in sessions.",
              "Subscribed RSS Feed Servers: Direct HTTP(S) requests to retrieve article updates from feeds you add.",
              "User-Configured AI Providers: Direct API calls to user-configured AI providers (e.g., OpenAI, Google Gemini, SiliconFlow, DeepSeek).",
              "User-Configured Messaging Channels: Direct webhook payloads to user-configured messaging channels (Telegram Bot API, Feishu Open Platform).",
              "License Validation Service: License verification requests (activation key & anonymous device token) to validate license status."
            ]
          },
          {
            subtitle: "4.2 Third-Party Terms",
            text: "Third-party services process data under their respective privacy policies. We encourage you to review their terms before configuring their endpoints."
          }
        ]
      },
      {
        title: "5. Chrome Web Store Limited Use Compliance Declaration",
        icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "5.1 Google Developer Program Policies Adherence",
            text: "RSSFlow complies rigorously with the Chrome Web Store Limited Use Policy for all collected data (including Email, Password, and Verification Codes):",
            list: [
              "No Data Sale: We do NOT sell, lease, or monetize user data (including email addresses and credentials) under any circumstances.",
              "Single Purpose & Core Utility: We do NOT use or transfer user data for purposes unrelated to the core functionalities of RSS reading, AI assistance, user notifications, and user account management.",
              "No Targeted Advertising: We do NOT use or transfer user data for personalized advertising, retargeting, or behavioral profiling.",
              "No Credit Assessment: We do NOT use or transfer user data to evaluate creditworthiness or for lending determinations."
            ]
          }
        ]
      },
      {
        title: "6. Browser Permissions & Justification",
        icon: <FileText className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "6.1 Declaration of Extension Permissions",
            list: [
              "offscreen: Required under Manifest V3 to safely parse XML/HTML feeds via DOMParser and execute the local SQLite WebAssembly engine in an isolated worker thread.",
              "unlimitedStorage: Required to store full offline articles, vector caches, and SQLite database files without exceeding Chrome's default 5MB quota.",
              "sidePanel: Required to render the reader interface and AI conversation panel inside Chrome's native sidebar.",
              "storage & alarms: Required to persist local user preferences and trigger background feed update intervals.",
              "host_permissions (https://*/*): Required to retrieve RSS/Atom feeds from user-specified feed URLs and connect to user-configured AI/Webhook/Authentication endpoints."
            ]
          }
        ]
      },
      {
        title: "7. User Rights & Data Deletion (Your Control)",
        icon: <CheckCircle2 className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "7.1 Full Data Autonomy & Account Deletion",
            text: "You maintain complete ownership and control over your data at all times:",
            list: [
              "Export all feed subscriptions anytime via standard OPML format",
              "Individually manage, edit, or delete articles, feeds, custom prompts, and chat histories",
              "Manage authorized devices and log out of account sessions at any time in Account Settings",
              "Permanently delete your account and all associated credentials upon request",
              "Instantly purge all local data by clicking 'Reset Extension Data' in settings or uninstalling the extension"
            ]
          }
        ]
      },
      {
        title: "8. Children's Privacy",
        icon: <EyeOff className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "8.1 Protection of Minors",
            text: "RSSFlow is designed for general audiences and does not knowingly collect information from children under 13. Minors should use this extension under parental or guardian supervision."
          }
        ]
      },
      {
        title: "9. Policy Updates & Contact",
        icon: <Clock className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "9.1 Policy Revisions",
            text: "We may update this Privacy Policy to reflect product improvements or regulatory requirements. Any updates will be published on this page with an updated 'Last Updated' date."
          }
        ]
      }
    ],
    footer: {
      contact: "If you have any questions or requests regarding this Privacy Policy or your account data, please contact us:",
      email: "support@oinchain.com",
      secondaryEmail: "oinchain@gmail.com",
      developer: "RSSFlow Team (pizone)"
    }
  },
  zh: {
    title: "隐私政策",
    lastUpdated: "最后更新：2026年8月12日",
    intro: "RSSFlow Reader（以下简称“RSSFlow”或“本扩展”）高度重视您的隐私与数据安全。本隐私政策详细披露我们如何收集、处理、存储和共享您的数据（包括账户凭证、本地阅读数据及 AI 交互信息），并严格遵循 Google Chrome Web Store 开发者计划政策及用户数据隐私保护规范。",
    sections: [
      {
        title: "1. 我们收集哪些数据 (Data Collection)",
        icon: <Database className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "1.1 用户账户与身份认证数据 (邮箱、密码与验证码)",
            text: "当您选择注册或登录 RSSFlow 账户以在多设备间同步 Pro 权限与阅读配置时，我们会收集：",
            list: [
              "电子邮箱地址 (Email Address)：在您注册、登录账户或申请找回密码时收集，用于识别账户身份、发送验证码及管理多设备授权。",
              "登录密码与凭据 (Password & Credentials)：在账户注册和登录过程中提交，用于验证您的身份。密码绝不会以明文存储，由业内成熟的身份认证系统（Clerk）进行强哈希加盐加密处理。",
              "验证码与激活码 (Verification & Activation Codes)：在注册登录邮箱验证、密码重置或兑换 Pro 授权时收集，用于核实所有权及激活高级功能。",
              "匿名设备标识符 (Anonymous Device Identifier)：本地生成的随机设备标识，用于绑定多设备授权与管理当前登录设备。"
            ]
          },
          {
            subtitle: "1.2 本地阅读与 RSS 订阅数据",
            text: "这些数据保存在您的浏览器本地，用于实现 RSS 订阅阅读与离线管理：",
            list: [
              "您主动添加或通过 OPML 导入的 RSS / Atom 订阅源地址",
              "文章标题、原文链接、作者、发布时间、文章摘要及全文 HTML/纯文本缓存",
              "阅读状态记录：已读/未读状态、收藏/星标文章、自定义分类、标签与阅读笔记",
              "发现页、摘要流、Flow 视图等功能生成的本地缓存"
            ]
          },
          {
            subtitle: "1.3 用户个性化配置与第三方凭据",
            text: "保存在本地以提供定制化阅读体验与主动触发的外部集成：",
            list: [
              "界面与显示偏好：主题外观、布局密度、语言、阅读字体设置",
              "AI 模型配置：选定的模型提供商、模型名称、自定义 Prompts 以及用户配置的 API Key（如 OpenAI、Google Gemini、SiliconFlow、DeepSeek）",
              "第三方推送凭据：Telegram Bot Token / Chat ID、飞书 Webhook 地址、MCP Bridge 配置",
              "定时任务计划、通知提醒偏好及语音（TTS）配置"
            ]
          },
          {
            subtitle: "1.4 AI 智能交互与聊天数据",
            text: "当您主动使用 AI 摘要、AI 助手对话或翻译功能时：",
            list: [
              "被分析的文章选段、用户提问内容及对话上下文",
              "自定义指令、Prompt 提示词模板及 AI 生成的分析结果（摘要、洞察、思维导图等）"
            ]
          },
          {
            subtitle: "1.5 明确不收集的数据与数据边界 (Data Boundaries)",
            text: "除您在创建可选账户时主动提供的凭据（邮箱、密码、验证码）外，RSSFlow 严格践行最小化数据原则：",
            list: [
              "不收集多余的个人身份信息（如真实姓名、家庭地址、电话号码、身份证件）",
              "不收集除您主动订阅的 RSS 源以外的任何网页浏览历史（Browsing History）",
              "不收集任何支付信息、信用卡卡号或银行凭证"
            ]
          }
        ]
      },
      {
        title: "2. 数据处理与使用目的 (Data Processing & Purpose)",
        icon: <Globe className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "2.1 账户身份验证与多设备授权同步",
            text: "您的邮箱、密码与验证码仅用于验证用户身份、维护安全的登录会话，以及在您授权的不同浏览器与设备间同步 Pro 权限。"
          },
          {
            subtitle: "2.2 核心 RSS 聚合与离线阅读",
            text: "扩展在后台拉取订阅源内容，并通过 offscreen 离线文档安全地解析 HTML/XML，将其存储在本地 SQLite WASM 数据库中，实现高性能的离线阅读。"
          },
          {
            subtitle: "2.3 AI 智能分析与对话处理",
            text: "仅在您主动发起 AI 请求时，特定文章内容及 Prompt 才会发送给您选择的 AI 服务端点进行推理计算并即时返回结果。"
          },
          {
            subtitle: "2.4 定时自动化报告与消息推送",
            text: "当定时任务触发时，扩展在本地生成文章摘要合集，并直接推送到您配置的 Telegram 机器人或飞书 Webhook。"
          },
          {
            subtitle: "2.5 语音播报 (TTS)",
            text: "文章文本由浏览器内置语音合成引擎本地朗读，或根据您的设置发送至您选择的云端 TTS 服务生成音频。"
          }
        ]
      },
      {
        title: "3. 数据存储、保留与安全 (Data Storage & Security)",
        icon: <Lock className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "3.1 内容本地优先存储架构",
            text: "RSSFlow 超过 95% 的阅读数据（订阅清单、缓存文章、本地设置、AI 对话历史）严格存储在您的本机浏览器中（通过 Chrome Storage 与 SQLite WASM unlimitedStorage）。"
          },
          {
            subtitle: "3.2 账户认证安全与密码加密",
            text: "账户数据传输全程采用 HTTPS / TLS 强加密。登录密码通过企业级身份平台 Clerk 进行密码学加盐哈希，本团队无法接触且从不以明文形式保存您的密码。"
          },
          {
            subtitle: "3.3 数据保留期限 (Retention)",
            text: "本地数据一直保留直到您手动删除或卸载扩展。账户信息在您的账户存续期间保留，您随时可以申请注销账户并彻底删除全部关联认证数据。"
          }
        ]
      },
      {
        title: "4. 数据共享与第三方披露 (Data Sharing & Third-Party Disclosure)",
        icon: <Shield className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "4.1 明确的数据共享声明",
            text: "我们绝不出售、出租、转让或商业化变现任何用户数据。数据仅在您主动发起对应功能时流向以下受信任端点：",
            list: [
              "身份认证平台 (Clerk)：处理您的注册邮箱、密码（哈希加密）与验证码，仅用于账户鉴权与会话安全。",
              "RSS 目标站点：直接向您订阅的 RSS 目标站点发起 HTTP(S) 请求以获取更新。",
              "用户配置的 AI 服务商：直接向您配置的 AI 服务商（如 OpenAI、Google Gemini、SiliconFlow、DeepSeek）发送请求。",
              "用户配置的消息平台：直接向您配置的消息平台（Telegram Bot API、飞书开放平台）发送 Webhook 消息。",
              "授权验证服务：向我们的激活验证服务发送匿名设备 ID 与激活码以完成授权校验。"
            ]
          },
          {
            subtitle: "4.2 第三方服务条款",
            text: "上述第三方服务依据其各自的隐私政策处理数据。建议您在配置相关端点前查阅其隐私条款。"
          }
        ]
      },
      {
        title: "5. Chrome Web Store 有限使用合规保证 (Limited Use Declaration)",
        icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "5.1 严格遵守 Chrome 开发者计划政策",
            text: "RSSFlow 郑重声明对所有收集的数据（包括邮箱、密码、验证码等）严格遵守有限使用规定：",
            list: [
              "不出售数据：在任何情况下均不出售、出租或货币化用户数据（包括邮箱地址与凭证）。",
              "单一用途保证：不将用户数据用于与 RSS 阅读、AI 辅助、通知推送及账户授权等核心功能无关的用途。",
              "不用于广告或画像：不将用户数据用于个性化广告、再营销或用户行为画像。",
              "不用于信用评估：不将用户数据用于评估信用度或借贷相关决策。"
            ]
          }
        ]
      },
      {
        title: "6. 浏览器权限申报与使用理由 (Permissions Justification)",
        icon: <FileText className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "6.1 敏感权限的最小化使用",
            list: [
              "offscreen (后台离线文档)：Manifest V3 下后台缺少 DOM 环境。用于安全解析 HTML/XML 订阅源并执行本地 SQLite WebAssembly 数据库引擎。",
              "unlimitedStorage (无限制本地存储)：用于在本地安全存储海量离线文章缓存与 SQLite 数据，避免超出 Chrome 默认 5MB 上限导致数据丢失。",
              "sidePanel (侧边栏)：在 Chrome 原生侧边栏中呈现阅读界面与 AI 对话面板。",
              "storage & alarms (本地存储与闹钟)：保存用户偏好设置并驱动后台定时拉取任务。",
              "host_permissions (https://*/*)：拉取用户自定义的任意 RSS 订阅源及连接用户指定的 AI/Webhook/认证端点。"
            ]
          }
        ]
      },
      {
        title: "7. 用户控制权与账户注销 (Your Rights & Control)",
        icon: <CheckCircle2 className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "7.1 数据的完全掌控与注销权利",
            text: "您随时拥有对数据的完整控制权与管理权利：",
            list: [
              "随时以标准 OPML 格式导出所有订阅源数据",
              "随时在界面中编辑、删除单条文章、清空聊天记录或移除特定订阅源",
              "随时在“账户设置”中管理已授权设备或退出登录会话",
              "随时申请注销账户并彻底删除云端凭证数据",
              "通过扩展设置中的“重置数据”或直接卸载扩展，即可彻底抹除本机的全部本地数据"
            ]
          }
        ]
      },
      {
        title: "8. 未成年人隐私 (Children's Privacy)",
        icon: <EyeOff className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "8.1 未成年人保护",
            text: "RSSFlow 面向普通公众用户，不会有意收集未成年人信息。未成年人请在监护人指导下使用。"
          }
        ]
      },
      {
        title: "9. 政策更新与联系我们 (Policy Updates & Contact)",
        icon: <Clock className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "9.1 政策修订",
            text: "随着产品功能演进或合规要求变化，我们可能会修订本政策。最新版本将始终发布于本页面并标明更新日期。"
          }
        ]
      }
    ],
    footer: {
      contact: "如果您对本隐私政策、账户数据或数据处理有任何疑问、建议或请求，请随时联系我们：",
      email: "support@oinchain.com",
      secondaryEmail: "oinchain@gmail.com",
      developer: "RSSFlow 团队 (pizone)"
    }
  }
};

export default function PrivacyPage() {
  const { lang, setLang } = useLanguage();
  const displayLang = (lang === 'zh-CN' || lang === 'zh-TW') ? 'zh' : 'en';
  const t = content[displayLang];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30">
      <Navbar />
      <Starfield />
      
      <div className="relative pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/5 pb-12"
          >
            <div>
              <nav className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-slate-300">Privacy</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                {t.title}
              </h1>
              <p className="text-emerald-400/80 font-medium">{t.lastUpdated}</p>
            </div>

            <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 self-start md:self-auto">
              <button 
                onClick={() => setLang('en')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${lang !== 'zh-CN' && lang !== 'zh-TW' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'text-slate-400 hover:text-white'}`}
              >
                English
              </button>
              <button 
                onClick={() => setLang('zh-CN')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${lang === 'zh-CN' || lang === 'zh-TW' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'text-slate-400 hover:text-white'}`}
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
            {/* Intro Alert Box */}
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-emerald-400 mt-1 shrink-0" />
                <p className="text-lg text-slate-200 leading-relaxed font-medium">
                  {t.intro}
                </p>
              </div>
            </div>

            <div className="grid gap-8">
              {t.sections.map((section: ContentSection, idx: number) => (
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
                    {section.content.map((block: { subtitle?: string; text?: string; list?: string[] }, bIdx: number) => (
                      <div key={bIdx} className={block.subtitle ? "space-y-4" : "md:col-span-2 space-y-4"}>
                        {block.subtitle && (
                          <h3 className="text-lg font-semibold text-emerald-400/90">{block.subtitle}</h3>
                        )}
                        {block.text && <p className="text-slate-300 leading-relaxed text-sm md:text-base">{block.text}</p>}
                        {block.list && (
                          <ul className="space-y-3">
                            {block.list.map((item: string, iIdx: number) => (
                              <li key={iIdx} className="flex gap-3 text-slate-300 text-sm md:text-base">
                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.section>
              ))}
            </div>

            {/* Contact Footer */}
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
                {t.footer.secondaryEmail && (
                  <a 
                    href={`mailto:${t.footer.secondaryEmail}`} 
                    className="px-6 py-3 rounded-xl bg-white/5 text-slate-300 border border-white/10 font-medium hover:bg-white/10 hover:text-white transition-all"
                  >
                    {t.footer.secondaryEmail}
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
