'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useLanguage, type Language } from '@/context/LanguageContext';
import { Languages, ChevronDown } from 'lucide-react';
import { Magnetic } from './Magnetic';

const LANGUAGES_LIST = [
  { code: 'zh-CN', name: '简体中文' },
  { code: 'zh-TW', name: '繁體中文' },
  { code: 'en', name: 'English' },
  { code: 'ja', name: '日本語' },
  { code: 'ko', name: '한국어' },
  { code: 'de', name: 'Deutsch' },
  { code: 'es', name: 'Español' },
  { code: 'pt', name: 'Português' },
  { code: 'it', name: 'Italiano' },
  { code: 'ru', name: 'Русский' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'ar', name: 'العربية' }
] as const;

const NAV_ITEMS = {
  'zh-CN': [
    { name: '特性', href: '#features' },
    { name: '分析报告', href: '#insights' },
    { name: '隐私政策', href: '/privacy' },
  ],
  'zh-TW': [
    { name: '特性', href: '#features' },
    { name: '分析報告', href: '#insights' },
    { name: '隱私政策', href: '/privacy' },
  ],
  'en': [
    { name: 'Features', href: '#features' },
    { name: 'Insights', href: '#insights' },
    { name: 'Privacy', href: '/privacy' },
  ],
  'ja': [
    { name: '機能', href: '#features' },
    { name: 'レポート', href: '#insights' },
    { name: 'プライバシー', href: '/privacy' },
  ],
  'ko': [
    { name: '기능', href: '#features' },
    { name: '보고서', href: '#insights' },
    { name: '개인정보 보호', href: '/privacy' },
  ],
  'de': [
    { name: 'Funktionen', href: '#features' },
    { name: 'Analysen', href: '#insights' },
    { name: 'Datenschutz', href: '/privacy' },
  ],
  'es': [
    { name: 'Características', href: '#features' },
    { name: 'Informes', href: '#insights' },
    { name: 'Privacidad', href: '/privacy' },
  ],
  'pt': [
    { name: 'Recursos', href: '#features' },
    { name: 'Relatórios', href: '#insights' },
    { name: 'Privacidade', href: '/privacy' },
  ],
  'it': [
    { name: 'Funzionalità', href: '#features' },
    { name: 'Report', href: '#insights' },
    { name: 'Privacy', href: '/privacy' },
  ],
  'ru': [
    { name: 'Функции', href: '#features' },
    { name: 'Отчеты', href: '#insights' },
    { name: 'Конфиденциальность', href: '/privacy' },
  ],
  'hi': [
    { name: 'विशेषताएं', href: '#features' },
    { name: 'रिपोर्ट्स', href: '#insights' },
    { name: 'गोपनीयता', href: '/privacy' },
  ],
  'ar': [
    { name: 'الميزات', href: '#features' },
    { name: 'التقارير', href: '#insights' },
    { name: 'الخصوصية', href: '/privacy' },
  ]
};

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();

  const currentLangLabel = LANGUAGES_LIST.find(l => l.code === lang)?.name || 'Language';

  const navItems = NAV_ITEMS[lang].map((item) => ({
    name: item.name,
    href: item.href.startsWith('#') ? (pathname === '/' ? item.href : '/' + item.href) : item.href
  }));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click-away listener for language dropdown
  useEffect(() => {
    if (!isDropdownOpen) return;
    const handleClose = () => setIsDropdownOpen(false);
    window.addEventListener('click', handleClose);
    return () => window.removeEventListener('click', handleClose);
  }, [isDropdownOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4",
          isScrolled || isMobileMenuOpen ? "bg-slate-950/60 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent"
        )}
      >
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <img 
              src="/zh/icon64.png" 
              alt="RSSFlow Logo" 
              className="w-8 h-8 rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.4)] group-hover:scale-110 transition-transform"
            />
            <span className="text-white font-bold tracking-tighter text-xl">RSSFlow</span>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Magnetic key={item.href}>
                <a
                  href={item.href}
                  className="text-slate-400 hover:text-emerald-400 text-sm font-medium transition-colors block py-1"
                >
                  {item.name}
                </a>
              </Magnetic>
            ))}
            
            {/* Language Selector Dropdown */}
            <div className="relative">
              <Magnetic>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium border border-white/10 px-4 py-1.5 rounded-full bg-white/5 cursor-pointer select-none"
                >
                  <Languages className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>{currentLangLabel}</span>
                  <ChevronDown className={cn("w-3 h-3 transition-transform duration-300", isDropdownOpen ? "rotate-180" : "")} />
                </button>
              </Magnetic>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute right-0 top-full mt-2 w-48 max-h-[360px] overflow-y-auto bg-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-50 flex flex-col gap-0.5 origin-top-right custom-scrollbar"
                  >
                    {LANGUAGES_LIST.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code);
                          setIsDropdownOpen(false);
                        }}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center justify-between cursor-pointer border border-transparent",
                          lang === l.code
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                            : "text-slate-400 hover:text-white hover:bg-white/5"
                        )}
                      >
                        <span>{l.name}</span>
                        {lang === l.code && <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Magnetic>
              <a
                href="https://github.com/oinzen/RSSFlow-doc"
                className="px-5 py-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full text-sm font-medium transition-all block"
              >
                GitHub
              </a>
            </Magnetic>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center focus:outline-none"
          >
             <div className={cn(
                "w-5 h-[2px] bg-slate-400 relative transition-all duration-300",
                isMobileMenuOpen ? "bg-transparent" : "",
                "before:absolute before:left-0 before:w-5 before:h-[2px] before:bg-slate-400 before:transition-all before:duration-300",
                "after:absolute after:left-0 after:w-5 after:h-[2px] after:bg-slate-400 after:transition-all after:duration-300",
                isMobileMenuOpen ? "before:rotate-45 before:top-0 after:-rotate-45 after:top-0" : "before:-top-1.5 after:top-1.5"
             )} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center gap-6 overflow-y-auto pt-24 px-6 pb-12"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-bold text-white hover:text-emerald-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
            
            {/* 12-Language Grid for Mobile */}
            <div className="w-full max-w-sm mt-4 border border-white/5 bg-white/5 rounded-3xl p-4">
              <div className="text-center text-xs text-slate-500 font-bold uppercase tracking-wider mb-3 flex items-center justify-center gap-1.5">
                <Languages className="w-3.5 h-3.5 text-emerald-400" />
                Select Language
              </div>
              <div className="grid grid-cols-3 gap-2">
                {LANGUAGES_LIST.map((l) => (
                  <button 
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setIsMobileMenuOpen(false);
                    }}
                    className={cn(
                      "py-2.5 rounded-xl text-xs font-bold transition-all text-center cursor-pointer border border-transparent",
                      lang === l.code 
                        ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20" 
                        : "bg-white/5 text-slate-400 hover:text-white"
                    )}
                  >
                    {l.name}
                  </button>
                ))}
              </div>
            </div>

            <a
              href="https://github.com/oinzen/RSSFlow-doc"
              className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full text-lg font-medium transition-all w-full max-w-xs text-center"
            >
              GitHub
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
