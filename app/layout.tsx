import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import JsonLd from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Romanian Net Salary Calculator — Gross to Net Pay 2026",
    template: "%s | Romanian Net Salary Calculator",
  },
  description:
    "Free Romanian net salary calculator. Convert gross monthly pay to net take-home with full CAS, CASS, and income tax breakdown for 2026.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: "Romanian Net Salary Calculator — Gross to Net Pay 2026",
    description:
      "Free Romanian net salary calculator. Convert gross monthly pay to net take-home with full CAS, CASS, and income tax breakdown for 2026.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: SITE.name }],
  },
  icons: {
    icon: "/favicon.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Romanian Net Salary Calculator — Gross to Net Pay 2026",
    description:
      "Free Romanian net salary calculator. Convert gross monthly pay to net take-home with full CAS, CASS, and income tax breakdown for 2026.",
    images: ["/og-image.png"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION }
      : undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} data-scroll-behavior="smooth">
      <body className="flex min-h-full flex-col font-sans antialiased">
        <JsonLd data={organizationSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
