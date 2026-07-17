'use client';

import React from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import {
  Brain,
  MessageSquare,
  ShieldCheck,
  Zap,
  Globe,
  Languages
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
    heroDesc: "RSSFlow 捕捉数据底层的微弱信号，将其转化为您的直觉洞察。不仅仅是获取，更是对信息的深度统治。",
    features: [
      {
        title: "AI 预读，直击要点",
        description: "AI 为您预读每一篇资讯。不再纠结于海量信息，为您提取核心价值，让筛选效率显著提升。",
      },
      {
        title: "深度对话，即时溯源",
        description: "与您的资讯流实时交谈。不仅是总结，更能精准追溯每一句结论的原始出处，杜绝 AI 幻觉。",
      },
      {
        title: "专家指令，即刻接入",
        description: "内置 22 套行业专家指令。将顶级 AI 洞察零门槛融入您的金融、科技或内容创作工作流。",
      },
      {
        title: "全自动驾驶模式",
        description: "像设置闹钟一样设置资讯任务。为您生成早报、监控热点，在您开启工作前，情报已整齐待命。",
      },
      {
        title: "情报触达，永不掉线",
        description: "关键信息实时同步至 Telegram 与飞书。无论身处何地，您的专属情报网始终保持实时连接。",
      },
      {
        title: "进化为智能中枢",
        description: "通过 MCP 协议调用万物。不再只是阅读器，而是具备执行力、能连接外部插件的个人智能枢纽。",
      }
    ]
  },
  'zh-TW': {
    heroTitle: "由 AI ",
    heroSubtitle: "重新定義閱讀。",
    heroDesc: "RSSFlow 捕捉數據底層的微弱信號，將其轉化為您的直覺洞察。不僅是獲取，更是對資訊的深度統治。",
    features: [
      {
        title: "AI 預讀，直擊要點",
        description: "AI 為您預讀每一篇資訊。不再糾結於海量資訊，為您提取核心價值，讓篩選效率顯著提升。",
      },
      {
        title: "深度對話，即時溯源",
        description: "與您的資訊流實時交談。不僅是總結，更能精準追溯每一句結論的原始出處，杜絕 AI 幻覺。",
      },
      {
        title: "專家指令，即刻接入",
        description: "內置 22 套行業專家指令。將頂級 AI 洞察零門檻融入您的金融、科技或內容創作工作流。",
      },
      {
        title: "全自動駕駛模式",
        description: "像設置鬧鐘一樣設置資訊任務。為您生成早報、監控熱點，在您開啟工作前，情報已整齊待命。",
      },
      {
        title: "情報觸達，永不掉線",
        description: "關鍵資訊實時同步至 Telegram 與飛書。無論身處何地，您的專屬情報網始終保持實時連接。",
      },
      {
        title: "進化為智能中樞",
        description: "通過 MCP 協議調用萬物。不再只是閱讀器，而是具備執行力、能連接外部插件的個人智能樞紐。",
      }
    ]
  },
  'en': {
    heroTitle: "Redefining Reading ",
    heroSubtitle: "with AI.",
    heroDesc: "RSSFlow captures faint signals beneath data, turning them into your intuitive insights. It’s not just about acquisition—it’s deep mastery over information.",
    features: [
      {
        title: "AI Pre-reading, Straight to the Point",
        description: "AI pre-reads every piece of news for you. Stop struggling with massive info; extract core value and boost filtering efficiency dramatically.",
      },
      {
        title: "Deep Dialogue, Instant Traceability",
        description: "Talk to your news flow in real-time. Not just summaries, but precise tracing to the original source of every conclusion, eliminating AI hallucinations.",
      },
      {
        title: "Expert Commands, Instant Access",
        description: "Built-in 22 expert command sets. Seamlessly integrate top-tier AI insights into your financial, tech, or content creation workflows.",
      },
      {
        title: "Full Autopilot Mode",
        description: "Set news tasks like setting an alarm. Generate morning reports and monitor hotspots so intelligence is ready before you start work.",
      },
      {
        title: "Intelligence Reach, Never Offline",
        description: "Sync critical info to Telegram and Feishu in real-time. Your exclusive intelligence network stays connected, wherever you are.",
      },
      {
        title: "Evolution to Smart Hub",
        description: "Call everything via MCP protocol. No longer just a reader, but a personal smart hub with execution power and external plugin connectivity.",
      }
    ]
  },
  'ja': {
    heroTitle: "AIで読書を ",
    heroSubtitle: "再定義する。",
    heroDesc: "RSSFlowはデータの下に隠されたかすかなシグナルを捉え、直感的な洞察へと変換します。単なる情報の取得にとどまらず、情報を深く支配します。",
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
        description: "重要な情報をTelegramやLark（飛書）にリアルタイム同期。どこにいても、あなたの専属インテリジェンスネットワークが常につながり続けます。",
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

  const features = [
    {
      title: t.features[0].title,
      description: t.features[0].description,
      icon: <Brain className="w-6 h-6" />,
      delay: 0.1
    },
    {
      title: t.features[1].title,
      description: t.features[1].description,
      icon: <MessageSquare className="w-6 h-6" />,
      delay: 0.2
    },
    {
      title: t.features[2].title,
      description: t.features[2].description,
      icon: <ShieldCheck className="w-6 h-6" />,
      delay: 0.3
    },
    {
      title: t.features[3].title,
      description: t.features[3].description,
      icon: <Zap className="w-6 h-6" />,
      delay: 0.4
    },
    {
      title: t.features[4].title,
      description: t.features[4].description,
      icon: <Globe className="w-6 h-6" />,
      delay: 0.5
    },
    {
      title: t.features[5].title,
      description: t.features[5].description,
      icon: <Languages className="w-6 h-6" />,
      delay: 0.6
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
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
