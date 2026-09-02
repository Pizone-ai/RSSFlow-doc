import type { PricingCopy } from './types';

export const pricingEs: PricingCopy = {
  badge: 'Precios simples y transparentes · Desbloquea inteligencia de información',
  title: 'Elige el plan adecuado para',
  titleGradient: 'RSSFlow Pro',
  desc: 'Pagas por cuotas y la licencia, no por funciones que Free ya incluye.',
  checkoutError: 'El pago no está disponible hasta que el procesador termine la revisión de la tienda.',
  checkoutPaused:
    'Los pagos con tarjeta esperan la aprobación del procesador. Los precios son definitivos; el checkout se abrirá tras la aprobación en vivo.',
  checkoutPausedButton: 'Compra disponible pronto',
  billingCycle: {
    annual: 'Anual (ahorra 17% · 2 Skills nuevos)',
    lifetime: 'Vitalicio (sitio con estilo + VIP de software)',
    monthly: 'Mensual',
  },
  popular: 'Popular · Skills 1:1 nuevos',
  bestValue: 'Vitalicio · Sitio con estilo + VIP',
  plans: {
    free: {
      name: 'Starter (gratis)',
      price: '$0',
      period: 'Gratis para siempre',
      desc: 'RSS en la barra lateral: feeds, Flow, Zen Reader. Trae tu propia clave de IA.',
      button: 'Instalar extensión',
      features: [
        'RSS / Atom, importación OPML, importación SnagFlow',
        'Biblioteca local, Zen Reader, Flow, grafo',
        '3 comandos expertos, hasta 2 tareas programadas',
        'Resúmenes y chat BYOK',
      ],
    },
    annual: {
      name: 'Pro Anual',
      price: '$50',
      period: '/ año (~$4.17/mes)',
      desc: 'Para uso habitual — unos 17% menos que el mensual',
      button: 'Obtener Pro Anual',
      features: [
        'Todo lo del Mensual',
        'Más dos Skills nuevos, a medida 1:1 (no son ediciones de comandos existentes)',
      ],
    },
    lifetime: {
      name: 'Pro Vitalicio',
      price: '$100',
      period: 'Pago único · Para siempre',
      desc: 'Incluye Mensual y Anual, más un sitio con estilo y VIP de software',
      button: 'Obtener licencia vitalicia',
      features: [
        'Todo lo de Mensual y Anual',
        'Sitio de contenido con estilo personalizado',
        'VIP/Pro en software posterior de la marca oinchain (concesión manual, sin cashback)',
        'Código de activación regalable',
      ],
    },
    monthly: {
      name: 'Pro Mensual',
      price: '$5',
      period: '/ mes',
      desc: 'Mes a mes. Cancela la siguiente renovación cuando quieras',
      button: 'Empezar plan mensual',
      features: [
        'Los 23 comandos expertos (3 en Free)',
        'Tareas programadas ilimitadas (2 en Free)',
        'Puente MCP',
        'Licencia en hasta 3 dispositivos',
        'Cancela en el portal de Creem',
      ],
    },
  },
  guarantees: [
    {
      icon: 'Lock',
      title: 'Entrega e activación instantáneas',
      desc: 'Se emite una clave ACT-XXXX-XXXX-XXXX o se escribe el derecho en la cuenta iniciada',
    },
    {
      icon: 'Laptop',
      title: 'Hasta 3 dispositivos con licencia',
      desc: 'Desvincula en ajustes al cambiar de equipo. Las bibliotecas de feeds siguen locales.',
    },
    {
      icon: 'Receipt',
      title: 'Impuestos globales y facturas',
      desc: 'Procesado por Creem.io (MoR) con facturas oficiales de IVA / sales tax',
    },
  ],
  tableSection: {
    badge: 'Diferencias clave',
    title: 'Por qué pagas',
    desc: 'Solo cuotas y licencia — no funciones que Free ya tiene.',
    lifetimeBadge: 'VIP · Mejor valor',
    cols: {
      feature: 'Función y capacidad',
      free: 'Starter gratis',
      monthly: 'Pro Mensual ($5/mes)',
      annual: 'Pro Anual ($50/año)',
      lifetime: 'Pro Vitalicio ($100)',
    },
    categories: [
      {
        categoryName: 'Cuotas',
        items: [
          { name: 'Comandos expertos', free: '3', monthly: '23', annual: '23', lifetime: '23' },
          { name: 'Tareas programadas', free: 'Hasta 2', monthly: 'Ilimitadas', annual: 'Ilimitadas', lifetime: 'Ilimitadas' },
          { name: 'Puente MCP', free: false, monthly: true, annual: true, lifetime: true },
          { name: 'Dispositivos con licencia', free: 'Este navegador', monthly: 'Hasta 3', annual: 'Hasta 3', lifetime: 'Hasta 3' },
        ],
      },
      {
        categoryName: 'Entre planes',
        items: [
          { name: '2 Skills nuevos 1:1', free: false, monthly: false, annual: true, lifetime: true },
          { name: 'Estilo del sitio de contenido', free: false, monthly: false, annual: false, lifetime: true },
          { name: 'VIP en software oinchain posterior', free: false, monthly: false, annual: false, lifetime: true },
        ],
      },
    ],
  },
  faqTitle: 'Preguntas frecuentes (FAQ)',
  faqs: [
    {
      q: '1. ¿Qué diferencia hay entre Free y Pro en comandos y tareas?',
      a: 'Free incluye 3 comandos expertos (Ideator, Market Brief, Tech Daily) y hasta 2 tareas programadas. Pro desbloquea los 23 comandos integrados y tareas ilimitadas en modos Simple, Cadena secuencial y Split-Merge. La biblioteca de feeds permanece en el dispositivo; la licencia no sincroniza artículos en la nube.',
    },
    {
      q: '2. ¿Cómo canjeo los dos Skills nuevos del Anual?',
      a: 'Anual (y Vitalicio, que incluye Anual) incluye dos Skills construidos desde cero para tu flujo — no ajustes de comandos existentes. Tras la compra, escribe a support@oinchain.com con tu caso de uso.',
    },
    {
      q: '3. ¿Qué son el sitio de contenido y el VIP de software del Vitalicio?',
      a: 'Vitalicio incluye Anual, más un sitio de contenido con estilo personalizado y el derecho a solicitar VIP/Pro en software posterior publicado bajo la marca oinchain (licencia manual; sin cashback ni referidos). Tras la compra, support@oinchain.com.',
    },
    {
      q: '4. ¿Qué es el puente MCP (Model Context Protocol)?',
      a: 'El puente MCP permite que herramientas de IA externas (Cursor, Claude Desktop o agentes locales) lean los artículos RSS y resúmenes de IA acumulados en RSSFlow como contexto inmediato, sin copiar y pegar.',
    },
    {
      q: '5. ¿Cómo activo RSSFlow Pro tras comprar?',
      a: 'El checkout de invitado emite ACT-XXXX-XXXX-XXXX (tres grupos de cuatro caracteres) para pegar en las opciones de la extensión. Si compras con sesión iniciada, la extensión recoge la licencia al iniciar sesión con la misma cuenta.',
    },
    {
      q: '6. ¿Cuántos dispositivos? ¿Cómo los cambio?',
      a: 'Cada licencia Pro puede usarse en hasta 3 dispositivos a la vez. Los usuarios con sesión pueden desvincular un dispositivo en ajustes. Las suscripciones y artículos permanecen locales en cada equipo y no se sincronizan automáticamente en la nube.',
    },
    {
      q: '7. ¿Cuál es la política de reembolso de licencias digitales?',
      a: 'Por ser bienes digitales de software de entrega instantánea, las licencias no son reembolsables una vez entregadas o activadas. Ante cargos duplicados o errores de pago, contacta al soporte técnico para verificación.',
    },
    {
      q: '8. ¿Necesito mi propia API Key de IA para resúmenes y chat?',
      a: 'RSSFlow admite BYOK, compatible con Google Gemini, OpenAI, Claude, DeepSeek, Ollama, etc. RSSFlow no añade recargo de tokens a tus llamadas al modelo.',
    },
    {
      q: '9. ¿Cómo cancelo Mensual o Anual?',
      a: 'Abre el portal de clientes de Creem desde el correo del recibo y cancela la siguiente renovación. No se requiere aprobación previa. El acceso continúa hasta el fin del periodo pagado. Vitalicio no se renueva. Soporte: support@oinchain.com.',
    },
  ],
};
