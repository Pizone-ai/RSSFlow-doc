'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, HardDrive, ZapOff } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const content = {
  zh: {
    badge: "Privacy First Architecture",
    titleStart: "数据的所有权，",
    titleAccent: "终归于您。",
    desc: "RSSFlow 采用本地优先架构。您的阅读记录、AI 摘要数据均存储在本地 IndexDB 中。配合 Ollama 本地大模型支持，敏感数据无需离开您的计算机即可完成深度处理。",
    syncTitle: "零云端同步",
    syncDesc: "不收集阅读偏好，不上传订阅列表，真正实现阅读自由。（仅在您主动启用第三方 AI 或推送功能时，必要数据会发送至相应提供商）",
    dbTitle: "本地 IndexDB 存储",
    dbDesc: "高性能本地数据库，支持数万条信息在本地丝滑滚动。"
  },
  en: {
    badge: "Privacy First Architecture",
    titleStart: "Data ownership ultimately ",
    titleAccent: "belongs to you.",
    desc: "RSSFlow adopts a local-first architecture. Your reading history and AI summary data are stored in local IndexedDB. Combined with Ollama local LLM support, sensitive data completes deep processing without leaving your computer.",
    syncTitle: "Zero Cloud Sync",
    syncDesc: "We don't collect reading preferences or upload subscription lists. Truly free reading. (Only when you actively enable 3rd-party AI or push features, necessary data is sent to providers.)",
    dbTitle: "Local IndexedDB",
    dbDesc: "High-performance local database supporting smooth scrolling of tens of thousands of items."
  }
};

export const PrivacyLab: React.FC = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section id="privacy" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              {t.badge}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              {t.titleStart}<br />
              <span className="text-blue-400">{t.titleAccent}</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              {t.desc}
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 shrink-0">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{t.syncTitle}</h4>
                  <p className="text-slate-500 text-sm">{t.syncDesc}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 shrink-0">
                  <HardDrive className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{t.dbTitle}</h4>
                  <p className="text-slate-500 text-sm">{t.dbDesc}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3D 视觉展示 - 抽象隐私盾 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              {/* 动态脉冲圆环 */}
              <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full animate-[ping_3s_linear_infinite]" />
              <div className="absolute inset-0 border border-blue-500/10 rounded-full animate-[pulse_4s_ease-in-out_infinite]" />
              
              {/* 数据流路径动画 */}
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle
                  cx="50%" cy="50%" r="48%"
                  fill="none"
                  stroke="url(#data-gradient)"
                  strokeWidth="1"
                  strokeDasharray="10, 20"
                  className="animate-[spin_20s_linear_infinite] opacity-30"
                />
                <defs>
                  <linearGradient id="data-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute inset-4 rounded-full bg-slate-950/60 backdrop-blur-3xl border border-slate-800 flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.15)]">
                <div className="text-center group">
                  <motion.div
                    animate={{ 
                      rotateY: 360,
                      y: [0, -10, 0]
                    }}
                    transition={{ 
                      rotateY: { duration: 12, repeat: Infinity, ease: "linear" },
                      y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-gradient-to-tr from-blue-600 to-emerald-400 rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Shield className="w-16 h-16 md:w-20 md:h-20 text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]" />
                  </motion.div>
                  <div className="mt-8 text-slate-300 font-mono text-xs tracking-[0.2em] uppercase opacity-80">
                    Secured by Local AI
                  </div>
                </div>
              </div>

              {/* 悬浮标签 */}
              <motion.div 
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 p-4 bg-slate-900/90 border border-blue-500/30 rounded-2xl backdrop-blur-md shadow-2xl"
              >
                <ZapOff className="w-5 h-5 text-blue-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 装饰蓝色流光 */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
};
