import type { Metadata } from "next";
import "./globals.css";
// Use system/browser fallback fonts to ensure offline build compatibility
const geistSans = { variable: "font-sans" };
const geistMono = { variable: "font-mono" };

export const metadata: Metadata = {
  title: "RSSFlow - AI 驱动的智能阅读助手 | Beyond Reading, Into Insight.",
  description: "RSSFlow 深度融合前沿 AI 技术，重塑您获取与处理信息的方式。本地优先架构，零云端同步，提供精美的 HTML 分析报告与本地 Ollama 模型支持。",
  keywords: ["RSSFlow", "AI 阅读", "RSS 阅读器", "信息整理", "隐私优先", "自动化报告", "Ollama", "深度摘要", "信息流"],
  alternates: {
    canonical: "/",
    languages: {
      "zh-CN": "/",
      "en-US": "/",
    },
  },
  openGraph: {
    title: "RSSFlow - AI 驱动的智能阅读助手 | Beyond Reading, Into Insight.",
    description: "RSSFlow 深度融合前沿 AI 技术，重塑您获取与处理信息的方式。本地优先架构，零云端同步，提供极致精美的 HTML 分析报告与本地 Ollama 模型支持。",
    url: "https://rssflow.oinchain.com",
    siteName: "RSSFlow",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RSSFlow - AI-Powered Smart Reading Companion | Beyond Reading, Into Insight.",
    description: "RSSFlow deeply integrates cutting-edge AI technology to reshape how you acquire and process information. Local-first architecture, zero cloud sync.",
  },
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "RSSFlow",
              "operatingSystem": "Chrome, Browser",
              "applicationCategory": "UtilitiesApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "RSSFlow 深度融合前沿 AI 技术，重塑您获取与处理信息的方式。本地优先架构，零云端同步，提供极致精美的 HTML 分析报告与本地 Ollama 模型支持。",
              "downloadUrl": "https://chromewebstore.google.com/detail/rssflow-reader/mefbfkpippglgoanjcbdjnkelcbdjija"
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
