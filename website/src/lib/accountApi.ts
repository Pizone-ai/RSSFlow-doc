export const ACCOUNT_API_BASE =
  process.env.NEXT_PUBLIC_ACCOUNT_API_URL || 'https://account.rssflow.oinchain.com';

export type CreemPlan = 'monthly' | 'annual' | 'lifetime';

export type CreemCheckoutStatus = {
  status: 'pending' | 'completed' | 'renewed' | 'canceled' | 'refunded';
  checkoutId: string;
  plan?: string;
  activationCode?: string;
  boundToUser?: boolean;
  message?: string;
};

function readErrorMessage(payload: unknown, fallback: string): string {
  if (payload && typeof payload === 'object' && 'message' in payload) {
    const message = payload.message;
    if (typeof message === 'string' && message.trim()) return message;
  }
  return fallback;
}

export async function createCreemCheckout(plan: CreemPlan): Promise<{ checkoutUrl: string; checkoutId: string }> {
  const response = await fetch(`${ACCOUNT_API_BASE}/api/checkout/creem`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ plan }),
  });
  const payload: unknown = await response.json().catch(() => null);
  const record = payload && typeof payload === 'object' ? payload : {};
  const checkoutUrl =
    'checkoutUrl' in record && typeof record.checkoutUrl === 'string' ? record.checkoutUrl : '';
  const checkoutId =
    'checkoutId' in record && typeof record.checkoutId === 'string' ? record.checkoutId : '';
  if (!response.ok || !checkoutUrl) {
    throw new Error(readErrorMessage(payload, 'Failed to create checkout session'));
  }
  return { checkoutUrl, checkoutId };
}

export async function getCreemCheckoutStatus(checkoutId: string): Promise<CreemCheckoutStatus> {
  const response = await fetch(
    `${ACCOUNT_API_BASE}/api/checkout/creem/status?checkoutId=${encodeURIComponent(checkoutId)}`
  );
  const payload: unknown = await response.json().catch(() => null);
  if (!response.ok || !payload || typeof payload !== 'object') {
    throw new Error(readErrorMessage(payload, 'Failed to load checkout status'));
  }
  const status = 'status' in payload && typeof payload.status === 'string' ? payload.status : 'pending';
  const activationCode =
    'activationCode' in payload && typeof payload.activationCode === 'string'
      ? payload.activationCode
      : undefined;
  const plan = 'plan' in payload && typeof payload.plan === 'string' ? payload.plan : undefined;
  const boundToUser =
    'boundToUser' in payload && typeof payload.boundToUser === 'boolean' ? payload.boundToUser : undefined;
  return {
    status: status as CreemCheckoutStatus['status'],
    checkoutId,
    plan,
    activationCode,
    boundToUser,
  };
}
