"use client";

import { createContext, useContext, useEffect, useState } from "react";

export interface ConsentState {
  ads: boolean;
  /** Explicit opt-in decided at the point of submission, not stored here. */
  decided: boolean;
}

const STORAGE_KEY = "legislatives2026-consent";
const CONSENT_VERSION = 1;

const DEFAULT_STATE: ConsentState = { ads: false, decided: false };

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function pushConsentUpdate(ads: boolean) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.gtag =
    window.gtag ??
    function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    };
  window.gtag("consent", "update", {
    ad_storage: ads ? "granted" : "denied",
    ad_user_data: ads ? "granted" : "denied",
    ad_personalization: ads ? "granted" : "denied",
    analytics_storage: "denied",
  });
}

const ConsentContext = createContext<{
  state: ConsentState;
  acceptAds: () => void;
  rejectAds: () => void;
  resetConsent: () => void;
} | null>(null);

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ConsentState>(DEFAULT_STATE);

  useEffect(() => {
    // Consent Mode default: everything denied until the visitor decides.
    pushConsentUpdate(false);
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as { version: number; ads: boolean };
        if (parsed.version === CONSENT_VERSION) {
          setState({ ads: parsed.ads, decided: true });
          pushConsentUpdate(parsed.ads);
        }
      }
    } catch {
      // Corrupt value — treat as undecided.
    }
  }, []);

  function persist(ads: boolean) {
    setState({ ads, decided: true });
    pushConsentUpdate(ads);
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ version: CONSENT_VERSION, ads }),
    );
  }

  function resetConsent() {
    window.localStorage.removeItem(STORAGE_KEY);
    setState(DEFAULT_STATE);
    pushConsentUpdate(false);
  }

  return (
    <ConsentContext.Provider
      value={{
        state,
        acceptAds: () => persist(true),
        rejectAds: () => persist(false),
        resetConsent,
      }}
    >
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used within ConsentProvider");
  return ctx;
}
