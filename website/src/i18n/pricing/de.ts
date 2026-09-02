import type { PricingCopy } from './types';

export const pricingDe: PricingCopy = {
  badge: 'Einfache, transparente Preise · Informationsintelligenz freischalten',
  title: 'Wähle den passenden Plan für',
  titleGradient: 'RSSFlow Pro',
  desc: 'Du zahlst für Kontingente und die Lizenz, nicht für Funktionen, die Free schon hat.',
  checkoutError: 'Checkout ist nicht verfügbar, bis der Zahlungsanbieter den Shop prüft.',
  checkoutPaused:
    'Kartenzahlungen warten auf die Freigabe. Preise unten sind verbindlich; der Checkout öffnet nach der Live-Freigabe.',
  checkoutPausedButton: 'Kauf öffnet bald',
  billingCycle: {
    annual: 'Jährlich (17 % sparen · 2 neue Skills)',
    lifetime: 'Lebenslang (gestylte Site + Software-VIP)',
    monthly: 'Monatlich',
  },
  popular: 'Beliebt · 1:1 neue Skills',
  bestValue: 'Lebenslang · Gestylte Site + VIP',
  plans: {
    free: {
      name: 'Starter (kostenlos)',
      price: '$0',
      period: 'Für immer kostenlos',
      desc: 'Sidebar-RSS: Feeds, Flow, Zen Reader. Eigener AI-Key.',
      button: 'Erweiterung installieren',
      features: [
        'RSS / Atom, OPML-Import, SnagFlow-Import',
        'Lokale Bibliothek, Zen Reader, Flow, Graph',
        '3 Expertenbefehle, bis zu 2 geplante Aufgaben',
        'BYOK-Zusammenfassungen und Chat',
      ],
    },
    annual: {
      name: 'Pro Jährlich',
      price: '$50',
      period: '/ Jahr (~$4.17/Monat)',
      desc: 'Für regelmäßige Nutzung — etwa 17 % günstiger als monatlich',
      button: 'Pro Jährlich holen',
      features: [
        'Alles aus Monatlich',
        'Plus zwei brandneue Skills, 1:1 zugeschnitten (keine Umbauten bestehender Befehle)',
      ],
    },
    lifetime: {
      name: 'Pro Lebenslang',
      price: '$100',
      period: 'Einmalzahlung · Für immer',
      desc: 'Enthält Monatlich und Jährlich plus gestylte Site und Software-VIP',
      button: 'Lebenslange Lizenz holen',
      features: [
        'Alles aus Monatlich und Jährlich',
        'Content-Site mit individuellem Stil',
        'VIP/Pro für spätere oinchain-Software (manuelle Freischaltung, kein Cashback)',
        'Aktivierungscode verschenkbar',
      ],
    },
    monthly: {
      name: 'Pro Monatlich',
      price: '$5',
      period: '/ Monat',
      desc: 'Monat für Monat. Nächste Verlängerung jederzeit kündbar',
      button: 'Monatlich starten',
      features: [
        'Alle 23 Expertenbefehle (3 bei Free)',
        'Unbegrenzte geplante Aufgaben (2 bei Free)',
        'MCP-Brücke',
        'Lizenz für bis zu 3 Geräte',
        'Kündigung im Creem-Portal',
      ],
    },
  },
  guarantees: [
    {
      icon: 'Lock',
      title: 'Sofortige Lieferung & Aktivierung',
      desc: 'Ein ACT-XXXX-XXXX-XXXX-Schlüssel wird ausgestellt oder das Recht auf das angemeldete Konto geschrieben',
    },
    {
      icon: 'Laptop',
      title: 'Bis zu 3 lizenzierte Geräte',
      desc: 'Beim Gerätewechsel in den Einstellungen entbinden. Feed-Bibliotheken bleiben lokal.',
    },
    {
      icon: 'Receipt',
      title: 'Globale Steuerkonformität & Rechnungen',
      desc: 'Sicher über Creem.io (MoR) mit offiziellen USt-/Sales-Tax-Rechnungen',
    },
  ],
  tableSection: {
    badge: 'Kernunterschiede',
    title: 'Wofür du zahlst',
    desc: 'Nur Kontingente und Lizenz — nicht Features, die Free schon hat.',
    lifetimeBadge: 'VIP · Bester Wert',
    cols: {
      feature: 'Funktion & Leistung',
      free: 'Free Starter',
      monthly: 'Pro Monatlich ($5/Mo)',
      annual: 'Pro Jährlich ($50/Jahr)',
      lifetime: 'Pro Lebenslang ($100)',
    },
    categories: [
      {
        categoryName: 'Kontingente',
        items: [
          { name: 'Expertenbefehle', free: '3', monthly: '23', annual: '23', lifetime: '23' },
          { name: 'Geplante Aufgaben', free: 'Bis 2', monthly: 'Unbegrenzt', annual: 'Unbegrenzt', lifetime: 'Unbegrenzt' },
          { name: 'MCP-Brücke', free: false, monthly: true, annual: true, lifetime: true },
          { name: 'Lizenzierte Geräte', free: 'Dieser Browser', monthly: 'Bis 3', annual: 'Bis 3', lifetime: 'Bis 3' },
        ],
      },
      {
        categoryName: 'Zwischen Plänen',
        items: [
          { name: '2 brandneue 1:1-Skills', free: false, monthly: false, annual: true, lifetime: true },
          { name: 'Content-Site-Stil', free: false, monthly: false, annual: false, lifetime: true },
          { name: 'VIP für spätere oinchain-Software', free: false, monthly: false, annual: false, lifetime: true },
        ],
      },
    ],
  },
  faqTitle: 'Häufige Fragen (FAQ)',
  faqs: [
    {
      q: '1. Was unterscheidet Free und Pro bei Befehlen und geplanten Aufgaben?',
      a: 'Free hat 3 Expertenbefehle (Ideator, Market Brief, Tech Daily) und bis zu 2 geplante Aufgaben. Pro schaltet alle 23 eingebauten Befehle und unbegrenzte Aufgaben in Einzel-, Ketten- und Split-Merge-Modus frei. Die Feed-Bibliothek bleibt auf dem Gerät; die Lizenz synchronisiert keine Artikel in die Cloud.',
    },
    {
      q: '2. Wie löse ich die zwei neuen Skills beim Jahresplan ein?',
      a: 'Jährlich (und Lebenslang, das Jährlich enthält) umfasst zwei Skills, die von Grund auf für deinen Workflow gebaut werden — keine Anpassungen vorhandener Befehle. Nach dem Kauf support@oinchain.com mit deinem Anwendungsfall mailen.',
    },
    {
      q: '3. Was sind Content-Site und Software-VIP bei Lebenslang?',
      a: 'Lebenslang enthält Jährlich plus eine stilangepasste Content-Site und das Recht, VIP/Pro für spätere Software unter der Marke oinchain zu beantragen (manuelle Lizenz, kein Cashback oder Referral). Nach dem Kauf support@oinchain.com.',
    },
    {
      q: '4. Was ist die MCP-Brücke (Model Context Protocol)?',
      a: 'Die MCP-Brücke macht lokale RSS-Artikel und KI-Zusammenfassungen in RSSFlow für externe KI-Tools (Cursor, Claude Desktop, lokale Agents) als Kontext lesbar — ohne Copy-Paste.',
    },
    {
      q: '5. Wie aktiviere ich RSSFlow Pro nach dem Kauf?',
      a: 'Gast-Checkout erzeugt ACT-XXXX-XXXX-XXXX (drei Vierergruppen) zum Einfügen in den Erweiterungsoptionen. Kaufst du angemeldet, holt die Erweiterung die Lizenz nach Login mit demselben Konto.',
    },
    {
      q: '6. Wie viele Geräte? Wie wechsle ich?',
      a: 'Jede Pro-Lizenz läuft auf bis zu 3 Geräten gleichzeitig. Angemeldete Nutzer können ein Gerät in den Einstellungen entbinden. Abos und Artikel bleiben lokal und werden nicht automatisch in die Cloud gespiegelt.',
    },
    {
      q: '7. Wie ist die Erstattung bei digitalen Lizenzen?',
      a: 'Wegen sofort gelieferter digitaler Softwarelizenzen sind Käufe nach Ausgabe oder Aktivierung grundsätzlich nicht erstattungsfähig. Bei Doppelabbuchung oder Zahlungsfehlern den Support zur Prüfung kontaktieren.',
    },
    {
      q: '8. Brauche ich einen eigenen AI-API-Key für Zusammenfassungen & Chat?',
      a: 'RSSFlow nutzt BYOK (Bring Your Own Key) mit Gemini, OpenAI, Claude, DeepSeek, Ollama usw. RSSFlow schlägt keine Token-Marge auf deine Modellaufrufe auf.',
    },
    {
      q: '9. Wie kündige ich Monatlich oder Jährlich?',
      a: 'Im Creem-Kundenportal aus der Beleg-E-Mail die nächste Verlängerung kündigen. Keine Vorabgenehmigung. Zugang bleibt bis Periodenende. Lebenslang hat keine Verlängerung. Support: support@oinchain.com.',
    },
  ],
};
