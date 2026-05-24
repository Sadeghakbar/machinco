import type { Metadata } from "next";
import "./globals.css";
import "@/styles/legacy-bridge.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.machinco.de"),
  title: "Machinco GmbH",
  description: "Industrial machine solutions",
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
        <link href="/css/animate.min.css" rel="stylesheet" />
        <link href="/css/prettyphoto.css" rel="stylesheet" />
        <link href="/css/styles.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
