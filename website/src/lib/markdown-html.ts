/**
 * Minimal Markdown → HTML for help docs (server-side, static export).
 * Covers headings, lists, tables, code, blockquote, paragraphs, inline marks.
 */
export function markdownToHtml(md: string): string {
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  const out: string[] = [];
  let i = 0;

  const esc = (s: string) =>
    s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');

  const inline = (text: string): string => {
    let t = esc(text);
    // code first
    t = t.replace(/`([^`]+)`/g, '<code>$1</code>');
    // bold before single-asterisk italic
    t = t.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    t = t.replace(/__(.+?)__/g, '<strong>$1</strong>');
    // italic: single * not part of **
    t = t.replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>');
    // markdown links
    t = t.replace(
      /\[([^\]]+)\]\((https?:[^)\s]+)\)/g,
      '<a href="$2" rel="noopener noreferrer" target="_blank">$1</a>'
    );
    // bare URLs not already inside href=
    t = t.replace(/(^|[^"'>])(https?:\/\/[^\s<]+)/g, '$1<a href="$2" rel="noopener noreferrer" target="_blank">$2</a>');
    return t;
  };

  while (i < lines.length) {
    const raw = lines[i];
    const trimmed = raw.trim();

    if (trimmed.startsWith('```')) {
      const code: string[] = [];
      i += 1;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        code.push(lines[i]);
        i += 1;
      }
      i += 1;
      out.push(`<pre><code>${esc(code.join('\n'))}</code></pre>`);
      continue;
    }

    if (trimmed === '---' || trimmed === '***' || trimmed === '___') {
      out.push('<hr />');
      i += 1;
      continue;
    }

    if (
      trimmed.startsWith('|') &&
      trimmed.endsWith('|') &&
      i + 1 < lines.length &&
      /^[\s|:-]+$/.test(lines[i + 1].trim())
    ) {
      const splitRow = (row: string) =>
        row
          .split('|')
          .filter(
            (c, idx, arr) =>
              !(idx === 0 && c.trim() === '') && !(idx === arr.length - 1 && c.trim() === '')
          )
          .map((c) => c.trim());
      const headers = splitRow(trimmed);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        rows.push(splitRow(lines[i].trim()));
        i += 1;
      }
      out.push('<table><thead><tr>');
      headers.forEach((h) => out.push(`<th>${inline(h)}</th>`));
      out.push('</tr></thead><tbody>');
      rows.forEach((row) => {
        out.push('<tr>');
        row.forEach((cell) => out.push(`<td>${inline(cell)}</td>`));
        out.push('</tr>');
      });
      out.push('</tbody></table>');
      continue;
    }

    const hm = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (hm) {
      const level = hm[1].length;
      out.push(`<h${level}>${inline(hm[2])}</h${level}>`);
      i += 1;
      continue;
    }

    if (/^>\s?/.test(trimmed)) {
      const quote: string[] = [];
      while (i < lines.length && /^>\s?/.test(lines[i].trim())) {
        quote.push(lines[i].trim().replace(/^>\s?/, ''));
        i += 1;
      }
      out.push(`<blockquote><p>${inline(quote.join(' '))}</p></blockquote>`);
      continue;
    }

    if (/^[-*+]\s+/.test(trimmed)) {
      out.push('<ul>');
      while (i < lines.length && /^[-*+]\s+/.test(lines[i].trim())) {
        const item = lines[i].trim().replace(/^[-*+]\s+/, '');
        out.push(`<li>${inline(item)}</li>`);
        i += 1;
      }
      out.push('</ul>');
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      out.push('<ol>');
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        const item = lines[i].trim().replace(/^\d+\.\s+/, '');
        out.push(`<li>${inline(item)}</li>`);
        i += 1;
      }
      out.push('</ol>');
      continue;
    }

    if (trimmed === '') {
      i += 1;
      continue;
    }

    const para: string[] = [];
    while (i < lines.length) {
      const t = lines[i].trim();
      if (
        t === '' ||
        t.startsWith('#') ||
        t.startsWith('|') ||
        t.startsWith('```') ||
        t === '---' ||
        /^[-*+]\s+/.test(t) ||
        /^\d+\.\s+/.test(t) ||
        /^>\s?/.test(t)
      ) {
        break;
      }
      para.push(t);
      i += 1;
    }
    if (para.length) {
      out.push(`<p>${inline(para.join(' '))}</p>`);
    }
  }

  return out.join('\n');
}
