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
  /** When true, omit fixed width/border — parent shell owns layout */
  embedded?: boolean;
}

export const HelpSidebar: React.FC<HelpSidebarProps> = ({
  chapters,
  activeChapter,
  activeDoc,
  onChapterClick,
  onDocClick,
  expandedChapters,
  onToggleExpand,
  embedded = false,
}) => {
  const { lang } = useLanguage();
  const isZh = lang === 'zh-CN' || lang === 'zh-TW';

  return (
    <nav
      className={cn(
        'space-y-0.5',
        embedded
          ? 'w-full'
          : 'w-72 shrink-0 border-r border-white/10 overflow-y-auto h-full py-6 px-3'
      )}
    >
      {chapters.map((chapter) => {
        const IconComponent =
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ((LucideIcons as any)[chapter.icon] as React.ComponentType<{ className?: string }>) ||
          LucideIcons.FileText;
        const isActive = activeChapter === chapter.id;
        const isExpanded = expandedChapters.has(chapter.id);

        return (
          <div key={chapter.id} className="mb-0.5">
            <button
              type="button"
              onClick={() => {
                onChapterClick(chapter.id);
                onToggleExpand(chapter.id);
              }}
              className={cn(
                'w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[13px] font-semibold transition-all text-left',
                isActive
                  ? 'bg-emerald-500/10 text-emerald-400'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
              )}
            >
              <IconComponent
                className={cn('w-3.5 h-3.5 shrink-0', isActive ? 'text-emerald-400' : 'text-slate-500')}
              />
              <span className="truncate flex-1">{isZh ? chapter.titleCn : chapter.titleEn}</span>
              <span className="text-[10px] text-slate-600 tabular-nums">{chapter.docs.length}</span>
            </button>

            {isExpanded && (
              <div className="ml-3 mt-0.5 mb-1 space-y-px border-l border-white/[0.06] pl-2">
                {chapter.docs.map((doc) => {
                  const selected = activeChapter === chapter.id && activeDoc === doc.id;
                  return (
                    <button
                      type="button"
                      key={doc.id}
                      onClick={() => onDocClick(chapter.id, doc.id)}
                      className={cn(
                        'w-full text-left px-2.5 py-1.5 rounded-md text-xs transition-all leading-snug',
                        selected
                          ? 'text-emerald-400 bg-emerald-500/[0.08] font-medium'
                          : 'text-slate-500 hover:text-slate-300 hover:bg-white/[0.03]'
                      )}
                    >
                      {doc.title.split('/')[isZh ? 0 : 1]?.trim() || doc.title}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
};
