import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import { Languages } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { lang, toggleLang } = useLanguage();

  const navItems = lang === 'zh' ? [
    { name: '特性', href: pathname === '/' ? '#features' : '/#features' },
    { name: '隐私', href: '/privacy' },
  ] : [
    { name: 'Features', href: pathname === '/' ? '#features' : '/#features' },
    { name: 'Privacy', href: '/privacy' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <a href="/" className="flex items-center gap-2 group">
            <img 
              src="/zh/icon64.png" 
              alt="RSSFlow Logo" 
              className="w-8 h-8 rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.4)] group-hover:scale-110 transition-transform"
            />
            <span className="text-white font-bold tracking-tighter text-xl">RSSFlow</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-400 hover:text-emerald-400 text-sm font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
            
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium border border-white/10 px-3 py-1.5 rounded-full bg-white/5"
            >
              <Languages className="w-4 h-4" />
              <span>{lang === 'zh' ? 'EN' : '中文'}</span>
            </button>

            <a
              href="https://github.com/oinzen/RSSFlow-doc"
              className="px-5 py-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full text-sm font-medium transition-all"
            >
              GitHub
            </a>
          </div>

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

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center gap-8"
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
            <a
              href="https://github.com/oinzen/RSSFlow-doc"
              className="px-8 py-3 bg-emerald-600 text-white rounded-xl font-bold"
            >
              GitHub
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
