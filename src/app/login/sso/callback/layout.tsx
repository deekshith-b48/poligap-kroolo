"use client";

import type React from "react";
import { AuthProvider } from "@propelauth/react";

export default function SSO2Auth({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthWrapper>
          {children}
        </AuthWrapper>
      </body>
    </html>
  );
}

function AuthWrapper({ children }: { children: React.ReactNode }) {
  // Only initialize AuthProvider on the client side
  if (typeof window === 'undefined') {
    return <div>{children}</div>;
  }
  
  const authUrl = process.env.NEXT_PUBLIC_REACT_APP_AUTH_URL;
  
  // If no auth URL is available, render children without AuthProvider
  if (!authUrl) {
    return <div>{children}</div>;
  }
  
  return (
    <AuthProvider authUrl={authUrl}>
      {children}
    </AuthProvider>
  );
}
