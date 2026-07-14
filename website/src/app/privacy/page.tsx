'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Starfield } from '@/components/Starfield';
import { Footer } from '@/components/Footer';
import { Shield, Globe, Clock, ChevronRight, Mail } from 'lucide-react';

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
  };
}

const content: Record<'en' | 'zh', PrivacyLanguageContent> = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last Updated: 2026-07-14",
    intro: "RSSFlow Reader (\"RSSFlow\" or \"this extension\") values your privacy and data security. This policy explains: what data we process when you install and use this extension, how it's stored, under what circumstances it's transmitted, and how you can manage your own data.",
    sections: [
      {
        title: "1. Introduction",
        icon: <Shield className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            text: "The core design principle of RSSFlow is: keep data on user's local device as much as possible. However, when you actively enable certain networked features, relevant data may be sent to your selected third-party services or our functional infrastructure to complete the requested functionality."
          }
        ]
      },
      {
        title: "2. Data We Process",
        icon: <Globe className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "2.1 Local Reading & Subscription Data",
            text: "Stored in your browser locally to implement RSS reading and management:",
            list: [
              "RSS Feed URLs added by you",
              "Article titles, links, summaries, content cache or parsed text",
              "Read/unread status, favorites, tags, and filtering preferences",
              "Local cache from Discovery, Summary, and Flow views"
            ]
          },
          {
            subtitle: "2.2 Settings & Personalization",
            text: "To provide a personalized experience, the extension may save locally:",
            list: [
              "Themes, language, display modes, and reading preferences",
              "Shortcuts, custom commands, and custom Prompts",
              "AI feature toggles, model selection, and parameters",
              "TTS voice settings, automation task, and notification configurations",
              "MCP Bridge and other extended feature settings"
            ]
          },
          {
            subtitle: "2.3 AI & Chat Related Data",
            text: "If you enable AI summaries, AI chat, HTML preview generation, or other AI capabilities:",
            list: [
              "Article content, summary context, and question content",
              "Your Prompts, instructions, and chat messages",
              "AI-generated summaries, answers, and analysis results",
              "Configured API Hosts, model names, parameters, and API Keys"
            ]
          },
          {
            subtitle: "2.4 Activation, Trial & Permission Verification",
            list: [
              "Locally generated device or user identifiers",
              "Activation status, trial status, and permission info",
              "Activation time, expiration, signature verification info, and your activation code"
            ]
          },
          {
            subtitle: "2.5 Notification & Push Related Data",
            text: "If you enable Telegram, Feishu, or other notification/automation push capabilities:",
            list: [
              "Telegram Bot Token, Chat ID",
              "Feishu Webhook address and related configurations",
              "Pushed article titles, links, summaries, and automated analysis results",
              "Automation task names, report links, and execution results"
            ]
          },
          {
            subtitle: "2.6 Voice Broadcast & TTS Data",
            text: "If you enable voice broadcast or cloud TTS features:",
            list: [
              "Text content to be read aloud",
              "TTS voice configurations",
              "Generated audio cache data"
            ]
          }
        ]
      },
      {
        title: "3. Browser Permissions Requested",
        icon: <Shield className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            text: "To ensure proper functioning and local storage stability, the extension requests the following browser permissions:",
            list: [
              "offscreen: Under Manifest V3, the background Service Worker lacks DOM APIs. We use an offscreen document to safely parse HTML/XML formatted RSS feeds and run the local SQLite WebAssembly database engine.",
              "unlimitedStorage: Used to store offline articles, AI chat logs, vector embeddings, and SQLite databases. This prevents data loss or corruption when storage exceeds the default 5MB quota."
            ]
          }
        ]
      },
      {
        title: "4. How Data is Stored",
        icon: <Shield className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "4.1 Local Storage",
            text: "Most RSSFlow data is saved on your device locally (e.g., browser local storage or databases), including subscriptions, reading history, settings, chat sessions, and automation logs."
          },
          {
            subtitle: "4.2 No Default Server Sync",
            text: "RSSFlow does NOT automatically upload all your local reading data, settings, or chat data to our servers. Data is only sent when you actively enable features that require network connectivity."
          }
        ]
      },
      {
        title: "5. When Data is Transmitted",
        icon: <Globe className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "5.1 Fetching RSS Content Updates",
            text: "The extension requests the corresponding RSS source sites to pull subscribed content."
          },
          {
            subtitle: "5.2 Using AI Capabilities",
            text: "When AI features are enabled, article content, questions, and parameters may be sent to your selected providers (OpenAI, Google Gemini, SiliconFlow, DeepSeek, or other compatible services)."
          },
          {
            subtitle: "5.3 Using Activation, Trial or Verification",
            text: "Data like device identifiers and activation codes may be sent to our validation service to complete authorization."
          },
          {
            subtitle: "5.4 Using Message Push Features",
            text: "Summaries and links may be sent to Telegram, Feishu, or other configured receivers."
          },
          {
            subtitle: "5.5 Using MCP Bridge & Automation",
            text: "Input instructions, article context, and task results may be transmitted for workflow execution."
          },
          {
            subtitle: "5.6 Using Cloud TTS Capabilities",
            text: "Text may be sent to speech services to generate audio content."
          }
        ]
      },
      {
        title: "6. How We Share Data",
        icon: <Shield className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            text: "We do not sell your personal data. Data is shared with providers only to implement features you request:",
            list: [
              "RSS content sources for fetching updates",
              "AI Service providers you choose or configure",
              "Messaging and collaboration platforms (Telegram, Feishu)",
              "Our functional infrastructure (Activation, MCP Bridge, Automation reports, Cloud TTS relay)"
            ]
          },
          {
            subtitle: "6.5 Third-Party Rules",
            text: "Third-party services process data according to their own privacy policies. We recommend reviewing them before enabling related features."
          }
        ]
      },
      {
        title: "7. Data Retention Period",
        icon: <Clock className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "7.1 Local Data",
            text: "Remains on your device until you delete it, reset the extension, uninstall it, or the browser clears local storage."
          },
          {
            subtitle: "7.2 Remote Data",
            text: "Retention depends on the time needed for processing and the third-party provider's own storage policies/legal requirements."
          }
        ]
      },
      {
        title: "8. Data Security",
        icon: <Clock className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            text: "We protect data via local storage, HTTPS encryption, and signature verification. However, no transmission method is absolutely secure; please protect your sensitive credentials (API Keys, Bot Tokens, etc.)."
          }
        ]
      },
      {
        title: "9. Your Rights & Control",
        icon: <Shield className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            text: "You retain full control over your data:",
            list: [
              "View and modify local settings",
              "Delete local subscriptions, cache, chat records, or configurations",
              "Disable AI, Push, Bridge, TTS, or automation features",
              "Clear all data via the 'Reset' feature or by uninstalling"
            ]
          }
        ]
      },
      {
        title: "10. Children's Privacy",
        icon: <Shield className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            text: "RSSFlow is designed for general users and not specifically for minors. If you are a minor, please use it under the guidance of a guardian."
          }
        ]
      },
      {
        title: "11. Policy Updates",
        icon: <Shield className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            text: "We may update this policy due to product iterations or legal changes. The latest version will be posted on this page with the 'Last Updated' date."
          }
        ]
      }
    ],
    footer: {
      contact: "If you have any questions, please contact us:",
      email: "oinchain@gmail.com"
    }
  },
  zh: {
    title: "隐私政策",
    lastUpdated: "最后更新：2026-07-14",
    intro: "RSSFlow Reader（以下简称“RSSFlow”或“本扩展”）重视您的隐私与数据安全。本隐私政策用于说明：当您安装、使用本扩展时，我们会处理哪些数据、这些数据如何被存储、在什么情况下会被传输，以及您可如何管理自己的数据。",
    sections: [
      {
        title: "1. 简介",
        icon: <Shield className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            text: "RSSFlow 的核心设计原则是：尽可能将数据保存在用户本地设备中。但当您主动启用某些联网功能时，相关数据可能会被发送至您选择的第三方服务，或发送至我们提供的功能服务基础设施，以完成对应功能。"
          }
        ]
      },
      {
        title: "2. 我们处理哪些数据",
        icon: <Globe className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "2.1 本地阅读与订阅数据",
            text: "这些数据通常保存在您的浏览器本地，用于实现 RSS 阅读和管理功能：",
            list: [
              "您添加的 RSS 订阅源地址（RSS Feed URL）",
              "文章标题、链接、摘要、正文缓存或解析后的文本内容",
              "已读/未读状态、收藏状态、标记状态、标签、筛选偏好",
              "发现页、摘要页、Flow 视图等功能产生的本地缓存数据"
            ]
          },
          {
            subtitle: "2.2 设置与个性化配置",
            text: "为了提供个性化体验，本扩展可能会在本地保存：",
            list: [
              "主题、语言、显示方式、阅读偏好",
              "快捷指令、自定义命令、自定义提示词（Prompt）",
              "AI 功能开关、模型选择、参数配置",
              "TTS 语音播放设置、自动化任务配置、通知配置",
              "MCP Bridge 配置等扩展功能设置"
            ]
          },
          {
            subtitle: "2.3 AI 与聊天相关数据",
            text: "如果您启用了 AI 摘要、AI 聊天、HTML 预览生成或其他 AI 相关能力：",
            list: [
              "文章正文、摘要上下文、提问内容",
              "您输入的 Prompt、指令、聊天消息及其生成结果",
              "您配置的 API Host、模型名称、参数及 API Key 等访问凭据"
            ]
          },
          {
            subtitle: "2.4 激活、试用与权限校验",
            list: [
              "本地生成的设备标识符或用户标识符",
              "激活状态、试用状态、权限及到期时间信息",
              "激活码及签名校验信息"
            ]
          },
          {
            subtitle: "2.5 通知与推送相关数据",
            text: "如果您启用了 Telegram、飞书或其他通知/自动化推送能力：",
            list: [
              "Telegram Bot Token, Chat ID",
              "飞书 Webhook 地址及相关配置",
              "被推送的文章标题、链接、摘要、自动化分析结果",
              "自动化任务名称、报告链接、执行结果"
            ]
          },
          {
            subtitle: "2.6 语音播报与 TTS 数据",
            text: "如果您启用了语音播报或云端 TTS 功能：",
            list: [
              "待朗读的文本内容",
              "TTS 语音配置",
              "生成后的音频缓存数据"
            ]
          }
        ]
      },
      {
        title: "3. 浏览器权限使用说明",
        icon: <Shield className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            text: "为了提供离线阅读、AI 智能分析以及 HTML 解析等核心功能，RSSFlow 会申请并使用以下浏览器权限：",
            list: [
              "offscreen (后台离线文档)：在 Manifest V3 规范下，后台 Service Worker 缺少 DOM 环境。我们通过创建离线文档来安全地解析 HTML/XML 格式的订阅源，并运行本地 SQLite WebAssembly 数据库引擎。",
              "unlimitedStorage (无限制本地存储)：用于在本地安全地存储离线文章、AI 对话历史、向量索引等数据。该权限可防止数据量超出浏览器默认的 5MB 配额时出现数据丢失或本地数据库损坏。"
            ]
          }
        ]
      },
      {
        title: "4. 数据如何被存储",
        icon: <Shield className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "4.1 本地存储",
            text: "RSSFlow 的大多数数据默认保存在您的设备本地（如浏览器本地存储或本地数据库），包括订阅记录、设置、聊天会话、自动化配置等。"
          },
          {
            subtitle: "4.2 不会默认同步至服务器",
            text: "RSSFlow 不会默认把您本地保存的全部阅读数据或设置数据上传到我们的服务器。仅在您主动启用依赖联网的功能时才会发送必要数据。"
          }
        ]
      },
      {
        title: "5. 数据在什么情况下会被传输",
        icon: <Globe className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "5.1 获取 RSS 内容更新",
            text: "当您添加 RSS 源后，本扩展会向对应的 RSS 源站点发起请求，以拉取订阅内容。"
          },
          {
            subtitle: "5.2 使用 AI 摘要、AI 聊天或 AI 生成能力时",
            text: "当您启用 AI 功能时，文章内容、提问及其参数可能会发送至您选择的 AI 服务提供商（OpenAI, Gemini, SiliconFlow, DeepSeek 等）。"
          },
          {
            subtitle: "5.3 使用激活、试用或权限验证功能时",
            text: "设备标识符、激活码等信息可能会发送至我们的激活服务以完成授权。"
          },
          {
            subtitle: "5.4 使用 Telegram、飞书等消息推送功能时",
            text: "文章摘要、链接等内容可能会发送至您配置的消息接收端。"
          },
          {
            subtitle: "5.5 使用 MCP Bridge、远程桥接或自动化能力时",
            text: "输入指令、文章上下文及任务结果可能会传输以完成工作流执行。"
          },
          {
            subtitle: "5.6 使用云端 TTS 能力时",
            text: "待朗读文本可能会被发送到相应语音服务用于生成音频。"
          }
        ]
      },
      {
        title: "6. 我们如何共享数据",
        icon: <Shield className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            text: "我们不会出售您的个人数据。数据仅在您启用特定功能时共享给以下方：",
            list: [
              "RSS 内容来源站点",
              "您主动选择或配置的 AI 服务提供商",
              "您配置的消息接收平台（Telegram, 飞书等）",
              "我们提供的功能基础设施（如权限校验、MCP Bridge、报告上传、TTS 中转）"
            ]
          },
          {
            subtitle: "6.5 第三方服务的独立规则",
            text: "这些第三方将依据其各自的隐私政策处理数据。我们建议您在启用相关功能前先查阅对应政策。"
          }
        ]
      },
      {
        title: "7. 数据保留期限",
        icon: <Clock className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            subtitle: "7.1 本地数据",
            text: "保存在本地的数据会一直保留直到您主动删除、重置扩展、卸载扩展或浏览器清理存储。"
          },
          {
            subtitle: "7.2 发送到第三方或远程服务的数据",
            text: "保留时间取决于对应服务完成处理所需时间及第三方服务自己的存储策略。"
          }
        ]
      },
      {
        title: "8. 数据安全",
        icon: <Clock className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            text: "我们通过本地存储、HTTPS 加密、签名校验等措施保护数据。但请妥善保管您的 API Key、激活码、Token 等敏感凭据。"
          }
        ]
      },
      {
        title: "9. 您的权利与控制方式",
        icon: <Shield className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            text: "您保留对数据的完全控制权：",
            list: [
              "查看、修改或通过重置功能清除本地数据",
              "关闭 AI、推送、桥接、TTS、自动化等联网功能",
              "通过卸载扩展删除大部分本地存储内容"
            ]
          }
        ]
      },
      {
        title: "10. 未成年人隐私",
        icon: <Shield className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            text: "本扩展并非专门面向未成年人设计，请在监护人指导下使用。"
          }
        ]
      },
      {
        title: "11. 隐私政策的更新",
        icon: <Shield className="w-6 h-6 text-emerald-400" />,
        content: [
          {
            text: "随产品迭代或法规变化，我们可能会更新本政策。更新版本将在本页面发布并标注日期。"
          }
        ]
      }
    ],
    footer: {
      contact: "如果您对本隐私政策有任何问题，请联系我们：",
      email: "oinchain@gmail.com"
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
            <p className="text-xl text-slate-400 leading-relaxed italic">
              &ldquo;{t.intro}&rdquo;
            </p>

            <div className="grid gap-8">
              {t.sections.map((section: ContentSection, idx: number) => (
                <motion.section 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-colors group"
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
                        {block.text && <p className="text-slate-400 leading-relaxed">{block.text}</p>}
                        {block.list && (
                          <ul className="space-y-3">
                            {block.list.map((item: string, iIdx: number) => (
                              <li key={iIdx} className="flex gap-3 text-slate-300">
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
              className="p-12 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 text-center"
            >
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-500/20">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t.footer.contact}</h3>
              <a 
                href={`mailto:${t.footer.email}`} 
                className="text-emerald-400 text-xl font-medium hover:text-emerald-300 transition-colors underline decoration-2 underline-offset-8"
              >
                {t.footer.email}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
