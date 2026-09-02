'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Starfield } from '@/components/Starfield';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { getCreemCheckoutStatus } from '@/lib/accountApi';
import { PRICING_SUCCESS_COPY } from '@/i18n/pricing/success';
import { CheckCircle2, Sparkles, ArrowRight, Laptop, Key, Loader2, Copy, Check } from 'lucide-react';
import Link from 'next/link';


type FulfillmentState = 'loading' | 'pending' | 'ready' | 'refunded' | 'timeout' | 'missing';

export default function PaymentSuccessPage() {
  const { lang } = useLanguage();
  const t = PRICING_SUCCESS_COPY[lang];
  const [state, setState] = useState<FulfillmentState>('loading');
  const [activationCode, setActivationCode] = useState<string | null>(null);
  const [boundToUser, setBoundToUser] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const checkoutId = new URLSearchParams(window.location.search).get('checkout_id') || '';
    if (!checkoutId) {
      setState('missing');
      return;
    }

    let cancelled = false;
    const startedAt = Date.now();
    const maxWaitMs = 45000;

    const poll = async () => {
      try {
        const result = await getCreemCheckoutStatus(checkoutId);
        if (cancelled) return;
        if (result.status === 'refunded') {
          setState('refunded');
          return;
        }
        if (result.activationCode) {
          setActivationCode(result.activationCode);
          setBoundToUser(!!result.boundToUser);
          setState('ready');
          return;
        }
      } catch {
        // Keep polling until timeout; webhook may still be in flight.
      }

      if (Date.now() - startedAt >= maxWaitMs) {
        if (!cancelled) setState('timeout');
        return;
      }
      if (!cancelled) setState('pending');
      window.setTimeout(poll, 2000);
    };

    void poll();
    return () => {
      cancelled = true;
    };
  }, []);

  const copyCode = async () => {
    if (!activationCode) return;
    try {
      await navigator.clipboard.writeText(activationCode);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500/30">
      <Navbar />
      <Starfield />

      <div className="relative pt-36 pb-28">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/15 blur-[120px] pointer-events-none -z-10" />

        <div className="container mx-auto max-w-3xl px-4 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 20 }}
            className="w-20 h-20 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(16,185,129,0.3)] text-emerald-400"
          >
            <CheckCircle2 className="w-10 h-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            {t.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4"
          >
            {t.titleBefore}{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              RSSFlow Pro
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 text-base max-w-lg mx-auto mb-8 leading-relaxed"
          >
            {t.desc}
          </motion.p>

          <div className="mb-12 rounded-3xl border border-white/10 bg-slate-900/60 px-6 py-5 text-sm text-left">
            {state === 'loading' || state === 'pending' ? (
              <div className="flex items-center gap-3 text-slate-300">
                <Loader2 className="w-4 h-4 animate-spin text-emerald-400" />
                <span>{t.pending}</span>
              </div>
            ) : null}
            {state === 'timeout' || state === 'missing' ? (
              <p className="text-amber-200">{t.timeout}</p>
            ) : null}
            {state === 'refunded' ? (
              <p className="text-rose-300">{t.refunded}</p>
            ) : null}
            {state === 'ready' && boundToUser ? (
              <p className="text-emerald-200">{t.bound}</p>
            ) : null}
            {state === 'ready' && activationCode ? (
              <div className="space-y-3">
                <div className="text-xs uppercase tracking-wider text-slate-400">{t.codeLabel}</div>
                <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                  <code className="flex-1 px-4 py-3 rounded-2xl bg-slate-950/80 border border-emerald-500/30 text-emerald-200 font-mono text-base tracking-wide">
                    {activationCode}
                  </code>
                  <button
                    type="button"
                    onClick={copyCode}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-200 border border-emerald-500/30 transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? t.copied : t.copy}</span>
                  </button>
                </div>
              </div>
            ) : null}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Laptop className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">{t.methodATitle}</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{t.methodADesc}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-2xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                  <Key className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">{t.methodBTitle}</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{t.methodBDesc}</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/25 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <span>{t.home}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/help"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/10 transition-all block text-center"
            >
              {t.help}
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
