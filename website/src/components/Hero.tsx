'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

import { useLanguage } from '@/context/LanguageContext';

const HERO_IMAGES = [
  "/zh/hero-screenshot.png",
  "/zh/PixPin_2026-03-22_23-29-22.png",
  "/zh/PixPin_2026-03-22_23-31-59.png"
];

const content = {
  'zh-CN': {
    badge: "AI 驱动的智能阅读助手",
    title: "Beyond Reading, ",
    subtitle: "Into Insight.",
    desc: "您的信息流，现在具备了思想。RSSFlow 深度融合前沿 AI 技术，重塑您获取与处理信息的方式，让洞察力触手可及。",
    chromeStore: "Chrome 应用商店",
    edgeStore: "Edge 应用商店",
    features: "查看核心特性",
    aiCardTitle: "智能总结",
    aiCardDesc: "“AI 正在重塑我们的阅读习惯。通过向量分析，我们可以更精准地捕捉核心逻辑。”"
  },
  'zh-TW': {
    badge: "AI 驅動的智能閱讀助手",
    title: "Beyond Reading, ",
    subtitle: "Into Insight.",
    desc: "您的資訊流，現在具備了思想。RSSFlow 深度融合前沿 AI 技術，重塑您獲取與處理資訊的方式，讓洞察力觸手可及。",
    chromeStore: "Chrome 應用商店",
    edgeStore: "Edge 應用商店",
    features: "查看核心特性",
    aiCardTitle: "智能總結",
    aiCardDesc: "“AI 正在重塑我們的閱讀習慣。通過向量分析，我們可以更精準地捕捉核心邏輯。”"
  },
  'en': {
    badge: "AI-Powered Smart Reading Companion",
    title: "Beyond Reading, ",
    subtitle: "Into Insight.",
    desc: "Your information flow now has a mind of its own. RSSFlow deeply integrates cutting-edge AI technology to reshape how you acquire and process information.",
    chromeStore: "Chrome Web Store",
    edgeStore: "Edge Add-ons",
    features: "View Core Features",
    aiCardTitle: "AI Summary",
    aiCardDesc: "“AI is reshaping our reading habits. Through vector analysis, we can capture core logic more precisely.”"
  },
  'ja': {
    badge: "AI駆動のスマート読書コンパニオン",
    title: "Beyond Reading, ",
    subtitle: "Into Insight.",
    desc: "あなたのインフォメーションフローに「思考」が宿る。RSSFlowは最先端のAI技術を統合し、情報取得と処理の常識を覆します。",
    chromeStore: "Chromeウェブストア",
    edgeStore: "Edgeアドオン",
    features: "コア機能を見る",
    aiCardTitle: "AIインテリジェント要約",
    aiCardDesc: "「AIは私たちの読書習慣を再定義しています。ベクトル分析により、核心的なロジックをより正確に把握できます。」"
  },
  'ko': {
    badge: "AI 기반 스마트 리딩 도우미",
    title: "Beyond Reading, ",
    subtitle: "Into Insight.",
    desc: "당신의 정보 흐름이 이제 스스로 사고합니다. RSSFlow는 최첨단 AI 기술을 깊이 통합하여 정보를 획득하고 처리하는 방식을 혁신적으로 재구성합니다.",
    chromeStore: "Chrome 웹 스토어",
    edgeStore: "Edge 추가 기능",
    features: "핵심 기능 보기",
    aiCardTitle: "AI 스마트 요약",
    aiCardDesc: "“AI는 우리의 독서 습관을 혁신하고 있습니다. 벡터 분석을 통해 우리는 핵심 논리를 더욱 정확하게 포착할 수 있습니다.”"
  },
  'de': {
    badge: "KI-gestützter smarter Lesehelfer",
    title: "Beyond Reading, ",
    subtitle: "Into Insight.",
    desc: "Ihr Informationsfluss hat jetzt seinen eigenen Kopf. RSSFlow integriert modernste KI-Technologie, um die Informationsbeschaffung und -verarbeitung neu zu definieren.",
    chromeStore: "Chrome Web Store",
    edgeStore: "Edge Add-ons",
    features: "Kernfunktionen ansehen",
    aiCardTitle: "KI-Zusammenfassung",
    aiCardDesc: "„KI verändert unsere Lesegewohnheiten grundlegend. Durch Vektoranalyse können wir die Kernlogik präziser erfassen.“"
  },
  'es': {
    badge: "Compañero de lectura inteligente con IA",
    title: "Beyond Reading, ",
    subtitle: "Into Insight.",
    desc: "Su flujo de información ahora tiene mente propia. RSSFlow integra tecnología de IA de vanguardia para redefinir el modo en que adquiere y procesa información.",
    chromeStore: "Chrome Web Store",
    edgeStore: "Edge Add-ons",
    features: "Ver características",
    aiCardTitle: "Resumen de IA",
    aiCardDesc: "“La IA está transformando nuestros hábitos de lectura. Mediante el análisis de vectores, podemos capturar la lógica central con mayor precisión.”"
  },
  'pt': {
    badge: "Companheiro de leitura inteligente com IA",
    title: "Beyond Reading, ",
    subtitle: "Into Insight.",
    desc: "Seu fluxo de informações agora tem mente própria. O RSSFlow integra tecnologia de IA de ponta para redefinir a maneira como você adquire e processa informações.",
    chromeStore: "Chrome Web Store",
    edgeStore: "Edge Add-ons",
    features: "Ver recursos principais",
    aiCardTitle: "Resumo por IA",
    aiCardDesc: "“A IA está remodelando nossos hábitos de leitura. Por meio da análise vetorial, podemos capturar a lógica central com mais precisão.”"
  },
  'it': {
    badge: "Compagno di lettura intelligente con IA",
    title: "Beyond Reading, ",
    subtitle: "Into Insight.",
    desc: "Il tuo flusso informativo ha ora una mente propria. RSSFlow integra tecnologie IA all'avanguardia per ridefinire il modo in cui ottieni ed elabori le informazioni.",
    chromeStore: "Chrome Web Store",
    edgeStore: "Edge Add-ons",
    features: "Mostra funzionalità",
    aiCardTitle: "Riepilogo IA",
    aiCardDesc: "“L'IA sta rivoluzionando le nostre abitudini di lettura. Attraverso l'analisi vettoriale, possiamo catturare la logica fondamentale in modo più accurato.”"
  },
  'ru': {
    badge: "Умный помощник для чтения на базе ИИ",
    title: "Beyond Reading, ",
    subtitle: "Into Insight.",
    desc: "Ваш информационный поток теперь обрел собственный разум. RSSFlow глубоко интегрирует передовые технологии ИИ, меняя то, как вы получаете и обрабатываете информацию.",
    chromeStore: "Chrome Web Store",
    edgeStore: "Edge Add-ons",
    features: "Посмотреть функции",
    aiCardTitle: "Сводка ИИ",
    aiCardDesc: "«ИИ меняет наши читательские привычки. С помощью векторного анализа мы можем точнее улавливать ключевую логику»."
  },
  'hi': {
    badge: "एआई-संचालित स्मार्ट रीडिंग सहायक",
    title: "Beyond Reading, ",
    subtitle: "Into Insight.",
    desc: "आपकी सूचना प्रवाह में अब अपना खुद का दिमाग है। RSSFlow जानकारी प्राप्त करने और संसाधित करने के तरीके को फिर से आकार देने के लिए अत्याधुनिक एआई तकनीक को एकीकृत करता है।",
    chromeStore: "Chrome वेब स्टोर",
    edgeStore: "Edge एड-ऑन",
    features: "मुख्य विशेषताएं देखें",
    aiCardTitle: "एआई स्मार्ट सारांश",
    aiCardDesc: "“एआई हमारी पढ़ने की आदतों को फिर से परिभाषित कर रहा है। वेक्टर विश्लेषण के माध्यम से, हम मुख्य तर्क को अधिक सटीक रूप से पकड़ सकते हैं।”"
  },
  'ar': {
    badge: "مساعد قراءة ذكي مدعوم بالذكاء الاصطناعي",
    title: "Beyond Reading, ",
    subtitle: "Into Insight.",
    desc: "تدفق معلوماتك أصبح يمتلك عقلاً خاصاً به الآن. يدمج RSSFlow تقنيات الذكاء الاصطناعي المتطورة بعمق لإعادة تشكيل الطريقة التي تكتسب بها المعلومات وتنقحها.",
    chromeStore: "سوق Chrome الإلكتروني",
    edgeStore: "ملحقات Edge",
    features: "عرض الميزات الأساسية",
    aiCardTitle: "تلخيص ذكي",
    aiCardDesc: "“الذكاء الاصطناعي يعيد تشكيل عادات القراءة لدينا بالكامل. من خلال التحليل الشعاعي، يمكننا التقاط الهيكل المنطقي الأساسي بدقة فائقة.”"
  }
};

export const Hero: React.FC = () => {
  const [currentIdx, setCurrentIdx] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const { lang } = useLanguage();
  const t = content[lang];
  const AUTO_PLAY_INTERVAL = 6000;

  React.useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <section className="relative min-h-[110vh] flex flex-col items-center justify-center pt-20 px-4 overflow-hidden [mask-image:linear-gradient(to_bottom,black_95%,transparent)]">
      {/* 动态背景光晕 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] pointer-events-none -z-10 origin-center">
         <motion.div 
           animate={{ 
             scale: [1, 1.1, 1],
             opacity: [0.3, 0.5, 0.3],
             rotate: [0, 90, 180, 270, 360]
           }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           className="absolute inset-0 bg-emerald-500/10 blur-[130px] rounded-full" 
         />
         <motion.div 
           animate={{ 
             scale: [1.2, 1, 1.2],
             opacity: [0.2, 0.4, 0.2],
             rotate: [360, 270, 180, 90, 0]
           }}
           transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
           className="absolute inset-0 bg-blue-500/10 blur-[150px] rounded-full translate-x-1/4" 
         />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
             {t.badge}
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[1.1] md:leading-[0.9] drop-shadow-[0_10px_30px_rgba(255,255,255,0.05)]">
            {t.title} <br />
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-200 bg-clip-text text-transparent italic inline-block"
            >
              {t.subtitle}
            </motion.span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            {t.desc}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-5 max-w-4xl mx-auto z-30 relative"
        >
          {/* Chrome Web Store */}
          <a
            href="https://chromewebstore.google.com/detail/rssflow-reader/mefbfkpippglgoanjcbdjnkelcbdjija?utm_source=rssflow_io&utm_medium=hero_btn&utm_campaign=website"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-semibold transition-all flex items-center gap-3 overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.3)] animate-shine-loop min-w-[210px] justify-center"
          >
            <img src="/chrome.svg" className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" alt="Chrome Web Store" />
            <span>{t.chromeStore}</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Edge Add-ons */}
          <a
            href="https://microsoftedge.microsoft.com/addons/detail/rssflow-aipowered-rss-/khgllclaeabkjgoblcipfpgaejblcelf?utm_source=rssflow_io&utm_medium=hero_btn&utm_campaign=website"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 py-4 bg-slate-900/80 hover:bg-slate-800/90 text-slate-200 border border-slate-800 hover:border-blue-500/30 rounded-xl font-semibold transition-all flex items-center gap-3 overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.02)] hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] backdrop-blur-sm animate-shine-loop min-w-[210px] justify-center"
          >
            <img src="/edge.svg" className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" alt="Edge Add-ons" />
            <span>{t.edgeStore}</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Features Detail */}
          <a
            href="#features"
            className="px-6 py-4 bg-transparent hover:bg-white/5 text-slate-400 hover:text-white rounded-xl font-semibold transition-all flex items-center gap-1.5"
          >
            <span>{t.features}</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* 3D 拟态展示区域 */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 5 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "circOut" }}
          style={{ perspective: "1200px" }}
          className="mt-24 relative mx-auto max-w-5xl group/carousel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* 窗口封装容器 */}
          <div className="relative rounded-2xl border border-white/10 bg-slate-950/40 p-1 md:p-1.5 backdrop-blur-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5),0_0_80px_rgba(16,185,129,0.05)] ring-1 ring-white/10">
             
             {/* Mac Style Header */}
             <div className="absolute top-0 left-0 right-0 h-8 md:h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-1.5 z-20">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
                <div className="ml-4 h-4 w-32 md:w-48 bg-white/5 rounded-md" />
             </div>

             <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-emerald-500/10 to-transparent z-10 pointer-events-none" />
             
             {/* 图片切换容器 */}
             <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-950 mt-8 md:mt-10">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentIdx}
                    src={HERO_IMAGES[currentIdx]} 
                    alt={`RSSFlow Preview ${currentIdx + 1}`} 
                    initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </AnimatePresence>
                
                {/* 内层扫描光 */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_8s_infinite] pointer-events-none z-20" />
             </div>

             {/* 进度条指示器 */}
             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30 px-6 py-3 bg-slate-950/60 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl transition-all group-hover/carousel:translate-y-0 translate-y-2 opacity-0 group-hover/carousel:opacity-100">
                {HERO_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIdx(idx)}
                    className="group/btn relative py-2"
                  >
                    <div className={cn(
                      "h-1 rounded-full transition-all duration-500 overflow-hidden",
                      currentIdx === idx ? "w-12 bg-emerald-500/20" : "w-6 bg-white/10 hover:bg-white/20"
                    )}>
                      {currentIdx === idx && !isHovered && (
                        <motion.div 
                          initial={{ x: "-100%" }}
                          animate={{ x: "0%" }}
                          transition={{ duration: AUTO_PLAY_INTERVAL / 1000, ease: "linear" }}
                          className="absolute inset-0 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]"
                        />
                      )}
                      {currentIdx === idx && isHovered && (
                        <div className="absolute inset-0 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                      )}
                    </div>
                  </button>
                ))}
             </div>

             {/* 悬浮 AI 贴纸 */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-6 -right-6 md:-right-10 p-5 bg-slate-900 border border-emerald-500/30 rounded-2xl shadow-emerald-500/10 shadow-3xl backdrop-blur-3xl hidden md:block max-w-[280px] text-left z-40"
             >
                <div className="text-emerald-400 text-xs font-bold mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                  {t.aiCardTitle}
                </div>
                <div className="text-slate-300 text-xs leading-relaxed font-medium">
                  {t.aiCardDesc}
                </div>
             </motion.div>
          </div>
        </motion.div>
      </div>

      {/* 装饰性背景流光 - 优化亮度 */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-emerald-500/10 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-purple-500/10 blur-[150px] rounded-full -z-10" />
    </section>
  );
};
