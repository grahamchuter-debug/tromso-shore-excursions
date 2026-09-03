import { imageAlts, siteImages } from "@/lib/site-images";

export const siteConfig = {
  name: "Tromso Shore Excursions",
  url: "https://tromsoshoreexcursions.com",
  locale: "en_GB",
  portName: "Tromsø",
  tagline: "City daylight, evening aurora when the call allows, or cultural Arctic time",
  defaultDescription:
    "Independent Tromsø cruise-port planning: Arctic city and fjord daylight, Northern Lights when darkness and ship timing allow, reindeer and Sami culture, and published ship schedules for your hours ashore.",
  defaultOgImage: siteImages.hero,
  defaultOgImageAlt: imageAlts.hero,
  copyrightEntity: "Tromso Shore Excursions",
  shoreExcursionsPath: "/excursions",
  plannerPath: "/one-day-in-tromso",
  schedulePath: "/ship-schedule",
  portGuidePath: "/tromso-port-guide",
  oneDayPath: "/one-day-in-tromso",
  worthVisitingPath: "/is-tromso-worth-visiting",
  nationalAuthorityUrl: "https://norwayshoreexcursions.com",
  contactEmail: "hello@tromsoshoreexcursions.com",
  contactEmailVerified: true,
} as const;
