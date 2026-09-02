export type TableCell = boolean | string;

export type PlanCopy = {
  name: string;
  price: string;
  period: string;
  desc: string;
  button: string;
  features: string[];
};

export type PricingCopy = {
  badge: string;
  title: string;
  titleGradient: string;
  desc: string;
  checkoutError: string;
  checkoutPaused: string;
  checkoutPausedButton: string;
  billingCycle: {
    annual: string;
    lifetime: string;
    monthly: string;
  };
  popular: string;
  bestValue: string;
  plans: {
    free: PlanCopy;
    annual: PlanCopy;
    lifetime: PlanCopy;
    monthly: PlanCopy;
  };
  guarantees: Array<{
    icon: 'Lock' | 'Laptop' | 'Receipt';
    title: string;
    desc: string;
  }>;
  tableSection: {
    badge: string;
    title: string;
    desc: string;
    lifetimeBadge: string;
    cols: {
      feature: string;
      free: string;
      monthly: string;
      annual: string;
      lifetime: string;
    };
    categories: Array<{
      categoryName: string;
      items: Array<{
        name: string;
        free: TableCell;
        monthly: TableCell;
        annual: TableCell;
        lifetime: TableCell;
      }>;
    }>;
  };
  faqTitle: string;
  faqs: Array<{ q: string; a: string }>;
};

export type PricingCtaCopy = {
  badge: string;
  title: string;
  titleHighlight: string;
  desc: string;
  viewAllPricing: string;
  ctaLearn: string;
  ctaAnnual: string;
  ctaLifetime: string;
  lifetimeRibbon: string;
  guarantees: {
    delivery: string;
    devices: string;
    tax: string;
  };
  plans: {
    monthly: { title: string; price: string; period: string; tag: string; desc: string };
    annual: { title: string; price: string; period: string; tag: string; desc: string };
    lifetime: { title: string; price: string; period: string; tag: string; desc: string };
  };
};

export type PricingSuccessCopy = {
  badge: string;
  titleBefore: string;
  desc: string;
  pending: string;
  timeout: string;
  refunded: string;
  bound: string;
  codeLabel: string;
  copied: string;
  copy: string;
  methodATitle: string;
  methodADesc: string;
  methodBTitle: string;
  methodBDesc: string;
  home: string;
  help: string;
};
