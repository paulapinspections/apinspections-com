import type { Metadata } from "next";
import { siteConfig } from "@/site/config";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCallButton } from "@/components/layout/FloatingCallButton";
import { AnnouncementBanner } from "@/components/layout/AnnouncementBanner";
import { InspectForgeWidget } from "@/components/layout/InspectForgeWidget";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.businessName} - ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: `Professional home inspection services in ${siteConfig.city}, ${siteConfig.state}. Licensed, qualified, and thorough inspections with ${siteConfig.inspectionReportSameDay ? "same-day" : "fast"} reports.`,
  keywords: [
    ...siteConfig.seoKeywords,
    `${siteConfig.city} ${siteConfig.state} home inspector`,
    `${siteConfig.city} home inspection`,
    ...siteConfig.serviceArea.map((area) => `home inspector ${area}`),
  ],
  authors: [{ name: siteConfig.businessName }],
  creator: siteConfig.businessName,
  publisher: siteConfig.businessName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    title: siteConfig.businessName,
    description: `Professional home inspection services in ${siteConfig.city}, ${siteConfig.state}`,
    siteName: siteConfig.businessName,
    images: [
      {
        url: siteConfig.images.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.businessName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.businessName,
    description: `Professional home inspection services in ${siteConfig.city}, ${siteConfig.state}`,
    images: [siteConfig.images.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AnnouncementBanner />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingCallButton />
        <InspectForgeWidget />
      </body>
    </html>
  );
}
