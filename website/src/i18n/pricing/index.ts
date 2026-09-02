import type { Language } from '@/context/LanguageContext';
import type { PricingCopy } from './types';
import { pricingAr } from './ar';
import { pricingDe } from './de';
import { pricingEn } from './en';
import { pricingEs } from './es';
import { pricingHi } from './hi';
import { pricingIt } from './it';
import { pricingJa } from './ja';
import { pricingKo } from './ko';
import { pricingPt } from './pt';
import { pricingRu } from './ru';
import { pricingZhCN } from './zh-CN';
import { pricingZhTW } from './zh-TW';

export type { PricingCopy, PricingCtaCopy, PricingSuccessCopy } from './types';

export const PRICING_COPY: Record<Language, PricingCopy> = {
  'zh-CN': pricingZhCN,
  'zh-TW': pricingZhTW,
  en: pricingEn,
  ja: pricingJa,
  ko: pricingKo,
  de: pricingDe,
  es: pricingEs,
  pt: pricingPt,
  it: pricingIt,
  ru: pricingRu,
  hi: pricingHi,
  ar: pricingAr,
};
