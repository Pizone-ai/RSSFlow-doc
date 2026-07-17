'use client';

import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ChevronRight,
  Search,
  Menu,
  X,
  BookOpen,
  Sparkles,
  FileText,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MarkdownRenderer } from '@/components/help/MarkdownRenderer';
import { HelpSidebar } from '@/components/help/HelpSidebar';
import { helpChapters, type HelpDoc, type HelpChapter } from '@/data/help-content';
import { cn } from '@/lib/utils';
import { useLanguage, type Language } from '@/context/LanguageContext';

type SearchHit = {
  chapter: HelpChapter;
  doc: HelpDoc;
  snippet: string;
  score: number;
};

function extractSnippet(content: string, query: string, maxLen = 140): string {
  const plain = content.replace(/[#>*`|_\[\]]/g, ' ').replace(/\s+/g, ' ').trim();
  const q = query.trim();
  if (!q) return plain.slice(0, maxLen) + (plain.length > maxLen ? '…' : '');
  const lower = plain.toLowerCase();
  const idx = lower.indexOf(q.toLowerCase());
  if (idx < 0) return plain.slice(0, maxLen) + (plain.length > maxLen ? '…' : '');
  const start = Math.max(0, idx - 40);
  const end = Math.min(plain.length, idx + q.length + 80);
  const slice = plain.slice(start, end);
  return `${start > 0 ? '…' : ''}${slice}${end < plain.length ? '…' : ''}`;
}

export default function HelpPage() {
  const { lang, setLang } = useLanguage();
  const [activeChapter, setActiveChapter] = useState(helpChapters[0]?.id || '');
  const [activeDoc, setActiveDoc] = useState<string | null>(null);
  const [expandedChapters, setExpandedChapters] = useState<Set<string>>(
    new Set([helpChapters[0]?.id])
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Help body only has CN / EN. Homepage chrome may be ja/ko/…; map non-Chinese → English help copy.
  const isZh = lang === 'zh-CN' || lang === 'zh-TW';
  const helpLocale: 'cn' | 'en' = isZh ? 'cn' : 'en';

  // Honor legacy ?lang=zh|en from redirects / bookmarks; prefer browser family for help when no saved toggle intent via query.
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
      return;
    }
    // No query: LanguageProvider already applied localStorage / browser.
    // For help center specifically: if browser is Chinese family but saved lang is a non-help locale
    // (e.g. ja), still show EN body — already handled by isZh. If browser is zh and no localStorage,
    // provider sets zh-CN. Done.
  }, [setLang]);

  // Keyboard shortcut: "/" focuses search (when not typing in another field)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === '/' && !e.metaKey && !e.ctrlKey && !e.altKey) {
        const tag = (e.target as HTMLElement)?.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA' || (e.target as HTMLElement)?.isContentEditable) return;
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
        // Prefer earlier title match
        if (title.startsWith(ql)) score += 3;
        hits.push({
          chapter: ch,
          doc,
          snippet: extractSnippet(body, q),
          score,
        });
      }
    }
    return hits.sort((a, b) => b.score - a.score).slice(0, 12);
  }, [searchQuery, helpLocale]);

  const handleChapterClick = useCallback((id: string) => {
    setActiveChapter(id);
    setActiveDoc(null);
  }, []);

  const handleDocClick = useCallback((chapterId: string, docId: string) => {
    setActiveChapter(chapterId);
    setActiveDoc(docId);
    setSidebarOpen(false);
    setSearchFocused(false);
    setExpandedChapters((prev) => new Set(prev).add(chapterId));
  }, []);

  const handleToggleExpand = useCallback((id: string) => {
    setExpandedChapters((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  useEffect(() => {
    if (currentChapter && !activeDoc) {
      setActiveDoc(currentChapter.docs[0]?.id || null);
    }
  }, [activeChapter, currentChapter, activeDoc]);

  // When search filters sidebar to a single doc, keep selection coherent
  useEffect(() => {
    if (!searchQuery.trim()) return;
    if (filteredChapters.length === 0) return;
    const stillVisible = filteredChapters.some(
      (ch) => ch.id === activeChapter && ch.docs.some((d) => d.id === activeDoc)
    );
    if (!stillVisible) {
      const first = filteredChapters[0];
      setActiveChapter(first.id);
      setActiveDoc(first.docs[0]?.id || null);
      setExpandedChapters((prev) => new Set([...prev, first.id]));
    }
  }, [searchQuery, filteredChapters, activeChapter, activeDoc]);

  const setHelpLang = (next: 'zh' | 'en') => {
    const map: Record<'zh' | 'en', Language> = { zh: 'zh-CN', en: 'en' };
    setLang(map[next]);
  };

  const showResults = searchFocused && searchQuery.trim().length > 0;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30">
      <div className="fixed top-0 inset-x-0 z-50">
        <Navbar />
      </div>

      <div className="pt-20 min-h-screen flex flex-col">
        {/* Hero header + search */}
        <div className="relative border-b border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.07] via-slate-900/80 to-slate-950 pointer-events-none" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[280px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative container mx-auto max-w-7xl px-4 pt-6 pb-8 sm:pt-8 sm:pb-10">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div className="flex items-start gap-3 min-w-0">
                <button
                  type="button"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="lg:hidden mt-1 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors shrink-0"
                  aria-label="Menu"
                >
                  {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </button>
                <div className="min-w-0">
                  <nav className="flex items-center gap-2 text-slate-500 text-sm mb-2">
                    <Link href="/" className="hover:text-emerald-400 transition-colors">
                      {isZh ? '首页' : 'Home'}
                    </Link>
                    <ChevronRight className="w-3 h-3 shrink-0" />
                    <span className="text-slate-300">{isZh ? '帮助中心' : 'Help Center'}</span>
                  </nav>
                  <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-emerald-400 shrink-0" />
                    {isZh ? '有什么可以帮你？' : 'How can we help?'}
                  </h1>
                  <p className="text-slate-400 text-sm sm:text-base mt-1.5 max-w-xl">
                    {isZh
                      ? '搜索安装、AI 配置、定时任务、推送等全部帮助文档'
                      : 'Search install, AI setup, workflows, push notifications, and more'}
                  </p>
                </div>
              </div>

              {/* Help body language: CN / EN only (content languages) */}
              <div className="flex items-center gap-2 shrink-0 self-start sm:mt-6">
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold hidden sm:inline">
                  {isZh ? '文档语言' : 'Docs'}
                </span>
                <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 shadow-inner">
                  <button
                    type="button"
                    onClick={() => setHelpLang('en')}
                    className={cn(
                      'px-4 py-2 rounded-lg text-sm font-bold transition-all min-w-[3.25rem]',
                      !isZh
                        ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/25'
                        : 'text-slate-400 hover:text-white'
                    )}
                  >
                    EN
                  </button>
                  <button
                    type="button"
                    onClick={() => setHelpLang('zh')}
                    className={cn(
                      'px-4 py-2 rounded-lg text-sm font-bold transition-all min-w-[3.25rem]',
                      isZh
                        ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/25'
                        : 'text-slate-400 hover:text-white'
                    )}
                  >
                    中文
                  </button>
                </div>
              </div>
            </div>

            {/* Large search */}
            <div className="relative max-w-3xl mx-auto sm:mx-0">
              <div
                className={cn(
                  'relative group rounded-2xl transition-shadow',
                  searchFocused && 'shadow-[0_0_0_1px_rgba(16,185,129,0.35),0_20px_50px_-20px_rgba(16,185,129,0.35)]'
                )}
              >
                <Search
                  className={cn(
                    'absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors pointer-events-none',
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
                    // delay so click on result registers
                    window.setTimeout(() => setSearchFocused(false), 180);
                  }}
                  placeholder={
                    isZh
                      ? '搜索主题、功能或问题，例如：AI 密钥、Telegram、定时任务…'
                      : 'Search topics, features, or issues — e.g. AI key, Telegram, workflows…'
                  }
                  className={cn(
                    'w-full pl-12 sm:pl-14 pr-24 sm:pr-28 py-4 sm:py-5',
                    'bg-slate-900/90 border border-white/10 rounded-2xl',
                    'text-base sm:text-lg text-slate-100 placeholder:text-slate-500',
                    'focus:outline-none focus:border-emerald-500/40 focus:ring-2 focus:ring-emerald-500/20',
                    'transition-all backdrop-blur-sm'
                  )}
                  autoComplete="off"
                  spellCheck={false}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery('');
                        searchInputRef.current?.focus();
                      }}
                      className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                      aria-label="Clear"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                  <kbd className="hidden sm:inline-flex items-center px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-slate-500">
                    /
                  </kbd>
                </div>
              </div>

              {/* Live result panel */}
              <AnimatePresence>
                {showResults && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute z-30 left-0 right-0 mt-2 rounded-2xl border border-white/10 bg-slate-950/95 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden"
                  >
                    {searchHits.length === 0 ? (
                      <div className="px-5 py-8 text-center text-slate-500 text-sm">
                        {isZh ? `未找到与「${searchQuery}」相关的文档` : `No results for “${searchQuery}”`}
                      </div>
                    ) : (
                      <ul className="max-h-[min(420px,55vh)] overflow-y-auto py-2">
                        {searchHits.map((hit) => {
                          const title =
                            hit.doc.title.split('/')[isZh ? 0 : 1]?.trim() || hit.doc.title;
                          const chapterLabel = isZh ? hit.chapter.titleCn : hit.chapter.titleEn;
                          const active =
                            hit.chapter.id === activeChapter && hit.doc.id === activeDoc;
                          return (
                            <li key={`${hit.chapter.id}-${hit.doc.id}`}>
                              <button
                                type="button"
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={() => handleDocClick(hit.chapter.id, hit.doc.id)}
                                className={cn(
                                  'w-full text-left px-4 sm:px-5 py-3.5 flex gap-3 transition-colors',
                                  active
                                    ? 'bg-emerald-500/10'
                                    : 'hover:bg-white/[0.04]'
                                )}
                              >
                                <div className="mt-0.5 w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                                  <FileText className="w-4 h-4 text-emerald-400" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mb-0.5">
                                    <span className="font-semibold text-slate-100 truncate">
                                      {title}
                                    </span>
                                    <span className="text-[11px] text-slate-500 truncate">
                                      {chapterLabel}
                                    </span>
                                  </div>
                                  <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                                    {hit.snippet}
                                  </p>
                                </div>
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                    <div className="px-4 py-2 border-t border-white/5 text-[11px] text-slate-600 flex justify-between">
                      <span>
                        {isZh
                          ? `共 ${searchHits.length} 条匹配 · 侧栏已同步过滤`
                          : `${searchHits.length} matches · sidebar filtered`}
                      </span>
                      <span>{isZh ? 'Esc 关闭' : 'Esc to close'}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 min-h-0">
          <div className="hidden lg:block border-r border-white/5">
            <HelpSidebar
              chapters={filteredChapters}
              activeChapter={activeChapter}
              activeDoc={activeDoc}
              onChapterClick={handleChapterClick}
              onDocClick={handleDocClick}
              expandedChapters={expandedChapters}
              onToggleExpand={handleToggleExpand}
            />
          </div>

          {sidebarOpen && (
            <div className="fixed inset-0 z-40 lg:hidden">
              <div
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
                onClick={() => setSidebarOpen(false)}
              />
              <div className="absolute left-0 top-0 bottom-0 w-72 bg-slate-950 border-r border-white/10 overflow-y-auto pt-4">
                <HelpSidebar
                  chapters={filteredChapters}
                  activeChapter={activeChapter}
                  activeDoc={activeDoc}
                  onChapterClick={handleChapterClick}
                  onDocClick={handleDocClick}
                  expandedChapters={expandedChapters}
                  onToggleExpand={handleToggleExpand}
                />
              </div>
            </div>
          )}

          <div className="flex-1 overflow-y-auto">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {currentDoc ? (
                <motion.div
                  key={`${activeChapter}-${activeDoc}-${helpLocale}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-8">
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{isZh ? currentChapter?.titleCn : currentChapter?.titleEn}</span>
                      <ChevronRight className="w-3 h-3" />
                      <span className="text-slate-400">
                        {currentDoc.title.split('/')[isZh ? 0 : 1]?.trim() || currentDoc.title}
                      </span>
                    </div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">
                      {currentDoc.title.split('/')[isZh ? 0 : 1]?.trim() || currentDoc.title}
                    </h1>
                  </div>

                  <div className="prose-custom">
                    <MarkdownRenderer
                      content={helpLocale === 'cn' ? currentDoc.contentCn : currentDoc.contentEn}
                    />
                  </div>
                </motion.div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-slate-500">
                  <BookOpen className="w-16 h-16 mb-4 text-slate-700" />
                  <p className="text-lg font-medium">
                    {isZh ? '选择一个章节开始阅读' : 'Select a chapter to start reading'}
                  </p>
                  <p className="text-sm mt-2">
                    {isZh
                      ? '左侧导航栏列出了所有帮助主题'
                      : 'All help topics are listed in the left sidebar'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
