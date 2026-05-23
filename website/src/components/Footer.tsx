'use client';

import React from 'react';
import { Twitter, Github, Mail, MessageCircle } from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';

const content = {
  'zh-CN': {
    privacy: "隐私政策",
    help: "帮助中心",
    rights: "保留所有权利。"
  },
  'zh-TW': {
    privacy: "隱私政策",
    help: "幫助中心",
    rights: "保留所有權利。"
  },
  'en': {
    privacy: "Privacy Policy",
    help: "Help Center",
    rights: "All rights reserved."
  },
  'ja': {
    privacy: "プライバシーポリシー",
    help: "ヘルプセンター",
    rights: "All rights reserved."
  },
  'ko': {
    privacy: "개인정보 보호정책",
    help: "헬프 센터",
    rights: "All rights reserved."
  },
  'de': {
    privacy: "Datenschutzerklärung",
    help: "Hilfezentrum",
    rights: "Alle Rechte vorbehalten."
  },
  'es': {
    privacy: "Política de privacidad",
    help: "Centro de ayuda",
    rights: "Todos los derechos reservados."
  },
  'pt': {
    privacy: "Política de privacidade",
    help: "Central de ajuda",
    rights: "Todos os direitos reservados."
  },
  'it': {
    privacy: "Informativa sulla privacy",
    help: "Centro assistenza",
    rights: "Tutti i diritti riservati."
  },
  'ru': {
    privacy: "Политика конфиденциальности",
    help: "Справочный центр",
    rights: "Все права защищены."
  },
  'hi': {
    privacy: "गोपनीयता नीति",
    help: "सहायता केंद्र",
    rights: "सर्वाधिकार सुरक्षित।"
  },
  'ar': {
    privacy: "سياسة الخصوصية",
    help: "مركز المساعدة",
    rights: "جميع الحقوق محفوظة."
  }
};

export const Footer: React.FC = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <footer className="pt-20 pb-24 border-t border-slate-800 bg-slate-950/50 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">RSSFlow</h2>
            <p className="text-slate-500 text-sm">Beyond Reading, Into Insight.</p>
          </div>

          <div className="flex gap-8">
            <a href="https://twitter.com/love_rssflow" className="text-slate-400 hover:text-emerald-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://t.me/+fTK4yn1n3aU5YWFl" className="text-slate-400 hover:text-emerald-400 transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="https://github.com/oinzen/RSSFlow-doc" className="text-slate-400 hover:text-emerald-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="mailto:oinchain@gmail.com" className="text-slate-400 hover:text-emerald-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-slate-500 text-xs text-center md:text-right">
             <div className="flex gap-4 justify-center md:justify-end mb-2">
                <a href="/privacy" className="hover:text-emerald-400 transition-colors">{t.privacy}</a>
                <a href="https://rssflow.oinchain.com/guide/help/" className="hover:text-emerald-400 transition-colors">{t.help}</a>
             </div>
             © 2026 RSSFlow Reader. {t.rights}
          </div>
        </div>
      </div>
    </footer>
  );
};
