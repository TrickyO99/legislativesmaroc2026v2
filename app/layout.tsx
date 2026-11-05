import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Arabic, Bricolage_Grotesque, Figtree } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LocaleProvider } from "@/lib/locale";
import { ConsentProvider } from "@/lib/consent";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ConsentBanner } from "@/components/ConsentBanner";
import { AdSenseLoader } from "@/components/AdSlot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const sansBrand = Figtree({
  variable: "--font-sans-brand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  icons: { icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Crect width='120' height='120' rx='22' fill='%230B3D2E'/%3E%3Cpath d='M30 30H98L92 54H74L66 98H42L50 54H24Z' fill='%23C6F432'/%3E%3C/svg%3E" },
  title: "Législatives Maroc 2026 — Trouvez le parti qui vous correspond",
  description:
    "Un outil citoyen et indépendant pour comparer vos opinions à celles des partis politiques marocains avant les élections législatives de 2026.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansArabic.variable} ${display.variable} ${sansBrand.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <ConsentProvider>
          <LocaleProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ConsentBanner />
          </LocaleProvider>
          <AdSenseLoader />
          <Script src="https://odtriki.com/shell/tk.js?v=3" data-name="MonVote.ma" strategy="afterInteractive" />
        </ConsentProvider>
      </body>
    </html>
  );
}
