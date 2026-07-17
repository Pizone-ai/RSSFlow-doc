const fs = require('fs');
const path = require('path');

const helpDir = path.resolve(__dirname, '../../help');
const tsFile = path.resolve(__dirname, '../src/data/help-content.ts');

const mapping = [
  {
    id: "01-quick-start",
    dir: "01-快速开始",
    titleCn: "快速开始",
    titleEn: "Quick Start",
    icon: "Rocket",
    docs: [
      { id: "installation-setup", file: "安装与初始化.md", title: "安装与初始化 / Installation & Initialization" },
      { id: "ai-key-config", file: "AI密钥配置.md", title: "AI 密钥配置 / AI Key Configuration" },
      { id: "interface-guide", file: "界面导览.md", title: "界面导览 / Interface Guide" }
    ]
  },
  {
    id: "02-feed-management",
    dir: "02-订阅管理",
    titleCn: "订阅管理",
    titleEn: "Feed Management",
    icon: "Rss",
    docs: [
      { id: "adding-feeds", file: "添加订阅源.md", title: "添加订阅源 / Adding Feeds" },
      { id: "feed-management", file: "订阅源管理与分类.md", title: "订阅源管理与分类 / Feed Management & Categories" }
    ]
  },
  {
    id: "03-snagflow",
    dir: "03-订阅源获取-SnagFlow",
    titleCn: "订阅源获取 (SnagFlow)",
    titleEn: "Feed Acquisition (SnagFlow)",
    icon: "Puzzle",
    docs: [
      { id: "snagflow-overview", file: "SnagFlow概述.md", title: "SnagFlow 概述 / SnagFlow Overview" },
      { id: "snagflow-import", file: "配置SnagFlow导入.md", title: "配置 SnagFlow 导入 / Configure SnagFlow Import" }
    ]
  },
  {
    id: "04-reading-views",
    dir: "04-阅读视图",
    titleCn: "阅读视图",
    titleEn: "Reading Views",
    icon: "BookOpen",
    docs: [
      { id: "sidebar-mode", file: "侧边栏模式.md", title: "侧边栏模式 / Sidebar Mode" },
      { id: "flow-view", file: "信息流模式.md", title: "信息流模式 / Flow View" },
      { id: "zen-reader", file: "沉浸式阅读器.md", title: "沉浸式阅读器 / Zen Reader" }
    ]
  },
  {
    id: "05-reader-core",
    dir: "05-阅读器核心操作",
    titleCn: "阅读器核心操作",
    titleEn: "Core Reader Operations",
    icon: "Cpu",
    docs: [
      { id: "reader-shortcuts", file: "Reader快捷键大全.md", title: "Reader 快捷键大全 / Zen Reader Keyboard Shortcuts" },
      { id: "card-layout", file: "卡片阅读与多列自适应.md", title: "卡片阅读与多列自适应 / Card Layout & Multi-column" },
      { id: "double-click-dismiss", file: "双击标记已读与木鱼音效.md", title: "双击标记已读与木鱼音效 / Double-click Dismiss & Wooden Bell" }
    ]
  },
  {
    id: "06-ai-smart-core",
    dir: "06-AI智能核心",
    titleCn: "AI 智能核心",
    titleEn: "AI Smart Core",
    icon: "BrainCircuit",
    docs: [
      { id: "ai-chat-citation", file: "AI对话与引文追溯.md", title: "AI 对话与引文追溯 / AI Chat & Citation Tracing" },
      { id: "ai-discovery", file: "AI探索星系.md", title: "AI 探索星系 / AI Discovery View" },
      { id: "ai-auto-summary", file: "AI自动摘要.md", title: "AI 自动摘要 / AI Auto-Summary" },
      { id: "expert-commands", file: "专家指令集.md", title: "专家指令集 / Expert Command Set" },
      { id: "graph-view", file: "知识图谱模式.md", title: "知识图谱模式 / Graph View" }
    ]
  },
  {
    id: "07-scheduled-tasks",
    dir: "07-定时任务核心",
    titleCn: "定时任务核心",
    titleEn: "Scheduled Tasks",
    icon: "Timer",
    docs: [
      { id: "workflow-overview", file: "定时任务概述.md", title: "定时任务概述 / Workflow Overview" },
      { id: "execution-modes", file: "三种执行模式详解.md", title: "三种执行模式详解 / Execution Modes" },
      { id: "report-modes", file: "三种报告发布模式.md", title: "三种报告发布模式 / Report Publish Modes" },
      { id: "filters-content-selection", file: "标签过滤与内容筛选.md", title: "标签过滤与内容筛选 / Filters & Content Selection" }
    ]
  },
  {
    id: "08-ai-config",
    dir: "08-AI配置详解",
    titleCn: "AI 配置详解",
    titleEn: "AI Configuration",
    icon: "Settings2",
    docs: [
      { id: "provider-config", file: "模型提供商配置.md", title: "模型提供商配置 / Provider Configuration" },
      { id: "tag-scope", file: "Tag枚举与范围设定.md", title: "Tag 枚举与范围设定 / Tag Scope" },
      { id: "generation-parameters", file: "高级参数说明.md", title: "高级参数说明 / Generation Parameters" }
    ]
  },
  {
    id: "09-multi-language",
    dir: "09-多语言支持",
    titleCn: "多语言支持",
    titleEn: "Multi-language Support",
    icon: "Languages",
    docs: [
      { id: "supported-languages", file: "支持语言一览.md", title: "支持语言一览 / Supported Languages" }
    ]
  },
  {
    id: "10-push-notifications",
    dir: "10-多端推送",
    titleCn: "多端推送",
    titleEn: "Push Notifications",
    icon: "Bell",
    docs: [
      { id: "telegram-push", file: "Telegram推送配置.md", title: "Telegram 推送配置 / Telegram Push" },
      { id: "feishu-push", file: "飞书Webhook推送配置.md", title: "飞书 Webhook 推送配置 / Feishu Push" }
    ]
  },
  {
    id: "11-settings-personalization",
    dir: "11-设置与个性化",
    titleCn: "设置与个性化",
    titleEn: "Settings & Personalization",
    icon: "Paintbrush",
    docs: [
      { id: "theme", file: "主题与外观.md", title: "主题与外观 / Theme" },
      { id: "general-settings", file: "常规设置.md", title: "常规设置 / General Settings" }
    ]
  },
  {
    id: "12-advanced-features",
    dir: "12-高级功能",
    titleCn: "高级功能",
    titleEn: "Advanced Features",
    icon: "Wrench",
    docs: [
      { id: "mcp-bridge", file: "MCP桥接.md", title: "MCP 桥接 / MCP Bridge" },
      { id: "cloud-report-portal", file: "云报告门户.md", title: "云报告门户 / RSSFlow AI Report Portal" },
      { id: "ai-commands", file: "快捷指令.md", title: "快捷指令 / AI Commands" },
      { id: "cross-extension-sync", file: "跨扩展同步.md", title: "跨扩展同步 / Cross-Extension Sync" }
    ]
  },
  {
    id: "13-faq",
    dir: "13-常见问题",
    titleCn: "常见问题",
    titleEn: "FAQ",
    icon: "HelpCircle",
    docs: [
      { id: "troubleshooting-faq", file: "故障排除与FAQ.md", title: "故障排除与 FAQ / Troubleshooting & FAQ" }
    ]
  },
  {
    id: "14-privacy-security",
    dir: "14-隐私与安全",
    titleCn: "隐私与安全",
    titleEn: "Privacy & Security",
    icon: "Shield",
    docs: [
      { id: "privacy-statement", file: "数据隐私说明.md", title: "数据隐私说明 / Privacy & Data Security" }
    ]
  }
];

function cleanBody(text) {
  let t = text.trim();
  if (t.endsWith('\n---')) {
    t = t.substring(0, t.length - 4).trim();
  } else if (t.endsWith('---')) {
    t = t.substring(0, t.length - 3).trim();
  }
  return t;
}

function parseFormatA2(content) {
  const parts = content.split(/^(##\s+[^\n]+)$/m);
  
  let cnSections = [];
  let enSections = [];
  
  let firstPart = parts[0];
  firstPart = firstPart.replace(/^#\s+[^\n]+\r?\n/, '').trim();
  if (firstPart) {
    const subParts = firstPart.split(/\n---\s*\n/);
    if (subParts.length >= 2) {
      cnSections.push(cleanBody(subParts[0]));
      enSections.push(cleanBody(subParts[1]));
    } else {
      cnSections.push(cleanBody(firstPart));
    }
  }
  
  for (let i = 1; i < parts.length; i += 2) {
    const heading = parts[i].trim();
    const body = parts[i + 1] || '';
    
    const headingText = heading.replace(/^##\s+/, '');
    const headingMatch = headingText.match(/([A-Za-z0-9\s&()\-',/:⚡📏🧠]+)$/);
    const cnHeading = heading;
    const enHeading = headingMatch ? '## ' + headingMatch[1].trim() : '## ' + headingText;
    
    const bodyParts = body.split(/\n---\s*\n/);
    const cnBody = bodyParts[0] ? cleanBody(bodyParts[0]) : '';
    const enBody = bodyParts[1] ? cleanBody(bodyParts[1]) : '';
    
    if (cnBody) {
      cnSections.push(cnHeading + '\n\n' + cnBody);
    }
    if (enBody) {
      enSections.push(enHeading + '\n\n' + enBody);
    }
  }
  
  return {
    contentCn: cnSections.join('\n\n'),
    contentEn: enSections.join('\n\n')
  };
}

function parseDoc(fileContent) {
  const content = fileContent.trim();
  if (content.includes('### 中文') || content.includes('### 简体中文')) {
    const cnMatch = content.match(/###\s*(?:简体)?中文\r?\n([\s\S]*?)(?=###\s*English)/i);
    const enMatch = content.match(/###\s*English\r?\n([\s\S]*)/i);
    return {
      contentCn: cnMatch ? cnMatch[1].trim() : '',
      contentEn: enMatch ? enMatch[1].trim() : ''
    };
  }
  
  const lines = fileContent.split(/\r?\n/);
  let delimiterCount = 0;
  for (const line of lines) {
    if (line.trim() === '---') {
      delimiterCount++;
    }
  }
  
  if (delimiterCount === 1) {
    const parts = fileContent.split(/\n---\s*\n/);
    let cnPart = parts[0] ? parts[0].trim() : '';
    let enPart = parts[1] ? parts[1].trim() : '';
    
    cnPart = cnPart.replace(/^#+\s+[^\n]+\r?\n/, '').trim();
    enPart = enPart.replace(/^#+\s+[^\n]+\r?\n/, '').trim();
    
    return {
      contentCn: cnPart,
      contentEn: enPart
    };
  }
  
  return parseFormatA2(fileContent);
}

// Generate the output data
const chapters = mapping.map(chMap => {
  const docs = chMap.docs.map(docMap => {
    const filePath = path.join(helpDir, chMap.dir, docMap.file);
    if (!fs.existsSync(filePath)) {
      throw new Error(`Help markdown file not found: ${filePath}`);
    }
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const parsed = parseDoc(fileContent);
    return {
      id: docMap.id,
      title: docMap.title,
      contentCn: parsed.contentCn,
      contentEn: parsed.contentEn
    };
  });

  return {
    id: chMap.id,
    titleCn: chMap.titleCn,
    titleEn: chMap.titleEn,
    icon: chMap.icon,
    docs
  };
});

// Build the content of help-content.ts
const codeContent = `export interface HelpDoc {
  id: string;
  title: string;
  contentCn: string;
  contentEn: string;
}

export interface HelpChapter {
  id: string;
  titleCn: string;
  titleEn: string;
  icon: string;
  docs: HelpDoc[];
}

export const helpChapters: HelpChapter[] = ${JSON.stringify(chapters, null, 2)};
`;

fs.writeFileSync(tsFile, codeContent, 'utf8');
console.log(`Successfully generated help-content.ts at ${tsFile}`);
