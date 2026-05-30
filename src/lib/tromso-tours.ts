import { imageAlts, siteImages } from "@/lib/site-images";

export type TromsoTourCard = {
  href: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  accent: "blue" | "red";
};

export const tromsoTourCards: readonly TromsoTourCard[] = [
  {
    href: "/excursions/aurora-chase-small-group",
    image: siteImages.auroraChaseTour,
    imageAlt: imageAlts.auroraChaseCard,
    title: "Aurora Chase Small Group Experience",
    description:
      "Premium headline aurora tour: Northern Lights chase with small group or private options, photography-focused guiding, expert local guides, winter Arctic scenery, and weather-dependent visibility for aurora seekers.",
    accent: "red",
  },
  {
    href: "/excursions/fjord-photo-tour",
    image: siteImages.fjordPhotoTour,
    imageAlt: imageAlts.fjordPhotoCard,
    title: "Tromsø Fjord Photo Tour",
    description:
      "Main daytime scenic tour: Arctic fjords, mountains, beaches, photo stops, wildlife possibilities, scenic coastal landscapes, and photography-friendly pacing for cruise passengers and land visitors.",
    accent: "blue",
  },
  {
    href: "/excursions/reindeer-sami-experience",
    image: siteImages.reindeerSamiTour,
    imageAlt: imageAlts.reindeerSamiCard,
    title: "Reindeer Visit and Sami Experience",
    description:
      "Culture and wildlife experience: reindeer visit, Sami culture, Arctic traditions, local food where available, Lyngen Alps scenery where relevant, family-friendly winter and Arctic appeal.",
    accent: "red",
  },
  {
    href: "/excursions/private-aurora-chase",
    image: siteImages.privateAuroraTour,
    imageAlt: imageAlts.privateAuroraCard,
    title: "Private Aurora Chase",
    description:
      "Premium private option: private Northern Lights search, flexible routing, photography support, local guide, ideal for couples, families, and small groups seeking an exclusive aurora chase.",
    accent: "blue",
  },
  {
    href: "/excursions/private-fjord-photo-experience",
    image: siteImages.privateFjordPhotoTour,
    imageAlt: imageAlts.privateFjordPhotoCard,
    title: "Private Tromsø Fjord and Photo Experience",
    description:
      "Premium scenic daytime option: private guide, Arctic fjord scenery, flexible stops, photography focus, best for travellers wanting a quieter fjord and photo experience.",
    accent: "red",
  },
] as const;

export const tromsoTourListItems = tromsoTourCards.map((tour) => ({
  name: tour.title,
  description: tour.description,
}));
