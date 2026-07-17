'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Rss,
  Sparkles,
  MessagesSquare,
  Timer,
  Share2,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

type LoopCopy = {
  badge: string;
  title: string;
  titleAccent: string;
  desc: string;
  steps: { title: string; body: string }[];
};

const content: Record<string, LoopCopy> = {
  'zh-CN': {
    badge: '一条清晰的阅读路径',
    title: '从订阅到分享，',
    titleAccent: '信息自己转起来。',
    desc: '不必同时记住所有功能。按下面 5 步走，你就能把 RSS 从「堆着读」变成「自动整理、能问、能推、能发」。',
    steps: [
      {
        title: '订阅信息源',
        body: '粘贴 RSS、导入 OPML，或用 SnagFlow 把任意网页变成可订阅源。',
      },
      {
        title: '自动整理要点',
        body: '新文章后台生成摘要、标签和评分，列表里先扫重点再决定精读。',
      },
      {
        title: '追问与串联',
        body: '和一批文章对话并回看引文；或在图谱 / 热点视图里看主题怎么连在一起。',
      },
      {
        title: '定时自动处理',
        body: '设好工作流后，按计划抓取并生成简报，上班前结果已经准备好。',
      },
      {
        title: '推送与发布',
        body: '发到 Telegram / 飞书，或同步到云报告、博客，手机上也能接着看。',
      },
    ],
  },
  'zh-TW': {
    badge: '一條清楚的閱讀路徑',
    title: '從訂閱到分享，',
    titleAccent: '資訊自己轉起來。',
    desc: '不必同時記住所有功能。照下面 5 步走，就能把 RSS 從「堆著讀」變成「自動整理、能問、能推、能發」。',
    steps: [
      {
        title: '訂閱資訊源',
        body: '貼上 RSS、匯入 OPML，或用 SnagFlow 把任意網頁變成可訂閱源。',
      },
      {
        title: '自動整理要點',
        body: '新文章後台產生摘要、標籤與評分，列表先掃重點再決定精讀。',
      },
      {
        title: '追問與串聯',
        body: '和一批文章對話並回看引文；或在圖譜 / 熱點視圖看主題如何連在一起。',
      },
      {
        title: '定時自動處理',
        body: '設好工作流後按計劃抓取並產生簡報，上班前結果已備好。',
      },
      {
        title: '推送與發佈',
        body: '發到 Telegram / 飛書，或同步到雲報告、部落格，手機也能接著看。',
      },
    ],
  },
  en: {
    badge: 'A simple reading path',
    title: 'From subscribe to share, ',
    titleAccent: 'your feed keeps moving.',
    desc: 'You don’t need every feature at once. Follow these 5 steps to turn RSS from a pile of links into something you can scan, ask, schedule, and share.',
    steps: [
      {
        title: 'Subscribe',
        body: 'Paste RSS, import OPML, or use SnagFlow to turn almost any page into a feed.',
      },
      {
        title: 'Auto-organize',
        body: 'New items get summaries, tags, and scores in the background—scan first, deep-read later.',
      },
      {
        title: 'Ask & connect',
        body: 'Chat over a set of articles with citations, or explore links in Graph and topic views.',
      },
      {
        title: 'Run on a schedule',
        body: 'Workflows fetch and draft briefs on a timer so results are ready before you start work.',
      },
      {
        title: 'Push & publish',
        body: 'Send to Telegram / Feishu, or publish to a report portal or blog for phone-friendly reading.',
      },
    ],
  },
  ja: {
    badge: 'わかりやすい読み方の流れ',
    title: '購読から共有まで、',
    titleAccent: '情報が回り続けます。',
    desc: '全部を一度に覚える必要はありません。次の 5 ステップで、RSS を「溜めるだけ」から「整理・質問・配信・公開」へ。',
    steps: [
      {
        title: '購読する',
        body: 'RSS の貼り付け、OPML の取り込み、または SnagFlow でページをフィード化。',
      },
      {
        title: '自動で整理',
        body: '要約・タグ・スコアをバックグラウンド生成。まず要点を見てから精読。',
      },
      {
        title: '質問とつながり',
        body: '引用付きでまとめて質問。グラフやトピック表示で関連を確認。',
      },
      {
        title: '定時で処理',
        body: 'ワークフローで定期取得とブリーフ作成。出勤前に結果が揃います。',
      },
      {
        title: '配信と公開',
        body: 'Telegram / Feishu へ通知、またはレポート／ブログへ公開。',
      },
    ],
  },
  ko: {
    badge: '쉬운 읽기 흐름',
    title: '구독에서 공유까지, ',
    titleAccent: '정보가 계속 움직입니다.',
    desc: '모든 기능을 한꺼번에 외울 필요는 없습니다. 아래 5단계로 RSS를 ‘쌓아 두기’에서 ‘정리·질문·예약·공유’로 바꿉니다.',
    steps: [
      {
        title: '구독',
        body: 'RSS 붙여넣기, OPML 가져오기, 또는 SnagFlow로 페이지를 피드로 만듭니다.',
      },
      {
        title: '자동 정리',
        body: '요약·태그·점수를 백그라운드에서 생성해 먼저 훑고 나중에 정독합니다.',
      },
      {
        title: '질문과 연결',
        body: '인용과 함께 여러 글을 대화하거나 그래프·토픽 뷰에서 연결을 봅니다.',
      },
      {
        title: '예약 실행',
        body: '워크플로가 정해진 시간에 가져와 브리핑을 만들어 둡니다.',
      },
      {
        title: '알림과 발행',
        body: 'Telegram / Feishu로 보내거나 리포트·블로그에 올려 모바일에서도 읽습니다.',
      },
    ],
  },
};

const ICONS = [Rss, Sparkles, MessagesSquare, Timer, Share2];

export const InfoLoop: React.FC = () => {
  const { lang } = useLanguage();
  const t = content[lang] || content.en;

  return (
    <section id="loop" className="py-28 sm:py-32 px-4 relative scroll-mt-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14 sm:mb-16"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-5">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15] mb-4">
            {t.title}
            <span className="text-emerald-400">{t.titleAccent}</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-medium">
            {t.desc}
          </p>
        </motion.div>

        {/* Desktop: horizontal flow */}
        <div className="hidden lg:grid grid-cols-5 gap-3 relative">
          <div className="absolute top-[2.25rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/30 to-emerald-500/0 pointer-events-none" />
          {t.steps.map((step, i) => {
            const Icon = ICONS[i] || Sparkles;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="relative flex flex-col items-stretch"
              >
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="relative z-10 w-14 h-14 rounded-2xl bg-slate-950 border border-emerald-500/25 shadow-[0_0_30px_-8px_rgba(16,185,129,0.45)] flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-emerald-400" />
                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-emerald-500 text-[10px] font-bold text-white flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  {i < t.steps.length - 1 && (
                    <ArrowRight className="hidden absolute top-[1.65rem] -right-2 w-4 h-4 text-emerald-500/40 translate-x-1/2" />
                  )}
                </div>
                <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-emerald-500/20 transition-colors p-4">
                  <h3 className="text-sm font-bold text-white mb-2 leading-snug">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile / tablet: vertical timeline */}
        <ol className="lg:hidden space-y-0 relative">
          <div className="absolute left-[1.375rem] top-4 bottom-4 w-px bg-gradient-to-b from-emerald-500/40 via-white/10 to-transparent" />
          {t.steps.map((step, i) => {
            const Icon = ICONS[i] || Sparkles;
            return (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative flex gap-4 pb-8 last:pb-0"
              >
                <div
                  className={cn(
                    'relative z-10 w-11 h-11 shrink-0 rounded-xl border flex items-center justify-center',
                    'bg-slate-950 border-emerald-500/30 text-emerald-400'
                  )}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-[11px] font-mono text-emerald-500/80">0{i + 1}</span>
                    <h3 className="text-base font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.body}</p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
