'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import type { HelpChapter } from '@/data/help-content';
import * as LucideIcons from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface HelpSidebarProps {
  chapters: HelpChapter[];
  activeChapter: string;
  activeDoc: string | null;
  onChapterClick: (id: string) => void;
  onDocClick: (chapterId: string, docId: string) => void;
  expandedChapters: Set<string>;
  onToggleExpand: (id: string) => void;
}

export const HelpSidebar: React.FC<HelpSidebarProps> = ({
  chapters,
  activeChapter,
  activeDoc,
  onChapterClick,
  onDocClick,
  expandedChapters,
  onToggleExpand,
}) => {
  const { lang } = useLanguage();
  const isZh = lang === 'zh-CN' || lang === 'zh-TW';

  return (
    <nav className="w-72 shrink-0 border-r border-white/10 overflow-y-auto h-full py-6 px-3 space-y-1">
      {chapters.map((chapter) => {
        const IconComponent = (LucideIcons as any)[chapter.icon] || LucideIcons.FileText;
        const isExpanded = expandedChapters.has(chapter.id);
        const isActive = activeChapter === chapter.id;

        return (
          <div key={chapter.id}>
            <button
              onClick={() => {
                onChapterClick(chapter.id);
                onToggleExpand(chapter.id);
              }}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold transition-all text-left",
                isActive
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
              )}
            >
              <IconComponent className="w-4 h-4 shrink-0" />
              <span className="truncate flex-1">{isZh ? chapter.titleCn : chapter.titleEn}</span>
              <span className="text-[10px] text-slate-600 font-mono">{chapter.docs.length}</span>
            </button>

            {isExpanded && (
              <div className="ml-4 mt-1 space-y-0.5 border-l border-white/5 pl-3">
                {chapter.docs.map((doc) => (
                  <button
                    key={doc.id}
                    onClick={() => onDocClick(chapter.id, doc.id)}
                    className={cn(
                      "w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
                      activeChapter === chapter.id && activeDoc === doc.id
                        ? "text-emerald-400 bg-emerald-500/5"
                        : "text-slate-500 hover:text-slate-300"
                    )}
                  >
                    {doc.title.split('/')[isZh ? 0 : 1]?.trim() || doc.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
};
