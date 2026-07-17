'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Search, Menu, X, BookOpen } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MarkdownRenderer } from '@/components/help/MarkdownRenderer';
import { HelpSidebar } from '@/components/help/HelpSidebar';
import { helpChapters } from '@/data/help-content';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

export default function HelpPage() {
  const { lang, setLang } = useLanguage();
  const [activeChapter, setActiveChapter] = useState(helpChapters[0]?.id || '');
  const [activeDoc, setActiveDoc] = useState<string | null>(null);
  const [expandedChapters, setExpandedChapters] = useState<Set<string>>(new Set([helpChapters[0]?.id]));
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const isZh = lang === 'zh-CN' || lang === 'zh-TW';

  const currentChapter = useMemo(
    () => helpChapters.find(c => c.id === activeChapter),
    [activeChapter]
  );

  const currentDoc = useMemo(
    () => {
      if (!activeDoc || !currentChapter) return null;
      return currentChapter.docs.find(d => d.id === activeDoc) || null;
    },
    [activeDoc, currentChapter]
  );

  const filteredChapters = useMemo(() => {
    if (!searchQuery.trim()) return helpChapters;
    const q = searchQuery.toLowerCase();
    return helpChapters.map(ch => ({
      ...ch,
      docs: ch.docs.filter(d =>
        d.title.toLowerCase().includes(q) ||
        (isZh ? d.contentCn : d.contentEn).toLowerCase().includes(q)
      )
    })).filter(ch => ch.docs.length > 0);
  }, [searchQuery, isZh]);

  const handleChapterClick = useCallback((id: string) => {
    setActiveChapter(id);
    setActiveDoc(null);
  }, []);

  const handleDocClick = useCallback((chapterId: string, docId: string) => {
    setActiveChapter(chapterId);
    setActiveDoc(docId);
    setSidebarOpen(false);
  }, []);

  const handleToggleExpand = useCallback((id: string) => {
    setExpandedChapters(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  // Ensure first doc is selected when switching chapters
  React.useEffect(() => {
    if (currentChapter && !activeDoc) {
      setActiveDoc(currentChapter.docs[0]?.id || null);
    }
  }, [activeChapter, currentChapter, activeDoc]);

  const displayLang = isZh ? 'cn' : 'en';

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30">
      <div className="fixed top-0 inset-x-0 z-50">
        <Navbar />
      </div>

      <div className="pt-20 min-h-screen flex flex-col">
        {/* Header */}
        <div className="border-b border-white/5 bg-slate-900/50 backdrop-blur-sm">
          <div className="container mx-auto max-w-7xl px-4 py-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
              <nav className="flex items-center gap-2 text-slate-500 text-sm">
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  {isZh ? '首页' : 'Home'}
                </Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-slate-300">{isZh ? '帮助中心' : 'Help Center'}</span>
              </nav>
            </div>

            <div className="flex items-center gap-3">
              {/* Language toggle */}
              <div className="flex bg-white/5 p-0.5 rounded-lg border border-white/10">
                <button
                  onClick={() => setLang('en')}
                  className={cn(
                    'px-3 py-1.5 rounded-md text-xs font-bold transition-all',
                    !isZh ? 'bg-emerald-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                  )}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang('zh-CN')}
                  className={cn(
                    'px-3 py-1.5 rounded-md text-xs font-bold transition-all',
                    isZh ? 'bg-emerald-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                  )}
                >
                  中文
                </button>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="container mx-auto max-w-7xl px-4 pb-4">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={isZh ? '搜索帮助文档...' : 'Search help docs...'}
                className="w-full pl-10 pr-4 py-2 bg-slate-900/50 border border-white/10 rounded-xl text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/30 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1">
          {/* Sidebar - Desktop */}
          <div className="hidden lg:block">
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

          {/* Sidebar - Mobile */}
          {sidebarOpen && (
            <div className="fixed inset-0 z-40 lg:hidden">
              <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
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

          {/* Main content */}
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {currentDoc ? (
                <motion.div
                  key={`${activeChapter}-${activeDoc}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-8">
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{isZh ? currentChapter?.titleCn : currentChapter?.titleEn}</span>
                      <ChevronRight className="w-3 h-3" />
                      <span className="text-slate-400">{currentDoc.title.split('/')[isZh ? 0 : 1]?.trim() || currentDoc.title}</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">
                      {currentDoc.title.split('/')[isZh ? 0 : 1]?.trim() || currentDoc.title}
                    </h1>
                  </div>

                  <div className="prose-custom">
                    <MarkdownRenderer content={displayLang === 'cn' ? currentDoc.contentCn : currentDoc.contentEn} />
                  </div>
                </motion.div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-slate-500">
                  <BookOpen className="w-16 h-16 mb-4 text-slate-700" />
                  <p className="text-lg font-medium">
                    {isZh ? '选择一个章节开始阅读' : 'Select a chapter to start reading'}
                  </p>
                  <p className="text-sm mt-2">
                    {isZh ? '左侧导航栏列出了所有帮助主题' : 'All help topics are listed in the left sidebar'}
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
