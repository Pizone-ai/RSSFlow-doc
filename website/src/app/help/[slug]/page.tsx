import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { HelpShell } from '@/components/help/HelpShell';
import {
  allHelpSlugs,
  getAdjacentHelpDocs,
  getHelpDocBySlug,
  helpDocDescription,
  splitDocTitle,
} from '@/lib/help';
import { markdownToHtml } from '@/lib/markdown-html';

const SITE_URL = 'https://rssflow.oinchain.com';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allHelpSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ref = getHelpDocBySlug(slug);
  if (!ref) {
    return { title: 'Not Found' };
  }
  const { cn, en } = splitDocTitle(ref.doc.title);
  const desc =
    helpDocDescription(ref.doc.contentCn) ||
    helpDocDescription(ref.doc.contentEn) ||
    `${cn} — RSSFlow 帮助文档`;

  return {
    title: `${cn} | RSSFlow 帮助`,
    description: desc,
    alternates: {
      canonical: `/help/${slug}`,
    },
    openGraph: {
      type: 'article',
      url: `${SITE_URL}/help/${slug}`,
      title: `${cn} | RSSFlow`,
      description: desc,
      images: [
        {
          url: '/zh/hero-screenshot.png',
          width: 1200,
          height: 750,
          alt: cn,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${en} | RSSFlow Help`,
      description: helpDocDescription(ref.doc.contentEn) || desc,
      images: ['/zh/hero-screenshot.png'],
    },
    robots: { index: true, follow: true },
  };
}

export default async function HelpDocPage({ params }: Props) {
  const { slug } = await params;
  const ref = getHelpDocBySlug(slug);
  if (!ref) notFound();

  const { cn, en } = splitDocTitle(ref.doc.title);
  const seoHtmlCn = markdownToHtml(ref.doc.contentCn);
  const seoHtmlEn = markdownToHtml(ref.doc.contentEn);
  const { prev, next } = getAdjacentHelpDocs(slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        headline: cn,
        alternativeHeadline: en,
        description: helpDocDescription(ref.doc.contentCn),
        inLanguage: ['zh-CN', 'en'],
        isPartOf: {
          '@type': 'WebSite',
          name: 'RSSFlow',
          url: SITE_URL,
        },
        mainEntityOfPage: `${SITE_URL}/help/${slug}`,
        author: { '@type': 'Organization', name: 'RSSFlow' },
        publisher: {
          '@type': 'Organization',
          name: 'RSSFlow',
          url: SITE_URL,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Help',
            item: `${SITE_URL}/help`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: cn,
            item: `${SITE_URL}/help/${slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Crawlable H1 + dual language articles for indexers */}
      <div className="sr-only">
        <h1>
          {cn} / {en}
        </h1>
        <p>
          {ref.chapter.titleCn} · RSSFlow Help · {ref.chapter.titleEn}
        </p>
        <article lang="zh-CN" dangerouslySetInnerHTML={{ __html: seoHtmlCn }} />
        <article lang="en" dangerouslySetInnerHTML={{ __html: seoHtmlEn }} />
        <nav>
          {prev ? (
            <a href={`/help/${prev.doc.id}`}>
              Prev: {splitDocTitle(prev.doc.title).cn}
            </a>
          ) : null}
          {next ? (
            <a href={`/help/${next.doc.id}`}>
              Next: {splitDocTitle(next.doc.title).cn}
            </a>
          ) : null}
        </nav>
      </div>
      <HelpShell activeSlug={slug} seoHtmlCn={seoHtmlCn} seoHtmlEn={seoHtmlEn} />
    </>
  );
}
