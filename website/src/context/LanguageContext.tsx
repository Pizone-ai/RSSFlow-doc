'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const SEO_METADATA = {
  zh: {
    title: "RSSFlow - AI 驱动的跨维度智能情报中心 | Beyond Reading, Into Insight.",
    description: "RSSFlow 深度融合前沿 AI 技术，重塑您获取与处理信息的方式。本地优先架构，零云端同步，提供极致精美的 HTML 分析报告与本地 Ollama 模型支持。"
  },
  en: {
    title: "RSSFlow - AI-Powered Cross-Dimensional Intelligence Hub | Beyond Reading, Into Insight.",
    description: "RSSFlow deeply integrates cutting-edge AI technology to reshape how you acquire and process information. Local-first architecture, zero cloud sync, beautiful HTML analysis reports, and local Ollama support."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>('zh');

  useEffect(() => {
    // 1. Check localStorage
    const savedLang = localStorage.getItem('rssflow-lang') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'zh')) {
      setTimeout(() => {
        setLangState(savedLang);
      }, 0);
    } else {
      // 2. Check browser language
      const browserLang = navigator.language.toLowerCase();
      setTimeout(() => {
        if (browserLang.startsWith('en')) {
          setLangState('en');
        } else {
          setLangState('zh');
        }
      }, 0);
    }
  }, []);

  // 动态同步多语言 SEO 信息与 HTML 属性 (SSR 与静态导出友好)
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const seo = SEO_METADATA[lang];
      document.title = seo.title;
      document.documentElement.lang = lang;
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', seo.description);
      }

      // 同步 Open Graph & Twitter Cards 社交分享标签
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', seo.title);
      
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', seo.description);

      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) twitterTitle.setAttribute('content', seo.title);

      const twitterDesc = document.querySelector('meta[name="twitter:description"]');
      if (twitterDesc) twitterDesc.setAttribute('content', seo.description);
    }
  }, [lang]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('rssflow-lang', newLang);
  };

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'zh' : 'en';
    setLang(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
