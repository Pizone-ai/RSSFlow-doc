import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

function parseInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Bold: **text** or __text__
    const boldMatch = remaining.match(/^(\*\*|__)(.+?)\1/);
    if (boldMatch) {
      parts.push(
        <strong key={key++} className="font-semibold text-slate-200">
          {parseInline(boldMatch[2])}
        </strong>
      );
      remaining = remaining.slice(boldMatch[0].length);
      continue;
    }

    // Italic: *text* or _text_ (single, not bold)
    const italicMatch = remaining.match(/^(\*|_)(?!\1)(.+?)\1(?!\1)/);
    if (italicMatch) {
      parts.push(
        <em key={key++} className="italic text-slate-300">
          {parseInline(italicMatch[2])}
        </em>
      );
      remaining = remaining.slice(italicMatch[0].length);
      continue;
    }

    // Inline code: `code`
    const codeMatch = remaining.match(/^`([^`]+)`/);
    if (codeMatch) {
      parts.push(
        <code
          key={key++}
          className="px-1.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/60 text-[0.85em] font-mono text-emerald-300/90"
        >
          {codeMatch[1]}
        </code>
      );
      remaining = remaining.slice(codeMatch[0].length);
      continue;
    }

    // Links: [text](url)
    const linkMatch = remaining.match(/^\[([^\]]+)\]\(([^)]+)\)/);
    if (linkMatch) {
      const href = linkMatch[2].trim();
      const isExternal = /^https?:\/\//i.test(href);
      const isInternalHelp = href.startsWith('#') || href.startsWith('/help');
      parts.push(
        <a
          key={key++}
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 decoration-emerald-500/40 hover:decoration-emerald-400 transition-colors"
        >
          {parseInline(linkMatch[1])}
          {isExternal && !isInternalHelp ? (
            <span className="ml-0.5 text-[0.7em] opacity-60" aria-hidden>
              ↗
            </span>
          ) : null}
        </a>
      );
      remaining = remaining.slice(linkMatch[0].length);
      continue;
    }

    // Autolink bare URLs
    const urlMatch = remaining.match(/^(https?:\/\/[^\s)\]`]+)/);
    if (urlMatch) {
      const url = urlMatch[1].replace(/[.,;:!?]+$/, '');
      const trailing = urlMatch[1].slice(url.length);
      parts.push(
        <a
          key={key++}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 break-all"
        >
          {url}
          <span className="ml-0.5 text-[0.7em] opacity-60" aria-hidden>
            ↗
          </span>
        </a>
      );
      remaining = trailing + remaining.slice(urlMatch[0].length);
      continue;
    }

    // Regular text up to next special char
    const nextSpecial = remaining.search(/(\*\*|__|`|\[|\*|_|https?:\/\/)/);
    if (nextSpecial === 0) {
      // Consume one char to avoid infinite loop on unmatched markers
      parts.push(remaining[0]);
      remaining = remaining.slice(1);
      continue;
    }
    if (nextSpecial > 0) {
      parts.push(remaining.slice(0, nextSpecial));
      remaining = remaining.slice(nextSpecial);
    } else {
      parts.push(remaining);
      remaining = '';
    }
  }

  return parts;
}

function isStructuralStart(trimmed: string): boolean {
  if (!trimmed) return true;
  if (trimmed.startsWith('```')) return true;
  if (trimmed.startsWith('|')) return true;
  if (trimmed === '---' || trimmed === '***' || trimmed === '___') return true;
  if (/^#{1,6}\s+/.test(trimmed)) return true;
  if (/^[-*+]\s+/.test(trimmed)) return true;
  if (/^\d+\.\s+/.test(trimmed)) return true;
  if (/^>\s?/.test(trimmed)) return true;
  return false;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const lines = content.replace(/\r\n/g, '\n').split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Fenced code block
    if (trimmed.startsWith('```')) {
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      elements.push(
        <pre
          key={elements.length}
          className="my-4 p-4 bg-slate-900/80 border border-slate-800 rounded-xl overflow-x-auto"
        >
          <code className="text-sm font-mono text-slate-300 leading-relaxed whitespace-pre">
            {codeLines.join('\n')}
          </code>
        </pre>
      );
      continue;
    }

    // Horizontal rule
    if (trimmed === '---' || trimmed === '***' || trimmed === '___') {
      elements.push(
        <hr key={elements.length} className="my-8 border-0 border-t border-white/10" />
      );
      i++;
      continue;
    }

    // Table
    if (
      trimmed.startsWith('|') &&
      trimmed.endsWith('|') &&
      i + 1 < lines.length &&
      lines[i + 1].trim().match(/^[\s|:-]+$/)
    ) {
      const headerCells = trimmed
        .split('|')
        .filter((c, idx, arr) => !(idx === 0 && c.trim() === '') && !(idx === arr.length - 1 && c.trim() === ''))
        .map((c) => c.trim());
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith('|') && lines[i].trim().endsWith('|')) {
        const cells = lines[i]
          .trim()
          .split('|')
          .filter((c, idx, arr) => !(idx === 0 && c.trim() === '') && !(idx === arr.length - 1 && c.trim() === ''))
          .map((c) => c.trim());
        rows.push(cells);
        i++;
      }

      elements.push(
        <div key={elements.length} className="my-5 overflow-x-auto rounded-xl border border-slate-800/80">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-emerald-500/20">
                {headerCells.map((h, hi) => (
                  <th
                    key={hi}
                    className="px-4 py-2.5 text-left font-bold text-emerald-400 bg-emerald-500/5 first:rounded-tl-xl last:rounded-tr-xl"
                  >
                    {parseInline(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className="border-b border-slate-800/50 last:border-0 hover:bg-white/[0.03]">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-2.5 text-slate-400 align-top">
                      {parseInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Headings # – ######
    const headingMatch = trimmed.match(/^(#{1,6})\s+(.+)/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2];
      const common = 'font-bold tracking-tight text-white';
      const classMap: Record<number, string> = {
        1: `text-2xl ${common} mt-2 mb-5`,
        2: `text-xl ${common} mt-8 mb-4 pb-2 border-b border-white/5`,
        3: 'text-lg font-semibold text-emerald-400/90 mt-6 mb-3',
        4: 'text-base font-semibold text-slate-200 mt-5 mb-2',
        5: 'text-sm font-semibold text-slate-300 mt-4 mb-2',
        6: 'text-sm font-medium text-slate-400 mt-3 mb-1.5',
      };
      const className = classMap[level] || classMap[4];
      const children = parseInline(text);
      const el =
        level === 1 ? (
          <h1 key={elements.length} className={className}>
            {children}
          </h1>
        ) : level === 2 ? (
          <h2 key={elements.length} className={className}>
            {children}
          </h2>
        ) : level === 3 ? (
          <h3 key={elements.length} className={className}>
            {children}
          </h3>
        ) : level === 4 ? (
          <h4 key={elements.length} className={className}>
            {children}
          </h4>
        ) : level === 5 ? (
          <h5 key={elements.length} className={className}>
            {children}
          </h5>
        ) : (
          <h6 key={elements.length} className={className}>
            {children}
          </h6>
        );
      elements.push(el);
      i++;
      continue;
    }

    // Blockquote
    if (/^>\s?/.test(trimmed)) {
      const quoteLines: string[] = [];
      while (i < lines.length && /^>\s?/.test(lines[i].trim())) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ''));
        i++;
      }
      elements.push(
        <blockquote
          key={elements.length}
          className="my-4 pl-4 border-l-2 border-emerald-500/40 text-slate-400 leading-relaxed italic bg-emerald-500/[0.04] py-2 pr-3 rounded-r-lg"
        >
          {parseInline(quoteLines.join(' '))}
        </blockquote>
      );
      continue;
    }

    // Unordered list
    if (/^[-*+]\s+/.test(trimmed)) {
      const items: React.ReactNode[] = [];
      while (i < lines.length) {
        const li = lines[i].trim().match(/^[-*+]\s+(.+)/);
        if (!li) break;
        items.push(
          <li key={items.length} className="flex gap-3 text-slate-400 leading-relaxed">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500/60 shrink-0" />
            <span className="min-w-0">{parseInline(li[1])}</span>
          </li>
        );
        i++;
      }
      elements.push(
        <ul key={elements.length} className="my-3 space-y-2">
          {items}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (/^\d+\.\s+/.test(trimmed)) {
      const items: React.ReactNode[] = [];
      let idx = 1;
      while (i < lines.length) {
        const li = lines[i].trim().match(/^\d+\.\s+(.+)/);
        if (!li) break;
        items.push(
          <li key={items.length} className="flex gap-3 text-slate-400 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
              {idx}
            </span>
            <span className="min-w-0">{parseInline(li[1])}</span>
          </li>
        );
        idx++;
        i++;
      }
      elements.push(
        <ol key={elements.length} className="my-3 space-y-2.5">
          {items}
        </ol>
      );
      continue;
    }

    // Empty line
    if (trimmed === '') {
      i++;
      continue;
    }

    // Paragraph: consume until blank or structural line
    const paraLines: string[] = [];
    while (i < lines.length) {
      const t = lines[i].trim();
      if (isStructuralStart(t) && paraLines.length > 0) break;
      if (isStructuralStart(t) && paraLines.length === 0) {
        // safety: shouldn't happen for pure structural; fall through
        if (t === '') {
          i++;
          break;
        }
      }
      if (t === '') break;
      // Don't swallow next structural block starters mid-paragraph
      if (
        paraLines.length > 0 &&
        (t.startsWith('#') ||
          t.startsWith('|') ||
          t.startsWith('```') ||
          t === '---' ||
          /^[-*+]\s+/.test(t) ||
          /^\d+\.\s+/.test(t) ||
          /^>\s?/.test(t))
      ) {
        break;
      }
      paraLines.push(t);
      i++;
    }

    if (paraLines.length > 0) {
      // Q&A style: **Q: ...** as subtle callout lead
      const joined = paraLines.join(' ');
      const isQA = /^\*\*Q[:：]/.test(joined) || /^\*\*A[:：]/.test(joined);
      elements.push(
        <p
          key={elements.length}
          className={
            isQA
              ? 'text-slate-300 leading-relaxed my-2'
              : 'text-slate-400 leading-relaxed my-3'
          }
        >
          {parseInline(joined)}
        </p>
      );
      continue;
    }

    i++;
  }

  return <div className="markdown-content space-y-1">{elements}</div>;
};
