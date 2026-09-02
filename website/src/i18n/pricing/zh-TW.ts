import type { PricingCopy } from './types';

export const pricingZhTW: PricingCopy = {
  badge: '簡單透明的專業定價 · 釋放資訊洞察力',
  title: '選擇適合你的',
  titleGradient: 'RSSFlow Pro 進階方案',
  desc: '付費只買相對免費版多出來的配額與授權。',
  checkoutError: '暫時無法建立付款工作階段。正式收款需支付機構審核通過。',
  checkoutPaused: '支付通道正在接受支付機構審核，暫未開放正式購買。價格與方案如下，審核通過後即可下單。',
  checkoutPausedButton: '即將開放購買',
  billingCycle: {
    annual: '按年訂閱 (省 17% · 贈全新 Skill)',
    lifetime: '終身買斷 (內容站定製 + 軟體 VIP)',
    monthly: '按月訂閱',
  },
  popular: '熱門 · 一對一全新 Skill',
  bestValue: '終身 · 內容站定製 + 軟體 VIP',
  plans: {
    free: {
      name: '基礎版 (Free)',
      price: '$0',
      period: '永久免費',
      desc: '側邊欄 RSS 閱讀：訂閱、Flow、沉浸閱讀；AI 需自備 Key',
      button: '免費安裝擴充功能',
      features: [
        'RSS / Atom、OPML 匯入、SnagFlow 匯入',
        '本機閱讀庫、沉浸閱讀、Flow、圖譜',
        '3 條專家指令，最多 2 個定時任務',
        '自備 API Key 使用摘要與對話',
      ],
    },
    annual: {
      name: 'Pro 年度訂閱',
      price: '$50',
      period: '/ 年 (折合 $4.17/月)',
      desc: '適合長期使用，比月付大約省 17%',
      button: '立即開通 Pro 年度版',
      features: ['含月付全部 Pro 配額', '一對一量身定製 2 個全新 Skill（不是改現成指令）'],
    },
    lifetime: {
      name: 'Pro 終身買斷版',
      price: '$100',
      period: '一次性買斷 · 終身享有',
      desc: '含月付與年付全部權益，另加內容站與軟體 VIP',
      button: '取得終身授權',
      features: [
        '含月付 + 年付全部權益',
        '內容站點可專門定製風格',
        'oinchain 品牌後續軟體產品可申請 VIP/Pro 授權（人工開通，無現金返利）',
        '啟用碼可贈送',
      ],
    },
    monthly: {
      name: 'Pro 月度訂閱',
      price: '$5',
      period: '/ 月',
      desc: '按月付費，可隨時取消下期',
      button: '開通月度訂閱',
      features: [
        '全部 23 條專家指令（免費 3 條）',
        '不限數量定時任務（免費最多 2 個）',
        'MCP 橋接',
        '授權最多 3 台裝置',
        '可在 Creem 入口網站取消續訂',
      ],
    },
  },
  guarantees: [
    {
      icon: 'Lock',
      title: '即時交付與秒級生效',
      desc: '付款完成後產生啟用碼（ACT-XXXX-XXXX-XXXX），或寫入已登入帳號',
    },
    {
      icon: 'Laptop',
      title: '最多 3 台裝置授權',
      desc: '登入後可在選項頁解綁換機；各裝置閱讀庫仍預設本機儲存',
    },
    {
      icon: 'Receipt',
      title: '全球合規與安全支付',
      desc: '由 Creem.io (MoR) 處理全球稅務合規並提供官方電子發票',
    },
  ],
  tableSection: {
    badge: '核心差異對比',
    title: '和免費版差在哪',
    desc: '只對比配額與授權。',
    lifetimeBadge: '最強權益 · 超值買斷',
    cols: {
      feature: '核心特性與權益項',
      free: '免費基礎版',
      monthly: 'Pro 月度版 ($5/月)',
      annual: 'Pro 年度版 ($50/年)',
      lifetime: 'Pro 終身版 ($100 買斷)',
    },
    categories: [
      {
        categoryName: '配額',
        items: [
          { name: '專家指令', free: '3 條', monthly: '23 條', annual: '23 條', lifetime: '23 條' },
          { name: '定時任務', free: '最多 2 個', monthly: '不限', annual: '不限', lifetime: '不限' },
          { name: 'MCP 橋接', free: false, monthly: true, annual: true, lifetime: true },
          { name: '授權裝置', free: '本機', monthly: '最多 3 台', annual: '最多 3 台', lifetime: '最多 3 台' },
        ],
      },
      {
        categoryName: '方案之間',
        items: [
          { name: '一對一全新 Skill ×2', free: false, monthly: false, annual: true, lifetime: true },
          { name: '內容站定製風格', free: false, monthly: false, annual: false, lifetime: true },
          { name: '後續軟體 VIP 授權', free: false, monthly: false, annual: false, lifetime: true },
        ],
      },
    ],
  },
  faqTitle: '常見問題解答 (FAQ)',
  faqs: [
    {
      q: '1. 免費版與 Pro 版在快捷指令和定時任務上有何具體限制？',
      a: '免費版可使用 3 條專家指令（創意構思、市場簡報、科技日報），最多建立並啟用 2 個定時任務。Pro 解鎖全部 23 條內建專家指令，定時任務數量不限，支援單指令、串列鏈式與並行彙總。閱讀庫始終預設存在本機，不隨授權做全文雲端同步。',
    },
    {
      q: '2. 年付附贈的 2 個全新 Skill 如何兌現？',
      a: '年付（終身亦包含此項）提供一對一量身定製：依你的工作流程從零編寫 2 個全新 Skill，而不是改現成快捷指令。購買後寄信到 support@oinchain.com 說明場景即可。',
    },
    {
      q: '3. 終身版的內容站點與後續產品 VIP 是什麼？',
      a: '終身含年付全部權益，另提供可定製風格的內容站點，以及對作者以 oinchain 品牌後續發布的軟體產品申請 VIP/Pro 授權（人工開通授權，不含現金返利或推薦分成）。請購買後聯繫 support@oinchain.com。',
    },
    {
      q: '4. 什麼是 MCP 協定橋接 (Model Context Protocol)？',
      a: 'MCP 橋接允許你將 RSSFlow 本機沉澱的 RSS 資訊與 AI 摘要上下文，直接暴露給外部 AI 客戶端（如 Cursor、Claude Desktop、本機終端 Agent 等）讀取和調度，無需手動複製貼上即可讓外部 AI 工具基於你的訂閱庫進行深度工作。',
    },
    {
      q: '5. 購買後如何啟用 RSSFlow Pro？',
      a: '訪客購買會產生啟用碼 ACT-XXXX-XXXX-XXXX（三組四位字元），在擴充功能選項頁輸入即可。若購買時已登入同一帳號，擴充功能登入後會拉取授權。',
    },
    {
      q: '6. 授權支援在幾台電腦上使用？如何更換裝置？',
      a: '每個 Pro 授權最多同時在 3 台裝置上使用。換機時，已登入使用者可在擴充功能設定裡解綁舊裝置。各電腦上的訂閱與文章仍保存在本機，不會自動整庫雲端同步。',
    },
    {
      q: '7. 關於退款政策與數位商品說明？',
      a: '由於 RSSFlow Pro 屬於即時交付並生效的數位虛擬商品與軟體授權碼（License Key），一旦完成啟用或發放，原則上不支援無理由退款。若遇到重複扣費、支付異常或系統未交付啟用碼等技術問題，請在訂單產生後及時聯繫官方技術支援人工核驗處理。',
    },
    {
      q: '8. AI 提煉與對話功能需要額外設定 API Key 嗎？',
      a: 'RSSFlow 支援使用者自帶 API Key（BYOK），相容 Gemini、OpenAI、Claude、DeepSeek 等。擴充功能不對你的模型呼叫加收 Token 費用。',
    },
    {
      q: '9. 如何取消月付或年付訂閱？',
      a: '在 Creem 發給你的收據郵件中開啟客戶入口網站，使用購買信箱登入即可取消下一期，無需事先批准。取消後當前已付週期內仍可使用。終身買斷無續費。客服：support@oinchain.com。',
    },
  ],
};
