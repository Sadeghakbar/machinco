import type { Metadata } from "next";
import "./globals.css";
import "@/styles/legacy-bridge.css";
import { getBusinessJsonLd } from "@/content/business";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.machinco.de"),
  title: "Machinco GmbH – Gebrauchte Industriemaschinen: Handel & Export",
  description:
    "Machinco GmbH: Handel und Export gebrauchter CNC- und konventioneller Werkzeugmaschinen. Hauptstandort und Lager in Gablingen bei Augsburg.",
  openGraph: {
    siteName: "Machinco GmbH",
    type: "website",
    images: [{ url: "/projects/portfolio/p01.jpg" }]
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" }
    ],
    apple: "/apple-icon.png"
  }
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="de" data-scroll-behavior="smooth">
      <head>
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/font-awesome.min.css" rel="stylesheet" />
        <link href="/css/styles.css" rel="stylesheet" />
        <link href="/css/refinements.css" rel="stylesheet" />
        <link href="/css/projects.css" rel="stylesheet" />
        <link href="/css/brand.css" rel="stylesheet" />
      </head>
      <body>
        <script
          type="application/ld+json"
          // Primary business location (Gablingen) for search engines.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getBusinessJsonLd()) }}
        />
        {children}
      </body>
    </html>
  );
}
