import type { Metadata } from "next";

const SITE_URL = "https://rssflow.oinchain.com";

export const metadata: Metadata = {
  title: "隐私政策 | RSSFlow Privacy Policy",
  description:
    "RSSFlow 隐私政策：本地优先存储、API 密钥安全、无追踪遥测，以及 AI、推送、云报告等可选集成何时会发送数据。",
  keywords: [
    "RSSFlow 隐私",
    "本地优先",
    "IndexedDB",
    "无追踪",
    "Chrome 扩展隐私",
    "RSSFlow privacy",
  ],
  alternates: {
    canonical: "/privacy",
    languages: {
      zh: "/privacy/zh",
      en: "/privacy/en",
      "x-default": "/privacy",
    },
  },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/privacy`,
    title: "RSSFlow 隐私政策",
    description:
      "了解 RSSFlow 如何本地存储数据、保护 API 密钥，以及可选集成的数据边界。",
  },
  twitter: {
    card: "summary",
    title: "RSSFlow Privacy Policy",
    description:
      "Local-first storage, no telemetry, and clear rules for optional AI/push integrations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
