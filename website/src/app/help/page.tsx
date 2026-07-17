'use client';

import { HelpShell } from '@/components/help/HelpShell';

/** Help center index — catalog + search; deep links live at /help/[slug] */
export default function HelpPage() {
  return <HelpShell activeSlug={null} />;
}
