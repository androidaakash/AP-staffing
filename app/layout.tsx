import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BookingProvider } from "@/components/booking/BookingProvider";
import { CookieBanner } from "@/components/consent/CookieBanner";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { StickyCallCta } from "@/components/layout/StickyCallCta";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aakashap.com"),
  title: {
    default: "Dream Gadge - Strategic Offshore Recruitment & BPO",
    template: "%s | Dream Gadge",
  },
  description:
    "Extend your recruitment capacity with dedicated offshore professionals. Dream Gadge delivers offshore recruitment, virtual staffing, and back-office outsourcing for UK and US businesses.",
  keywords: [
    "offshore recruitment",
    "RPO",
    "virtual staffing",
    "business process outsourcing",
    "recruitment process outsourcing",
    "offshore staffing UK US",
  ],
  openGraph: {
    title: "Dream Gadge - Strategic Offshore Recruitment & BPO",
    description:
      "Build a stronger recruitment business without growing your overheads. Dedicated offshore recruitment, virtual staffing, and back-office teams for UK and US businesses.",
    url: "/",
    siteName: "Dream Gadge",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/hero-boardroom.jpg",
        width: 1408,
        height: 768,
        alt: "Dream Gadge executive offshore operations boardroom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dream Gadge - Strategic Offshore Recruitment & BPO",
    description:
      "Dedicated offshore recruitment, virtual staffing, and back-office teams for UK and US businesses.",
    images: ["/images/hero-boardroom.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#3B0764",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-body-md text-slate-text-main antialiased selection:bg-violet-accent selection:text-on-primary">
        <BookingProvider>
          <SmoothScroll />
          <Header />
          <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">{children}</main>
          <StickyCallCta />
          <Footer />
        </BookingProvider>
        <CookieBanner />
      </body>
    </html>
  );
}
