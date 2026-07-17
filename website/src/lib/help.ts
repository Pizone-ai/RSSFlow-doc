import { helpChapters, type HelpChapter, type HelpDoc } from '@/data/help-content';

export type HelpDocRef = {
  chapter: HelpChapter;
  doc: HelpDoc;
  /** flat index across all docs (reading order) */
  index: number;
};

export function splitDocTitle(title: string): { cn: string; en: string } {
  const parts = title.split('/').map((s) => s.trim());
  return {
    cn: parts[0] || title,
    en: parts[1] || parts[0] || title,
  };
}

/** Flatten chapters → docs in sidebar/reading order */
export function getAllHelpDocs(): HelpDocRef[] {
  const list: HelpDocRef[] = [];
  let index = 0;
  for (const chapter of helpChapters) {
    for (const doc of chapter.docs) {
      list.push({ chapter, doc, index });
      index += 1;
    }
  }
  return list;
}

export function getHelpDocBySlug(slug: string): HelpDocRef | null {
  return getAllHelpDocs().find((x) => x.doc.id === slug) ?? null;
}

export function getAdjacentHelpDocs(slug: string): {
  prev: HelpDocRef | null;
  next: HelpDocRef | null;
  current: HelpDocRef | null;
} {
  const all = getAllHelpDocs();
  const i = all.findIndex((x) => x.doc.id === slug);
  if (i < 0) return { prev: null, next: null, current: null };
  return {
    current: all[i],
    prev: i > 0 ? all[i - 1] : null,
    next: i < all.length - 1 ? all[i + 1] : null,
  };
}

/** Plain-text description for meta tags (from markdown body) */
export function helpDocDescription(content: string, maxLen = 155): string {
  const plain = content
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]+`/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^>\s?/gm, '')
    .replace(/\|/g, ' ')
    .replace(/[*_~#>|`-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (plain.length <= maxLen) return plain;
  return plain.slice(0, maxLen - 1).replace(/\s+\S*$/, '') + '…';
}

export function allHelpSlugs(): string[] {
  return getAllHelpDocs().map((x) => x.doc.id);
}
