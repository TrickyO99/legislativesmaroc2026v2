"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Locale } from "./types";
import { DICT } from "./dictionary";

const STORAGE_KEY = "legislatives2026-locale";

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
} | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "fr" || stored === "ar" || stored === "en") setLocaleState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  function setLocale(l: Locale) {
    setLocaleState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <div
        dir={locale === "ar" ? "rtl" : "ltr"}
        className="flex min-h-full flex-1 flex-col"
      >
        {children}
      </div>
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

export function useDict() {
  const { locale } = useLocale();
  return DICT[locale];
}
