const fs = require('fs');
const path = require('path');

function walk(d, a = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p, a);
    else if (e.name.endsWith('.md')) a.push(p);
  }
  return a;
}

const helpDir = path.resolve(__dirname, '../../help');
const files = walk(helpDir);

const issues = [];

const stats = files.map((f) => {
  const c = fs.readFileSync(f, 'utf8');
  const lines = c.split(/\r?\n/);
  const rel = path.relative(helpDir, f).replace(/\\/g, '/');

  const hasFormatB = /^###\s*(中文|English|简体中文)/m.test(c);
  const h1 = (c.match(/^# /gm) || []).length;
  const h2 = (c.match(/^## /gm) || []).length;
  const h3 = (c.match(/^### /gm) || []).length;
  const delimiters = lines.filter((l) => l.trim() === '---').length;
  const fileLinks = (c.match(/file:\/\/\//g) || []).length;
  const bareUrls = (c.match(/(?<!\]\()https?:\/\/[^\s)`\]]+/g) || []).length;
  const mdLinks = (c.match(/\[[^\]]+\]\([^)]+\)/g) || []).length;
  const longParas = lines.filter(
    (l) =>
      l.length > 140 &&
      !l.startsWith('|') &&
      !l.trim().startsWith('http') &&
      !l.startsWith('#') &&
      !l.trim().startsWith('```')
  ).length;
  const brokenParen = (c.match(/点击[^。\n]{0,40}（[^）\n]*$/gm) || []).length;
  const trailDash = (c.match(/---注意|--- Note|---Note/g) || []).length;
  const mixedLang = (c.match(/密钥 and |and 接口|选项页面|到rssflow|找到rssflow/gi) || []).length;
  const missingSpace = (c.match(/[\u4e00-\u9fff][A-Za-z]|[A-Za-z][\u4e00-\u9fff]/g) || []).length;
  const unclosed = (c.match(/（[^）\n]*$/gm) || []).length;
  const doubleComma = (c.match(/，，|。。|  +/g) || []).length;

  let format = '?';
  if (hasFormatB) format = 'B';
  else if (delimiters === 1 && h1 >= 2) format = 'A';
  else if (delimiters > 1) format = 'A2';
  else if (h1 >= 1) format = 'A?';

  if (fileLinks > 0) issues.push({ rel, type: 'file-link', n: fileLinks });
  if (bareUrls > 0) issues.push({ rel, type: 'bare-url', n: bareUrls });
  if (trailDash > 0) issues.push({ rel, type: 'inline-dash', n: trailDash });
  if (mixedLang > 0) issues.push({ rel, type: 'mixed-lang', n: mixedLang });
  if (unclosed > 0) issues.push({ rel, type: 'unclosed-paren', n: unclosed });
  if (longParas > 0) issues.push({ rel, type: 'long-para', n: longParas });

  return {
    rel,
    lines: lines.length,
    format,
    delimiters,
    h1,
    h2,
    h3,
    fileLinks,
    bareUrls,
    mdLinks,
    longParas,
    mixedLang,
    unclosed,
    missingSpace,
  };
});

console.log('=== SUMMARY ===');
console.log('total files:', stats.length);
console.log(
  'format counts:',
  stats.reduce((acc, s) => {
    acc[s.format] = (acc[s.format] || 0) + 1;
    return acc;
  }, {})
);
console.log(
  'totals:',
  stats.reduce(
    (a, s) => {
      a.fileLinks += s.fileLinks;
      a.bareUrls += s.bareUrls;
      a.mdLinks += s.mdLinks;
      a.longParas += s.longParas;
      a.mixedLang += s.mixedLang;
      a.unclosed += s.unclosed;
      return a;
    },
    { fileLinks: 0, bareUrls: 0, mdLinks: 0, longParas: 0, mixedLang: 0, unclosed: 0 }
  )
);

console.log('\n=== ISSUES ===');
for (const i of issues) console.log(`${i.type}\t${i.n}\t${i.rel}`);

console.log('\n=== PER FILE ===');
for (const s of stats) {
  console.log(
    `${s.format.padEnd(3)} L${String(s.lines).padStart(3)} bare=${s.bareUrls} file=${s.fileLinks} long=${s.longParas} mix=${s.mixedLang} | ${s.rel}`
  );
}
