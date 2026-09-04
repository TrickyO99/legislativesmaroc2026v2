"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import { useConsent } from "@/lib/consent";

const ADSENSE_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ?? "";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/**
 * Loads the AdSense script exactly once, and only after the visitor has
 * granted ad consent. Mount this once near the root (see app/layout.tsx).
 */
export function AdSenseLoader() {
  const { state } = useConsent();

  if (!state.ads || !ADSENSE_CLIENT_ID) return null;

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}

/** A single ad placement. Renders nothing until ad consent is granted. */
export function AdSlot({ slot, className }: { slot: string; className?: string }) {
  const { state } = useConsent();
  const pushed = useRef(false);

  useEffect(() => {
    if (!state.ads || pushed.current) return;
    try {
      window.adsbygoogle = window.adsbygoogle ?? [];
      window.adsbygoogle.push({});
      pushed.current = true;
    } catch {
      // AdSense script not ready yet — safe to ignore, nothing to retry.
    }
  }, [state.ads]);

  if (!state.ads || !ADSENSE_CLIENT_ID) return null;

  return (
    <ins
      className={`adsbygoogle block ${className ?? ""}`}
      style={{ display: "block" }}
      data-ad-client={ADSENSE_CLIENT_ID}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
