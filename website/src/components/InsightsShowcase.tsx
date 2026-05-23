'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, PieChart, TrendingUp, Newspaper } from 'lucide-react';
import { cn } from '@/lib/utils';

import { useLanguage } from '@/context/LanguageContext';

const content = {
  'zh-CN': {
    title: "产出，即决策力",
    desc: "任务不仅是运行。每一项指令执行后，RSSFlow 都会为您生成一份极致精美的 HTML 分析报告，支持浏览器直接预览与分享。",
    previewBtn: "立即预览示例",
    estLoad: "预计加载: 1.2s",
    reports: [
      {
        title: "金融深度研报",
        subtitle: "每日收盘自动生成。自动提取关键事件、情感权重及趋势分析。支持导出为独立交互页面。",
        type: "Financial",
      },
      {
        title: "24h 全球热点看板",
        subtitle: "实时发现趋势拐点。自动提取关键事件、情感权重及趋势分析。支持导出为独立交互页面。",
        type: "Hotspots",
      },
      {
        title: "技术趋势简报",
        subtitle: "跨语言自动汇总。自动提取关键事件、情感权重及趋势分析。支持导出为独立交互页面。",
        type: "Tech",
      }
    ]
  },
  'zh-TW': {
    title: "產出，即決策力",
    desc: "任務不僅是運行。每一項指令執行後，RSSFlow 都會為您生成一份極致精美的 HTML 分析報告，支援瀏覽器直接預覽與分享。",
    previewBtn: "立即預覽示例",
    estLoad: "預計加載: 1.2s",
    reports: [
      {
        title: "金融深度研報",
        subtitle: "每日收盤自動生成。自動提取關鍵事件、情感權重及趨勢分析。支援導出為獨立交互頁面。",
        type: "Financial",
      },
      {
        title: "24h 全球熱點看板",
        subtitle: "實時發現趨勢拐點。自動提取關鍵事件、情感權重及趨勢分析。支援導出為獨立交互頁面。",
        type: "Hotspots",
      },
      {
        title: "技術趨勢簡報",
        subtitle: "跨語言自動匯總。自動提取關鍵事件、情感權重及趨勢分析。支援導出為獨立交互頁面。",
        type: "Tech",
      }
    ]
  },
  'en': {
    title: "Output is decision power",
    desc: "Tasks are more than just execution. After every instruction, RSSFlow generates a stunningly beautiful HTML analysis report for direct browser preview and sharing.",
    previewBtn: "Preview Example",
    estLoad: "EST. LOAD: 1.2s",
    reports: [
      {
        title: "Financial Insight Report",
        subtitle: "Automatically generated after daily close. Extracts key events, sentiment weight, and trend analysis. Supports export as an independent interactive page.",
        type: "Financial",
      },
      {
        title: "24h Global Hotspots",
        subtitle: "Real-time discovery of trend inflection points. Extracts key events, sentiment weight, and trend analysis. Supports export as an independent interactive page.",
        type: "Hotspots",
      },
      {
        title: "Tech Trend Briefing",
        subtitle: "Automatic cross-language aggregation. Extracts key events, sentiment weight, and trend analysis. Supports export as an independent interactive page.",
        type: "Tech",
      }
    ]
  },
  'ja': {
    title: "アウトプットこそ、意思決定力",
    desc: "タスクは単に実行されるだけではありません。各コマンドが実行された後、RSSFlowはブラウザで直接プレビューや共有が可能な、美しく洗練されたHTML分析レポートを自動生成します。",
    previewBtn: "今すぐサンプルを見る",
    estLoad: "予測ロード: 1.2秒",
    reports: [
      {
        title: "金融深度研究レポート",
        subtitle: "毎日の終値後に自動生成されます。主要イベント、センチメントの重み付け、トレンド分析を自動抽出し、独立したインタラクティブページとしての書き出しに対応。",
        type: "Financial",
      },
      {
        title: "24時間 グローバルホットスポット",
        subtitle: "トレンドの変曲点をリアルタイムで検出。主要イベント、センチメントの重み付け、トレンド分析を自動抽出し、独立したインタラクティブページとしての書き出しに対応。",
        type: "Hotspots",
      },
      {
        title: "技術トレンドブリーフィング",
        subtitle: "多言語をまたいで自動要約。主要イベント、センチメントの重み付け、トレンド分析を自動抽出し、独立したインタラクティブページとしての書き出しに対応。",
        type: "Tech",
      }
    ]
  },
  'ko': {
    title: "아웃풋, 즉 의사결정력",
    desc: "작업은 실행되는 것에 그치지 않습니다. 각 명령이 수행된 후, RSSFlow는 브라우저에서 직접 미리보고 공유할 수 있는 매우 아름다운 HTML 분석 보고서를 생성합니다.",
    previewBtn: "샘플 즉시 보기",
    estLoad: "예상 로딩: 1.2초",
    reports: [
      {
        title: "금융 심층 연구 보고서",
        subtitle: "매일 장 마감 후 자동 생성. 핵심 이벤트, 감성 가중치 및 트렌드 분석 자동 추출. 독립적인 대화형 페이지로 내보내기 지원.",
        type: "Financial",
      },
      {
        title: "24시간 글로벌 핫스팟 보드",
        subtitle: "트렌드 변곡점 실시간 감지. 핵심 이벤트, 감성 가중치 및 트렌드 분석 자동 추출. 독립적인 대화형 페이지로 내보내기 지원.",
        type: "Hotspots",
      },
      {
        title: "기술 트렌드 브리핑",
        subtitle: "다국어 자동 요약 및 통합. 핵심 이벤트, 감성 가중치 및 트렌드 분석 자동 추출. 독립적인 대화형 페이지로 내보내기 지원.",
        type: "Tech",
      }
    ]
  },
  'de': {
    title: "Output ist Entscheidungskraft",
    desc: "Aufgaben sind mehr als nur Ausführung. Nach jeder Anweisung erstellt RSSFlow einen atemberaubend schönen HTML-Analysebericht zur direkten Vorschau und Freigabe im Browser.",
    previewBtn: "Vorschau-Beispiel",
    estLoad: "Ladezeit: 1.2s",
    reports: [
      {
        title: "Finanz-Insight-Bericht",
        subtitle: "Automatisch nach täglichem Börsenschluss generiert. Extrahiert Schlüsselereignisse, Stimmungsanalyse und Trendprognosen. Unterstützt den Export als eigenständige interaktive Seite.",
        type: "Financial",
      },
      {
        title: "24h Globale Hotspots",
        subtitle: "Echtzeiterfassung von Trendwendepunkten. Extrahiert Schlüsselereignisse, Stimmungsanalyse und Trendprognosen. Unterstützt den Export als eigenständige interaktive Seite.",
        type: "Hotspots",
      },
      {
        title: "Tech-Trend-Briefing",
        subtitle: "Automatische sprachübergreifende Aggregation. Extrahiert Schlüsselereignisse, Stimmungsanalyse und Trendprognosen. Unterstützt den Export als eigenständige interaktive Seite.",
        type: "Tech",
      }
    ]
  },
  'es': {
    title: "El producto es poder de decisión",
    desc: "Las tareas son más que una simple ejecución. Después de cada instrucción, RSSFlow genera un informe de análisis HTML increíblemente hermoso para compartir y visualizar directamente en el navegador.",
    previewBtn: "Ver ejemplo",
    estLoad: "Carga estimada: 1.2s",
    reports: [
      {
        title: "Informe financiero profundo",
        subtitle: "Generado automáticamente después del cierre diario. Extrae eventos clave, peso del sentimiento y análisis de tendencias. Permite exportar como página interactiva independiente.",
        type: "Financial",
      },
      {
        title: "Panel global de hotspots 24h",
        subtitle: "Detección en tiempo real de puntos de inflexión de tendencias. Extrae eventos clave, peso del sentimiento y análisis de tendencias. Permite exportar como página interactiva independiente.",
        type: "Hotspots",
      },
      {
        title: "Boletín de tendencias tecnológicas",
        subtitle: "Agregación automática multilingüe. Extrae eventos clave, peso del sentimiento y análisis de tendencias. Permite exportar como página interactiva independiente.",
        type: "Tech",
      }
    ]
  },
  'pt': {
    title: "Resultado é poder de decisão",
    desc: "Tarefas são mais do que simples execução. Após cada instrução, o RSSFlow gera um relatório de análise HTML incrivelmente bonito para visualização e compartilhamento direto no navegador.",
    previewBtn: "Ver Exemplo",
    estLoad: "Carga est.: 1.2s",
    reports: [
      {
        title: "Relatório de Insight Financeiro",
        subtitle: "Gerado automaticamente após o fechamento diário. Extrai eventos importantes, peso do sentimento e análise de tendências. Suporta exportação como página interativa independente.",
        type: "Financial",
      },
      {
        title: "Hotspots Globais 24h",
        subtitle: "Descoberta em tempo real de pontos de inflexão de tendências. Extrai eventos importantes, peso do sentimento e análise de tendências. Suporta exportação como página interativa independente.",
        type: "Hotspots",
      },
      {
        title: "Boletim de Tendências Tech",
        subtitle: "Agregação multilíngue automática. Extrai eventos importantes, peso do sentimento e análise de tendências. Suporta exportação como página interativa independente.",
        type: "Tech",
      }
    ]
  },
  'it': {
    title: "L'output è potere decisionale",
    desc: "Le attività sono molto più di una semplice esecuzione. Dopo ogni comando, RSSFlow genera un report di analisi HTML di straordinaria bellezza per l'anteprima e la condivisione diretta nel browser.",
    previewBtn: "Anteprima Esempio",
    estLoad: "Caricamento est.: 1.2s",
    reports: [
      {
        title: "Report Finanziario Approfondito",
        subtitle: "Generato automaticamente dopo la chiusura giornaliera. Estrae eventi chiave, peso del sentiment e analisi dei trend. Supporta l'esportazione come pagina interattiva indipendente.",
        type: "Financial",
      },
      {
        title: "Hotspot Globali 24h",
        subtitle: "Rilevamento in tempo reale dei punti di svolta dei trend. Estrae eventi chiave, peso del sentiment e analisi dei trend. Supporta l'esportazione come pagina interattiva indipendente.",
        type: "Hotspots",
      },
      {
        title: "Briefing sui Trend Tech",
        subtitle: "Aggregazione multilingue automatica. Estrae eventi chiave, peso del sentiment e analisi dei trend. Supporta l'esportazione come pagina interattiva indipendente.",
        type: "Tech",
      }
    ]
  },
  'ru': {
    title: "Результат — сила решений",
    desc: "Задачи — это больше чем выполнение. После каждой инструкции RSSFlow генерирует потрясающий HTML-отчет для прямого просмотра и публикации в браузере.",
    previewBtn: "Посмотреть пример",
    estLoad: "Загрузка: 1.2 сек",
    reports: [
      {
        title: "Финансовый аналитический отчет",
        subtitle: "Автоматически создается после закрытия торгов. Выделяет ключевые события, вес настроений и анализирует тренды. Поддерживает экспорт как отдельной интерактивной страницы.",
        type: "Financial",
      },
      {
        title: "24ч Глобальный инфостенд",
        subtitle: "Обнаружение переломных моментов трендов в реальном времени. Выделяет ключевые события, вес настроений и анализирует тренды. Поддерживает экспорт как отдельной интерактивной страницы.",
        type: "Hotspots",
      },
      {
        title: "Сводка технологических трендов",
        subtitle: "Автоматическое многоязычное обобщение. Выделяет ключевые события, вес настроений и анализирует тренды. Поддерживает экспорт как отдельной интерактивной страницы.",
        type: "Tech",
      }
    ]
  },
  'hi': {
    title: "आउटपुट ही निर्णय शक्ति है",
    desc: "कार्य केवल निष्पादन से कहीं अधिक हैं। प्रत्येक निर्देश के बाद, RSSFlow प्रत्यक्ष ब्राउज़र पूर्वावलोकन और साझाकरण के लिए एक आश्चर्यजनक रूप से सुंदर HTML विश्लेषण रिपोर्ट उत्पन्न करता है।",
    previewBtn: "पूर्वावलोकन उदाहरण",
    estLoad: "अनुमानित लोड: 1.2s",
    reports: [
      {
        title: "वित्तीय अंतर्दृष्टि रिपोर्ट",
        subtitle: "दैनिक बाजार बंद होने के बाद स्वचालित रूप से उत्पन्न। मुख्य घटनाओं, भावना भार और प्रवृत्ति विश्लेषण को स्वचालित रूप से निकालना। स्वतंत्र इंटरैक्टिव पेज के रूप में निर्यात का समर्थन।",
        type: "Financial",
      },
      {
        title: "24 घंटे वैश्विक हॉटस्पॉट",
        subtitle: "वास्तविक समय में प्रवृत्ति विभक्ति बिंदुओं की खोज। मुख्य घटनाओं, भावना भार और प्रवृत्ति विश्लेषण को स्वचालित रूप से निकालना। स्वतंत्र इंटरैक्टिव पेज के रूप में निर्यात का समर्थन।",
        type: "Hotspots",
      },
      {
        title: "टेक ट्रेंड ब्रीफिंग",
        subtitle: "स्वचालित क्रॉस-भाषा एकत्रीकरण। मुख्य घटनाओं, भावना भार और प्रवृत्ति विश्लेषण को स्वचालित रूप से निकालना। स्वतंत्र इंटरैक्टिव पेज के रूप में निर्यात का समर्थन।",
        type: "Tech",
      }
    ]
  },
  'ar': {
    title: "النتائج، هي قوة القرار",
    desc: "المهام أكثر من مجرد تشغيل. بعد كل تعليمة، يولد RSSFlow تقرير تحليل HTML فائق الجمال يدعم المعاينة والمشاركة المباشرة في المتصفح.",
    previewBtn: "معاينة المثال الآن",
    estLoad: "الوقت المقدر: 1.2 ثانية",
    reports: [
      {
        title: "تقرير مالي عميق",
        subtitle: "يتم إنشاؤه تلقائياً بعد الإغلاق اليومي. يستخرج الأحداث الرئيسية، ووزن المشاعر، وتحليلات الاتجاه تلقائياً. يدعم التصدير كصفحة تفاعلية مستقلة.",
        type: "Financial",
      },
      {
        title: "لوحة النقاط الساخنة العالمية 24 ساعة",
        subtitle: "اكتشاف نقاط تحول الاتجاهات في الوقت الفعلي. يستخرج الأحداث الرئيسية، ووزن المشاعر، وتحليلات الاتجاه تلقائياً. يدعم التصدير كصفحة تفاعلية مستقلة.",
        type: "Hotspots",
      },
      {
        title: "موجز الاتجاهات التقنية",
        subtitle: "تجميع تلقائي عابر للغات. يستخرج الأحداث الرئيسية، ووزن المشاعر، وتحليلات الاتجاه تلقائياً. يدعم التصدير كصفحة تفاعلية مستقلة.",
        type: "Tech",
      }
    ]
  }
};

export const InsightsShowcase: React.FC = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  const reports = [
    {
      ...t.reports[0],
      icon: <PieChart className="w-5 h-5 text-emerald-400" />,
      url: "https://reportpublish.api.oinchain.com/report/e3ef1bd4-f28d-404b-9e1a-0b8606b69b82", 
      preview: "https://r.jina.ai/https://example.com/report-financial",
      accent: "from-emerald-500/20 to-emerald-500/5"
    },
    {
      ...t.reports[1],
      icon: <TrendingUp className="w-5 h-5 text-blue-400" />,
      url: "https://reportpublish.api.oinchain.com/report/79798a2b-dc93-4174-b6b7-df3a5d14764c",
      preview: "https://r.jina.ai/https://example.com/report-hotspots",
      accent: "from-blue-500/20 to-blue-500/5"
    },
    {
      ...t.reports[2],
      icon: <Newspaper className="w-5 h-5 text-purple-400" />,
      url: "https://reportpublish.api.oinchain.com/report/3309f8e0-3846-4603-b800-6ecfac33ecba",
      preview: "https://r.jina.ai/https://example.com/report-tech",
      accent: "from-purple-500/20 to-purple-500/5"
    }
  ];

  return (
    <section id="insights" className="py-40 px-4 bg-slate-950/50">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">{t.title}</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto italic">
              {t.desc}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reports.map((report, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all duration-500 z-10"
            >
              {/* 数据流体水滴流光背景扫略效果 */}
              <motion.div
                initial={{ x: "-80%", y: "-80%" }}
                whileInView={{ x: "80%", y: "80%" }}
                viewport={{ once: true }}
                transition={{ duration: 3, delay: index * 0.2 + 0.3, ease: "easeOut" }}
                className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-blue-500/10 to-transparent blur-3xl pointer-events-none mix-blend-screen -z-10"
              />

              {/* Browser Mockup Header */}
              <div className="px-5 py-3 bg-slate-800/50 flex items-center justify-between border-b border-slate-700/50">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
                </div>
                <div className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">preview.rssflow.io</div>
                <div className="w-4" />
              </div>

              {/* Fake Content Preview */}
              <div className={cn("aspect-video relative overflow-hidden bg-gradient-to-br", report.accent)}>
                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                  <div className="w-3/4 h-2/3 bg-slate-950/80 rounded-lg border border-white/5 shadow-2xl p-4 overflow-hidden relative">
                    {/* 微妙的流光扫描层，表达 AI 的分析运行感 */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent -translate-x-full animate-[shimmer_4s_infinite] pointer-events-none" />
                    
                    <div className="w-1/2 h-2 bg-white/10 rounded mb-4" />
                    <div className="space-y-2">
                       <div className="w-full h-1 bg-white/5 rounded relative overflow-hidden">
                         <motion.div 
                           initial={{ width: "0%" }}
                           whileInView={{ width: "100%" }}
                           viewport={{ once: true }}
                           transition={{ duration: 1.2, ease: "easeInOut" }}
                           className="absolute inset-y-0 left-0 bg-emerald-500/30"
                         />
                       </div>
                       <div className="w-5/6 h-1 bg-white/5 rounded relative overflow-hidden">
                         <motion.div 
                           initial={{ width: "0%" }}
                           whileInView={{ width: "100%" }}
                           viewport={{ once: true }}
                           transition={{ duration: 1.2, delay: 0.15, ease: "easeInOut" }}
                           className="absolute inset-y-0 left-0 bg-blue-500/30"
                         />
                       </div>
                       <div className="w-4/6 h-1 bg-white/5 rounded relative overflow-hidden">
                         <motion.div 
                           initial={{ width: "0%" }}
                           whileInView={{ width: "100%" }}
                           viewport={{ once: true }}
                           transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
                           className="absolute inset-y-0 left-0 bg-purple-500/30"
                         />
                       </div>
                    </div>
                    <div className="mt-6 flex gap-2">
                       <motion.div 
                         animate={{ opacity: [0.4, 0.7, 0.4] }}
                         transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                         className="flex-1 h-12 bg-emerald-500/10 rounded-md border border-emerald-500/10" 
                       />
                       <motion.div 
                         animate={{ opacity: [0.4, 0.7, 0.4] }}
                         transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                         className="flex-1 h-12 bg-blue-500/10 rounded-md border border-blue-500/10" 
                       />
                    </div>
                  </div>
                </div>
                {/* Gradient Mesh Overlay */}
                <div className="absolute inset-0 bg-slate-950/40 pointer-events-none" />
              </div>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-800 rounded-lg">{report.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{report.title}</h3>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">{report.type}</p>
                  </div>
                </div>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  {report.subtitle}
                </p>
                <div className="flex items-center justify-between">
                  <a 
                    href={report.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-400 text-sm font-bold group-hover:gap-3 transition-all cursor-pointer"
                  >
                    {t.previewBtn} <ExternalLink className="w-4 h-4" />
                  </a>
                  <div className="text-[10px] text-slate-600 font-mono">{t.estLoad}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
