'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Starfield } from '@/components/Starfield';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Check, 
  Minus,
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
  Receipt,
  Network,
  Bot,
  Compass,
  Table as TableIcon,
  Globe,
  Wand2,
  Workflow,
  Sparkle
} from 'lucide-react';

const PRICING_I18N = {
  'zh-CN': {
    badge: '简单透明的专业定价 · 释放信息洞察力',
    title: '选择适合你的',
    titleGradient: 'RSSFlow Pro 进阶方案',
    desc: '从本地优先的极速阅读，到 23 组专家指令集、AI 探索星系、自动化链式定时任务与独立云报告门户，让深度洞察触手可及。',
    billingCycle: {
      annual: '按年订阅 (省 17% · 送指令定制)',
      lifetime: '终身买断 (送独立内容站 · 最强权益)',
      monthly: '按月订阅'
    },
    popular: '热门推荐 · 赠定制指令',
    bestValue: '终身买断 · 赠独立内容站点',
    plans: {
      free: {
        name: '基础版 (Free)',
        price: '¥0',
        period: '永久免费',
        desc: '纯粹本地的现代 RSS 阅读器与信息流体验',
        button: '免费安装扩展',
        features: [
          '全量 RSS / Atom 订阅源管理与多级目录分类',
          'OPML 极速导入与双向备份导出支持',
          '本地 SQLite (OPFS) 隐私离线数据库存储',
          '内置智能全文正文提取与沉浸式阅读器 (Reader)',
          '侧边栏模式 (Sidebar) 与信息流双视图 (Flow View)',
          '仅包含 3 个基础 AI 快捷指令（基础对话）',
          '最多支持创建 1 个自动化定时任务'
        ]
      },
      annual: {
        name: 'Pro 年度订阅',
        price: '$50',
        period: '/ 年 (折合 $4.17/月)',
        desc: '为日常高频阅读、知识管理与深度分析者打造',
        button: '立即开通 Pro 年度版',
        features: [
          '解锁全部 23 组专家级 AI 快捷指令分析角色（创意构思、趋势筛选、草稿构建、战略官、去噪分析等）',
          '无限制创建与运行单指令 / 串行链式 / 并行汇总自动化定时任务',
          '🎁【专属赠送】量身定制 2 个专属专家级 AI 快捷指令流水线',
          'AI 探索星系与 3D 话题宇宙 (Discovery View / 趋势仪表盘 / 深度研报)',
          'AI 对话助手与智能引文精确悬停追溯 (Inline Citation Map)',
          '定时任务自动化采集、多标签过滤与研报自动推送 (飞书 / Telegram)',
          '云报告门户发布 (Cloud Report) 与 SEO 博客自动化推送',
          'MCP 协议桥接 (支持 Cursor / Claude 等本地 AI 客户端调用上下文)',
          '包含 3 台设备同时使用与多端跨设备云同步',
          'RSA-PSS 密码学防篡改离线授权凭证',
          '优先技术支持与新功能抢先体验'
        ]
      },
      lifetime: {
        name: 'Pro 终身买断版',
        price: '$100',
        period: '一次性买断 · 终身享有',
        desc: '一次购买，终身尊享全部 Pro 进阶能力与后续所有大版本升级',
        button: '获取终身授权 License',
        features: [
          '永久享有全部 Pro 进阶功能的终身使用权',
          '永久享有未来所有 v2.x、v3.x 重大架构与功能升级',
          '解锁全部 23 组专家指令集 + 无限制定时任务流水线',
          '🌟【顶级附赠】专属独立内容站点 / SEO 博客门户部署权益 (类似 blog.oinchain.com)',
          '🎁【专属赠送】量身定制 2 个专属专家级 AI 快捷指令流水线',
          '包含全部 AI 探索星系、自动化定时研报与 MCP 协议桥接',
          '支持 3 台设备同时使用，可在选项页随时自助解绑换机',
          '支持作为 16 位独立激活码赠送亲友或同事 (Giftable)',
          '专属早期体验测试通道与开发者优先直通支持'
        ]
      },
      monthly: {
        name: 'Pro 月度订阅',
        price: '$5',
        period: '/ 月',
        desc: '按月弹性体验全部 Pro 进阶能力，随时可调整',
        button: '开通月度订阅',
        features: [
          '解锁全部 23 组专家级 AI 快捷指令角色',
          '无限制创建与运行单指令 / 链式 / 并行定时任务',
          '包含 AI 探索星系、自动化定时研报与引文追溯',
          '支持 3 台设备多端同步权益',
          '随时在 Creem 客户门户管理或取消下期续订'
        ]
      }
    },
    guarantees: [
      {
        icon: 'Lock',
        title: '即时交付与秒级生效',
        desc: '支付完成后系统即刻生成 16 位授权码或自动关联下发至账号'
      },
      {
        icon: 'Laptop',
        title: '支持 3 台设备同时使用',
        desc: '台式机、笔记本多端同步，可在选项页随时自助解绑换机'
      },
      {
        icon: 'Receipt',
        title: '全球合规与安全支付',
        desc: '由 Creem.io (MoR) 处理全球税务合规并提供官方电子账单发票'
      }
    ],
    tableSection: {
      badge: '全功能与专属权益对照',
      title: '清晰对比，选择最适合你的方案',
      desc: '深入对比各版本在核心阅读器、AI 专家指令、自动化定时任务、专属定制服务与独立内容站点上的完整权益。',
      cols: {
        feature: '功能与权益项',
        free: '免费基础版',
        monthly: 'Pro 月度版 ($5/月)',
        annual: 'Pro 年度版 ($50/年)',
        lifetime: 'Pro 终身版 ($100)'
      },
      categories: [
        {
          categoryName: '⚡ 核心配额与关键权益差异',
          items: [
            { name: 'AI 快捷指令集规模', free: '仅 3 个基础指令', monthly: '全部 23 个专家指令', annual: '全部 23 个专家指令', lifetime: '全部 23 个专家指令' },
            { name: '自动化定时采集与分析任务', free: '最多 1 个任务', monthly: '无限制', annual: '无限制', lifetime: '无限制' },
            { name: '🎁 量身定制 2 个专属 AI 快捷指令', free: false, monthly: false, annual: '✨ 附赠量身定制', lifetime: '✨ 附赠量身定制' },
            { name: '🌟 独立内容站点/博客搭建权益 (如 blog.oinchain.com)', free: false, monthly: false, annual: '支持自行配置对接', lifetime: '🚀 附赠独立站点部署权益' }
          ]
        },
        {
          categoryName: '🧠 AI 智能核心与专家指令 (AI Intelligence)',
          items: [
            { name: '23 组专家级分析指令集 (草稿构建/战略官/去噪等)', free: '仅 3 个基础指令', monthly: true, annual: true, lifetime: true },
            { name: 'AI 交互对话与流式 Markdown 实时生成', free: '基础对话', monthly: '完整能力', annual: '完整能力', lifetime: '完整能力' },
            { name: '智能引文精确悬停追溯 (Inline Citation Map)', free: false, monthly: true, annual: true, lifetime: true },
            { name: '自定义 AI 快捷指令与 Prompt 流水线编写', free: false, monthly: true, annual: true, lifetime: true },
            { name: 'BYOK 自带 Key 模式 (Gemini / OpenAI / Claude / DeepSeek / Ollama)', free: true, monthly: true, annual: true, lifetime: true }
          ]
        },
        {
          categoryName: '🌌 知识星图、研报与自动化 (Discovery & Automation)',
          items: [
            { name: 'AI 探索星系与 3D 话题宇宙 (Discovery View)', free: false, monthly: true, annual: true, lifetime: true },
            { name: '定时任务 3 种执行模式 (单指令 / 串行链式 / 并行汇总)', free: '仅单指令 (限1个)', monthly: true, annual: true, lifetime: true },
            { name: 'AI 每日 / 每周自动化深度研究简报', free: false, monthly: true, annual: true, lifetime: true },
            { name: '云报告门户发布 (Cloud Report) 与 SEO 博客同步', free: false, monthly: true, annual: true, lifetime: true },
            { name: '飞书 Webhook & Telegram 机器人多渠道主动推送', free: false, monthly: true, annual: true, lifetime: true },
            { name: 'MCP 协议桥接 (支持 Cursor / Claude 等外部模型调度)', free: false, monthly: true, annual: true, lifetime: true }
          ]
        },
        {
          categoryName: '📖 核心阅读与本地架构 (Reader & Local DB)',
          items: [
            { name: 'RSS / Atom 订阅源管理与多级目录分类', free: '无限制', monthly: '无限制', annual: '无限制', lifetime: '无限制' },
            { name: 'OPML 极速导入与备份导出', free: true, monthly: true, annual: true, lifetime: true },
            { name: '本地 SQLite (OPFS) 离线数据库存储', free: true, monthly: true, annual: true, lifetime: true },
            { name: '智能全文提取与沉浸式阅读器 (Reader)', free: true, monthly: true, annual: true, lifetime: true },
            { name: '侧边栏模式 (Sidebar) 与信息流视图 (Flow View)', free: true, monthly: true, annual: true, lifetime: true },
            { name: '阅读器快捷键支持与双击标记已读', free: true, monthly: true, annual: true, lifetime: true }
          ]
        },
        {
          categoryName: '🛡️ 设备、授权与服务保障 (License & Support)',
          items: [
            { name: '支持同时在线设备数', free: '1 台设备', monthly: '3 台设备', annual: '3 台设备', lifetime: '3 台设备' },
            { name: '多设备跨端数据与配置同步', free: false, monthly: true, annual: true, lifetime: true },
            { name: '随时自助解绑换机与设备管理', free: false, monthly: true, annual: true, lifetime: true },
            { name: '密码学 RSA-PSS 离线防篡改证书', free: false, monthly: true, annual: true, lifetime: true },
            { name: '未来大版本更新 (v2.x, v3.x)', free: '基础维护', monthly: '订阅期内', annual: '订阅期内', lifetime: '终身永久享有' },
            { name: '支持 16 位激活码赠送亲友 (Giftable)', free: false, monthly: false, annual: false, lifetime: true },
            { name: '技术支持通道', free: '社区支持', monthly: '优先工单', annual: 'VIP 优先支持', lifetime: '开发者直通支持' }
          ]
        }
      ]
    },
    faqTitle: '常见问题解答 (FAQ)',
    faqs: [
      {
        q: '1. 免费版与 Pro 版在快捷指令和定时任务上有何具体限制？',
        a: '【免费版】内置 3 个基础快捷指令，且最多只能创建 1 个自动化定时任务；【Pro 版 (月付/年付/买断)】可解锁全部 23 组内置专家级分析角色指令集（包括创意构思者、趋势筛选器、草稿构建器、战略官视角、去噪分析、多米诺模拟等），并且创建定时任务无数量限制，支持单指令、串行链式与并行汇总 3 种执行模式，可任意组合标签过滤与 AI 分析模型。'
      },
      {
        q: '2. 包年与终身买断附赠的「量身定制 2 个快捷指令」如何兑现？',
        a: '购买 Pro 年度版或终身买断版后，您可在扩展设置或通过邮件联系我们的技术团队，提供您的具体业务场景或阅读需求（例如：特定行业研报格式、多语言对比提炼、特定格式数据提取等），我们将为您专门编写并调优 2 个专属的 AI 快捷指令配置。'
      },
      {
        q: '3. 终身买断版附赠的「独立内容站点 / SEO 博客门户」是什么？',
        a: '终身版专享附赠类似 blog.oinchain.com 的独立内容站点部署与配置支持。您可以将 RSSFlow 定时任务自动生成的精选 AI 深度研报一键推送到属于您自己的独立博客或团队知识门户上，实现全自动的知识发布与 SEO 沉淀。'
      },
      {
        q: '4. 什么是 MCP 协议桥接 (Model Context Protocol)？',
        a: 'MCP 桥接允许您将 RSSFlow 本地沉淀的 RSS 资讯与 AI 摘要上下文，直接暴露给外部 AI 客户端（如 Cursor、Claude Desktop、本地终端 Agent 等）读取和调度，无需手动复制粘贴即可让外部 AI 工具基于您的订阅库进行深度工作。'
      },
      {
        q: '5. 购买后如何激活 RSSFlow Pro？',
        a: '系统支持双轨智能激活：如果您在官网登录了 Clerk 账号并完成购买，打开扩展登录相同账号将【自动无缝激活】；如果您选择免登录直接购买，系统会即时生成 16 位激活码（ACT-XXXX-XXXX-XXXX）并在收银台回执页展示且同步发送至您的支付邮箱，在扩展选项页输入即可激活（支持单机匿名激活或绑定账号）。'
      },
      {
        q: '6. 授权支持在几台电脑上使用？如何更换设备？',
        a: '每个 Pro 授权默认支持同时在 3 台设备（例如：办公电脑、家用电脑、便携笔记本）上激活使用。若需更换电脑，登录账号的用户可随时在扩展设置的「设备管理」中一键解绑旧设备，在新设备上登录即可继续激活。'
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
    desc: 'From local-first fast reading to 23 expert command suites, discovery constellations, automated pipelines, and cloud report portals.',
    billingCycle: {
      annual: 'Annual (Save 17% + Custom Prompts)',
      lifetime: 'Lifetime (Includes Cloud Site + All Perks)',
      monthly: 'Monthly'
    },
    popular: 'Popular · Free Custom Prompts',
    bestValue: 'Lifetime · Includes Cloud Content Site',
    plans: {
      free: {
        name: 'Starter (Free)',
        price: '$0',
        period: 'Free forever',
        desc: 'Pure local modern RSS reader & flow view experience',
        button: 'Install Extension',
        features: [
          'Unlimited RSS / Atom feed management & categorization',
          'Fast OPML import & backup export support',
          'Ultra-fast local SQLite (OPFS) private offline storage',
          'Built-in fulltext extraction & immersive reader (Reader)',
          'Sidebar Mode & Flow View dual layouts',
          'Includes only 3 basic AI prompt shortcuts',
          'Limited to maximum 1 scheduled automated task'
        ]
      },
      annual: {
        name: 'Pro Annual',
        price: '$50',
        period: '/ year (~$4.17/mo)',
        desc: 'Full Pro power with complimentary bespoke prompt engineering',
        button: 'Get Pro Annual',
        features: [
          'Unlock all 23 expert AI prompt command analysis roles (Ideator, Trend Selector, Draft Builder, CSO Board, De-noiser, etc.)',
          'Unlimited automated background tasks (Single, Sequential Chain & Split-Merge)',
          '🎁【Bonus】2 bespoke custom-crafted AI prompt command pipelines',
          'AI Discovery View & 3D Topic Constellation Explorer (Trends & Briefs)',
          'AI Chat Assistant with precise Inline Citation Map tracking',
          'Automated research reports with Feishu / Telegram Bot notifications',
          'Cloud Report Portal & automated SEO Blog publishing',
          'MCP Protocol Bridge (integrate with Cursor, Claude, etc.)',
          'Simultaneous usage & sync across up to 3 devices',
          'RSA-PSS cryptographic zero-tamper offline certificate',
          'Priority support & early beta access'
        ]
      },
      lifetime: {
        name: 'Pro Lifetime',
        price: '$100',
        period: 'One-time payment · Forever',
        desc: 'Pay once, own forever. Enjoy all future upgrades + dedicated blog site.',
        button: 'Get Lifetime License',
        features: [
          'Permanent access to all current and future Pro features',
          'All future v2.x & v3.x major upgrades included forever',
          'Unlock all 23 expert commands + unlimited scheduled task pipelines',
          '🌟【Premium Bonus】Dedicated Cloud Content Site / SEO Blog (like blog.oinchain.com)',
          '🎁【Bonus】2 bespoke custom-crafted AI prompt commands',
          'Full AI Discovery Constellation, Automated Briefs & MCP Bridge',
          'Supports up to 3 concurrent devices with self-serve transfer',
          'Can be transferred or gifted as a 16-digit activation key',
          'Direct developer channel & priority support'
        ]
      },
      monthly: {
        name: 'Pro Monthly',
        price: '$5',
        period: '/ month',
        desc: 'Flexible monthly billing, cancel anytime',
        button: 'Start Monthly Plan',
        features: [
          'Unlock all 23 expert AI prompt command pipelines',
          'Unlimited automated background scheduled tasks (Single, Chain, Merge)',
          'Includes AI Discovery, automated research & inline citations',
          'Multi-device sync on 3 devices',
          'Manage or cancel anytime via Creem customer portal'
        ]
      }
    },
    guarantees: [
      {
        icon: 'Lock',
        title: 'Instant Delivery & Activation',
        desc: '16-digit key generated instantly or bound directly to your account upon checkout'
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
    tableSection: {
      badge: 'Feature & Exclusive Perks Comparison',
      title: 'Compare Features Across All Plans',
      desc: 'See all core quotas, expert commands, automation tasks, and exclusive bonus perks side by side.',
      cols: {
        feature: 'Feature & Capability',
        free: 'Free Starter',
        monthly: 'Pro Monthly ($5/mo)',
        annual: 'Pro Annual ($50/yr)',
        lifetime: 'Pro Lifetime ($100)'
      },
      categories: [
        {
          categoryName: '⚡ Core Quotas & Exclusive Bonuses',
          items: [
            { name: 'AI Prompt Shortcuts & Expert Commands', free: '3 Basic Commands', monthly: 'All 23 Expert Commands', annual: 'All 23 Expert Commands', lifetime: 'All 23 Expert Commands' },
            { name: 'Automated Scheduled Tasks Limit', free: 'Max 1 Task', monthly: 'Unlimited Tasks', annual: 'Unlimited Tasks', lifetime: 'Unlimited Tasks' },
            { name: '🎁 2 Bespoke Custom AI Prompt Commands', free: false, monthly: false, annual: '✨ Included Bespoke Service', lifetime: '✨ Included Bespoke Service' },
            { name: '🌟 Dedicated Content Site / Blog (e.g. blog.oinchain.com)', free: false, monthly: false, annual: 'Self-hosted integration', lifetime: '🚀 Dedicated Site Deployment' }
          ]
        },
        {
          categoryName: '🧠 AI Core & Synthesis (AI Intelligence)',
          items: [
            { name: '23 Expert Analysis Roles (Draft Builder, CSO, De-noiser, etc.)', free: '3 Basic Commands', monthly: true, annual: true, lifetime: true },
            { name: 'AI Chat Assistant & Streaming Markdown QA', free: 'Basic', monthly: 'Full Access', annual: 'Full Access', lifetime: 'Full Access' },
            { name: 'Inline Citation Map Hover Tracking', free: false, monthly: true, annual: true, lifetime: true },
            { name: 'Custom Prompt Pipelines & Shortcut Authoring', free: false, monthly: true, annual: true, lifetime: true },
            { name: 'BYOK Mode (Gemini, OpenAI, Claude, DeepSeek, Ollama)', free: true, monthly: true, annual: true, lifetime: true }
          ]
        },
        {
          categoryName: '🌌 Discovery & Automation Workflows',
          items: [
            { name: 'AI Discovery Constellation (3D Galaxy & Topic View)', free: false, monthly: true, annual: true, lifetime: true },
            { name: 'Scheduled Tasks Execution (Single, Sequential Chain, Split-Merge)', free: 'Single (Max 1)', monthly: true, annual: true, lifetime: true },
            { name: 'Daily & Weekly AI Research Briefs', free: false, monthly: true, annual: true, lifetime: true },
            { name: 'Cloud Report Portal Publishing & SEO Blog Push', free: false, monthly: true, annual: true, lifetime: true },
            { name: 'Feishu & Telegram Bot Notifications', free: false, monthly: true, annual: true, lifetime: true },
            { name: 'MCP Protocol Bridge (Cursor / Claude Context Sharing)', free: false, monthly: true, annual: true, lifetime: true }
          ]
        },
        {
          categoryName: '📖 Core Reader & Local Architecture',
          items: [
            { name: 'RSS / Atom Feed Management & Categorization', free: 'Unlimited', monthly: 'Unlimited', annual: 'Unlimited', lifetime: 'Unlimited' },
            { name: 'OPML Import & Backup Export', free: true, monthly: true, annual: true, lifetime: true },
            { name: 'Local SQLite (OPFS) Offline DB', free: true, monthly: true, annual: true, lifetime: true },
            { name: 'Fulltext Extraction & Reader View (Reader)', free: true, monthly: true, annual: true, lifetime: true },
            { name: 'Sidebar Mode & Flow View Dual Layouts', free: true, monthly: true, annual: true, lifetime: true },
            { name: 'Keyboard Shortcuts & Double-click Mark as Read', free: true, monthly: true, annual: true, lifetime: true }
          ]
        },
        {
          categoryName: '🛡️ Devices, License & Support',
          items: [
            { name: 'Concurrent Device Limit', free: '1 Device', monthly: '3 Devices', annual: '3 Devices', lifetime: '3 Devices' },
            { name: 'Multi-device Cloud Data Sync', free: false, monthly: true, annual: true, lifetime: true },
            { name: 'Self-serve Device Transfer & Unbind', free: false, monthly: true, annual: true, lifetime: true },
            { name: 'Cryptographic RSA-PSS Offline Key', free: false, monthly: true, annual: true, lifetime: true },
            { name: 'Future Major Upgrades (v2.x, v3.x)', free: 'Maintenance', monthly: 'Active Period', annual: 'Active Period', lifetime: 'Lifetime All Updates' },
            { name: '16-Digit Giftable License Key', free: false, monthly: false, annual: false, lifetime: true },
            { name: 'Technical Support Tier', free: 'Community', monthly: 'Priority Ticket', annual: 'VIP Priority', lifetime: 'Direct Developer VIP' }
          ]
        }
      ]
    },
    faqTitle: 'Frequently Asked Questions (FAQ)',
    faqs: [
      {
        q: '1. What are the exact differences between Free and Pro regarding prompts and scheduled tasks?',
        a: 'The Free Starter plan includes 3 basic prompt shortcuts and allows creating up to 1 automated task. Pro plans (Monthly, Annual, Lifetime) unlock all 23 expert AI prompt analysis roles (including Ideator, Trend Selector, Draft Builder, CSO Board, De-noiser, Domino Sim, etc.) and support unlimited background automated collection & synthesis tasks with Single, Sequential Chain, and Split-Merge execution modes.'
      },
      {
        q: '2. How do I redeem the 2 bespoke custom AI prompt commands included in Annual and Lifetime plans?',
        a: 'After purchasing the Annual or Lifetime plan, contact our developer team via the extension settings or email with your specific workflow requirements (e.g. customized industry briefs, specialized data extraction). We will craft, test, and deliver 2 tailored prompt configurations for you.'
      },
      {
        q: '3. What is the dedicated Cloud Content Site / SEO Blog perk included with the Lifetime plan?',
        a: 'Lifetime license holders receive dedicated deployment support for a standalone content site similar to blog.oinchain.com. This enables your RSSFlow automated AI research reports to be published directly to your own public or team blog automatically.'
      },
      {
        q: '4. What is the MCP Protocol Bridge (Model Context Protocol)?',
        a: 'The MCP Bridge allows local RSS articles and AI summaries accumulated in RSSFlow to be accessed by external AI tools (such as Cursor, Claude Desktop, or local AI agents) as immediate context, enabling external AI assistants to read your personal feeds seamlessly.'
      },
      {
        q: '5. How do I activate RSSFlow Pro after purchasing?',
        a: 'RSSFlow supports dual-track activation: If you sign in with your account on our website before purchasing, your Pro access will automatically activate in the extension upon login. If you checkout as a guest, a 16-digit activation code (ACT-XXXX-XXXX-XXXX) will be generated instantly on the receipt page and emailed to you.'
      },
      {
        q: '6. How many devices are supported? How do I transfer devices?',
        a: 'Each Pro license supports up to 3 devices simultaneously (e.g., work PC, home PC, laptop). When switching to a new machine, signed-in users can unbind older devices with one click in the extension settings.'
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

  const renderCell = (val: boolean | string) => {
    if (typeof val === 'boolean') {
      return val ? (
        <div className="flex justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Check className="w-3.5 h-3.5" />
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <Minus className="w-4 h-4 text-slate-600" />
        </div>
      );
    }
    return <span className="text-xs font-semibold text-slate-300">{val}</span>;
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
                      <span className={feat.includes('【专属') || feat.includes('【顶级') || feat.includes('【Bonus】') || feat.includes('【Premium') ? 'text-emerald-300 font-bold' : ''}>
                        {feat}
                      </span>
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

          {/* Feature Comparison Table Section */}
          <div className="mt-28">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <TableIcon className="w-3.5 h-3.5" />
                {t.tableSection.badge}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t.tableSection.title}
              </h2>
              <p className="text-slate-400 text-sm">
                {t.tableSection.desc}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-2xl overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="border-b border-white/10 bg-slate-950/80">
                      <th className="p-5 text-sm font-bold text-slate-300 w-2/5">
                        {t.tableSection.cols.feature}
                      </th>
                      <th className="p-5 text-sm font-bold text-center text-slate-400 w-1/5">
                        {t.tableSection.cols.free}
                      </th>
                      <th className="p-5 text-sm font-bold text-center text-slate-300 w-1/5">
                        {t.tableSection.cols.monthly}
                      </th>
                      <th className="p-5 text-sm font-bold text-center text-teal-300 w-1/5">
                        {t.tableSection.cols.annual}
                      </th>
                      <th className="p-5 text-sm font-bold text-center text-emerald-400 bg-emerald-500/10 w-1/5 border-l border-emerald-500/20">
                        {t.tableSection.cols.lifetime}
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
                            <td className="px-5 py-4 text-center">
                              {renderCell(item.free)}
                            </td>
                            <td className="px-5 py-4 text-center">
                              {renderCell(item.monthly)}
                            </td>
                            <td className="px-5 py-4 text-center">
                              {renderCell(item.annual)}
                            </td>
                            <td className="px-5 py-4 text-center bg-emerald-500/[0.04] border-l border-emerald-500/10">
                              {renderCell(item.lifetime)}
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
