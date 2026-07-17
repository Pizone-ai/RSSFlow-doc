import type { Metadata } from "next";
import { helpChapters } from "@/data/help-content";

const SITE_URL = "https://rssflow.oinchain.com";

export const metadata: Metadata = {
  title: "帮助中心 | RSSFlow 使用指南与 FAQ",
  description:
    "RSSFlow 官方帮助中心：安装与初始化、AI 密钥配置、订阅管理、SnagFlow、阅读器、知识图谱、定时任务、Telegram/飞书推送、MCP、隐私与故障排除。",
  keywords: [
    "RSSFlow 帮助",
    "RSSFlow 教程",
    "AI 密钥配置",
    "SnagFlow",
    "Telegram 推送",
    "飞书 Webhook",
    "定时任务",
    "知识图谱",
    "MCP",
    "RSS 阅读器 FAQ",
  ],
  alternates: {
    canonical: "/help",
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/help`,
    title: "RSSFlow 帮助中心",
    description:
      "从安装到 AI 配置、工作流与推送，完整的 RSSFlow 使用文档与常见问题。",
    images: [
      {
        url: "/zh/hero-screenshot.png",
        width: 1200,
        height: 750,
        alt: "RSSFlow Help Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RSSFlow Help Center",
    description:
      "Install, AI setup, SnagFlow, workflows, Telegram/Feishu push, MCP, privacy and troubleshooting.",
    images: ["/zh/hero-screenshot.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Help Center",
      item: `${SITE_URL}/help`,
    },
  ],
};

const webPageLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/help#webpage`,
  url: `${SITE_URL}/help`,
  name: "RSSFlow Help Center",
  description:
    "Official RSSFlow documentation: setup, AI, feeds, reader, workflows, push, MCP, privacy and FAQ.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  inLanguage: ["zh-CN", "en"],
};

export default function HelpLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }}
      />
      {children}
      {/* Crawlable outline: real doc titles for search engines (hidden from visual UI) */}
      <nav className="sr-only" aria-label="RSSFlow help documentation index">
        <h1>RSSFlow 帮助中心 / Help Center</h1>
        <p>
          Official documentation for the RSSFlow AI RSS reader: installation, AI
          keys, SnagFlow, reading modes, knowledge graph, scheduled workflows,
          Telegram and Feishu push, MCP bridge, privacy and troubleshooting.
        </p>
        {helpChapters.map((ch) => (
          <section key={ch.id}>
            <h2>
              {ch.titleCn} / {ch.titleEn}
            </h2>
            <ul>
              {ch.docs.map((doc) => {
                const cn = doc.title.split("/")[0]?.trim() || doc.title;
                const en = doc.title.split("/")[1]?.trim() || doc.title;
                return (
                  <li key={doc.id}>
                    <a href="/help">
                      {cn} / {en}
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </nav>
    </>
  );
}
