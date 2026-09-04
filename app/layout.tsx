import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Arabic } from "next/font/google";
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

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "Législatives Maroc 2026 — Trouvez le parti qui vous correspond",
  description:
    "Un outil citoyen et indépendant pour comparer vos opinions à celles des partis politiques marocains avant les élections législatives de 2026.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansArabic.variable} h-full antialiased`}
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
        </ConsentProvider>
      </body>
    </html>
  );
}
