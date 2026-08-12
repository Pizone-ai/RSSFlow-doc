'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Starfield } from '@/components/Starfield';
import { Footer } from '@/components/Footer';
import { Shield, Globe, Clock, ChevronRight, Mail, Database, Lock, EyeOff, FileText, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';

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
    intro: "RSSFlow Reader (\"RSSFlow\" or \"the Extension\") values your privacy and data security above all else. This Privacy Policy comprehensively discloses how we collect, process, store, and share your data, and details our strict compliance with Google Chrome Web Store Developer Program Policies.",
    sections: [
      {
        title: "1. Data Collection (What Data We Collect)",
        icon: <Database className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "1.1 RSS Subscriptions & Content Cache",
            text: "Stored locally in your browser to enable RSS feed reading, offline access, and feed management:",
            list: [
              "RSS/Atom Feed URLs actively added or imported (OPML) by you",
              "Article titles, web links, author names, publication dates, summaries, and full-text HTML/plain text cache",
              "User reading records: read/unread states, starred/bookmarked articles, custom categories, tags, and reading notes",
              "Local content caches from Discovery, Summary, and Flow timeline views"
            ]
          },
          {
            subtitle: "1.2 User Configuration & Integration Credentials",
            text: "Stored locally to provide personalized reading experiences and user-initiated integrations:",
            list: [
              "UI & Display preferences: themes, layout densities, language, and font settings",
              "AI model configuration: selected model providers, model names, custom Prompts, and user-provided API Keys (e.g., OpenAI, Google Gemini, SiliconFlow, DeepSeek)",
              "Integration tokens: Telegram Bot Token / Chat ID, Feishu Webhook URL, and MCP Bridge configurations",
              "Task automation schedules, notification preferences, and speech (TTS) settings"
            ]
          },
          {
            subtitle: "1.3 AI Interaction & Chat Data",
            text: "When you explicitly trigger AI summarization, chat assistant, or translation features:",
            list: [
              "Selected article excerpts, user queries, and chat conversation context",
              "Custom instructions, prompt templates, and AI-generated responses (summaries, insights, mindmaps)"
            ]
          },
          {
            subtitle: "1.4 License Verification Data (Optional)",
            text: "For Pro license activation or trial status verification:",
            list: [
              "Anonymously generated installation/device identifier",
              "Activation license code and digital signature validation tokens"
            ]
          },
          {
            subtitle: "1.5 Explicit Non-Collection (What We DO NOT Collect)",
            text: "RSSFlow strictly follows data minimization principles:",
            list: [
              "NO Personally Identifiable Information (PII) such as real names, physical addresses, phone numbers, or social security numbers",
              "NO general browser web surfing history outside of your explicitly subscribed RSS feeds",
              "NO passwords, payment information, credit card numbers, or financial banking credentials"
            ]
          }
        ]
      },
      {
        title: "2. Data Processing & Purpose (How We Use Your Data)",
        icon: <Globe className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "2.1 Core RSS Aggregation & Offline Reading",
            text: "The extension fetches RSS/Atom feeds in the background, using an offscreen document to safely parse HTML/XML feeds into clean articles stored in your local SQLite WASM database."
          },
          {
            subtitle: "2.2 AI-Powered Summaries & Conversations",
            text: "When you actively request an AI summary or chat query, the relevant article snippet and prompt are transmitted solely to your chosen AI provider endpoint to generate the requested analysis."
          },
          {
            subtitle: "2.3 Scheduled Automations & Push Notifications",
            text: "When automated digest tasks execute, article updates and summaries are formatted and forwarded directly to your configured Telegram or Feishu webhook endpoints."
          },
          {
            subtitle: "2.4 Text-to-Speech (TTS)",
            text: "Selected article content is synthesized locally using the browser Speech API or sent to your chosen cloud TTS provider to generate audio playback."
          }
        ]
      },
      {
        title: "3. Data Storage, Retention & Security (Where and How Long Data Is Stored)",
        icon: <Lock className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "3.1 Local-First Storage Architecture",
            text: "Over 95% of RSSFlow's data is stored strictly on your local device using Chrome's storage API and local SQLite WebAssembly (unlimitedStorage). We operate zero centralized servers to store your reading history or personal feed lists."
          },
          {
            subtitle: "3.2 Data Retention Period",
            text: "Local data persists until you delete specific articles/feeds, click 'Reset Extension Data' in settings, or uninstall the extension. Transmitted data is processed ephemerally in-transit and not retained by RSSFlow infrastructure."
          },
          {
            subtitle: "3.3 Transmission Encryption & Credential Security",
            text: "All outbound requests (RSS fetching, AI queries, webhooks, licensing) strictly use HTTPS / TLS encryption. Your API keys and bot tokens remain securely encrypted in your browser's local sandbox."
          }
        ]
      },
      {
        title: "4. Data Sharing & Third-Party Disclosure (Who We Share Data With)",
        icon: <Shield className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "4.1 Affirmative Declaration on Data Sharing",
            text: "We do NOT sell, rent, monetize, or trade your data to any data brokers, ad networks, or third parties. Data is transmitted only when you actively initiate features:",
            list: [
              "Direct HTTP(S) requests to your subscribed RSS feed servers to fetch article updates",
              "Direct API calls to user-configured AI providers (e.g., OpenAI, Google Gemini, SiliconFlow, DeepSeek)",
              "Direct webhook payloads to user-configured messaging channels (Telegram Bot API, Feishu Open Platform)",
              "License verification requests (activation key & anonymous device token) to our license validation worker"
            ]
          },
          {
            subtitle: "4.2 Third-Party Terms",
            text: "Third-party services (AI providers, RSS publishers, messaging platforms) process data under their respective privacy policies. We encourage you to review their terms before configuring their endpoints."
          }
        ]
      },
      {
        title: "5. Chrome Web Store Limited Use Compliance Declaration",
        icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "5.1 Google Developer Program Policies Adherence",
            text: "RSSFlow complies rigorously with the Chrome Web Store Limited Use Policy:",
            list: [
              "No Data Sale: We do NOT sell, lease, or monetize user data under any circumstances.",
              "Single Purpose & Core Utility: We do NOT use or transfer user data for purposes unrelated to the core functionalities of RSS reading, AI assistance, and user-initiated notifications.",
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
              "host_permissions (https://*/*): Required to retrieve RSS/Atom feeds from user-specified feed URLs and connect to user-configured AI/Webhook endpoints."
            ]
          }
        ]
      },
      {
        title: "7. User Rights & Data Deletion (Your Control)",
        icon: <CheckCircle2 className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "7.1 Full Data Autonomy",
            text: "You maintain complete ownership and control over your data at all times:",
            list: [
              "Export all feed subscriptions anytime via standard OPML format",
              "Individually manage, edit, or delete articles, feeds, custom prompts, and chat histories",
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
      contact: "If you have any questions or requests regarding this Privacy Policy, please contact us:",
      email: "support@oinchain.com",
      secondaryEmail: "oinchain@gmail.com",
      developer: "RSSFlow Team (pizone)"
    }
  },
  zh: {
    title: "隐私政策",
    lastUpdated: "最后更新：2026年8月12日",
    intro: "RSSFlow Reader（以下简称“RSSFlow”或“本扩展”）高度重视您的隐私与数据安全。本隐私政策详细披露我们如何收集、处理、存储和共享您的数据，并严格遵循 Google Chrome Web Store 开发者计划政策及用户数据保护规范。",
    sections: [
      {
        title: "1. 我们收集哪些数据 (Data Collection)",
        icon: <Database className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "1.1 本地阅读与 RSS 订阅数据",
            text: "这些数据保存在您的浏览器本地，用于实现 RSS 订阅阅读与离线管理：",
            list: [
              "您主动添加或通过 OPML 导入的 RSS / Atom 订阅源地址",
              "文章标题、原文链接、作者、发布时间、文章摘要及全文 HTML/纯文本缓存",
              "阅读状态记录：已读/未读状态、收藏/星标文章、自定义分类、标签与阅读笔记",
              "发现页、摘要流、Flow 视图等功能生成的本地缓存"
            ]
          },
          {
            subtitle: "1.2 用户个性化配置与第三方凭据",
            text: "保存在本地以提供定制化阅读体验与主动触发的集成：",
            list: [
              "界面与显示偏好：主题外观、布局密度、语言、阅读字体设置",
              "AI 模型配置：选定的模型提供商、模型名称、自定义 Prompts 以及用户配置的 API Key（如 OpenAI、Google Gemini、SiliconFlow、DeepSeek）",
              "第三方推送凭据：Telegram Bot Token / Chat ID、飞书 Webhook 地址、MCP Bridge 配置",
              "定时任务计划、通知提醒偏好及语音（TTS）配置"
            ]
          },
          {
            subtitle: "1.3 AI 智能交互与聊天数据",
            text: "当您主动使用 AI 摘要、AI 助手对话或翻译功能时：",
            list: [
              "被分析的文章选段、用户提问内容及对话上下文",
              "自定义指令、Prompt 提示词模板及 AI 生成的分析结果（摘要、洞察、思维导图等）"
            ]
          },
          {
            subtitle: "1.4 许可与激活校验数据（可选）",
            text: "仅在进行 Pro 专业版或试用期权限验证时：",
            list: [
              "本地随机生成的匿名设备/安装标识符",
              "激活码及数字签名校验凭证"
            ]
          },
          {
            subtitle: "1.5 明确不收集的数据 (What We DO NOT Collect)",
            text: "RSSFlow 严格践行最小化数据原则：",
            list: [
              "不收集个人身份识别信息（如真实姓名、家庭地址、电话号码、身份证件）",
              "不收集除您主动订阅的 RSS 源以外的任何网页浏览历史（Browsing History）",
              "不收集任何账户密码、支付信息、信用卡或银行凭证"
            ]
          }
        ]
      },
      {
        title: "2. 数据处理与使用目的 (Data Processing & Purpose)",
        icon: <Globe className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "2.1 核心 RSS 聚合与离线阅读",
            text: "扩展在后台拉取订阅源内容，并通过 offscreen 离线文档安全地解析 HTML/XML，将其存储在本地 SQLite WASM 数据库中，实现闪电般的离线阅读。"
          },
          {
            subtitle: "2.2 AI 智能分析与对话处理",
            text: "仅在您主动发起 AI 请求时，特定文章内容及 Prompt 才会发送给您选择的 AI 服务端点进行推理计算并即时返回结果。"
          },
          {
            subtitle: "2.3 定时自动化报告与消息推送",
            text: "当定时任务触发时，扩展在本地生成文章摘要合集，并直接推送到您配置的 Telegram 机器人或飞书 Webhook。"
          },
          {
            subtitle: "2.4 语音播报 (TTS)",
            text: "文章文本由浏览器内置语音合成引擎本地朗读，或根据您的设置发送至您选择的云端 TTS 服务生成音频。"
          }
        ]
      },
      {
        title: "3. 数据存储、保留与安全 (Data Storage & Security)",
        icon: <Lock className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "3.1 本地优先存储架构",
            text: "RSSFlow 超过 95% 的数据严格存储在您的本机浏览器中（通过 Chrome Storage 与 SQLite WASM unlimitedStorage）。我们没有中央服务器来存储或同步您的个人阅读轨迹与订阅清单。"
          },
          {
            subtitle: "3.2 数据保留期限 (Retention)",
            text: "保存在本地的数据将一直留存，直至您手动删除特定文章/源、在设置中点击“重置扩展数据”，或卸载本扩展。中转的请求数据在完成交互后即时释放，不作持久化留存。"
          },
          {
            subtitle: "3.3 传输加密与凭证保护",
            text: "所有网络传输（拉取 RSS 源、AI 接口交互、Webhook 推送、激活校验）均强制通过 HTTPS / TLS 强加密通道进行。敏感凭证（API Key、Token）安全加密存放于本地沙箱。"
          }
        ]
      },
      {
        title: "4. 数据共享与第三方披露 (Data Sharing & Third-Party Disclosure)",
        icon: <Shield className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "4.1 明确的数据共享声明",
            text: "我们绝不出售、出租、转让或商业化变现任何用户数据。数据仅在您主动发起对应功能时流向以下端点：",
            list: [
              "直接向您订阅的 RSS 目标站点发起 HTTP(S) 请求以获取更新",
              "直接向您配置的 AI 服务商（如 OpenAI、Google Gemini、SiliconFlow、DeepSeek）发送请求",
              "直接向您配置的消息平台（Telegram Bot API、飞书开放平台）发送 Webhook 消息",
              "向我们的激活验证服务发送匿名设备 ID 与激活码以完成授权校验"
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
            text: "RSSFlow 郑重声明遵守 Chrome 网上应用店关于用户数据的有限使用规定：",
            list: [
              "不出售数据：在任何情况下均不出售、出租或货币化用户数据给数据经纪商或广告商。",
              "单一用途保证：不将用户数据用于与 RSS 阅读、AI 辅助和通知推送等核心功能无关的用途。",
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
              "host_permissions (https://*/*)：拉取用户自定义的任意 RSS 订阅源及连接用户指定的 AI/Webhook API 端点。"
            ]
          }
        ]
      },
      {
        title: "7. 用户控制权与数据管理 (Your Rights & Control)",
        icon: <CheckCircle2 className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "7.1 数据的完全掌控",
            text: "您随时拥有对数据的完整控制权与管理权利：",
            list: [
              "随时以标准 OPML 格式导出所有订阅源数据",
              "随时在界面中编辑、删除单条文章、清空聊天记录或移除特定订阅源",
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
      contact: "如果您对本隐私政策或数据处理有任何疑问、建议或请求，请随时联系我们：",
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
