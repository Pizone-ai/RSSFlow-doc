'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, GitCommitHorizontal, Tag } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Starfield } from '@/components/Starfield';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { RELEASES } from '@/data/releases';

const copy = {
  zh: {
    crumbHome: '首页',
    crumb: '更新日志',
    title: '更新日志',
    subtitle: 'RSSFlow 浏览器扩展的工程向版本记录。按确认后的扩展本体能力收录。',
    latest: '当前版本',
    github: '在 GitHub 查看文档仓库',
    emptyDetail: '',
  },
  en: {
    crumbHome: 'Home',
    crumb: 'Changelog',
    title: 'Changelog',
    subtitle:
      'Engineering release notes for the RSSFlow browser extension. Scoped to confirmed extension-side capabilities.',
    latest: 'Latest',
    github: 'View docs repo on GitHub',
    emptyDetail: '',
  },
} as const;

export default function ChangelogPage() {
  const { lang, setLang } = useLanguage();
  const isZh = lang === 'zh-CN' || lang === 'zh-TW';
  const t = isZh ? copy.zh : copy.en;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30">
      <Navbar />
      <Starfield />

      <div className="relative pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/5 pb-12"
          >
            <div>
              <nav className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  {t.crumbHome}
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-slate-300">{t.crumb}</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                {t.title}
              </h1>
              <p className="text-slate-400 max-w-2xl leading-relaxed">{t.subtitle}</p>
            </div>

            <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 self-start md:self-auto">
              <button
                onClick={() => setLang('en')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  !isZh
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLang('zh-CN')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  isZh
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                中文
              </button>
            </div>
          </motion.div>

          <div className="space-y-8">
            {RELEASES.map((release, idx) => {
              const isLatest = idx === 0;
              return (
                <motion.section
                  key={release.version}
                  id={`v${release.version}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(idx * 0.05, 0.25) }}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 hover:border-emerald-500/25 transition-colors"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                          v{release.version}
                        </h2>
                        {isLatest && (
                          <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                            {t.latest}
                          </span>
                        )}
                      </div>
                      <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                        {isZh ? release.summaryZh : release.summaryEn}
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-2 text-sm text-slate-500">
                      <span className="inline-flex items-center gap-1.5 font-mono">
                        <Tag className="w-3.5 h-3.5 text-emerald-400" />
                        {release.tag}
                      </span>
                      <span className="font-mono text-slate-400">{release.date}</span>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {release.changes.map((change, cIdx) => (
                      <li key={cIdx} className="flex gap-3">
                        <GitCommitHorizontal className="w-4 h-4 mt-1 text-emerald-500/80 shrink-0" />
                        <div>
                          <p className="text-slate-100 font-medium">
                            {isZh ? change.titleZh : change.titleEn}
                          </p>
                          {(isZh ? change.detailZh : change.detailEn) && (
                            <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                              {isZh ? change.detailZh : change.detailEn}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.section>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://github.com/oinzen/RSSFlow-doc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors"
            >
              {t.github}
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
