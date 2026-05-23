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
    let initialLang: Language = 'en'; // 默认为英文，利于没有匹配语言的国际用户

    if (savedLang && (savedLang === 'en' || savedLang === 'zh')) {
      initialLang = savedLang;
    } else {
      // 2. Check browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('zh')) {
        initialLang = 'zh'; // 只有明确是中文浏览器时才默认进入中文版本
      } else {
        initialLang = 'en'; // 其他所有语种（英、日、韩、法等）均默认进入英文版本
      }
    }

    // 如果嗅探到的语言不是默认的 'zh'，在挂载首个微秒内同步强刷原生 DOM 标题与元数据，实现 100% 零闪烁
    if (initialLang !== 'zh') {
      const seo = SEO_METADATA[initialLang];
      document.title = seo.title;
      document.documentElement.lang = initialLang;
      
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

      // 异步更新 React 状态，彻底规避同步 setState 警告与水合冲突
      setTimeout(() => {
        setLangState(initialLang);
      }, 0);
    }
  }, []);

  // 动态同步多语言 SEO 信息与 HTML 属性 (SSR 与静态导出友好)
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const seo = SEO_METADATA[lang];
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

      // 强力强刷 DOM 标题。为规避 Next.js 客户端路由水合与 Metadata 挂载后二次强行覆盖，
      // 我们在首渲染及每次状态改变时进行双重微秒级与宏任务级强刷。
      document.title = seo.title;
      
      const titleTimer = setTimeout(() => {
        document.title = seo.title;
      }, 100);

      return () => clearTimeout(titleTimer);
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
