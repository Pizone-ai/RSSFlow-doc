import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RSSFlow - AI 驱动的跨维度智能情报中心 | Beyond Reading, Into Insight.",
  description: "RSSFlow 深度融合前沿 AI 技术，重塑您获取与处理信息的方式。本地优先架构，零云端同步，提供极致精美的 HTML 分析报告与本地 Ollama 模型支持。",
  keywords: ["RSSFlow", "AI 阅读", "RSS 阅读器", "情报中心", "隐私优先", "自动化报告", "Ollama", "深度摘要", "信息流"],
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
