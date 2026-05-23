'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, HardDrive, ZapOff } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const content = {
  'zh-CN': {
    badge: "Privacy First Architecture",
    titleStart: "数据的所有权，",
    titleAccent: "终归于您。",
    desc: "RSSFlow 采用本地优先架构。您的阅读记录、AI 摘要数据均存储在本地 IndexedDB 中。配合 Ollama 本地大模型支持，敏感数据无需离开您的计算机即可完成深度处理。",
    syncTitle: "零云端同步",
    syncDesc: "不收集阅读偏好，不上传订阅列表，真正实现阅读自由。（仅在您主动启用第三方 AI 或推送功能时，必要数据会发送至相应提供商）",
    dbTitle: "本地 IndexedDB 存储",
    dbDesc: "高性能本地数据库，支持数万条信息在本地丝滑滚动。"
  },
  'zh-TW': {
    badge: "Privacy First Architecture",
    titleStart: "資料的所有權，",
    titleAccent: "終歸於您。",
    desc: "RSSFlow 採用本地優先架構。您的閱讀記錄、AI 摘要數據均存儲在本地 IndexedDB 中。配合 Ollama 本地大模型支援，敏感數據無需離開您的計算機即可完成深度處理。",
    syncTitle: "零雲端同步",
    syncDesc: "不收集閱讀偏好，不上傳訂閱列表，真正實現閱讀自由。（僅在您主動啟用第三方 AI 或推送功能時，必要數據會發送至相應提供商）",
    dbTitle: "本地 IndexedDB 存儲",
    dbDesc: "高性能本地資料庫，支援數萬條信息在本地絲滑滾動。"
  },
  'en': {
    badge: "Privacy First Architecture",
    titleStart: "Data ownership ultimately ",
    titleAccent: "belongs to you.",
    desc: "RSSFlow adopts a local-first architecture. Your reading history and AI summary data are stored in local IndexedDB. Combined with Ollama local LLM support, sensitive data completes deep processing without leaving your computer.",
    syncTitle: "Zero Cloud Sync",
    syncDesc: "We don't collect reading preferences or upload subscription lists. Truly free reading. (Only when you actively enable 3rd-party AI or push features, necessary data is sent to providers.)",
    dbTitle: "Local IndexedDB",
    dbDesc: "High-performance local database supporting smooth scrolling of tens of thousands of items."
  },
  'ja': {
    badge: "Privacy First Architecture",
    titleStart: "データの所有権は、",
    titleAccent: "すべてあなたに帰属します。",
    desc: "RSSFlowはローカルファーストアーキテクチャを採用しています。閲覧履歴やAI要約データはローカルのIndexedDBに保存されます。ローカルのOllamaモデルサポートと組み合わせることで、機密データはPCから離れることなくディープ処理されます。",
    syncTitle: "クラウド同期ゼロ",
    syncDesc: "読書の好みの収集や購読リストのアップロードは行いません。本当の読書の自由を。（サードパーティのAIやプッシュ機能を明示的に有効にした場合にのみ、必要なデータがプロバイダーに送信されます）",
    dbTitle: "ローカルIndexedDBストレージ",
    dbDesc: "高性能なローカルデータベースにより、数万件の情報がローカルでスムーズにスクロールします。"
  },
  'ko': {
    badge: "Privacy First Architecture",
    titleStart: "데이터 소유권은 ",
    titleAccent: "결국 귀하의 것입니다.",
    desc: "RSSFlow는 로컬 우선 아키텍처를 채택하고 있습니다. 귀하의 독서 기록 및 AI 요약 데이터는 로컬 IndexedDB에 저장됩니다. 로컬 Ollama 모델 지원과 결합하여 민감한 데이터는 컴퓨터를 떠나지 않고도 심층 처리를 완료합니다.",
    syncTitle: "클라우드 동기화 제로",
    syncDesc: "독서 선호도를 수집하지 않으며 구독 목록을 업로드하지도 않습니다. 진정한 독서의 자유를 보장합니다. (제3자 AI 또는 푸시 기능을 활성화하는 경우에만 필요한 데이터가 관련 제공업체에 전송됩니다.)",
    dbTitle: "로컬 IndexedDB 스토리지",
    dbDesc: "고성능 로컬 데이터베이스를 지원하여 수만 개의 데이터를 로컬에서 매끄럽게 스크롤할 수 있습니다."
  },
  'de': {
    badge: "Privacy First Architecture",
    titleStart: "Das Dateneigentum ",
    titleAccent: "gehört letztendlich Ihnen.",
    desc: "RSSFlow verwendet eine Local-First-Architektur. Ihr Leseverlauf und Ihre AI-Zusammenfassungsdaten werden in einer lokalen IndexedDB gespeichert. In Kombination mit der lokalen Ollama LLM-Unterstützung erfolgt die tiefe Verarbeitung sensibler Daten, ohne Ihren Computer zu verlassen.",
    syncTitle: "Keine Cloud-Synchronisierung",
    syncDesc: "Wir erfassen keine Lesepräferenzen und laden keine Abonnementlisten hoch. Absolut freies Lesen. (Nur wenn Sie aktiv KI- oder Push-Funktionen von Drittanbietern aktivieren, werden die erforderlichen Daten an die Anbieter gesendet.)",
    dbTitle: "Lokale IndexedDB-Speicherung",
    dbDesc: "Hochleistungsfähige lokale Datenbank, die ein flüssiges Scrollen von Zehntausenden von Einträgen ermöglicht."
  },
  'es': {
    badge: "Privacy First Architecture",
    titleStart: "La propiedad de los datos ",
    titleAccent: "le pertenece a usted.",
    desc: "RSSFlow adopta una arquitectura local-first. Su historial de lectura y los datos de resumen de IA se almacenan en la base de datos IndexedDB local. Combinado con el soporte de Ollama local, el procesamiento profundo de datos confidenciales se completa sin salir de su ordenador.",
    syncTitle: "Sincronización en la nube cero",
    syncDesc: "No recopilamos preferencias de lectura ni subimos listas de suscripción. Lectura verdaderamente libre. (Solo cuando activa funciones de IA o push de terceros, los datos necesarios se envían a los proveedores).",
    dbTitle: "Almacenamiento IndexedDB local",
    dbDesc: "Base de datos local de alto rendimiento que admite el desplazamiento fluido de decenas de miles de elementos."
  },
  'pt': {
    badge: "Privacy First Architecture",
    titleStart: "A propriedade dos dados ",
    titleAccent: "pertence a você.",
    desc: "O RSSFlow adota uma arquitetura local-first. Seu histórico de leitura e dados de resumo de IA são armazenados no IndexedDB local. Combinado com o suporte a Ollama local, o processamento profundo de dados confidenciais é feito sem sair de seu computador.",
    syncTitle: "Sincronização em nuvem zero",
    syncDesc: "Não coletamos preferências de leitura nem enviamos listas de inscrição. Leitura verdadeiramente livre. (Apenas quando você ativa recursos de IA ou push de terceiros, os dados necessários são enviados aos provedores).",
    dbTitle: "Armazenamento IndexedDB local",
    dbDesc: "Banco de dados local de alta performance que suporta a rolagem suave de dezenas de milhares de itens."
  },
  'it': {
    badge: "Privacy First Architecture",
    titleStart: "La proprietà dei dati ",
    titleAccent: "appartiene a voi.",
    desc: "RSSFlow adotta un'architettura local-first. La cronologia di lettura e i dati dei riepiloghi IA sono memorizzati nel database locale IndexedDB. Insieme al supporto di Ollama locale, l'elaborazione profonda dei dati sensibili avviene interamente sul vostro computer.",
    syncTitle: "Sincronizzazione cloud zero",
    syncDesc: "Non raccogliamo le tue abitudini di lettura né carichiamo elenchi di iscrizioni. Una lettura davvero libera. (Solo quando abiliti attivamente l'IA di terze parti o le notifiche, i dati necessari vengono inviati ai rispettivi fornitori).",
    dbTitle: "Archiviazione locale IndexedDB",
    dbDesc: "Database locale ad alte prestazioni che supporta lo scorrimento fluido di decine di migliaia di elementi."
  },
  'ru': {
    badge: "Privacy First Architecture",
    titleStart: "Право собственности на данные ",
    titleAccent: "принадлежит только вам.",
    desc: "RSSFlow использует локально-ориентированную архитектуру. Ваша история чтения и данные сводок ИИ хранятся в локальной базе данных IndexedDB. Благодаря поддержке локальных моделей Ollama обработка конфиденциальных данных происходит прямо на вашем компьютере.",
    syncTitle: "Нулевая синхронизация с облаком",
    syncDesc: "Мы не собираем предпочтения в чтении и не загружаем списки подписок. Полная свобода чтения. (Данные отправляются сторонним провайдерам только при явном включении вами функций ИИ или пуш-уведомлений).",
    dbTitle: "Локальное хранилище IndexedDB",
    dbDesc: "Высокопроизводительная локальная база данных, обеспечивающая плавную прокрутку десятков тысяч записей."
  },
  'hi': {
    badge: "Privacy First Architecture",
    titleStart: "डेटा का स्वामित्व अंततः ",
    titleAccent: "आपका ही है।",
    desc: "RSSFlow एक लोकल-फर्स्ट आर्किटेक्चर अपनाता है। आपका पढ़ने का इतिहास और एआई सारांश डेटा स्थानीय IndexedDB में संग्रहीत किया जाता है। स्थानीय Ollama मॉडल समर्थन के साथ, संवेदनशील डेटा आपके कंप्यूटर को छोड़े बिना संसाधित होता है।",
    syncTitle: "शून्य क्लाउड सिंक",
    syncDesc: "हम पढ़ने की प्राथमिकताओं को एकत्र नहीं करते हैं या सदस्यता सूचियों को अपलोड नहीं करते हैं। सचमुच मुफ़्त पठन। (केवल जब आप एआई या पुश सुविधाओं को सक्रिय रूप से सक्षम करते हैं, तभी आवश्यक डेटा प्रदाताओं को भेजा जाता है।)",
    dbTitle: "स्थानीय IndexedDB संग्रहण",
    dbDesc: "उच्च प्रदर्शन स्थानीय डेटाबेस जो हजारों वस्तुओं के सहज स्क्रॉलिंग का समर्थन करता है।"
  },
  'ar': {
    badge: "Privacy First Architecture",
    titleStart: "ملكيتها للمعلومات والبيانات ",
    titleAccent: "تعود إليك بالكامل.",
    desc: "يتبنى RSSFlow بنية تعتمد على الأولوية المحلية أولاً. يتم تخزين سجل القراءة وبيانات تلخيص الذكاء الاصطناعي في قاعدة بيانات IndexedDB المحلية. بالاشتراك مع دعم نماذج Ollama المحلية، تتم معالجة بياناتك الحساسة دون مغادرة جهاز الكمبيوتر الخاص بك.",
    syncTitle: "مزامنة سحابية صفرية",
    syncDesc: "نحن لا نجمع تفضيلات القراءة الخاصة بك ولا نرفع قوائم الاشتراكات الخاصة بك. حرية قراءة حقيقية. (يتم إرسال البيانات الضرورية لموفري الخدمة فقط عندما تقوم بتنشيط ميزات الذكاء الاصطناعي أو الإشعارات بنشاط).",
    dbTitle: "تخزين IndexedDB محلي",
    dbDesc: "قاعدة بيانات محلية عالية الأداء تدعم التمرير السلس لعشرات الآلاف من العناصر محلياً."
  }
};

export const PrivacyLab: React.FC = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section id="privacy" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              {t.badge}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              {t.titleStart}<br />
              <span className="text-blue-400">{t.titleAccent}</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              {t.desc}
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 shrink-0">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{t.syncTitle}</h4>
                  <p className="text-slate-500 text-sm">{t.syncDesc}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 shrink-0">
                  <HardDrive className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{t.dbTitle}</h4>
                  <p className="text-slate-500 text-sm">{t.dbDesc}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3D 视觉展示 - 抽象隐私盾 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              {/* 动态脉冲圆环 */}
              <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full animate-[ping_3s_linear_infinite]" />
              <div className="absolute inset-0 border border-blue-500/10 rounded-full animate-[pulse_4s_ease-in-out_infinite]" />
              
              {/* 数据流路径动画 */}
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle
                  cx="50%" cy="50%" r="48%"
                  fill="none"
                  stroke="url(#data-gradient)"
                  strokeWidth="1"
                  strokeDasharray="10, 20"
                  className="animate-[spin_20s_linear_infinite] opacity-30"
                />
                <defs>
                  <linearGradient id="data-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute inset-4 rounded-full bg-slate-950/60 backdrop-blur-3xl border border-slate-800 flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.15)]">
                <div className="text-center group">
                  <motion.div
                    animate={{ 
                      rotateY: 360,
                      y: [0, -10, 0]
                    }}
                    transition={{ 
                      rotateY: { duration: 12, repeat: Infinity, ease: "linear" },
                      y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-gradient-to-tr from-blue-600 to-emerald-400 rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Shield className="w-16 h-16 md:w-20 md:h-20 text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]" />
                  </motion.div>
                  <div className="mt-8 text-slate-300 font-mono text-xs tracking-[0.2em] uppercase opacity-80">
                    Secured by Local AI
                  </div>
                </div>
              </div>

              {/* 悬浮标签 */}
              <motion.div 
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 p-4 bg-slate-900/90 border border-blue-500/30 rounded-2xl backdrop-blur-md shadow-2xl"
              >
                <ZapOff className="w-5 h-5 text-blue-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 装饰蓝色流光 */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
};
