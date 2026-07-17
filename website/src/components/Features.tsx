'use client';

import React from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import {
  Brain,
  MessageSquare,
  Command,
  Zap,
  Bell,
  Network,
  Telescope,
  BookOpen,
  Puzzle,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay, className }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative p-10 rounded-3xl bg-slate-900/30 border border-slate-800 hover:border-emerald-500/30 transition-all duration-500 overflow-hidden",
        className
      )}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(16, 185, 129, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10">
        <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 mb-8 border border-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-emerald-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 leading-relaxed text-lg opacity-80 group-hover:opacity-100 transition-opacity">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

import { useLanguage } from '@/context/LanguageContext';

const content = {
  'zh-CN': {
    heroTitle: "由 AI ",
    heroSubtitle: "重新定义阅读。",
    heroDesc: "从自动摘要与引文对话，到知识图谱、热点星系与无人值守工作流——RSSFlow 把 RSS 变成好用的本地信息处理系统。",
    features: [
      {
        title: "AI 预读，结构化要点",
        description: "后台自动摘要、标签与评分。先拆解再精读，为聊天、报告和筛选打好基础。",
      },
      {
        title: "引文对话，结论可追溯",
        description: "基于文章集合深度问答；回答带可点击引文徽标，悬停预览、点击回原文。",
      },
      {
        title: "22 套专家指令",
        description: "研报、宏观、风险、写作、加密等角色一键切换；也可自定义指令模板。",
      },
      {
        title: "无人值守工作流",
        description: "定时抓取与 AI 分析，支持单指令、串行链路与并行汇总，报告可推送发布。",
      },
      {
        title: "多端信息推送",
        description: "Telegram、飞书 Webhook 与桌面通知，摘要、简报与热点即时触达。",
      },
      {
        title: "MCP 智能中枢",
        description: "把本地 RSS 与摘要作为上下文，对接 Cursor / Claude 等 Agent 工作流。",
      },
      {
        title: "知识图谱与热点星系",
        description: "标签共现网络 + 3D 话题宇宙，从现象、逻辑到二阶影响层层剖析。",
      },
      {
        title: "沉浸阅读与 SnagFlow",
        description: "Zen Reader 键盘连读；SnagFlow 把任意网页变成可订阅 RSS 一键导入。",
      },
      {
        title: "本地优先与云报告",
        description: "数据默认存本机；可选发布到云报告门户或博客，跨设备阅读分享。",
      }
    ]
  },
  'zh-TW': {
    heroTitle: "由 AI ",
    heroSubtitle: "重新定義閱讀。",
    heroDesc: "從自動摘要與引文對話，到知識圖譜、熱點星系與無人值守工作流——RSSFlow 把 RSS 變成好用的本地資訊處理系統。",
    features: [
      {
        title: "AI 預讀，結構化要點",
        description: "後台自動摘要、標籤與評分。先拆解再精讀，為聊天、報告與篩選打好基礎。",
      },
      {
        title: "引文對話，結論可追溯",
        description: "基於文章集合深度問答；回答帶可點擊引文徽標，懸停預覽、點擊回原文。",
      },
      {
        title: "22 套專家指令",
        description: "研報、宏觀、風險、寫作、加密等角色一鍵切換；也可自訂指令模板。",
      },
      {
        title: "無人值守工作流",
        description: "定時抓取與 AI 分析，支援單指令、串行鏈路與並行匯總，報告可推送發布。",
      },
      {
        title: "多端資訊推送",
        description: "Telegram、飛書 Webhook 與桌面通知，摘要、簡報與熱點即時觸達。",
      },
      {
        title: "MCP 智能中樞",
        description: "把本地 RSS 與摘要作為上下文，對接 Cursor / Claude 等 Agent 工作流。",
      },
      {
        title: "知識圖譜與熱點星系",
        description: "標籤共現網絡 + 3D 話題宇宙，從現象、邏輯到二階影響層層剖析。",
      },
      {
        title: "沉浸閱讀與 SnagFlow",
        description: "Zen Reader 鍵盤連讀；SnagFlow 把任意網頁變成可訂閱 RSS 一鍵導入。",
      },
      {
        title: "本地優先與雲報告",
        description: "資料預設存本機；可選發佈到雲報告入口或部落格，跨裝置閱讀分享。",
      }
    ]
  },
  'en': {
    heroTitle: "Redefining Reading ",
    heroSubtitle: "with AI.",
    heroDesc: "From auto-summaries and cited chat to knowledge graphs, topic galaxies, and unattended workflows—RSSFlow turns RSS into a practical local information system.",
    features: [
      {
        title: "AI Pre-read, Structured Points",
        description: "Background summaries, tags, and scores. Decompose first, then deep-read—fuel for chat, reports, and filters.",
      },
      {
        title: "Cited Chat, Traceable Answers",
        description: "Q&A over article sets with clickable citation badges—hover to preview, click to open the source.",
      },
      {
        title: "22 Expert Commands",
        description: "One-tap roles for research, macro, risk, writing, crypto, and more—or add your own prompts.",
      },
      {
        title: "Unattended Workflows",
        description: "Scheduled fetch + AI analysis with single, chain, and split-merge modes. Push or publish reports.",
      },
      {
        title: "Multi-channel Push",
        description: "Telegram, Feishu webhooks, and desktop alerts for summaries, briefs, and hotspots.",
      },
      {
        title: "MCP for AI Tools",
        description: "Expose local RSS context to Cursor, Claude, and other agents via MCP.",
      },
      {
        title: "Graph & Topic Galaxy",
        description: "Co-occurrence graphs plus a 3D topic universe—from facts to second-order effects.",
      },
      {
        title: "Zen Reader & SnagFlow",
        description: "Keyboard-first immersive reading; SnagFlow turns any page into importable RSS.",
      },
      {
        title: "Local-first & Cloud Reports",
        description: "Data stays on-device by default; optionally publish to a report portal or blog.",
      }
    ]
  },
  'ja': {
    heroTitle: "AIで読書を ",
    heroSubtitle: "再定義する。",
    heroDesc: "RSSFlowはデータの下に隠されたかすかなシグナルを捉え、直感的な洞察へと変換します。リンクを貯めるだけでなく、要点を整理できます。",
    features: [
      {
        title: "AI下読み、要点を直撃",
        description: "AIがすべてのニュースを事前に読み込みます。膨大な情報に迷うことなく、コアバリューを抽出してフィルタリング効率を大幅に高めます。",
      },
      {
        title: "深い対話、即時の情報源追跡",
        description: "情報ストリームとリアルタイムで対話。単なる要約ではなく、各結論の一次情報源を正確に追跡し、AIのハルシネーション（幻覚）を排除します。",
      },
      {
        title: "専門家コマンド、即時実行",
        description: "22の業界エキスパートコマンドセットを内蔵。トップクラスのAIの洞察を、金融、テック、コンテンツ制作のワークフローにスムーズに組み込みます。",
      },
      {
        title: "完全自動運転モード",
        description: "目覚まし時計を設定するようにニュースタスクを設定。モーニングレポートの生成やホットスポットの監視を行い、仕事を始める前に情報が完璧に準備されます。",
      },
      {
        title: "情報伝達、常時接続",
        description: "重要な情報をTelegramやLark（飛書）にリアルタイム同期。どこにいても、必要な更新があなたに届き続けます。",
      },
      {
        title: "インテリジェントハブへの進化",
        description: "MCPプロトコルを介して万物を呼び出します。もはや単なるリーダーではなく、実行力を備え、外部プラグインと接続できるパーソナルスマートハブです。",
      }
    ]
  },
  'ko': {
    heroTitle: "AI를 통한 ",
    heroSubtitle: "독서의 재정의.",
    heroDesc: "RSSFlow는 데이터 심층의 미세한 신호를 포착하여 직관적인 인사이트로 변환합니다. 단순한 획득을 넘어 정보에 대한 깊은 지배력을 제공합니다.",
    features: [
      {
        title: "AI 사전 읽기, 핵심 직격",
        description: "AI가 모든 뉴스를 미리 읽어드립니다. 방대한 정보 속에서 고민하지 않고 핵심 가치를 추출하여 선별 효율을 크게 높여줍니다.",
      },
      {
        title: "심층 대화, 즉각적인 출처 추적",
        description: "뉴스 흐름과 실시간으로 대화하십시오. 요약뿐만 아니라 각 결론의 고유 출처를 정밀하게 추적하여 AI 환각을 근절합니다.",
      },
      {
        title: "전문가 명령, 즉각적인 연결",
        description: "22개의 업계 전문가 명령 세트 내장. 금융, 기술 또는 콘텐츠 제작 워크플로우에 최정상 에이전트의 인사이트를 즉시 융합할 수 있습니다.",
      },
      {
        title: "전체 자율주행 모드",
        description: "알람을 설정하듯 뉴스 작업을 설정하십시오. 모닝 브리핑 생성 및 핫스팟 모니터링을 지원하여 업무 시작 전 정보가 깔끔하게 대기합니다.",
      },
      {
        title: "정보 전달, 상시 가동",
        description: "핵심 정보를 Telegram 및 Feishu와 실시간 동기화합니다. 어디에 있든 전용 인텔리전스망이 상시 가동 상태를 유지합니다.",
      },
      {
        title: "스마트 허브로의 진화",
        description: "MCP 프로토콜을 통해 만물을 호출합니다. 단순한 리더기를 넘어 실행력을 갖추고 외부 플러그인을 연결하는 개인 스마트 허브로 진화합니다.",
      }
    ]
  },
  'de': {
    heroTitle: "Lesen neu ",
    heroSubtitle: "definiert mit KI.",
    heroDesc: "RSSFlow erfasst schwache Signale unter den Daten und verwandelt sie in Ihre intuitiven Erkenntnisse. Es geht nicht nur um den Erwerb – es ist die tiefe Beherrschung von Informationen.",
    features: [
      {
        title: "KI-Vorlesen, direkt auf den Punkt",
        description: "KI liest jede Nachricht für Sie vor. Verschwenden Sie keine Zeit mit massiven Informationen; extrahieren Sie den Kernwert und steigern Sie die Filtereffizienz deutlich.",
      },
      {
        title: "Tiefgehender Dialog, sofortige Rückverfolgung",
        description: "Sprechen Sie in Echtzeit mit Ihrem Informationsfluss. Nicht nur Zusammenfassungen, sondern präzise Rückverfolgung zum Originalausgangspunkt jeder Schlussfolgerung zur Vermeidung von KI-Halluzinationen.",
      },
      {
        title: "Expertenbefehle, sofortiger Zugriff",
        description: "Integriertes Befehlsset mit 22 Branchenexperten. Integrieren Sie erstklassige KI-Erkenntnisse barrierefrei in Ihre Finanz-, Technologie- oder Content-Erstellungs-Workflows.",
      },
      {
        title: "Vollständiger Autopilot-Modus",
        description: "Richten Sie Nachrichtenaufgaben wie einen Wecker ein. Erstellen Sie Morgenberichte und überwachen Sie Hotspots, sodass Informationen bereitstehen, bevor Sie mit der Arbeit beginnen.",
      },
      {
        title: "Informationsreichweite, niemals offline",
        description: "Synchronisieren Sie wichtige Informationen in Echtzeit mit Telegram und Feishu. Egal wo Sie sind, Ihr exklusives Informationsnetzwerk bleibt immer verbunden.",
      },
      {
        title: "Evolution zum intelligenten Hub",
        description: "Rufen Sie alles über das MCP-Protokoll auf. Nicht mehr nur ein Reader, sondern ein persönlicher intelligenter Hub mit Ausführungskraft und externer Plugin-Konnektivität.",
      }
    ]
  },
  'es': {
    heroTitle: "Redefiniendo la lectura ",
    heroSubtitle: "con IA.",
    heroDesc: "RSSFlow captura las señales débiles debajo de los datos, transformándolas en sus conocimientos intuitivos. No se trata solo de la adquisición: es el dominio profundo de la información.",
    features: [
      {
        title: "Prelectura de IA, directo al grano",
        description: "La IA prelee cada noticia por usted. Deje de luchar con la información masiva; extraiga el valor principal y mejore notablemente la eficiencia de filtrado.",
      },
      {
        title: "Diálogo profundo, trazabilidad instantánea",
        description: "Hable con su flujo de noticias en tiempo real. No solo resúmenes, sino un seguimiento preciso del origen primario de cada conclusión, eliminando las alucinaciones de la IA.",
      },
      {
        title: "Comandos expertos, acceso instantáneo",
        description: "Conjunto integrado de 22 comandos de expertos de la industria. Integre sin barreras los mejores conocimientos de IA en sus flujos de trabajo financieros, tecnológicos o de creación de contenido.",
      },
      {
        title: "Modo piloto automático completo",
        description: "Configure tareas de noticias como configurar una alarma. Genere informes matutinos y supervise los hotspots para que la inteligencia esté lista antes de comenzar a trabajar.",
      },
      {
        title: "Alcance de inteligencia, nunca desconectado",
        description: "Sincronice información crítica con Telegram y Feishu en tiempo real. Su red de inteligencia exclusiva permanece conectada, dondequiera que esté.",
      },
      {
        title: "Evolución a Smart Hub",
        description: "Invoque todo a través del protocolo MCP. Ya no es solo un lector, sino un centro inteligente personal con poder de ejecución y conectividad de complementos externos.",
      }
    ]
  },
  'pt': {
    heroTitle: "Redefinindo a leitura ",
    heroSubtitle: "com IA.",
    heroDesc: "O RSSFlow captura sinais fracos sob os dados, transformando-os em suas percepções intuitivas. Não se trata apenas de aquisição – é o domínio profundo da informação.",
    features: [
      {
        title: "Pré-leitura de IA, direto ao ponto",
        description: "A IA lê previamente cada notícia para você. Pare de lutar com informações massivas; extraia o valor principal e aumente significativamente a eficiência de filtragem.",
      },
      {
        title: "Diálogo profundo, rastreabilidade instantânea",
        description: "Converse com seu fluxo de notícias em tempo real. Não apenas resumos, mas rastreamento preciso da fonte primária de cada conclusão, eliminando as alucinações de IA.",
      },
      {
        title: "Comandos de especialistas, acesso instantâneo",
        description: "Conjunto embutido de 22 comandos de especialistas da indústria. Integre os melhores insights de IA em seus fluxos de trabalho de finanças, tecnologia ou criação de conteúdo.",
      },
      {
        title: "Modo piloto automático completo",
        description: "Configure tarefas de notícias como configurar um alarme. Gere relatórios matinais e monitore hotspots para que a inteligência esteja pronta antes de você começar a trabalhar.",
      },
      {
        title: "Alcance da inteligência, nunca desconectado",
        description: "Sincronize informações críticas com Telegram e Feishu em tempo real. Sua rede de inteligência exclusiva permanece conectada, onde quer que você esteja.",
      },
      {
        title: "Evolução para Smart Hub",
        description: "Invoque tudo através do protocolo MCP. Não é mais apenas um leitor, mas um hub inteligente pessoal com poder de execução e conectividade de plugins externos.",
      }
    ]
  },
  'it': {
    heroTitle: "Ridefinire la lettura ",
    heroSubtitle: "con l'IA.",
    heroDesc: "RSSFlow cattura i segnali deboli sotto i dati, trasformandoli nelle tue intuizioni. Non si tratta solo di acquisizione: è un profondo controllo delle informazioni.",
    features: [
      {
        title: "Pre-lettura IA, dritti al punto",
        description: "L'IA prelegge ogni notizia per te. Evita il sovraccarico di informazioni, estrai il valore fondamentale e aumenta notevolmente l'efficienza di filtraggio.",
      },
      {
        title: "Dialogo profondo, tracciabilità istantanea",
        description: "Parla con il tuo flusso di informazioni in tempo real. Non solo riassunti, ma tracciamento accurato della fonte primaria di ogni conclusione per escludere allucinazioni dell'IA.",
      },
      {
        title: "Comandi esperti, accesso immediato",
        description: "Set integrato di 22 comandi per esperti del settore. Integra i migliori insight dell'IA nei tuoi flussi di lavoro finanziari, tecnologici o di creazione di contenuti senza barriere.",
      },
      {
        title: "Modalità autopilota completa",
        description: "Imposta i tuoi task informativi come una sveglia. Genera report mattutini e monitora gli hotspot in modo che le informazioni siano pronte prima di iniziare a lavorare.",
      },
      {
        title: "Informazioni sempre a portata di mano, mai offline",
        description: "Sincronizza le informazioni critiche su Telegram e Feishu in tempo reale. Ovunque tu sia, la tua rete di intelligence esclusiva rimane sempre attiva e connessa.",
      },
      {
        title: "Evoluzione in hub intelligente",
        description: "Invocate tutto tramite il protocollo MCP. Non più un semplice lettore, ma un hub intelligente personale con capacità esecutive e connessione a plugin esterni.",
      }
    ]
  },
  'ru': {
    heroTitle: "Переосмысление чтения ",
    heroSubtitle: "с помощью ИИ.",
    heroDesc: "RSSFlow улавливает слабые сигналы в потоке данных, превращая их в ваши интуитивные выводы. Это не просто получение информации — это глубокое господство над ней.",
    features: [
      {
        title: "ИИ-предпросмотр: сразу к сути",
        description: "ИИ предварительно прочитывает каждую новость для вас. Не тратьте время на тонны информации; извлекайте ключевую ценность и значительно повышайте эффективность отбора.",
      },
      {
        title: "Глубокий диалог, мгновенная проверка источников",
        description: "Общайтесь со своим потоком новостей в реальном времени. Не просто резюме, а точное отслеживание первоисточника каждого вывода, исключающее галлюцинации ИИ.",
      },
      {
        title: "Команды экспертов, мгновенный доступ",
        description: "Встроенный набор из 22 отраслевых экспертных команд. Интегрируйте лучшие выводы ИИ в ваши финансовые, технологические или писательские рабочие процессы.",
      },
      {
        title: "Полный режим автопилота",
        description: "Настраивайте информационные задачи как будильник. Генерируйте утренние сводки и отслеживайте тренды, чтобы аналитика была готова до начала вашей работы.",
      },
      {
        title: "Доставка информации, всегда на связи",
        description: "Синхронизация важной информации с Telegram и Feishu в реальном времени. Ваша собственная аналитическая сеть всегда активна, где бы вы ни находились.",
      },
      {
        title: "Эволюция в интеллектуальный центр",
        description: "Вызывайте любые инструменты по протоколу MCP. Больше не просто читалка, а персональный интеллектуальный узел с возможностью исполнения и подключения внешних плагинов.",
      }
    ]
  },
  'hi': {
    heroTitle: "एआई के साथ पढ़ने को ",
    heroSubtitle: "फिर से परिभाषित करना।",
    heroDesc: "RSSFlow डेटा के नीचे छिपे कमजोर संकेतों को पकड़ता है, उन्हें आपकी सहज अंतर्दृष्टि में बदल देता है। यह केवल जानकारी प्राप्त करने के बारे में नहीं है - यह जानकारी पर गहरा अधिकार है।",
    features: [
      {
        title: "एआई प्री-रीडिंग, सीधे काम की बात",
        description: "एआई आपके लिए हर खबर को पहले ही पढ़ लेता है। विशाल जानकारी के साथ संघर्ष न करें; मुख्य मूल्य निकालें और फ़िल्टरिंग दक्षता को उल्लेखनीय रूप से बढ़ाएं।",
      },
      {
        title: "गहरी बातचीत, तत्काल स्रोत ट्रैकिंग",
        description: "वास्तविक समय में अपने समाचार प्रवाह से बात करें। न केवल सारांश, बल्कि एआई मतिभ्रम को समाप्त करते हुए हर निष्कर्ष के मूल स्रोत की सटीक ट्रैकिंग।",
      },
      {
        title: "विशेषज्ञ कमांड, त्वरित पहुंच",
        description: "निर्मित 22 उद्योग विशेषज्ञ कमांड सेट। शीर्ष स्तरीय एआई अंतर्दृष्टि को अपने वित्तीय, तकनीकी या सामग्री निर्माण वर्कफ़्लो में आसानी से एकीकृत करें।",
      },
      {
        title: "पूर्ण ऑटोपायलट मोड",
        description: "अलार्म सेट करने की तरह समाचार कार्यों को सेट करें। सुबह की रिपोर्ट उत्पन्न करें और हॉटस्पॉट की निगरानी करें ताकि काम शुरू करने से पहले खुफिया जानकारी तैयार रहे।",
      },
      {
        title: "इंटेलिजेंस पहुंच, कभी ऑफलाइन नहीं",
        description: "वास्तविक समय में टेलीग्राम और Feishu के साथ महत्वपूर्ण जानकारी सिंक करें। आपका विशेष इंटेलिजेंस नेटवर्क हमेशा जुड़ा रहता है, चाहे आप कहीं भी हों।",
      },
      {
        title: "स्मार्ट हब के रूप में विकास",
        description: "MCP प्रोटोकॉल के माध्यम से सभी को कॉल करें। अब केवल एक पाठक नहीं, बल्कि निष्पादन शक्ति और बाहरी प्लगइन कनेक्टिविटी वाला एक व्यक्तिगत स्मार्ट हब है।",
      }
    ]
  },
  'ar': {
    heroTitle: "إعادة تعريف القراءة ",
    heroSubtitle: "بواسطة الذكاء الاصطناعي.",
    heroDesc: "يلتقط RSSFlow الإشارات الضعيفة الكامنة تحت البيانات، ويحولها إلى بصائر بديهية خاصة بك. لا يقتصر الأمر على الحصول على المعلومات فحسب، بل هو هيمنة عميقة عليها.",
    features: [
      {
        title: "قراءة تمهيدية بالذكاء الاصطناعي، مباشرة إلى الجوهر",
        description: "يقرأ الذكاء الاصطناعي كل خبر مسبقاً من أجلك. تخلص من حيرة التدفق الهائل، واستخلص القيمة الأساسية لترفع كفاءة التصفية بشكل ملحوظ.",
      },
      {
        title: "حوار عميق، وتتبع فوري للمصادر",
        description: "تحدث مع تدفق معلوماتك في الوقت الفعلي. ليس مجرد تلخيص، بل تتبع دقيق للمصدر الأصلي لكل استنتاج لمنع ظاهرة الهلوسة في الذكاء الاصطناعي.",
      },
      {
        title: "تعليمات الخبراء، وصول فوري",
        description: "مجموعة مدمجة من 22 تعليمة لخبراء الصناعة. ادمج رؤى الذكاء الاصطناعي المرموقة في تدفقات عملك المالي أو التقني أو صناعة المحتوى بدون تعقيد.",
      },
      {
        title: "وضع الطيار الآلي الكامل",
        description: "اضبط مهام معلوماتك مثل منبه الساعة. ينشئ لك تقارير الصباح ويراقب النقاط الساخنة، لتجد معلوماتك مستعدة ومنظمة قبل بدء عملك.",
      },
      {
        title: "وصول المعلومات، لا انقطاع بعد اليوم",
        description: "مزامنة فورية للمعلومات الحساسة والحرجة إلى Telegram وLark. أينما كنت، تظل شبكة معلوماتك الخاصة متصلة بالكامل على مدار الساعة.",
      },
      {
        title: "تطور إلى مركز ذكي متكامل",
        description: "استدعِ كل شيء عبر بروتوكول MCP. لم يعد مجرد قارئ، بل هو مركز ذكي شخصي يتمتع بقوة التنفيذ وقابل للاتصال بالملحقات الخارجية.",
      }
    ]
  }
};

export const Features: React.FC = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  const icons = [
    <Brain className="w-6 h-6" key="i0" />,
    <MessageSquare className="w-6 h-6" key="i1" />,
    <Command className="w-6 h-6" key="i2" />,
    <Zap className="w-6 h-6" key="i3" />,
    <Bell className="w-6 h-6" key="i4" />,
    <Network className="w-6 h-6" key="i5" />,
    <Telescope className="w-6 h-6" key="i6" />,
    <BookOpen className="w-6 h-6" key="i7" />,
    <Puzzle className="w-6 h-6" key="i8" />,
  ];
  const enFallback = content['en'].features;
  const featureCopy = (t.features?.length >= 9 ? t.features : enFallback).slice(0, 9);
  const features = featureCopy.map((item, index) => ({
    title: item.title,
    description: item.description,
    icon: icons[index],
    delay: 0.08 * (index + 1),
  }));

  return (
    <section id="features" className="py-40 px-4 relative scroll-mt-20">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-24 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
                {t.heroTitle} <br />
                <span className="text-emerald-400">{t.heroSubtitle}</span>
              </h2>
              <p className="text-slate-400 text-xl font-medium leading-relaxed">
                {t.heroDesc}
              </p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-emerald-500/50 to-transparent mb-4 opacity-30" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 px-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
            />
          ))}
        </div>
      </div>

      {/* 装饰光效 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-emerald-500/5 blur-[150px] rounded-full -z-10 opacity-50" />
    </section>
  );
};
