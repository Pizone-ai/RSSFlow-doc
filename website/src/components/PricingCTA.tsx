'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { PRICING_CTA_COPY } from '@/i18n/pricing/cta';
import { 
  Sparkles, 
  ArrowRight, 
  Check, 
  Crown, 
  Zap, 
  ShieldCheck, 
  Gift, 
  Laptop, 
  Infinity as InfinityIcon,
  Globe
} from 'lucide-react';


export const PricingCTA: React.FC = () => {
  const { lang } = useLanguage();
  const t = PRICING_CTA_COPY[lang];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/60 border-t border-slate-800/80">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[130px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            {t.badge}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-5"
          >
            {t.title}{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              {t.titleHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base md:text-lg leading-relaxed"
          >
            {t.desc}
          </motion.p>
        </div>

        {/* 3 Tier Quick Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {/* Monthly */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 flex flex-col justify-between backdrop-blur-xl hover:border-white/20 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-white text-lg">{t.plans.monthly.title}</h3>
                <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-slate-300">
                  {t.plans.monthly.tag}
                </span>
              </div>
              <div className="mb-4">
                <span className="text-3xl font-black text-white">{t.plans.monthly.price}</span>
                <span className="text-slate-400 text-xs ml-1.5">{t.plans.monthly.period}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{t.plans.monthly.desc}</p>
            </div>
            <a
              href="/pricing"
              className="mt-6 w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white text-xs font-semibold text-center border border-white/10 transition-all flex items-center justify-center gap-1.5"
            >
              <span>{t.ctaLearn}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Annual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl border border-teal-500/30 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6 flex flex-col justify-between backdrop-blur-xl hover:border-teal-400/50 shadow-[0_0_30px_rgba(20,184,166,0.1)] transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-teal-300 text-lg">{t.plans.annual.title}</h3>
                <span className="px-2.5 py-0.5 rounded-full bg-teal-500/20 border border-teal-500/30 text-[11px] font-bold text-teal-300">
                  {t.plans.annual.tag}
                </span>
              </div>
              <div className="mb-4">
                <span className="text-3xl font-black text-white">{t.plans.annual.price}</span>
                <span className="text-teal-300/80 text-xs ml-1.5">{t.plans.annual.period}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{t.plans.annual.desc}</p>
            </div>
            <a
              href="/pricing"
              className="mt-6 w-full py-2.5 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 text-teal-200 text-xs font-semibold text-center border border-teal-500/40 transition-all flex items-center justify-center gap-1.5"
            >
              <span>{t.ctaAnnual}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Lifetime */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="relative rounded-2xl border-2 border-emerald-500/60 bg-gradient-to-b from-emerald-950/40 via-slate-900/90 to-slate-950/90 p-6 flex flex-col justify-between backdrop-blur-2xl shadow-[0_0_40px_rgba(16,185,129,0.2)] overflow-hidden"
          >
            <div className="absolute top-0 right-0">
              <div className="bg-gradient-to-l from-emerald-500 to-teal-500 text-slate-950 text-[10px] font-black uppercase px-3 py-1 rounded-bl-xl shadow-md flex items-center gap-1">
                <Crown className="w-3 h-3 fill-slate-950" />
                {t.lifetimeRibbon}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3 mt-1">
                <h3 className="font-bold text-emerald-400 text-lg flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  {t.plans.lifetime.title}
                </h3>
              </div>
              <div className="mb-4">
                <span className="text-3xl font-black text-white">{t.plans.lifetime.price}</span>
                <span className="text-emerald-400/80 text-xs ml-1.5">{t.plans.lifetime.period}</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-medium">{t.plans.lifetime.desc}</p>
            </div>
            <a
              href="/pricing"
              className="mt-6 w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs text-center shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-1.5"
            >
              <span>{t.ctaLifetime}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>

        {/* Global CTA Action Button */}
        <div className="text-center">
          <a
            href="/pricing"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-extrabold text-base shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            <span>{t.viewAllPricing}</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          {/* 3 Trust Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>{t.guarantees.delivery}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <Laptop className="w-4 h-4 text-emerald-400" />
              <span>{t.guarantees.devices}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t.guarantees.tax}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
