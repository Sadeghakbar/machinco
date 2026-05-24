import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.machinco.de"),
  title: {
    default: "Machinco GmbH",
    template: "%s | Machinco GmbH"
  },
  description: "Industrial machine solutions"
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
