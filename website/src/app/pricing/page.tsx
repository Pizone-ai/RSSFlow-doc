'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Starfield } from '@/components/Starfield';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { createCreemCheckout } from '@/lib/accountApi';
import { PRICING_COPY } from '@/i18n/pricing';
import { 
  Check, 
  Minus,
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Infinity as InfinityIcon, 
  ArrowRight, 
  Loader2,
  HelpCircle, 
  Gift, 
  Laptop, 
  Cpu, 
  Layers,
  ChevronDown,
  Lock,
  Receipt,
  Network,
  Bot,
  Compass,
  Table as TableIcon,
  Globe,
  Wand2,
  Workflow,
  Sparkle,
  Crown
} from 'lucide-react';


const CHECKOUT_OPEN = false;

export default function PricingPage() {
  const { lang } = useLanguage();
  const [cycle, setCycle] = useState<'annual' | 'lifetime' | 'monthly'>('lifetime');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [checkoutBusy, setCheckoutBusy] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  const t = PRICING_COPY[lang];

  const handleCheckout = async () => {
    if (checkoutBusy || !CHECKOUT_OPEN) return;
    setCheckoutBusy(true);
    setCheckoutError(null);
    try {
      const { checkoutUrl } = await createCreemCheckout(cycle);
      window.location.assign(checkoutUrl);
    } catch {
      setCheckoutError(t.checkoutError);
      setCheckoutBusy(false);
    }
  };

  const renderCell = (val: boolean | string, isLifetime: boolean = false, isAnnual: boolean = false) => {
    if (typeof val === 'boolean') {
      if (val) {
        return (
          <div className="flex justify-center items-center">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
              isLifetime 
                ? 'bg-emerald-500/30 text-emerald-300 border border-emerald-400/40 shadow-[0_0_12px_rgba(16,185,129,0.35)]' 
                : 'bg-emerald-500/20 text-emerald-400'
            }`}>
              <Check className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </div>
        );
      }
      return (
        <div className="flex justify-center items-center">
          <Minus className="w-4 h-4 text-slate-600" />
        </div>
      );
    }

    // Special string rendering with highlighted badges
    if (val.includes('附赠') || val.includes('Included') || val.includes('终身永久')) {
      return (
        <div className="flex justify-center items-center">
          <span className={`px-2.5 py-1 rounded-lg text-xs font-bold tracking-wide inline-flex items-center gap-1 shadow-sm ${
            isLifetime 
              ? 'bg-gradient-to-r from-emerald-500/25 to-teal-500/25 text-emerald-200 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
              : 'bg-teal-500/20 text-teal-200 border border-teal-500/30'
          }`}>
            {val}
          </span>
        </div>
      );
    }

    return (
      <span className={`text-xs font-semibold ${
        isLifetime ? 'text-emerald-200 font-bold' : (isAnnual ? 'text-teal-200' : 'text-slate-300')
      }`}>
        {val}
      </span>
    );
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500/30">
      <Navbar />
      <Starfield />

      <div className="relative pt-32 pb-24 overflow-hidden">
        {/* Glow Ambient */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[140px] pointer-events-none -z-10" />

        <div className="container mx-auto max-w-6xl px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              {t.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6"
            >
              {t.title}{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                {t.titleGradient}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 leading-relaxed"
            >
              {t.desc}
            </motion.p>

            {/* Cycle Selector Pills */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex p-1.5 mt-8 rounded-2xl bg-slate-900/90 border border-white/10 backdrop-blur-xl shadow-2xl"
            >
              <button
                onClick={() => setCycle('lifetime')}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  cycle === 'lifetime'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.billingCycle.lifetime}
              </button>
              <button
                onClick={() => setCycle('annual')}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  cycle === 'annual'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.billingCycle.annual}
              </button>
              <button
                onClick={() => setCycle('monthly')}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  cycle === 'monthly'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.billingCycle.monthly}
              </button>
            </motion.div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            {/* Free Plan Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
              className="relative rounded-3xl bg-slate-900/50 border border-white/10 p-8 flex flex-col justify-between backdrop-blur-xl hover:border-white/20 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{t.plans.free.name}</h3>
                  <div className="p-2 rounded-xl bg-white/5 text-slate-400">
                    <Layers className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-6">{t.plans.free.desc}</p>
                <div className="mb-8">
                  <span className="text-4xl font-extrabold text-white">{t.plans.free.price}</span>
                  <span className="text-slate-500 text-sm ml-2">{t.plans.free.period}</span>
                </div>

                <div className="space-y-3.5 mb-8">
                  {t.plans.free.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-slate-400" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://chromewebstore.google.com/detail/rssflow-reader/mefbfkpippglgoanjcbdjnkelcbdjija?utm_source=rssflow_io&utm_medium=pricing_free"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-semibold text-center border border-white/10 transition-all block"
              >
                {t.plans.free.button}
              </a>
            </motion.div>

            {/* Pro Plan Card (Dynamic based on cycle) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border-2 border-emerald-500/50 p-8 flex flex-col justify-between backdrop-blur-2xl shadow-[0_0_50px_rgba(16,185,129,0.15)] overflow-hidden"
            >
              {/* Top Highlight Badge */}
              <div className="absolute top-0 right-0">
                <div className="bg-gradient-to-l from-emerald-500 to-teal-500 text-slate-950 text-xs font-extrabold uppercase px-4 py-1.5 rounded-bl-2xl shadow-lg">
                  {cycle === 'lifetime' ? t.bestValue : t.popular}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-emerald-400 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-emerald-400" />
                    {cycle === 'lifetime' ? t.plans.lifetime.name : (cycle === 'annual' ? t.plans.annual.name : t.plans.monthly.name)}
                  </h3>
                </div>

                <p className="text-slate-400 text-sm mb-6">
                  {cycle === 'lifetime' ? t.plans.lifetime.desc : (cycle === 'annual' ? t.plans.annual.desc : t.plans.monthly.desc)}
                </p>

                <div className="mb-8">
                  <span className="text-5xl font-black text-white tracking-tight">
                    {cycle === 'lifetime' ? t.plans.lifetime.price : (cycle === 'annual' ? t.plans.annual.price : t.plans.monthly.price)}
                  </span>
                  <span className="text-emerald-400/80 text-sm ml-2 font-medium">
                    {cycle === 'lifetime' ? t.plans.lifetime.period : (cycle === 'annual' ? t.plans.annual.period : t.plans.monthly.period)}
                  </span>
                </div>

                <div className="space-y-3.5 mb-8">
                  {(cycle === 'lifetime' ? t.plans.lifetime.features : (cycle === 'annual' ? t.plans.annual.features : t.plans.monthly.features)).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-emerald-400" />
                      </div>
                      <span>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={handleCheckout}
                disabled={checkoutBusy || !CHECKOUT_OPEN}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 hover:from-emerald-400 hover:to-teal-400 disabled:opacity-70 disabled:hover:scale-100 text-slate-950 font-bold text-center shadow-lg shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                {checkoutBusy ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                <span>
                  {CHECKOUT_OPEN
                    ? (cycle === 'lifetime' ? t.plans.lifetime.button : (cycle === 'annual' ? t.plans.annual.button : t.plans.monthly.button))
                    : t.checkoutPausedButton}
                </span>
                {checkoutBusy || !CHECKOUT_OPEN ? null : <ArrowRight className="w-4 h-4" />}
              </button>
              <p className="mt-3 text-xs text-amber-200/90 text-center leading-relaxed">{t.checkoutPaused}</p>
              {checkoutError ? (
                <p className="mt-3 text-xs text-rose-300 text-center leading-relaxed">{checkoutError}</p>
              ) : null}
            </motion.div>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
            {t.guarantees.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 flex flex-col items-center gap-2.5 backdrop-blur-xl">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-1">
                  {item.icon === 'Lock' && <Lock className="w-5 h-5" />}
                  {item.icon === 'Laptop' && <Laptop className="w-5 h-5" />}
                  {item.icon === 'Receipt' && <Receipt className="w-5 h-5" />}
                </div>
                <div className="font-bold text-white text-sm">{item.title}</div>
                <div className="text-xs text-slate-400 leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* Feature Comparison Table Section (Spacious & Highlighted) */}
          <div className="mt-28">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <TableIcon className="w-3.5 h-3.5" />
                {t.tableSection.badge}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                {t.tableSection.title}
              </h2>
              <p className="text-slate-400 text-sm">
                {t.tableSection.desc}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[860px] table-fixed">
                  <thead>
                    <tr className="border-b border-white/10 bg-slate-950/90">
                      <th className="p-5 text-sm font-bold text-slate-300 w-[26%]">
                        {t.tableSection.cols.feature}
                      </th>
                      <th className="p-5 text-sm font-bold text-center text-slate-400 w-[15%]">
                        {t.tableSection.cols.free}
                      </th>
                      <th className="p-5 text-sm font-bold text-center text-slate-300 w-[17%]">
                        {t.tableSection.cols.monthly}
                      </th>
                      <th className="p-5 text-sm font-bold text-center text-teal-300 w-[18%]">
                        {t.tableSection.cols.annual}
                      </th>
                      {/* Highlighted Lifetime Column Header */}
                      <th className="p-5 text-center bg-gradient-to-b from-emerald-500/20 to-emerald-500/10 w-[24%] border-l-2 border-r-2 border-emerald-500/40 relative shadow-inner">
                        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-wider mb-1 shadow-md">
                          <Crown className="w-3 h-3 fill-slate-950" />
                          {t.tableSection.lifetimeBadge}
                        </div>
                        <div className="text-sm font-extrabold text-emerald-300">
                          {t.tableSection.cols.lifetime}
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {t.tableSection.categories.map((cat, catIdx) => (
                      <React.Fragment key={catIdx}>
                        <tr className="bg-white/5 border-y border-white/5">
                          <td colSpan={5} className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-emerald-400">
                            {cat.categoryName}
                          </td>
                        </tr>
                        {cat.items.map((item, itemIdx) => (
                          <tr 
                            key={itemIdx} 
                            className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                          >
                            <td className="px-5 py-4 text-sm text-slate-300 font-medium">
                              {item.name}
                            </td>
                            <td className="px-4 py-4 text-center">
                              {renderCell(item.free)}
                            </td>
                            <td className="px-4 py-4 text-center">
                              {renderCell(item.monthly)}
                            </td>
                            <td className="px-4 py-4 text-center">
                              {renderCell(item.annual, false, true)}
                            </td>
                            {/* Highlighted Lifetime Cell */}
                            <td className="px-4 py-4 text-center bg-emerald-500/[0.08] border-l-2 border-r-2 border-emerald-500/30">
                              {renderCell(item.lifetime, true)}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* FAQ Accordion Section */}
          <div className="mt-28 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-10 flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-emerald-400" />
              {t.faqTitle}
            </h2>

            <div className="space-y-4">
              {t.faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl overflow-hidden transition-all hover:border-white/20"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between font-semibold text-white hover:text-emerald-400 transition-colors cursor-pointer"
                    >
                      <span className="text-base">{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ml-4 ${
                          isOpen ? 'rotate-180 text-emerald-400' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-6 pb-5 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
