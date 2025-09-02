"use client";

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import the SSO callback component to prevent SSR
const SsoCallbackComponent = dynamic(() => import('./SsoCallbackComponent'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-screen">
      <p className="text-gray-600">Loading...</p>
    </div>
  )
});

export default function SsoCallbackPage() {
  return <SsoCallbackComponent />;
}