"use client";

import { Toaster as SonnerToaster } from "sonner";

export function ToastProvider() {
  return <SonnerToaster richColors closeButton position="top-right" />;
}
