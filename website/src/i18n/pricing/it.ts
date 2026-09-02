import type { PricingCopy } from './types';

export const pricingIt: PricingCopy = {
  badge: 'Prezzi semplici e trasparenti · Sblocca l’intelligenza informativa',
  title: 'Scegli il piano giusto per',
  titleGradient: 'RSSFlow Pro',
  desc: 'Paghi quote e licenza, non le funzioni che Free ha già.',
  checkoutError: 'Il checkout non è disponibile finché il processore non completa la revisione del negozio.',
  checkoutPaused:
    'I pagamenti con carta attendono l’approvazione del processore. I prezzi sotto sono definitivi; il checkout si apre dopo l’approvazione live.',
  checkoutPausedButton: 'Acquisto in arrivo',
  billingCycle: {
    annual: 'Annuale (risparmia 17% · 2 nuovi Skill)',
    lifetime: 'A vita (sito stilizzato + VIP software)',
    monthly: 'Mensile',
  },
  popular: 'Popolare · nuovi Skill 1:1',
  bestValue: 'A vita · Sito stilizzato + VIP',
  plans: {
    free: {
      name: 'Starter (gratis)',
      price: '$0',
      period: 'Gratis per sempre',
      desc: 'RSS in sidebar: feed, Flow, Zen Reader. Porta la tua chiave AI.',
      button: 'Installa estensione',
      features: [
        'RSS / Atom, import OPML, import SnagFlow',
        'Libreria locale, Zen Reader, Flow, grafo',
        '3 comandi esperti, fino a 2 attività programmate',
        'Riassunti e chat BYOK',
      ],
    },
    annual: {
      name: 'Pro Annuale',
      price: '$50',
      period: '/ anno (~$4.17/mese)',
      desc: 'Per uso regolare — circa il 17% in meno del mensile',
      button: 'Ottieni Pro Annuale',
      features: [
        'Tutto del Mensile',
        'Più due Skill nuovi, su misura 1:1 (non sono modifiche di comandi esistenti)',
      ],
    },
    lifetime: {
      name: 'Pro a vita',
      price: '$100',
      period: 'Pagamento unico · Per sempre',
      desc: 'Include Mensile e Annuale, più un sito stilizzato e VIP software',
      button: 'Ottieni licenza a vita',
      features: [
        'Tutto di Mensile e Annuale',
        'Sito di contenuti con stile personalizzato',
        'VIP/Pro su software successivi del marchio oinchain (concessione manuale, niente cashback)',
        'Codice di attivazione regalabile',
      ],
    },
    monthly: {
      name: 'Pro Mensile',
      price: '$5',
      period: '/ mese',
      desc: 'Mese per mese. Annulla il rinnovo successivo in qualsiasi momento',
      button: 'Avvia piano mensile',
      features: [
        'Tutti i 23 comandi esperti (3 su Free)',
        'Attività programmate illimitate (2 su Free)',
        'Ponte MCP',
        'Licenza su massimo 3 dispositivi',
        'Disdici nel portale Creem',
      ],
    },
  },
  guarantees: [
    {
      icon: 'Lock',
      title: 'Consegna e attivazione istantanee',
      desc: 'Viene emessa una chiave ACT-XXXX-XXXX-XXXX oppure il diritto viene scritto sull’account connesso',
    },
    {
      icon: 'Laptop',
      title: 'Fino a 3 dispositivi in licenza',
      desc: 'Scollega nelle impostazioni quando cambi macchina. Le librerie dei feed restano locali.',
    },
    {
      icon: 'Receipt',
      title: 'Fiscalità globale e fatture',
      desc: 'Elaborato da Creem.io (MoR) con fatture ufficiali IVA / sales tax',
    },
  ],
  tableSection: {
    badge: 'Differenze principali',
    title: 'Per cosa paghi',
    desc: 'Solo quote e licenza — non le funzioni già in Free.',
    lifetimeBadge: 'VIP · Miglior valore',
    cols: {
      feature: 'Funzione e capacità',
      free: 'Starter gratis',
      monthly: 'Pro Mensile ($5/mese)',
      annual: 'Pro Annuale ($50/anno)',
      lifetime: 'Pro a vita ($100)',
    },
    categories: [
      {
        categoryName: 'Quote',
        items: [
          { name: 'Comandi esperti', free: '3', monthly: '23', annual: '23', lifetime: '23' },
          { name: 'Attività programmate', free: 'Fino a 2', monthly: 'Illimitate', annual: 'Illimitate', lifetime: 'Illimitate' },
          { name: 'Ponte MCP', free: false, monthly: true, annual: true, lifetime: true },
          { name: 'Dispositivi in licenza', free: 'Questo browser', monthly: 'Fino a 3', annual: 'Fino a 3', lifetime: 'Fino a 3' },
        ],
      },
      {
        categoryName: 'Tra i piani',
        items: [
          { name: '2 Skill nuovi 1:1', free: false, monthly: false, annual: true, lifetime: true },
          { name: 'Stile del sito di contenuti', free: false, monthly: false, annual: false, lifetime: true },
          { name: 'VIP su software oinchain successivi', free: false, monthly: false, annual: false, lifetime: true },
        ],
      },
    ],
  },
  faqTitle: 'Domande frequenti (FAQ)',
  faqs: [
    {
      q: '1. Quali sono le differenze esatte tra Free e Pro su comandi e attività?',
      a: 'Free include 3 comandi esperti (Ideator, Market Brief, Tech Daily) e fino a 2 attività programmate. Pro sblocca tutti i 23 comandi integrati e attività illimitate in modalità Singola, Catena sequenziale e Split-Merge. La libreria dei feed resta sul dispositivo; la licenza non sincronizza gli articoli sul cloud.',
    },
    {
      q: '2. Come riscatto i due Skill nuovi dell’Annuale?',
      a: 'Annuale (e A vita, che include Annuale) include due Skill costruiti da zero sul tuo flusso — non ritocchi di comandi esistenti. Dopo l’acquisto scrivi a support@oinchain.com con il caso d’uso.',
    },
    {
      q: '3. Cosa sono il sito di contenuti e il VIP software di A vita?',
      a: 'A vita include Annuale, più un sito di contenuti con stile personalizzato e il diritto di richiedere VIP/Pro su software successivi pubblicati con il marchio oinchain (licenza manuale; niente cashback né referral). Dopo l’acquisto, support@oinchain.com.',
    },
    {
      q: '4. Cos’è il ponte MCP (Model Context Protocol)?',
      a: 'Il ponte MCP consente a strumenti AI esterni (Cursor, Claude Desktop o agenti locali) di leggere articoli RSS e riassunti AI accumulati in RSSFlow come contesto immediato, senza copia e incolla.',
    },
    {
      q: '5. Come attivo RSSFlow Pro dopo l’acquisto?',
      a: 'Il checkout ospite emette ACT-XXXX-XXXX-XXXX (tre gruppi di quattro caratteri) da incollare nelle opzioni dell’estensione. Se acquisti da connesso, l’estensione recupera la licenza dopo l’accesso con lo stesso account.',
    },
    {
      q: '6. Quanti dispositivi? Come li trasferisco?',
      a: 'Ogni licenza Pro può girare su un massimo di 3 dispositivi contemporaneamente. Gli utenti connessi possono scollegare un dispositivo nelle impostazioni. Abbonamenti e articoli restano locali su ogni computer e non vengono sincronizzati automaticamente sul cloud.',
    },
    {
      q: '7. Qual è la politica di rimborso delle licenze digitali?',
      a: 'Essendo beni digitali software a consegna istantanea, le licenze non sono rimborsabili una volta consegnate o attivate. In caso di addebiti duplicati o errori di pagamento, contatta il supporto tecnico per la verifica.',
    },
    {
      q: '8. Serve una mia API Key AI per riassunti e chat?',
      a: 'RSSFlow supporta BYOK, compatibile con Google Gemini, OpenAI, Claude, DeepSeek, Ollama, ecc. RSSFlow non applica un markup sui token delle tue chiamate al modello.',
    },
    {
      q: '9. Come disdico Mensile o Annuale?',
      a: 'Apri il portale clienti Creem dall’email della ricevuta e annulla il rinnovo successivo. Nessuna approvazione preventiva. L’accesso resta fino alla fine del periodo pagato. A vita non ha rinnovo. Supporto: support@oinchain.com.',
    },
  ],
};
