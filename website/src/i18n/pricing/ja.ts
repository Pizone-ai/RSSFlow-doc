import type { PricingCopy } from './types';

export const pricingJa: PricingCopy = {
  badge: 'シンプルで透明な料金 · 情報インサイトを解放',
  title: 'あなたに合うプランを選ぶ',
  titleGradient: 'RSSFlow Pro',
  desc: '有料は無料版にないクォータとライセンスだけです。',
  checkoutError: '決済セッションを作成できません。決済事業者の審査完了までお待ちください。',
  checkoutPaused:
    '決済は事業者審査中のため、本番購入はまだ開いていません。料金は確定です。承認後に購入できます。',
  checkoutPausedButton: 'まもなく購入開始',
  billingCycle: {
    annual: '年額（17%お得 · 新規 Skill 2つ）',
    lifetime: '買い切り（サイト装飾 + ソフト VIP）',
    monthly: '月額',
  },
  popular: '人気 · 1対1の新規 Skill',
  bestValue: '買い切り · サイト装飾 + VIP',
  plans: {
    free: {
      name: 'スターター（無料）',
      price: '$0',
      period: '永久無料',
      desc: 'サイドバー RSS：フィード、Flow、没入リーダー。AI は自分の Key。',
      button: '拡張機能をインストール',
      features: [
        'RSS / Atom、OPML 取り込み、SnagFlow 取り込み',
        'ローカルライブラリ、没入リーダー、Flow、グラフ',
        '専門家コマンド 3、定期タスク最大 2',
        'BYOK で要約とチャット',
      ],
    },
    annual: {
      name: 'Pro 年額',
      price: '$50',
      period: '/ 年（約 $4.17/月）',
      desc: '継続利用向け。月額より約 17% お得',
      button: '年額 Pro を開始',
      features: ['月額の全クォータを含む', 'ワークフロー向けにゼロから作る新規 Skill 2つ（既存コマンドの改変ではない）'],
    },
    lifetime: {
      name: 'Pro 買い切り',
      price: '$100',
      period: '一回払い · 永続',
      desc: '月額 + 年額に加え、サイト装飾とソフト VIP',
      button: '買い切りライセンスを取得',
      features: [
        '月額と年額の全特典',
        'コンテンツサイトのスタイルを個別にカスタム',
        'oinchain ブランドの今後のソフトに VIP/Pro を申請（手動付与、キャッシュバックなし）',
        'アクティベーションコードは贈呈可',
      ],
    },
    monthly: {
      name: 'Pro 月額',
      price: '$5',
      period: '/ 月',
      desc: '月ごと。次期の更新はいつでもキャンセル可',
      button: '月額を開始',
      features: [
        '専門家コマンド 23（無料は 3）',
        '定期タスク無制限（無料は最大 2）',
        'MCP ブリッジ',
        '最大 3 台までライセンス',
        'Creem ポータルで解約',
      ],
    },
  },
  guarantees: [
    {
      icon: 'Lock',
      title: '即時配信と有効化',
      desc: 'ACT-XXXX-XXXX-XXXX を発行、またはログイン中のアカウントに権利を書き込みます',
    },
    {
      icon: 'Laptop',
      title: '最大 3 台',
      desc: '機種変更時は設定で解除。フィードライブラリは各端末のローカルに残ります。',
    },
    {
      icon: 'Receipt',
      title: 'グローバル税務と請求書',
      desc: 'Creem.io（MoR）が VAT / 売上税の適法請求書を発行します',
    },
  ],
  tableSection: {
    badge: '主な違い',
    title: '何に対して支払うか',
    desc: 'クォータとライセンスのみ。無料版にある機能は対象外。',
    lifetimeBadge: 'VIP · 最もお得',
    cols: {
      feature: '機能と権利',
      free: '無料スターター',
      monthly: 'Pro 月額 ($5/月)',
      annual: 'Pro 年額 ($50/年)',
      lifetime: 'Pro 買い切り ($100)',
    },
    categories: [
      {
        categoryName: 'クォータ',
        items: [
          { name: '専門家コマンド', free: '3', monthly: '23', annual: '23', lifetime: '23' },
          { name: '定期タスク', free: '最大 2', monthly: '無制限', annual: '無制限', lifetime: '無制限' },
          { name: 'MCP ブリッジ', free: false, monthly: true, annual: true, lifetime: true },
          { name: 'ライセンス端末', free: 'このブラウザ', monthly: '最大 3', annual: '最大 3', lifetime: '最大 3' },
        ],
      },
      {
        categoryName: 'プラン間',
        items: [
          { name: '1対1の新規 Skill ×2', free: false, monthly: false, annual: true, lifetime: true },
          { name: 'サイトのスタイルカスタム', free: false, monthly: false, annual: false, lifetime: true },
          { name: '今後の oinchain ソフト VIP', free: false, monthly: false, annual: false, lifetime: true },
        ],
      },
    ],
  },
  faqTitle: 'よくある質問 (FAQ)',
  faqs: [
    {
      q: '1. 無料と Pro のコマンド・定期タスクの違いは？',
      a: '無料は専門家コマンド 3（Ideator、Market Brief、Tech Daily）と定期タスク最大 2。Pro は内蔵 23 コマンドと、単体 / 直列チェーン / 並列集約の無制限タスク。フィードは端末ローカル。ライセンスは全文をクラウド同期しません。',
    },
    {
      q: '2. 年額の新規 Skill 2つはどう受け取りますか？',
      a: '年額（買い切りにも含む）は、既存コマンドの改変ではなく、ワークフロー向けにゼロから作る Skill 2つです。購入後 support@oinchain.com に用途を送ってください。',
    },
    {
      q: '3. 買い切りのコンテンツサイトとソフト VIP とは？',
      a: '買い切りは年額の全特典に加え、スタイルカスタム可能なコンテンツサイトと、oinchain ブランド今後のソフトへの VIP/Pro 申請権（手動ライセンス、キャッシュバックや紹介報酬なし）。購入後 support@oinchain.com へ。',
    },
    {
      q: '4. MCP ブリッジ（Model Context Protocol）とは？',
      a: 'MCP ブリッジは、RSSFlow に蓄積したローカル RSS と AI 要約を、Cursor、Claude Desktop、ローカル Agent などの外部 AI が直接読めるようにします。コピー不要です。',
    },
    {
      q: '5. 購入後どう有効化しますか？',
      a: 'ゲスト購入は ACT-XXXX-XXXX-XXXX（4桁×3）を拡張のオプションに貼ります。購入時に同じアカウントでログインしていれば、拡張で同じアカウントに入ると権利が同期されます。',
    },
    {
      q: '6. 何台まで？機種変更は？',
      a: 'Pro は同時 3 台まで。ログインユーザーは設定で旧端末を解除できます。各 PC の購読と記事はローカルのまま、自動では全文同期しません。',
    },
    {
      q: '7. 返金ポリシーは？',
      a: '即時配信のデジタルライセンスのため、発行または有効化後は原則返金しません。二重課金や未配信はサポートで確認します。',
    },
    {
      q: '8. AI 要約とチャットに自分の API Key が必要ですか？',
      a: 'BYOK です。Gemini、OpenAI、Claude、DeepSeek などに対応。拡張はあなたのモデル呼び出しにトークン上乗せしません。',
    },
    {
      q: '9. 月額・年額の解約は？',
      a: 'レシートメールの Creem カスタマーポータルから次期更新をキャンセルできます。承認は不要。支払済み期間の終わりまで使えます。買い切りに更新はありません。サポート：support@oinchain.com。',
    },
  ],
};
