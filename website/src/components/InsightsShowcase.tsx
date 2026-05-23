'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, PieChart, TrendingUp, Newspaper } from 'lucide-react';
import { cn } from '@/lib/utils';

import { useLanguage } from '@/context/LanguageContext';

const content = {
  zh: {
    title: "产出，即决策力",
    desc: "任务不仅是运行。每一项指令执行后，RSSFlow 都会为您生成一份极致精美的 HTML 分析报告，支持浏览器直接预览与分享。",
    previewBtn: "立即预览示例",
    estLoad: "预计加载: 1.2s",
    reports: [
      {
        title: "金融深度研报",
        subtitle: "每日收盘自动生成。自动提取关键事件、情感权重及趋势分析。支持导出为独立交互页面。",
        type: "Financial",
      },
      {
        title: "24h 全球热点看板",
        subtitle: "实时发现趋势拐点。自动提取关键事件、情感权重及趋势分析。支持导出为独立交互页面。",
        type: "Hotspots",
      },
      {
        title: "技术趋势简报",
        subtitle: "跨语言自动汇总。自动提取关键事件、情感权重及趋势分析。支持导出为独立交互页面。",
        type: "Tech",
      }
    ]
  },
  en: {
    title: "Output is decision power",
    desc: "Tasks are more than just execution. After every instruction, RSSFlow generates a stunningly beautiful HTML analysis report for direct browser preview and sharing.",
    previewBtn: "Preview Example",
    estLoad: "EST. LOAD: 1.2s",
    reports: [
      {
        title: "Financial Insight Report",
        subtitle: "Automatically generated after daily close. Extracts key events, sentiment weight, and trend analysis. Supports export as an independent interactive page.",
        type: "Financial",
      },
      {
        title: "24h Global Hotspots",
        subtitle: "Real-time discovery of trend inflection points. Extracts key events, sentiment weight, and trend analysis. Supports export as an independent interactive page.",
        type: "Hotspots",
      },
      {
        title: "Tech Trend Briefing",
        subtitle: "Automatic cross-language aggregation. Extracts key events, sentiment weight, and trend analysis. Supports export as an independent interactive page.",
        type: "Tech",
      }
    ]
  }
};

export const InsightsShowcase: React.FC = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  const reports = [
    {
      ...t.reports[0],
      icon: <PieChart className="w-5 h-5 text-emerald-400" />,
      url: "https://reportpublish.api.oinchain.com/report/e3ef1bd4-f28d-404b-9e1a-0b8606b69b82", 
      preview: "https://r.jina.ai/https://example.com/report-financial",
      accent: "from-emerald-500/20 to-emerald-500/5"
    },
    {
      ...t.reports[1],
      icon: <TrendingUp className="w-5 h-5 text-blue-400" />,
      url: "https://reportpublish.api.oinchain.com/report/79798a2b-dc93-4174-b6b7-df3a5d14764c",
      preview: "https://r.jina.ai/https://example.com/report-hotspots",
      accent: "from-blue-500/20 to-blue-500/5"
    },
    {
      ...t.reports[2],
      icon: <Newspaper className="w-5 h-5 text-purple-400" />,
      url: "https://reportpublish.api.oinchain.com/report/3309f8e0-3846-4603-b800-6ecfac33ecba",
      preview: "https://r.jina.ai/https://example.com/report-tech",
      accent: "from-purple-500/20 to-purple-500/5"
    }
  ];

  return (
    <section id="insights" className="py-40 px-4 bg-slate-950/50">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">{t.title}</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto italic">
              {t.desc}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reports.map((report, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all duration-500 z-10"
            >
              {/* 数据流体水滴流光背景扫略效果 */}
              <motion.div
                initial={{ x: "-80%", y: "-80%" }}
                whileInView={{ x: "80%", y: "80%" }}
                viewport={{ once: true }}
                transition={{ duration: 3, delay: index * 0.2 + 0.3, ease: "easeOut" }}
                className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-blue-500/10 to-transparent blur-3xl pointer-events-none mix-blend-screen -z-10"
              />

              {/* Browser Mockup Header */}
              <div className="px-5 py-3 bg-slate-800/50 flex items-center justify-between border-b border-slate-700/50">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
                </div>
                <div className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">preview.rssflow.io</div>
                <div className="w-4" />
              </div>

              {/* Fake Content Preview */}
              <div className={cn("aspect-video relative overflow-hidden bg-gradient-to-br", report.accent)}>
                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                  <div className="w-3/4 h-2/3 bg-slate-950/80 rounded-lg border border-white/5 shadow-2xl p-4 overflow-hidden relative">
                    {/* 微妙的流光扫描层，表达 AI 的分析运行感 */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent -translate-x-full animate-[shimmer_4s_infinite] pointer-events-none" />
                    
                    <div className="w-1/2 h-2 bg-white/10 rounded mb-4" />
                    <div className="space-y-2">
                       <div className="w-full h-1 bg-white/5 rounded relative overflow-hidden">
                         <motion.div 
                           initial={{ width: "0%" }}
                           whileInView={{ width: "100%" }}
                           viewport={{ once: true }}
                           transition={{ duration: 1.2, ease: "easeInOut" }}
                           className="absolute inset-y-0 left-0 bg-emerald-500/30"
                         />
                       </div>
                       <div className="w-5/6 h-1 bg-white/5 rounded relative overflow-hidden">
                         <motion.div 
                           initial={{ width: "0%" }}
                           whileInView={{ width: "100%" }}
                           viewport={{ once: true }}
                           transition={{ duration: 1.2, delay: 0.15, ease: "easeInOut" }}
                           className="absolute inset-y-0 left-0 bg-blue-500/30"
                         />
                       </div>
                       <div className="w-4/6 h-1 bg-white/5 rounded relative overflow-hidden">
                         <motion.div 
                           initial={{ width: "0%" }}
                           whileInView={{ width: "100%" }}
                           viewport={{ once: true }}
                           transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
                           className="absolute inset-y-0 left-0 bg-purple-500/30"
                         />
                       </div>
                    </div>
                    <div className="mt-6 flex gap-2">
                       <motion.div 
                         animate={{ opacity: [0.4, 0.7, 0.4] }}
                         transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                         className="flex-1 h-12 bg-emerald-500/10 rounded-md border border-emerald-500/10" 
                       />
                       <motion.div 
                         animate={{ opacity: [0.4, 0.7, 0.4] }}
                         transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                         className="flex-1 h-12 bg-blue-500/10 rounded-md border border-blue-500/10" 
                       />
                    </div>
                  </div>
                </div>
                {/* Gradient Mesh Overlay */}
                <div className="absolute inset-0 bg-slate-950/40 pointer-events-none" />
              </div>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-800 rounded-lg">{report.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{report.title}</h3>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">{report.type}</p>
                  </div>
                </div>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  {report.subtitle}
                </p>
                <div className="flex items-center justify-between">
                  <a 
                    href={report.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-400 text-sm font-bold group-hover:gap-3 transition-all cursor-pointer"
                  >
                    {t.previewBtn} <ExternalLink className="w-4 h-4" />
                  </a>
                  <div className="text-[10px] text-slate-600 font-mono">{t.estLoad}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
