"use client";

import dynamicImport from 'next/dynamic';

// Dynamically import the client component to prevent SSR issues
const SsoLoginClient = dynamicImport(() => import('./SsoLoginClient'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-600">Loading...</p>
    </div>
  )
});

// Force dynamic rendering to prevent build-time issues
export const dynamic = 'force-dynamic';

export default function SsoLogin() {
  return <SsoLoginClient />;
}
