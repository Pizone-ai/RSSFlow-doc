'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'zh-CN' | 'zh-TW' | 'en' | 'ja' | 'ko' | 'de' | 'es' | 'pt' | 'it' | 'ru' | 'hi' | 'ar';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const SEO_METADATA = {
  'zh-CN': {
    title: "RSSFlow - AI 驱动的跨维度智能情报中心 | Beyond Reading, Into Insight.",
    description: "RSSFlow 深度融合前沿 AI 技术，重塑您获取与处理信息的方式。本地优先架构，零云端同步，提供极致精美的 HTML 分析报告与本地 Ollama 模型支持。"
  },
  'zh-TW': {
    title: "RSSFlow - AI 驅動的跨維度智能情報中心 | Beyond Reading, Into Insight.",
    description: "RSSFlow 深度融合前沿 AI 技術，重塑您獲取與處理資訊的方式。本地優先架構，零雲端同步，提供極致精美的 HTML 分析報告與本地 Ollama 模型支援。"
  },
  'en': {
    title: "RSSFlow - AI-Powered Cross-Dimensional Intelligence Hub | Beyond Reading, Into Insight.",
    description: "RSSFlow deeply integrates cutting-edge AI technology to reshape how you acquire and process information. Local-first architecture, zero cloud sync, beautiful HTML analysis reports, and local Ollama support."
  },
  'ja': {
    title: "RSSFlow - AI駆動の多次元インテリジェンスハブ | Beyond Reading, Into Insight.",
    description: "RSSFlowは最先端のAI技術を統合し、情報の取得と処理の方法を再定義します。ローカルファースト、クラウド同期不要、美しいHTML分析レポート、ローカルOllamaサポート。"
  },
  'ko': {
    title: "RSSFlow - AI 기반 다차원 인텔리전스 허브 | Beyond Reading, Into Insight.",
    description: "RSSFlow는 최첨단 AI 기술을 결합하여 정보 획득 및 처리 방식을 혁신합니다. 로컬 우선, 클라우드 동기화 없음, 미려한 HTML 분석 보고서, 로컬 Ollama 모델 지원."
  },
  'de': {
    title: "RSSFlow - AI-gestütztes mehrdimensionales Intelligence Hub | Beyond Reading, Into Insight.",
    description: "RSSFlow integriert modernste KI-Technologie, um die Informationsbeschaffung und -verarbeitung neu zu definieren. Local-First-Architektur, keine Cloud-Synchronisierung, wunderschöne HTML-Berichte und lokale Ollama-Unterstützung."
  },
  'es': {
    title: "RSSFlow - Centro de inteligencia multidimensional con IA | Beyond Reading, Into Insight.",
    description: "RSSFlow integra tecnología de IA de vanguardia para redefinir la adquisición y el procesamiento de información. Arquitectura local-first, sin sincronización en la nube, hermosos informes HTML y soporte local de Ollama."
  },
  'pt': {
    title: "RSSFlow - Hub de inteligência multidimensional por IA | Beyond Reading, Into Insight.",
    description: "O RSSFlow integra tecnologia de IA de ponta para redefinir a aquisição e o processamento de informações. Arquitetura local-first, sincronização zero em nuvem, belos relatórios HTML e suporte local a Ollama."
  },
  'it': {
    title: "RSSFlow - Hub di intelligence multidimensionale basato su IA | Beyond Reading, Into Insight.",
    description: "RSSFlow integra tecnologie IA all'avanguardia per ridefinire il modo in cui acquisisci ed elabori informazioni. Architettura local-first, sincronizzazione cloud zero, report HTML eccezionali e supporto Ollama locale."
  },
  'ru': {
    title: "RSSFlow - Интеллектуальный многомерный информационный центр на базе ИИ | Beyond Reading, Into Insight.",
    description: "RSSFlow интегрирует передовые технологии ИИ для изменения способов получения и обработки информации. Локальная архитектура, нулевая синхронизация с облаком, красивые отчеты HTML и локальная поддержка ИИ."
  },
  'hi': {
    title: "RSSFlow - एआई-संचालित बहुआयामी इंटेलिजेंस हब | Beyond Reading, Into Insight.",
    description: "RSSFlow जानकारी प्राप्त करने और संसाधित करने के तरीके को फिर से परिभाषित करने के लिए अत्याधुनिक एआई तकनीक को एकीकृत करता है। लोकल-फर्स्ट आर्किटेक्चर, जीरो क्लाउड सिंक, सुंदर HTML रिपोर्ट और स्थानीय Ollama समर्थन।"
  },
  'ar': {
    title: "RSSFlow - مركز استخبارات معلوماتي متعدد الأبعاد مدعوم بالذكاء الاصطناعي | Beyond Reading, Into Insight.",
    description: "يدمج RSSFlow تقنيات الذكاء الاصطناعي المتطورة لإعادة تعريف كيفية الحصول على المعلومات ومعالجتها. هندسة تعتمد على الأولوية المحلية، ومزامنة سحابية صفرية، وتقارير تحليل HTML رائعة، ودعم Ollama المحلي."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Neutral default until client detects browser / saved preference (avoids wrong help locale flash for non-zh users).
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    const validLanguages: Language[] = ['zh-CN', 'zh-TW', 'en', 'ja', 'ko', 'de', 'es', 'pt', 'it', 'ru', 'hi', 'ar'];
    let initialLang: Language = 'en';

    try {
      const savedLang = localStorage.getItem('rssflow-lang') as Language | null;
      if (savedLang && validLanguages.includes(savedLang)) {
        initialLang = savedLang;
      } else {
        const browserLang = (navigator.language || (navigator as Navigator & { userLanguage?: string }).userLanguage || 'en').toLowerCase();
        if (browserLang.startsWith('zh-tw') || browserLang.startsWith('zh-hk') || browserLang.startsWith('zh-mo')) {
          initialLang = 'zh-TW';
        } else if (browserLang.startsWith('zh')) {
          initialLang = 'zh-CN';
        } else if (browserLang.startsWith('ja')) {
          initialLang = 'ja';
        } else if (browserLang.startsWith('ko')) {
          initialLang = 'ko';
        } else if (browserLang.startsWith('de')) {
          initialLang = 'de';
        } else if (browserLang.startsWith('es')) {
          initialLang = 'es';
        } else if (browserLang.startsWith('pt')) {
          initialLang = 'pt';
        } else if (browserLang.startsWith('it')) {
          initialLang = 'it';
        } else if (browserLang.startsWith('ru')) {
          initialLang = 'ru';
        } else if (browserLang.startsWith('hi')) {
          initialLang = 'hi';
        } else if (browserLang.startsWith('ar')) {
          initialLang = 'ar';
        } else {
          initialLang = 'en';
        }
      }
    } catch {
      initialLang = 'en';
    }

    setLangState(initialLang);
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const seo = SEO_METADATA[lang];
      const dir = lang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = lang;
      document.documentElement.dir = dir;
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', seo.description);

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', seo.title);
      
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', seo.description);

      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) twitterTitle.setAttribute('content', seo.title);

      const twitterDesc = document.querySelector('meta[name="twitter:description"]');
      if (twitterDesc) twitterDesc.setAttribute('content', seo.description);

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
    const newLang = lang === 'zh-CN' ? 'en' : 'zh-CN';
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
