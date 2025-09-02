"use client";

import dynamicImport from 'next/dynamic';
import React from 'react';

// Dynamically import the SSO callback component to prevent SSR
const SsoCallbackComponent = dynamicImport(() => import('./SsoCallbackComponent'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-screen">
      <p className="text-gray-600">Loading...</p>
    </div>
  )
});

// Force dynamic rendering for this page
export const dynamic = 'force-dynamic';

export default function SsoCallbackPage() {
  return <SsoCallbackComponent authUrl={process.env.NEXT_PUBLIC_REACT_APP_AUTH_URL || 'https://auth.propelauth.com'} />;
}