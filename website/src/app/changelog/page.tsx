'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  GitCommitHorizontal,
  Milestone,
  Store,
  Tag,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Starfield } from '@/components/Starfield';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { RELEASES, RELEASE_STATS } from '@/data/releases';

const copy = {
  zh: {
    crumbHome: '首页',
    crumb: '更新日志',
    title: '更新日志',
    subtitle:
      'RSSFlow 浏览器扩展自 2024-12 起的完整版本记录，持续维护、持续迭代。',
    latest: '当前版本',
    milestone: '里程碑',
    store: '商店节点',
    github: '在 GitHub 查看文档仓库',
    jump: '版本速览',
    versions: '个版本',
    since: '起始',
    continuous: '持续维护中',
  },
  en: {
    crumbHome: 'Home',
    crumb: 'Changelog',
    title: 'Changelog',
    subtitle:
      'Full release history of the RSSFlow browser extension since Dec 2024 — continuously maintained.',
    latest: 'Latest',
    milestone: 'Milestone',
    store: 'Store',
    github: 'View docs repo on GitHub',
    jump: 'Jump to version',
    versions: 'releases',
    since: 'Since',
    continuous: 'Actively maintained',
  },
} as const;

export default function ChangelogPage() {
  const { lang, setLang } = useLanguage();
  const isZh = lang === 'zh-CN' || lang === 'zh-TW';
  const t = isZh ? copy.zh : copy.en;

  const yearGroups = useMemo(() => {
    const map = new Map<string, typeof RELEASES>();
    for (const release of RELEASES) {
      const year = release.date.slice(0, 4);
      const list = map.get(year) ?? [];
      list.push(release);
      map.set(year, list);
    }
    return Array.from(map.entries());
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30">
      <Navbar />
      <Starfield />

      <div className="relative pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-white/5 pb-10"
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-[11px] uppercase tracking-[0.14em] text-slate-500 mb-1">
                {t.versions}
              </p>
              <p className="text-2xl font-bold text-white font-mono">{RELEASE_STATS.total}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-[11px] uppercase tracking-[0.14em] text-slate-500 mb-1">
                {t.since}
              </p>
              <p className="text-2xl font-bold text-white font-mono">{RELEASE_STATS.firstDate}</p>
            </div>
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.06] p-4">
              <p className="text-[11px] uppercase tracking-[0.14em] text-emerald-500/80 mb-1">
                {t.continuous}
              </p>
              <p className="text-2xl font-bold text-emerald-300 font-mono">
                v{RELEASE_STATS.latestVersion}
              </p>
            </div>
          </div>

          <div className="mb-12 rounded-3xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 mb-4">
              {t.jump}
            </p>
            <div className="flex flex-wrap gap-2">
              {RELEASES.map((release, idx) => (
                <a
                  key={release.version}
                  href={`#v${release.version}`}
                  className={`font-mono text-xs px-2.5 py-1.5 rounded-lg border transition-colors ${
                    idx === 0
                      ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
                      : 'border-white/10 bg-white/[0.03] text-slate-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  v{release.version}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {yearGroups.map(([year, releases]) => (
              <section key={year}>
                <div className="flex items-center gap-3 mb-5">
                  <h2 className="text-sm font-mono font-bold text-emerald-400/90 tracking-widest">
                    {year}
                  </h2>
                  <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/30 to-transparent" />
                  <span className="text-xs text-slate-500 font-mono">
                    {releases.length}
                  </span>
                </div>

                <div className="space-y-6">
                  {releases.map((release, idx) => {
                    const isLatest = release.version === RELEASE_STATS.latestVersion;
                    return (
                      <motion.article
                        key={release.version}
                        id={`v${release.version}`}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ delay: Math.min(idx * 0.03, 0.15) }}
                        className="scroll-mt-28 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 hover:border-emerald-500/25 transition-colors"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                          <div>
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                                v{release.version}
                              </h3>
                              {isLatest && (
                                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                                  {t.latest}
                                </span>
                              )}
                              {release.milestone && (
                                <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                                  <Milestone className="w-3 h-3" />
                                  {t.milestone}
                                </span>
                              )}
                              {release.store && (
                                <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20">
                                  <Store className="w-3 h-3" />
                                  {t.store}
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
                      </motion.article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://github.com/Pizone-ai/RSSFlow-doc"
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
