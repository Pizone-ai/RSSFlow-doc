'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * 隐私政策旧版本重定向组件
 * 将 /privacy/zh 重定向到新版本 /privacy
 */
export default function PrivacyZhRedirect() {
  const router = useRouter();

  useEffect(() => {
    // 立即执行重定向
    router.replace('/privacy');
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-slate-950">
      <div className="text-center animate-pulse">
        <p className="text-lg font-medium text-slate-600 dark:text-slate-400">
          正在为您载入最新版本的隐私政策...
        </p>
        <p className="mt-2 text-sm text-slate-400 dark:text-slate-500">
          即将跳转到 /privacy
        </p>
      </div>
    </div>
  );
}
