'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Starfield } from '@/components/Starfield';
import { Footer } from '@/components/Footer';
import { CheckCircle2, Sparkles, ArrowRight, Laptop, Mail, Key } from 'lucide-react';
import Link from 'next/link';

export default function PaymentSuccessPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500/30">
      <Navbar />
      <Starfield />

      <div className="relative pt-36 pb-28">
        {/* Glow Background */}
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
            Payment Successful
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4"
          >
            感谢购买{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              RSSFlow Pro
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 text-base max-w-lg mx-auto mb-12 leading-relaxed"
          >
            您的订单已由 Creem.io 安全处理完成。权益已下发，请按以下步骤开始体验 Pro 进阶能力。
          </motion.p>

          {/* Activation Step Cards */}
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
                <h3 className="text-base font-bold text-white">方法 A：登录账号自动同步</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                如果您在购买时已登录 Clerk 账号，只需打开 RSSFlow 浏览器扩展并登录相同账号，Pro 进阶权益将自动秒级生效！
              </p>
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
                <h3 className="text-base font-bold text-white">方法 B：使用 16 位激活码</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                如果您以游客身份购买，激活码（ACT-XXXX）已发送至您的支付邮箱，并在收银台回执页展示。打开扩展选项页输入即可激活。
              </p>
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
              <span>返回官网首页</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/help"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/10 transition-all block text-center"
            >
              查看使用指南
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
