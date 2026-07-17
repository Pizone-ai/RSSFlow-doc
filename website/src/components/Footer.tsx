'use client';

import React from 'react';
import { Twitter, Github, Mail, MessageCircle, ExternalLink, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

/** Studio products — append new launches here. */
const STUDIO_PRODUCTS = [
  {
    id: 'rssflow',
    name: 'RSSFlow',
    href: 'https://rssflow.oinchain.com',
    blurb: {
      'zh-CN': 'AI 智能阅读助手 · 本地优先 RSS',
      'zh-TW': 'AI 智能閱讀助手 · 本地優先 RSS',
      en: 'AI reading companion · local-first RSS',
      ja: 'AI読書アシスタント · ローカル優先RSS',
      ko: 'AI 리딩 도우미 · 로컬 우선 RSS',
      de: 'KI-Lesehelfer · Local-first RSS',
      es: 'Lectura con IA · RSS local-first',
      pt: 'Leitura com IA · RSS local-first',
      it: 'Lettura con IA · RSS local-first',
      ru: 'ИИ-чтение · локальный RSS',
      hi: 'AI रीडिंग · लोकल-फर्स्ट RSS',
      ar: 'قراءة بالذكاء الاصطناعي · RSS محلي',
    } as Record<string, string>,
    current: true,
  },
  {
    id: 'snagflow',
    name: 'SnagFlow',
    href: 'https://snagflow.oinchain.com',
    blurb: {
      'zh-CN': '任意网页一键变成稳定 RSS 订阅源',
      'zh-TW': '任意網頁一鍵變成穩定 RSS 訂閱源',
      en: 'Turn any page into a stable RSS feed',
      ja: 'あらゆるページを安定したRSSに',
      ko: '어떤 페이지든 안정적인 RSS로',
      de: 'Beliebige Seite als stabiler RSS-Feed',
      es: 'Convierte cualquier página en RSS estable',
      pt: 'Transforme qualquer página em RSS estável',
      it: 'Trasforma qualsiasi pagina in RSS stabile',
      ru: 'Любая страница → стабильный RSS',
      hi: 'किसी भी पेज को स्थिर RSS बनाएं',
      ar: 'حوّل أي صفحة إلى موجز RSS مستقر',
    } as Record<string, string>,
    current: false,
  },
] as const;

const content: Record<
  string,
  {
    privacy: string;
    help: string;
    blog: string;
    rights: string;
    studioLabel: string;
    studioHint: string;
    currentBadge: string;
  }
> = {
  'zh-CN': {
    privacy: '隐私政策',
    help: '帮助中心',
    blog: '博客',
    rights: '保留所有权利。',
    studioLabel: '作者出品',
    studioHint: '同一团队打造的更多工具',
    currentBadge: '当前站点',
  },
  'zh-TW': {
    privacy: '隱私政策',
    help: '幫助中心',
    blog: '部落格',
    rights: '保留所有權利。',
    studioLabel: '作者出品',
    studioHint: '同一團隊打造的更多工具',
    currentBadge: '目前網站',
  },
  en: {
    privacy: 'Privacy Policy',
    help: 'Help Center',
    blog: 'Blog',
    rights: 'All rights reserved.',
    studioLabel: 'From the makers',
    studioHint: 'More tools from the same team',
    currentBadge: 'You are here',
  },
  ja: {
    privacy: 'プライバシーポリシー',
    help: 'ヘルプセンター',
    blog: 'ブログ',
    rights: 'All rights reserved.',
    studioLabel: '作者のプロダクト',
    studioHint: '同じチームの他のツール',
    currentBadge: 'このサイト',
  },
  ko: {
    privacy: '개인정보 보호정책',
    help: '헬프 센터',
    blog: '블로그',
    rights: 'All rights reserved.',
    studioLabel: '제작자 제품',
    studioHint: '같은 팀의 다른 도구',
    currentBadge: '현재 사이트',
  },
  de: {
    privacy: 'Datenschutzerklärung',
    help: 'Hilfezentrum',
    blog: 'Blog',
    rights: 'Alle Rechte vorbehalten.',
    studioLabel: 'Vom Hersteller',
    studioHint: 'Weitere Tools desselben Teams',
    currentBadge: 'Diese Seite',
  },
  es: {
    privacy: 'Política de privacidad',
    help: 'Centro de ayuda',
    blog: 'Blog',
    rights: 'Todos los derechos reservados.',
    studioLabel: 'Del mismo equipo',
    studioHint: 'Más herramientas del mismo equipo',
    currentBadge: 'Sitio actual',
  },
  pt: {
    privacy: 'Política de privacidade',
    help: 'Central de ajuda',
    blog: 'Blog',
    rights: 'Todos os direitos reservados.',
    studioLabel: 'Do mesmo time',
    studioHint: 'Mais ferramentas do mesmo time',
    currentBadge: 'Site atual',
  },
  it: {
    privacy: 'Informativa sulla privacy',
    help: 'Centro assistenza',
    blog: 'Blog',
    rights: 'Tutti i diritti riservati.',
    studioLabel: 'Dallo stesso team',
    studioHint: 'Altri strumenti dello stesso team',
    currentBadge: 'Questo sito',
  },
  ru: {
    privacy: 'Политика конфиденциальности',
    help: 'Справочный центр',
    blog: 'Блог',
    rights: 'Все права защищены.',
    studioLabel: 'От авторов',
    studioHint: 'Другие инструменты той же команды',
    currentBadge: 'Этот сайт',
  },
  hi: {
    privacy: 'गोपनीयता नीति',
    help: 'सहायता केंद्र',
    blog: 'ब्लॉग',
    rights: 'सर्वाधिकार सुरक्षित।',
    studioLabel: 'निर्माताओं से',
    studioHint: 'उसी टीम के और टूल',
    currentBadge: 'यह साइट',
  },
  ar: {
    privacy: 'سياسة الخصوصية',
    help: 'مركز المساعدة',
    blog: 'المدونة',
    rights: 'جميع الحقوق محفوظة.',
    studioLabel: 'من الصانعين',
    studioHint: 'المزيد من أدوات الفريق نفسه',
    currentBadge: 'هذا الموقع',
  },
};

export const Footer: React.FC = () => {
  const { lang } = useLanguage();
  const t = content[lang] || content.en;

  return (
    <footer className="pt-16 pb-20 border-t border-slate-800 bg-slate-950/50 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Studio products */}
        <div className="mb-12 sm:mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-500/90 mb-1">
                {t.studioLabel}
              </p>
              <p className="text-sm text-slate-500">{t.studioHint}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {STUDIO_PRODUCTS.map((product) => {
              const blurb =
                product.blurb[lang] || product.blurb.en || Object.values(product.blurb)[0];
              const isCurrent = product.current;
              const className =
                'group relative flex flex-col rounded-2xl border p-4 sm:p-5 transition-all text-left ' +
                (isCurrent
                  ? 'border-emerald-500/25 bg-emerald-500/[0.06]'
                  : 'border-white/10 bg-white/[0.02] hover:border-emerald-500/30 hover:bg-white/[0.04]');

              const inner = (
                <>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="text-base font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                      {product.name}
                    </span>
                    {isCurrent ? (
                      <span className="shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                        {t.currentBadge}
                      </span>
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition-colors shrink-0" />
                    )}
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed pr-2">{blurb}</p>
                  {!isCurrent && (
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-slate-500 group-hover:text-emerald-400/90 transition-colors">
                      {product.href.replace(/^https?:\/\//, '')}
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </span>
                  )}
                </>
              );

              if (isCurrent) {
                return (
                  <div key={product.id} className={className} aria-current="page">
                    {inner}
                  </div>
                );
              }

              return (
                <a
                  key={product.id}
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {inner}
                </a>
              );
            })}
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">RSSFlow</h2>
            <p className="text-slate-500 text-sm">Beyond Reading, Into Insight.</p>
          </div>

          <div className="flex gap-8">
            <a
              href="https://twitter.com/love_rssflow"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://t.me/+fTK4yn1n3aU5YWFl"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
              aria-label="Telegram"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/oinzen/RSSFlow-doc"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:oinchain@gmail.com"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-slate-500 text-xs text-center md:text-right">
            <div className="flex flex-wrap gap-4 justify-center md:justify-end mb-2">
              <a href="/privacy" className="hover:text-emerald-400 transition-colors">
                {t.privacy}
              </a>
              <a href="/help" className="hover:text-emerald-400 transition-colors">
                {t.help}
              </a>
              <a
                href="https://blog.oinchain.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors"
              >
                {t.blog}
              </a>
            </div>
            <p>
              © 2026 RSSFlow Reader. {t.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
