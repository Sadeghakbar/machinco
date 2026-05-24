import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/de", permanent: true },
      { source: "/en/index.html", destination: "/en", permanent: true },
      { source: "/maschinen.html", destination: "/de/machines", permanent: true },
      { source: "/en/machines.html", destination: "/en/machines", permanent: true },
      { source: "/kontakt.html", destination: "/de/contact", permanent: true },
      { source: "/en/contact.html", destination: "/en/contact", permanent: true },
      { source: "/ratgeber.html", destination: "/de/blog", permanent: true },
      { source: "/en/blog.html", destination: "/en/blog", permanent: true },
      { source: "/ueber-uns.html", destination: "/de/about", permanent: true },
      { source: "/en/about.html", destination: "/en/about", permanent: true },
      { source: "/impressum.html", destination: "/de/imprint", permanent: true },
      { source: "/en/imprint.html", destination: "/en/imprint", permanent: true },
      { source: "/datenschutz.html", destination: "/de/privacy", permanent: true },
      { source: "/en/privacy-policy.html", destination: "/en/privacy", permanent: true },
      {
        source: "/maschinen-bandschleifmaschinen.html",
        destination: "/de/machines/belt-grinding",
        permanent: true
      },
      {
        source: "/en/belt-grinding-machines.html",
        destination: "/en/machines/belt-grinding",
        permanent: true
      },
      {
        source: "/maschinen-flachschleifmaschinen.html",
        destination: "/de/machines/surface-grinding",
        permanent: true
      },
      {
        source: "/en/surface-grinding-machines.html",
        destination: "/en/machines/surface-grinding",
        permanent: true
      },
      {
        source: "/maschinen-entgratmaschinen.html",
        destination: "/de/machines/deburring",
        permanent: true
      },
      {
        source: "/en/deburring-machines.html",
        destination: "/en/machines/deburring",
        permanent: true
      },
      {
        source: "/ratgeber-maschinenwahl.html",
        destination: "/de/blog/machine-selection",
        permanent: true
      },
      {
        source: "/en/blog-machine-selection.html",
        destination: "/en/blog/machine-selection",
        permanent: true
      },
      {
        source: "/ratgeber-kosten-industriemaschinen.html",
        destination: "/de/blog/industrial-machine-costs",
        permanent: true
      },
      {
        source: "/en/blog-industrial-machine-costs.html",
        destination: "/en/blog/industrial-machine-costs",
        permanent: true
      },
      {
        source: "/ratgeber-schleifmaschine-auswahl.html",
        destination: "/de/blog/grinding-machine-selection-tips",
        permanent: true
      },
      {
        source: "/en/blog-grinding-machine-selection-tips.html",
        destination: "/en/blog/grinding-machine-selection-tips",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
