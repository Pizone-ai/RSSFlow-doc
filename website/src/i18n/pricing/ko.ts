import type { PricingCopy } from './types';

export const pricingKo: PricingCopy = {
  badge: '간단하고 투명한 요금 · 정보 인사이트 잠금 해제',
  title: '나에게 맞는',
  titleGradient: 'RSSFlow Pro 플랜',
  desc: '유료는 무료 플랜에 없는 할당량과 라이선스만 구매합니다.',
  checkoutError: '결제 세션을 만들 수 없습니다. 결제사 심사가 끝날 때까지 기다려 주세요.',
  checkoutPaused:
    '결제 채널이 결제사 심사 중이라 아직 정식 구매가 열리지 않았습니다. 가격은 확정이며, 승인 후 주문할 수 있습니다.',
  checkoutPausedButton: '곧 구매 오픈',
  billingCycle: {
    annual: '연간 (17% 절약 · 신규 Skill 2개)',
    lifetime: '평생 (사이트 스타일 + 소프트웨어 VIP)',
    monthly: '월간',
  },
  popular: '인기 · 1:1 신규 Skill',
  bestValue: '평생 · 사이트 스타일 + VIP',
  plans: {
    free: {
      name: '스타터 (무료)',
      price: '$0',
      period: '영구 무료',
      desc: '사이드바 RSS: 피드, Flow, 몰입 리더. AI는 본인 Key.',
      button: '확장 프로그램 설치',
      features: [
        'RSS / Atom, OPML 가져오기, SnagFlow 가져오기',
        '로컬 라이브러리, 몰입 리더, Flow, 그래프',
        '전문가 명령 3개, 예약 작업 최대 2개',
        'BYOK 요약과 대화',
      ],
    },
    annual: {
      name: 'Pro 연간',
      price: '$50',
      period: '/ 년 (약 $4.17/월)',
      desc: '꾸준히 쓸 때 — 월간보다 약 17% 저렴',
      button: '연간 Pro 시작',
      features: ['월간의 모든 할당량 포함', '워크플로에 맞춰 처음부터 만드는 신규 Skill 2개 (기존 명령 수정 아님)'],
    },
    lifetime: {
      name: 'Pro 평생',
      price: '$100',
      period: '일시불 · 평생',
      desc: '월간 + 연간에 사이트 스타일과 소프트웨어 VIP 추가',
      button: '평생 라이선스 받기',
      features: [
        '월간과 연간의 모든 혜택',
        '콘텐츠 사이트 스타일 맞춤',
        'oinchain 브랜드 이후 소프트웨어 VIP/Pro 신청 (수동 부여, 캐시백 없음)',
        '활성화 코드 선물 가능',
      ],
    },
    monthly: {
      name: 'Pro 월간',
      price: '$5',
      period: '/ 월',
      desc: '월 단위. 다음 갱신은 언제든 취소',
      button: '월간 시작',
      features: [
        '전문가 명령 23개 (무료 3개)',
        '예약 작업 무제한 (무료 최대 2개)',
        'MCP 브리지',
        '최대 3대 라이선스',
        'Creem 포털에서 해지',
      ],
    },
  },
  guarantees: [
    {
      icon: 'Lock',
      title: '즉시 전달 및 활성화',
      desc: 'ACT-XXXX-XXXX-XXXX 키를 발급하거나 로그인한 계정에 권한을 기록합니다',
    },
    {
      icon: 'Laptop',
      title: '최대 3대',
      desc: '기기 변경 시 설정에서 해제. 피드 라이브러리는 각 기기에 로컬로 남습니다.',
    },
    {
      icon: 'Receipt',
      title: '글로벌 세금 및 인보이스',
      desc: 'Creem.io(MoR)가 VAT/판매세 공식 인보이스를 처리합니다',
    },
  ],
  tableSection: {
    badge: '핵심 차이',
    title: '무엇을 위해 지불하는가',
    desc: '할당량과 라이선스만. 무료에 이미 있는 기능은 제외.',
    lifetimeBadge: 'VIP · 최고 가치',
    cols: {
      feature: '기능과 혜택',
      free: '무료 스타터',
      monthly: 'Pro 월간 ($5/월)',
      annual: 'Pro 연간 ($50/년)',
      lifetime: 'Pro 평생 ($100)',
    },
    categories: [
      {
        categoryName: '할당량',
        items: [
          { name: '전문가 명령', free: '3', monthly: '23', annual: '23', lifetime: '23' },
          { name: '예약 작업', free: '최대 2', monthly: '무제한', annual: '무제한', lifetime: '무제한' },
          { name: 'MCP 브리지', free: false, monthly: true, annual: true, lifetime: true },
          { name: '라이선스 기기', free: '이 브라우저', monthly: '최대 3', annual: '최대 3', lifetime: '최대 3' },
        ],
      },
      {
        categoryName: '플랜 사이',
        items: [
          { name: '1:1 신규 Skill ×2', free: false, monthly: false, annual: true, lifetime: true },
          { name: '사이트 스타일 맞춤', free: false, monthly: false, annual: false, lifetime: true },
          { name: '이후 oinchain 소프트웨어 VIP', free: false, monthly: false, annual: false, lifetime: true },
        ],
      },
    ],
  },
  faqTitle: '자주 묻는 질문 (FAQ)',
  faqs: [
    {
      q: '1. 무료와 Pro의 명령·예약 작업 차이는?',
      a: '무료는 전문가 명령 3개(Ideator, Market Brief, Tech Daily)와 예약 작업 최대 2개. Pro는 내장 명령 23개와 단일/순차 체인/병렬 요약의 무제한 작업. 피드 라이브러리는 기기에 남고, 라이선스가 본문을 클라우드 동기화하지 않습니다.',
    },
    {
      q: '2. 연간의 신규 Skill 2개는 어떻게 받나요?',
      a: '연간(평생에도 포함)은 기존 명령을 고치는 것이 아니라 워크플로에 맞춰 처음부터 만드는 Skill 2개입니다. 구매 후 사용 사례를 support@oinchain.com 으로 보내 주세요.',
    },
    {
      q: '3. 평생의 콘텐츠 사이트와 소프트웨어 VIP는?',
      a: '평생은 연간 혜택에 더해 스타일 맞춤 콘텐츠 사이트와 oinchain 브랜드 이후 소프트웨어 VIP/Pro 신청권(수동 라이선스, 캐시백·추천 보상 없음). 구매 후 support@oinchain.com.',
    },
    {
      q: '4. MCP 브리지(Model Context Protocol)란?',
      a: 'MCP 브리지는 RSSFlow에 쌓인 로컬 RSS와 AI 요약을 Cursor, Claude Desktop, 로컬 Agent 같은 외부 AI가 바로 읽게 합니다. 복사할 필요가 없습니다.',
    },
    {
      q: '5. 구매 후 어떻게 활성화하나요?',
      a: '게스트 결제는 ACT-XXXX-XXXX-XXXX(4자리×3)를 확장 옵션에 붙여 넣습니다. 구매 시 같은 계정으로 로그인이면 확장에서 같은 계정으로 로그인하면 권한이 동기화됩니다.',
    },
    {
      q: '6. 몇 대까지? 기기 변경은?',
      a: 'Pro는 동시에 최대 3대. 로그인한 사용자는 설정에서 이전 기기를 해제할 수 있습니다. 각 PC의 구독과 글은 로컬에 남고 자동 전체 클라우드 동기화는 없습니다.',
    },
    {
      q: '7. 환불 정책은?',
      a: '즉시 전달되는 디지털 라이선스이므로 발급 또는 활성화 후에는 원칙적으로 환불되지 않습니다. 중복 청구나 미전달은 지원에서 확인합니다.',
    },
    {
      q: '8. AI 요약·채팅에 내 API Key가 필요한가요?',
      a: 'BYOK입니다. Gemini, OpenAI, Claude, DeepSeek 등을 지원하며 확장은 모델 호출에 토큰 수수료를 붙이지 않습니다.',
    },
    {
      q: '9. 월간·연간 해지는?',
      a: '영수증 메일의 Creem 고객 포털에서 다음 갱신을 취소하면 됩니다. 사전 승인은 필요 없습니다. 이미 낸 기간이 끝날 때까지 사용 가능. 평생은 갱신 없음. 지원: support@oinchain.com.',
    },
  ],
};
