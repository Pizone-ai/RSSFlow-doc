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
  zh: {
    heroTitle: "由 AI ",
    heroSubtitle: "重新定义阅读。",
    heroDesc: "RSSFlow 捕捉数据底层的微弱信号，将其转化为您的直觉洞察。不仅仅是获取，更是对信息的深度统治。",
    features: [
      {
        title: "AI 预读，直击要点",
        description: "AI 为您预读每一篇资讯。不再纠结于海量信息，为您提取核心价值，让筛选效率提升 10 倍。",
      },
      {
        title: "深度对话，即时溯源",
        description: "与您的资讯流实时交谈。不仅是总结，更能精准追溯每一句结论的原始出处，杜绝 AI 幻觉。",
      },
      {
        title: "专家指令，即刻接入",
        description: "内置 16 位行业专家指令集。将顶级 AI 洞察零门槛融入您的金融、科技或内容创作工作流。",
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
  en: {
    heroTitle: "Redefining Reading ",
    heroSubtitle: "with AI.",
    heroDesc: "RSSFlow captures faint signals beneath data, turning them into your intuitive insights. It’s not just about acquisition—it’s deep mastery over information.",
    features: [
      {
        title: "AI Pre-reading, Straight to the Point",
        description: "AI pre-reads every piece of news for you. Stop struggling with massive info; extract core value and boost filtering efficiency tenfold.",
      },
      {
        title: "Deep Dialogue, Instant Traceability",
        description: "Talk to your news flow in real-time. Not just summaries, but precise tracing to the original source of every conclusion, eliminating AI hallucinations.",
      },
      {
        title: "Expert Commands, Instant Access",
        description: "Built-in 16 expert command sets. Seamlessly integrate top-tier AI insights into your financial, tech, or content creation workflows.",
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
