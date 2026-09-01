import type { Metadata } from "next";

const SITE_URL = "https://rssflow.oinchain.com";

export const metadata: Metadata = {
  title: "服务条款 | RSSFlow Terms of Service",
  description:
    "RSSFlow Pro 服务条款：数字授权许可、Creem 支付、即时交付、退款政策、设备限制与客户支持。",
  keywords: [
    "RSSFlow 服务条款",
    "Terms of Service",
    "数字授权",
    "退款政策",
    "Creem",
  ],
  alternates: {
    canonical: "/terms",
    languages: {
      zh: "/terms",
      en: "/terms",
      "x-default": "/terms",
    },
  },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/terms`,
    title: "RSSFlow 服务条款",
    description:
      "数字软件授权、支付与退款、激活方式及客户支持联系方式。",
  },
  twitter: {
    card: "summary",
    title: "RSSFlow Terms of Service",
    description:
      "License terms, Creem payments, instant delivery, refunds, and support.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
