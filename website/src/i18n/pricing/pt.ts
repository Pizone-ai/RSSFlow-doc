import type { PricingCopy } from './types';

export const pricingPt: PricingCopy = {
  badge: 'Preços simples e transparentes · Liberar inteligência de informação',
  title: 'Escolha o plano certo para',
  titleGradient: 'RSSFlow Pro',
  desc: 'Você paga por cotas e a licença, não por recursos que o Free já tem.',
  checkoutError: 'O checkout fica indisponível até o processador concluir a revisão da loja.',
  checkoutPaused:
    'Pagamentos com cartão aguardam aprovação do processador. Os preços abaixo são finais; o checkout abre após a aprovação live.',
  checkoutPausedButton: 'Compra em breve',
  billingCycle: {
    annual: 'Anual (economize 17% · 2 Skills novos)',
    lifetime: 'Vitalício (site com estilo + VIP de software)',
    monthly: 'Mensal',
  },
  popular: 'Popular · Skills 1:1 novos',
  bestValue: 'Vitalício · Site com estilo + VIP',
  plans: {
    free: {
      name: 'Starter (grátis)',
      price: '$0',
      period: 'Grátis para sempre',
      desc: 'RSS na barra lateral: feeds, Flow, Zen Reader. Traga sua própria chave de IA.',
      button: 'Instalar extensão',
      features: [
        'RSS / Atom, importação OPML, importação SnagFlow',
        'Biblioteca local, Zen Reader, Flow, grafo',
        '3 comandos especialistas, até 2 tarefas agendadas',
        'Resumos e chat BYOK',
      ],
    },
    annual: {
      name: 'Pro Anual',
      price: '$50',
      period: '/ ano (~$4.17/mês)',
      desc: 'Melhor para uso regular — cerca de 17% menos que o mensal',
      button: 'Obter Pro Anual',
      features: [
        'Tudo do Mensal',
        'Mais dois Skills novos, 1:1 sob medida (não são edições de comandos existentes)',
      ],
    },
    lifetime: {
      name: 'Pro Vitalício',
      price: '$100',
      period: 'Pagamento único · Para sempre',
      desc: 'Inclui Mensal e Anual, mais um site com estilo e VIP de software',
      button: 'Obter licença vitalícia',
      features: [
        'Tudo de Mensal e Anual',
        'Site de conteúdo com estilo personalizado',
        'VIP/Pro em software posterior da marca oinchain (concessão manual, sem cashback)',
        'Código de ativação pode ser presenteado',
      ],
    },
    monthly: {
      name: 'Pro Mensal',
      price: '$5',
      period: '/ mês',
      desc: 'Mês a mês. Cancele a próxima renovação a qualquer momento',
      button: 'Começar plano mensal',
      features: [
        'Todos os 23 comandos especialistas (3 no Free)',
        'Tarefas agendadas ilimitadas (2 no Free)',
        'Ponte MCP',
        'Licença em até 3 dispositivos',
        'Cancele no portal Creem',
      ],
    },
  },
  guarantees: [
    {
      icon: 'Lock',
      title: 'Entrega e ativação instantâneas',
      desc: 'Uma chave ACT-XXXX-XXXX-XXXX é emitida ou o direito é gravado na conta conectada',
    },
    {
      icon: 'Laptop',
      title: 'Até 3 dispositivos licenciados',
      desc: 'Desvincule nas configurações ao trocar de máquina. As bibliotecas de feeds permanecem locais.',
    },
    {
      icon: 'Receipt',
      title: 'Impostos globais e faturas',
      desc: 'Processado pelo Creem.io (MoR) com faturas oficiais de VAT / sales tax',
    },
  ],
  tableSection: {
    badge: 'Diferenças centrais',
    title: 'Pelo que você paga',
    desc: 'Só cotas e licença — não recursos que o Free já tem.',
    lifetimeBadge: 'VIP · Melhor valor',
    cols: {
      feature: 'Recurso e capacidade',
      free: 'Starter grátis',
      monthly: 'Pro Mensal ($5/mês)',
      annual: 'Pro Anual ($50/ano)',
      lifetime: 'Pro Vitalício ($100)',
    },
    categories: [
      {
        categoryName: 'Cotas',
        items: [
          { name: 'Comandos especialistas', free: '3', monthly: '23', annual: '23', lifetime: '23' },
          { name: 'Tarefas agendadas', free: 'Até 2', monthly: 'Ilimitadas', annual: 'Ilimitadas', lifetime: 'Ilimitadas' },
          { name: 'Ponte MCP', free: false, monthly: true, annual: true, lifetime: true },
          { name: 'Dispositivos licenciados', free: 'Este navegador', monthly: 'Até 3', annual: 'Até 3', lifetime: 'Até 3' },
        ],
      },
      {
        categoryName: 'Entre planos',
        items: [
          { name: '2 Skills novos 1:1', free: false, monthly: false, annual: true, lifetime: true },
          { name: 'Estilo do site de conteúdo', free: false, monthly: false, annual: false, lifetime: true },
          { name: 'VIP em software oinchain posterior', free: false, monthly: false, annual: false, lifetime: true },
        ],
      },
    ],
  },
  faqTitle: 'Perguntas frequentes (FAQ)',
  faqs: [
    {
      q: '1. Quais as diferenças exatas entre Free e Pro em comandos e tarefas?',
      a: 'O Free inclui 3 comandos especialistas (Ideator, Market Brief, Tech Daily) e até 2 tarefas agendadas. O Pro libera os 23 comandos internos e tarefas ilimitadas nos modos Simples, Cadeia sequencial e Split-Merge. A biblioteca de feeds fica no dispositivo; a licença não sincroniza artigos na nuvem.',
    },
    {
      q: '2. Como resgato os dois Skills novos do Anual?',
      a: 'Anual (e Vitalício, que inclui Anual) inclui dois Skills feitos do zero para o seu fluxo — não ajustes de comandos existentes. Após a compra, envie o caso de uso para support@oinchain.com.',
    },
    {
      q: '3. O que são o site de conteúdo e o VIP de software do Vitalício?',
      a: 'Vitalício inclui Anual, mais um site de conteúdo com estilo personalizado e o direito de solicitar VIP/Pro em software posterior publicado sob a marca oinchain (licença manual; sem cashback nem indicação). Após a compra, support@oinchain.com.',
    },
    {
      q: '4. O que é a ponte MCP (Model Context Protocol)?',
      a: 'A ponte MCP permite que ferramentas de IA externas (Cursor, Claude Desktop ou agentes locais) leiam artigos RSS e resumos de IA acumulados no RSSFlow como contexto imediato, sem copiar e colar.',
    },
    {
      q: '5. Como ativo o RSSFlow Pro depois da compra?',
      a: 'O checkout de convidado emite ACT-XXXX-XXXX-XXXX (três grupos de quatro caracteres) para colar nas opções da extensão. Se você compra logado, a extensão pega a licença ao entrar com a mesma conta.',
    },
    {
      q: '6. Quantos dispositivos? Como transferir?',
      a: 'Cada licença Pro pode rodar em até 3 dispositivos ao mesmo tempo. Usuários logados podem desvincular um dispositivo nas configurações. Assinaturas e artigos permanecem locais em cada computador e não são sincronizados automaticamente na nuvem.',
    },
    {
      q: '7. Qual é a política de reembolso de licenças digitais?',
      a: 'Por serem bens digitais de software de entrega instantânea, as licenças não são reembolsáveis depois de entregues ou ativadas. Em caso de cobrança duplicada ou erro de pagamento, contate o suporte técnico para verificação.',
    },
    {
      q: '8. Preciso da minha própria API Key de IA para resumos e chat?',
      a: 'O RSSFlow oferece BYOK, compatível com Google Gemini, OpenAI, Claude, DeepSeek, Ollama etc. O RSSFlow não cobra markup de tokens nas suas chamadas de modelo.',
    },
    {
      q: '9. Como cancelo Mensal ou Anual?',
      a: 'Abra o portal do cliente Creem no e-mail do recibo e cancele a próxima renovação. Nenhuma aprovação prévia. O acesso continua até o fim do período pago. Vitalício não tem renovação. Suporte: support@oinchain.com.',
    },
  ],
};
