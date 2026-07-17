import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const SITE_URL = "https://rssflow.oinchain.com";

const geistSans = { variable: "font-sans" };
const geistMono = { variable: "font-mono" };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "RSSFlow - AI 驱动的智能阅读助手 | Beyond Reading, Into Insight.",
    template: "%s | RSSFlow",
  },
  description:
    "RSSFlow 是 AI 驱动的浏览器 RSS 阅读器：自动摘要、引文对话、知识图谱、定时简报、Telegram/飞书推送，数据默认本地存储。支持 Chrome 与 Edge。",
  keywords: [
    "RSSFlow",
    "RSS 阅读器",
    "AI 阅读器",
    "Chrome 扩展",
    "Edge 扩展",
    "AI 摘要",
    "知识图谱",
    "定时任务",
    "Telegram 推送",
    "飞书推送",
    "本地优先",
    "Ollama",
    "SnagFlow",
  ],
  applicationName: "RSSFlow",
  authors: [{ name: "RSSFlow", url: SITE_URL }],
  creator: "RSSFlow",
  publisher: "RSSFlow",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "zh-CN": "/",
      "zh-TW": "/",
      en: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "RSSFlow",
    locale: "zh_CN",
    alternateLocale: ["en_US", "zh_TW"],
    title: "RSSFlow - AI 驱动的智能阅读助手",
    description:
      "自动摘要、引文对话、知识图谱与定时简报。本地优先的 AI RSS 阅读扩展，支持 Chrome / Edge。",
    images: [
      {
        url: "/zh/hero-screenshot.png",
        width: 1200,
        height: 750,
        alt: "RSSFlow product preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RSSFlow - AI-Powered Smart Reading Companion",
    description:
      "AI summaries, cited chat, knowledge graph, scheduled briefs, and multi-channel push. Local-first RSS reader for Chrome & Edge.",
    images: ["/zh/hero-screenshot.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  other: {
    "msapplication-TileColor": "#020617",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "RSSFlow",
      description:
        "AI-powered local-first RSS reader with summaries, cited chat, workflows, and multi-channel push.",
      inLanguage: ["zh-CN", "en"],
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "RSSFlow",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.png`,
      },
      sameAs: [
        "https://twitter.com/love_rssflow",
        "https://github.com/Pizone-ai/RSSFlow-doc",
        "https://blog.oinchain.com",
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#app`,
      name: "RSSFlow",
      applicationCategory: "BrowserApplication",
      operatingSystem: "Chrome, Edge, Chromium",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description:
        "AI-powered RSS reader extension: auto summary, citation chat, knowledge graph, scheduled workflows, Telegram/Feishu push, local-first storage.",
      downloadUrl:
        "https://chromewebstore.google.com/detail/rssflow-reader/mefbfkpippglgoanjcbdjnkelcbdjija",
      url: SITE_URL,
      image: `${SITE_URL}/zh/hero-screenshot.png`,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
