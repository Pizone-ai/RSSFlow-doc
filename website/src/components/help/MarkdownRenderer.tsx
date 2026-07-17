import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function parseInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let remaining = text;

  while (remaining.length > 0) {
    // Bold: **text** or __text__
    const boldMatch = remaining.match(/^(\*\*|__)(.+?)\1/);
    if (boldMatch) {
      parts.push(<strong key={parts.length} className="font-bold text-white">{parseInline(boldMatch[2])}</strong>);
      remaining = remaining.slice(boldMatch[0].length);
      continue;
    }

    // Inline code: `code`
    const codeMatch = remaining.match(/^`([^`]+)`/);
    if (codeMatch) {
      parts.push(
        <code key={parts.length} className="px-1.5 py-0.5 bg-slate-800 text-emerald-300 rounded text-xs font-mono">
          {codeMatch[1]}
        </code>
      );
      remaining = remaining.slice(codeMatch[0].length);
      continue;
    }

    // Links: [text](url)
    const linkMatch = remaining.match(/^\[([^\]]+)\]\(([^)]+)\)/);
    if (linkMatch) {
      const href = linkMatch[2];
      const isExternal = href.startsWith('http') || href.startsWith('https');
      parts.push(
        <a
          key={parts.length}
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 decoration-emerald-500/30"
        >
          {linkMatch[1]}
        </a>
      );
      remaining = remaining.slice(linkMatch[0].length);
      continue;
    }

    // Regular text up to next special char
    const nextSpecial = remaining.search(/(\*\*|__|`|\[)/);
    if (nextSpecial === 0) continue; // shouldn't happen
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

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Code block
    if (trimmed.startsWith('```')) {
      const lang = trimmed.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      elements.push(
        <pre key={elements.length} className="my-4 p-4 bg-slate-900/80 border border-slate-800 rounded-xl overflow-x-auto">
          <code className="text-sm font-mono text-slate-300 leading-relaxed whitespace-pre">{codeLines.join('\n')}</code>
        </pre>
      );
      continue;
    }

    // Table: | ... |
    if (trimmed.startsWith('|') && trimmed.endsWith('|') && i + 1 < lines.length && lines[i + 1].trim().match(/^[\s\|:-]+$/)) {
      const headerCells = trimmed.split('|').filter(c => c.trim()).map(c => c.trim());
      const sepLine = lines[i + 1].trim();
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        const cells = lines[i].trim().split('|').filter((c, idx, arr) => {
          if (idx === 0 && c.trim() === '') return false;
          if (idx === arr.length - 1 && c.trim() === '') return false;
          return true;
        }).map(c => c.trim());
        rows.push(cells);
        i++;
      }

      elements.push(
        <div key={elements.length} className="my-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-emerald-500/20">
                {headerCells.map((h, hi) => (
                  <th key={hi} className="px-4 py-2.5 text-left font-bold text-emerald-400 bg-emerald-500/5 first:rounded-l-lg last:rounded-r-lg">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className="border-b border-slate-800/50 hover:bg-white/5">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-2 text-slate-400">{parseInline(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Header ## or ###
    const h2Match = trimmed.match(/^##\s+(.+)/);
    if (h2Match) {
      elements.push(
        <h2 key={elements.length} className="text-xl font-bold text-white mt-8 mb-4 pb-2 border-b border-white/5">
          {parseInline(h2Match[1])}
        </h2>
      );
      i++;
      continue;
    }

    const h3Match = trimmed.match(/^###\s+(.+)/);
    if (h3Match) {
      elements.push(
        <h3 key={elements.length} className="text-lg font-semibold text-emerald-400/90 mt-6 mb-3">
          {parseInline(h3Match[1])}
        </h3>
      );
      i++;
      continue;
    }

    // Unordered list: - item or * item
    const ulMatch = trimmed.match(/^[-*]\s+(.+)/);
    if (ulMatch) {
      const items: React.ReactNode[] = [];
      while (i < lines.length) {
        const li = lines[i].trim().match(/^[-*]\s+(.+)/);
        if (!li) break;
        items.push(
          <li key={items.length} className="flex gap-3 text-slate-400 leading-relaxed">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500/60 shrink-0" />
            <span>{parseInline(li[1])}</span>
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

    // Ordered list: 1. item
    const olMatch = trimmed.match(/^\d+\.\s+(.+)/);
    if (olMatch) {
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
            <span>{parseInline(li[1])}</span>
          </li>
        );
        idx++;
        i++;
      }
      elements.push(
        <ol key={elements.length} className="my-3 space-y-2">
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

    // Regular paragraph
    const paraLines: string[] = [];
    while (i < lines.length && lines[i].trim() !== '' && !lines[i].trim().startsWith('```') && !lines[i].trim().startsWith('|')) {
      paraLines.push(lines[i].trim());
      i++;
    }
    if (paraLines.length > 0) {
      elements.push(
        <p key={elements.length} className="text-slate-400 leading-relaxed my-3">
          {parseInline(paraLines.join(' '))}
        </p>
      );
      continue;
    }

    i++;
  }

  return <div className="markdown-content space-y-1">{elements}</div>;
};
