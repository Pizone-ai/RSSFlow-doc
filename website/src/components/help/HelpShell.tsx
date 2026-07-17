'use client';

import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ChevronRight,
  ChevronLeft,
  Search,
  Menu,
  X,
  BookOpen,
  FileText,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MarkdownRenderer } from '@/components/help/MarkdownRenderer';
import { HelpSidebar } from '@/components/help/HelpSidebar';
import { helpChapters, type HelpDoc, type HelpChapter } from '@/data/help-content';
import { cn } from '@/lib/utils';
import { useLanguage, type Language } from '@/context/LanguageContext';
import { getAdjacentHelpDocs, splitDocTitle } from '@/lib/help';

type SearchHit = {
  chapter: HelpChapter;
  doc: HelpDoc;
  snippet: string;
  score: number;
};

function extractSnippet(content: string, query: string, maxLen = 120): string {
  const plain = content.replace(/[#>*`|_\[\]]/g, ' ').replace(/\s+/g, ' ').trim();
  const q = query.trim();
  if (!q) return plain.slice(0, maxLen) + (plain.length > maxLen ? '…' : '');
  const lower = plain.toLowerCase();
  const idx = lower.indexOf(q.toLowerCase());
  if (idx < 0) return plain.slice(0, maxLen) + (plain.length > maxLen ? '…' : '');
  const start = Math.max(0, idx - 36);
  const end = Math.min(plain.length, idx + q.length + 72);
  const slice = plain.slice(start, end);
  return `${start > 0 ? '…' : ''}${slice}${end < plain.length ? '…' : ''}`;
}

export type HelpShellProps = {
  /** When set, show this doc and sync sidebar; when null, hub index */
  activeSlug?: string | null;
  /** Server-rendered HTML for SEO (Chinese body); optional */
  seoHtmlCn?: string;
  seoHtmlEn?: string;
};

export function HelpShell({
  activeSlug = null,
  seoHtmlCn,
  seoHtmlEn,
}: HelpShellProps) {
  const router = useRouter();
  const { lang, setLang } = useLanguage();
  const isZh = lang === 'zh-CN' || lang === 'zh-TW';
  const helpLocale: 'cn' | 'en' = isZh ? 'cn' : 'en';

  const initial = useMemo(() => {
    if (!activeSlug) {
      return {
        chapterId: helpChapters[0]?.id || '',
        docId: null as string | null,
      };
    }
    for (const ch of helpChapters) {
      const doc = ch.docs.find((d) => d.id === activeSlug);
      if (doc) return { chapterId: ch.id, docId: doc.id };
    }
    return { chapterId: helpChapters[0]?.id || '', docId: null as string | null };
  }, [activeSlug]);

  const [activeChapter, setActiveChapter] = useState(initial.chapterId);
  const [activeDoc, setActiveDoc] = useState<string | null>(initial.docId);
  const [expandedChapters, setExpandedChapters] = useState<Set<string>>(
    () => new Set([initial.chapterId])
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Sync when navigating between slug pages
  useEffect(() => {
    setActiveChapter(initial.chapterId);
    setActiveDoc(initial.docId);
    setExpandedChapters((prev) => new Set(prev).add(initial.chapterId));
  }, [initial.chapterId, initial.docId]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const q = (params.get('lang') || '').toLowerCase();
    if (q === 'zh' || q === 'zh-cn' || q === 'cn' || q === 'zh-tw') {
      setLang(q === 'zh-tw' ? 'zh-TW' : 'zh-CN');
      return;
    }
    if (q === 'en' || q === 'en-us' || q === 'en-gb') {
      setLang('en');
    }
  }, [setLang]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === '/' && !e.metaKey && !e.ctrlKey && !e.altKey) {
        const tag = (e.target as HTMLElement)?.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA' || (e.target as HTMLElement)?.isContentEditable)
          return;
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        setSearchFocused(false);
        searchInputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const currentChapter = useMemo(
    () => helpChapters.find((c) => c.id === activeChapter),
    [activeChapter]
  );

  const currentDoc = useMemo(() => {
    if (!activeDoc || !currentChapter) return null;
    return currentChapter.docs.find((d) => d.id === activeDoc) || null;
  }, [activeDoc, currentChapter]);

  const filteredChapters = useMemo(() => {
    if (!searchQuery.trim()) return helpChapters;
    const q = searchQuery.toLowerCase();
    return helpChapters
      .map((ch) => ({
        ...ch,
        docs: ch.docs.filter((d) => {
          const body = helpLocale === 'cn' ? d.contentCn : d.contentEn;
          return (
            d.title.toLowerCase().includes(q) ||
            (helpLocale === 'cn' ? ch.titleCn : ch.titleEn).toLowerCase().includes(q) ||
            body.toLowerCase().includes(q)
          );
        }),
      }))
      .filter((ch) => ch.docs.length > 0);
  }, [searchQuery, helpLocale]);

  const searchHits = useMemo((): SearchHit[] => {
    const q = searchQuery.trim();
    if (q.length < 1) return [];
    const ql = q.toLowerCase();
    const hits: SearchHit[] = [];
    for (const ch of helpChapters) {
      for (const doc of ch.docs) {
        const body = helpLocale === 'cn' ? doc.contentCn : doc.contentEn;
        const title = doc.title.toLowerCase();
        const chapterTitle = (helpLocale === 'cn' ? ch.titleCn : ch.titleEn).toLowerCase();
        const bodyL = body.toLowerCase();
        let score = 0;
        if (title.includes(ql)) score += 10;
        if (chapterTitle.includes(ql)) score += 4;
        if (bodyL.includes(ql)) score += 2;
        if (score === 0) continue;
        if (title.startsWith(ql)) score += 3;
        hits.push({
          chapter: ch,
          doc,
          snippet: extractSnippet(body, q),
          score,
        });
      }
    }
    return hits.sort((a, b) => b.score - a.score).slice(0, 10);
  }, [searchQuery, helpLocale]);

  const goDoc = useCallback(
    (chapterId: string, docId: string) => {
      setActiveChapter(chapterId);
      setActiveDoc(docId);
      setSidebarOpen(false);
      setSearchFocused(false);
      setExpandedChapters((prev) => new Set(prev).add(chapterId));
      router.push(`/help/${docId}`);
    },
    [router]
  );

  const handleChapterClick = useCallback(
    (id: string) => {
      setActiveChapter(id);
      const ch = helpChapters.find((c) => c.id === id);
      const first = ch?.docs[0];
      if (first) {
        goDoc(id, first.id);
      }
    },
    [goDoc]
  );

  const handleDocClick = useCallback(
    (chapterId: string, docId: string) => {
      goDoc(chapterId, docId);
    },
    [goDoc]
  );

  const handleToggleExpand = useCallback((id: string) => {
    setExpandedChapters((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  useEffect(() => {
    if (!searchQuery.trim()) return;
    if (filteredChapters.length === 0) return;
    const stillVisible = filteredChapters.some(
      (ch) => ch.id === activeChapter && ch.docs.some((d) => d.id === activeDoc)
    );
    if (!stillVisible) {
      const first = filteredChapters[0];
      // don't auto-navigate on search filter — only expand
      setExpandedChapters((prev) => new Set([...prev, first.id]));
    }
  }, [searchQuery, filteredChapters, activeChapter, activeDoc]);

  const setHelpLang = (next: 'zh' | 'en') => {
    const map: Record<'zh' | 'en', Language> = { zh: 'zh-CN', en: 'en' };
    setLang(map[next]);
  };

  const showResults = searchFocused && searchQuery.trim().length > 0;
  const titles = currentDoc ? splitDocTitle(currentDoc.title) : null;
  const docTitle = titles ? (isZh ? titles.cn : titles.en) : '';
  const adjacent = activeDoc ? getAdjacentHelpDocs(activeDoc) : null;

  const showSeoDual =
    Boolean(seoHtmlCn || seoHtmlEn) && Boolean(activeSlug);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30">
      <div className="fixed top-0 inset-x-0 z-50">
        <Navbar />
      </div>

      <div className="pt-20 min-h-screen flex flex-col">
        {/* Compact sticky toolbar */}
        <div className="sticky top-20 z-30 border-b border-white/5 bg-slate-950/85 backdrop-blur-xl">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex items-center gap-3 h-14">
              <button
                type="button"
                onClick={() => setSidebarOpen((v) => !v)}
                className="lg:hidden w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors shrink-0"
                aria-label="Menu"
              >
                {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>

              <nav className="hidden sm:flex items-center gap-1.5 text-sm text-slate-500 shrink-0 min-w-0">
                <Link href="/" className="hover:text-emerald-400 transition-colors shrink-0">
                  {isZh ? '首页' : 'Home'}
                </Link>
                <ChevronRight className="w-3.5 h-3.5 opacity-60 shrink-0" />
                <Link href="/help" className="hover:text-emerald-400 transition-colors shrink-0">
                  {isZh ? '帮助中心' : 'Help'}
                </Link>
                {docTitle ? (
                  <>
                    <ChevronRight className="w-3.5 h-3.5 opacity-60 shrink-0" />
                    <span className="text-slate-300 font-medium truncate max-w-[12rem]">
                      {docTitle}
                    </span>
                  </>
                ) : null}
              </nav>

              <div className="relative flex-1 min-w-0 max-w-xl mx-auto sm:mx-0">
                <Search
                  className={cn(
                    'absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none transition-colors',
                    searchFocused ? 'text-emerald-400' : 'text-slate-500'
                  )}
                />
                <input
                  ref={searchInputRef}
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => {
                    window.setTimeout(() => setSearchFocused(false), 160);
                  }}
                  placeholder={isZh ? '搜索文档…' : 'Search docs…'}
                  className={cn(
                    'w-full h-9 pl-9 pr-16 rounded-lg text-sm',
                    'bg-white/[0.04] border border-white/10 text-slate-200 placeholder:text-slate-600',
                    'focus:outline-none focus:border-emerald-500/35 focus:ring-2 focus:ring-emerald-500/15',
                    'transition-all'
                  )}
                  autoComplete="off"
                  spellCheck={false}
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  {searchQuery ? (
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery('');
                        searchInputRef.current?.focus();
                      }}
                      className="w-6 h-6 rounded-md hover:bg-white/10 flex items-center justify-center text-slate-500 hover:text-slate-300"
                      aria-label="Clear"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <kbd className="hidden md:inline-flex px-1.5 py-0.5 rounded border border-white/10 text-[10px] font-mono text-slate-600">
                      /
                    </kbd>
                  )}
                </div>

                <AnimatePresence>
                  {showResults && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute z-40 left-0 right-0 top-[calc(100%+6px)] rounded-xl border border-white/10 bg-slate-950/98 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden"
                    >
                      {searchHits.length === 0 ? (
                        <div className="px-4 py-6 text-center text-slate-500 text-sm">
                          {isZh ? '无匹配结果' : 'No matches'}
                        </div>
                      ) : (
                        <ul className="max-h-72 overflow-y-auto py-1.5">
                          {searchHits.map((hit) => {
                            const t = splitDocTitle(hit.doc.title);
                            const title = isZh ? t.cn : t.en;
                            const chapterLabel = isZh
                              ? hit.chapter.titleCn
                              : hit.chapter.titleEn;
                            const active =
                              hit.chapter.id === activeChapter && hit.doc.id === activeDoc;
                            return (
                              <li key={`${hit.chapter.id}-${hit.doc.id}`}>
                                <button
                                  type="button"
                                  onMouseDown={(e) => e.preventDefault()}
                                  onClick={() => handleDocClick(hit.chapter.id, hit.doc.id)}
                                  className={cn(
                                    'w-full text-left px-3 py-2.5 flex gap-2.5 transition-colors',
                                    active ? 'bg-emerald-500/10' : 'hover:bg-white/[0.04]'
                                  )}
                                >
                                  <FileText className="w-3.5 h-3.5 text-emerald-400/80 mt-1 shrink-0" />
                                  <div className="min-w-0">
                                    <div className="text-sm font-medium text-slate-200 truncate">
                                      {title}
                                      <span className="ml-2 text-[11px] font-normal text-slate-600">
                                        {chapterLabel}
                                      </span>
                                    </div>
                                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                                      {hit.snippet}
                                    </p>
                                  </div>
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex bg-white/[0.04] p-0.5 rounded-lg border border-white/10 shrink-0">
                <button
                  type="button"
                  onClick={() => setHelpLang('en')}
                  className={cn(
                    'px-2.5 py-1.5 rounded-md text-xs font-bold transition-all',
                    !isZh ? 'bg-emerald-500 text-white' : 'text-slate-500 hover:text-white'
                  )}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setHelpLang('zh')}
                  className={cn(
                    'px-2.5 py-1.5 rounded-md text-xs font-bold transition-all',
                    isZh ? 'bg-emerald-500 text-white' : 'text-slate-500 hover:text-white'
                  )}
                >
                  中文
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 container mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex min-h-[min(72vh,820px)] rounded-2xl border border-white/10 bg-slate-900/30 overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <aside className="hidden lg:flex w-[260px] xl:w-[280px] shrink-0 flex-col border-r border-white/10 bg-slate-950/40">
              <div className="px-4 pt-4 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-600">
                {isZh ? '目录' : 'Contents'}
              </div>
              <div className="flex-1 overflow-y-auto px-2 pb-4">
                <HelpSidebar
                  chapters={filteredChapters}
                  activeChapter={activeChapter}
                  activeDoc={activeDoc}
                  onChapterClick={handleChapterClick}
                  onDocClick={handleDocClick}
                  expandedChapters={expandedChapters}
                  onToggleExpand={handleToggleExpand}
                  embedded
                />
              </div>
            </aside>

            {sidebarOpen && (
              <div className="fixed inset-0 z-40 lg:hidden">
                <div
                  className="absolute inset-0 bg-slate-950/75 backdrop-blur-sm"
                  onClick={() => setSidebarOpen(false)}
                />
                <div className="absolute left-0 top-0 bottom-0 w-[min(20rem,88vw)] bg-slate-950 border-r border-white/10 overflow-y-auto pt-4 px-2 shadow-2xl">
                  <div className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-600">
                    {isZh ? '目录' : 'Contents'}
                  </div>
                  <HelpSidebar
                    chapters={filteredChapters}
                    activeChapter={activeChapter}
                    activeDoc={activeDoc}
                    onChapterClick={handleChapterClick}
                    onDocClick={handleDocClick}
                    expandedChapters={expandedChapters}
                    onToggleExpand={handleToggleExpand}
                    embedded
                  />
                </div>
              </div>
            )}

            <div className="flex-1 min-w-0 overflow-y-auto bg-gradient-to-b from-slate-900/20 to-transparent">
              <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10 py-8 sm:py-10">
                {currentDoc ? (
                  <motion.div
                    key={`${activeChapter}-${activeDoc}-${helpLocale}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="mb-7 pb-6 border-b border-white/5">
                      <div className="flex items-center gap-2 text-xs text-slate-500 mb-2.5">
                        <BookOpen className="w-3.5 h-3.5 text-emerald-500/70" />
                        <span>{isZh ? currentChapter?.titleCn : currentChapter?.titleEn}</span>
                        <ChevronRight className="w-3 h-3 opacity-50" />
                        <span className="text-slate-400 truncate">{docTitle}</span>
                      </div>
                      <h1 className="text-2xl sm:text-[1.75rem] font-bold text-white tracking-tight leading-snug">
                        {docTitle}
                      </h1>
                    </div>

                    {/* Interactive markdown (client language toggle) */}
                    <div className="prose-custom">
                      <MarkdownRenderer
                        content={
                          helpLocale === 'cn' ? currentDoc.contentCn : currentDoc.contentEn
                        }
                      />
                    </div>

                    {/* SEO dual-language bodies (static HTML for crawlers; visually hidden) */}
                    {showSeoDual ? (
                      <div className="sr-only" aria-hidden="false">
                        {seoHtmlCn ? (
                          <article
                            lang="zh-CN"
                            dangerouslySetInnerHTML={{ __html: seoHtmlCn }}
                          />
                        ) : null}
                        {seoHtmlEn ? (
                          <article
                            lang="en"
                            dangerouslySetInnerHTML={{ __html: seoHtmlEn }}
                          />
                        ) : null}
                      </div>
                    ) : null}

                    {/* Prev / Next */}
                    {adjacent && (adjacent.prev || adjacent.next) ? (
                      <nav className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {adjacent.prev ? (
                          <Link
                            href={`/help/${adjacent.prev.doc.id}`}
                            className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] hover:border-emerald-500/30 hover:bg-emerald-500/[0.04] p-4 transition-colors"
                          >
                            <ChevronLeft className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 mt-0.5 shrink-0" />
                            <div className="min-w-0">
                              <div className="text-[11px] uppercase tracking-wider text-slate-600 mb-1">
                                {isZh ? '上一篇' : 'Previous'}
                              </div>
                              <div className="text-sm font-semibold text-slate-200 group-hover:text-emerald-300 truncate">
                                {
                                  splitDocTitle(adjacent.prev.doc.title)[
                                    isZh ? 'cn' : 'en'
                                  ]
                                }
                              </div>
                            </div>
                          </Link>
                        ) : (
                          <div />
                        )}
                        {adjacent.next ? (
                          <Link
                            href={`/help/${adjacent.next.doc.id}`}
                            className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] hover:border-emerald-500/30 hover:bg-emerald-500/[0.04] p-4 transition-colors sm:text-right sm:flex-row-reverse"
                          >
                            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 mt-0.5 shrink-0" />
                            <div className="min-w-0">
                              <div className="text-[11px] uppercase tracking-wider text-slate-600 mb-1">
                                {isZh ? '下一篇' : 'Next'}
                              </div>
                              <div className="text-sm font-semibold text-slate-200 group-hover:text-emerald-300 truncate">
                                {
                                  splitDocTitle(adjacent.next.doc.title)[
                                    isZh ? 'cn' : 'en'
                                  ]
                                }
                              </div>
                            </div>
                          </Link>
                        ) : null}
                      </nav>
                    ) : null}
                  </motion.div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-16 text-slate-500">
                    <BookOpen className="w-12 h-12 mb-3 text-slate-700" />
                    <p className="text-base font-medium mb-6">
                      {isZh ? '选择一篇文档开始阅读' : 'Pick a topic to start reading'}
                    </p>
                    <ul className="w-full max-w-lg space-y-2">
                      {helpChapters.slice(0, 6).map((ch) => (
                        <li key={ch.id}>
                          <Link
                            href={`/help/${ch.docs[0]?.id}`}
                            className="flex items-center justify-between rounded-lg border border-white/10 px-4 py-3 text-sm text-slate-300 hover:border-emerald-500/30 hover:text-emerald-300 transition-colors"
                          >
                            <span>{isZh ? ch.titleCn : ch.titleEn}</span>
                            <ChevronRight className="w-4 h-4 opacity-50" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
