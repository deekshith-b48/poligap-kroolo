'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface SsoCallbackComponentProps {
  authUrl: string;
}

export default function SsoCallbackComponent({ authUrl }: SsoCallbackComponentProps) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleCallback = async () => {
    try {
      // Get the current URL parameters
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      const state = urlParams.get('state');

      if (code && state) {
        // Process the SSO callback
        // This will be handled by PropelAuth automatically
        router.push('/my-tasks');
      } else {
        router.push('/login?error=sso_callback_failed');
      }
    } catch (error) {
      console.error('SSO callback error:', error);
      router.push('/login?error=sso_callback_failed');
    }
  };

  useEffect(() => {
    if (isClient) {
      handleCallback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClient]);

  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Processing SSO callback...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Completing authentication...</p>
      </div>
    </div>
  );
}
