import { imageAlts, siteImages } from "@/lib/site-images";

export const siteConfig = {
  name: "Tromso Shore Excursions",
  url: "https://tromsoshoreexcursions.com",
  locale: "en_GB",
  portName: "Tromsø",
  portGuidePath: "/tromso-port-guide",
  oneDayPath: "/one-day-in-tromso",
  worthVisitingPath: "/is-tromso-worth-visiting",
  defaultDescription:
    "Independent Tromsø cruise port guides and Arctic shore excursion planning for passengers visiting Northern Lights tours, fjord photography, Sami culture, reindeer experiences, and return-to-ship friendly advice.",
  defaultOgImage: siteImages.hero,
  defaultOgImageAlt: imageAlts.hero,
  copyrightEntity: "Tromso Shore Excursions",
  shoreExcursionsPath: "/excursions",
} as const;
