import type { ExcursionData } from "@/lib/excursion-types";
import { imageAlts, siteImages } from "@/lib/site-images";

const sharedRelatedLinks = [
  { label: "Tromsø port guide", href: "/tromso-port-guide" },
  { label: "One day in Tromsø", href: "/one-day-in-tromso" },
  { label: "Northern Lights Tromsø", href: "/northern-lights-tromso" },
  { label: "All excursions", href: "/excursions" },
] as const;

const sharedNotIncluded = [
  "Food and drinks unless stated by operator",
  "Personal purchases and optional upgrades",
  "Travel insurance and personal expenses",
  "Gratuities unless stated by operator",
] as const;

export const auroraChaseSmallGroupExcursion: ExcursionData = {
  slug: "aurora-chase-small-group",
  path: "/excursions/aurora-chase-small-group",
  title: "Aurora Chase",
  headline: "Aurora Chase Small Group Experience",
  lead: "Premium Northern Lights chase with small group or private options, photography-focused guiding, expert local guides, and winter Arctic scenery. Weather-dependent visibility.",
  metaTitle: "Aurora Chase Small Group Experience Tromsø | Northern Lights Tour",
  metaDescription:
    "Small group Northern Lights chase from Tromsø with photography-focused guiding, expert local aurora guides, and winter Arctic scenery. Best for aurora seekers.",
  heroImage: siteImages.auroraChaseTour,
  heroImageAlt: imageAlts.auroraChaseCard,
  heroBadge: "Premium aurora headline tour",
  summary: {
    duration: "Approx. 3 to 5 hours (evening)",
    meetingPoint:
      "Central Tromsø near cruise berths, harbour, or designated coach pickup",
    returnReassurance:
      "Evening departures timed for winter cruise overnights and land visitors",
    bestFor:
      "Aurora seekers wanting a photography-focused Northern Lights chase with expert local guides",
  },
  snapshotCards: [
    { label: "Activity level", value: "Easy to moderate" },
    { label: "Region", value: "Tromsø & surrounding fjords" },
    { label: "Season", value: "September to April, weather dependent" },
    { label: "Group size", value: "Small group or private options" },
  ],
  gallery: [
    { src: siteImages.hero, alt: imageAlts.hero },
    { src: siteImages.northernLights, alt: imageAlts.northernLights },
    { src: siteImages.northernLightsLauklines, alt: imageAlts.northernLightsLauklines },
    { src: siteImages.tromsoHarbour, alt: imageAlts.tromsoHarbour },
  ],
  highlights: [
    "Northern Lights chase away from city light pollution",
    "Small group or private options",
    "Photography-focused experience with aurora tips",
    "Expert local guides who read Arctic weather",
    "Winter Arctic scenery and coastal viewpoints",
    "Best for aurora seekers",
    "Weather-dependent visibility",
  ],
  description: [
    "The Aurora Chase Small Group Experience is Tromsø's premium headline tour for guests who travel to Arctic Norway primarily for the Northern Lights. Operators use local weather knowledge to route away from cloud cover toward darker viewpoints around Tromsø and the surrounding fjords.",
    "Small group sizing keeps the experience intimate and photography-friendly. Guides help with camera settings, tripod placement, and realistic expectations when aurora activity is low or clouds move in. This is not a guaranteed sighting tour, visibility depends on solar activity and Arctic weather.",
    "Evening departures suit winter cruise overnights in Tromsø and land visitors staying in the city. Pack warm layers, hat, gloves, and waterproof boots. Many operators provide thermal suits or hot drinks on winter chases.",
    "Compare with our Private Aurora Chase if you want flexible routing for couples, families, or small groups. Read the Northern Lights Tromsø guide and best Northern Lights tours comparison before booking.",
  ],
  included: [
    "Guided Northern Lights chase as described",
    "Transport from Tromsø meeting points",
    "Expert local aurora guide",
    "Photography guidance where offered",
  ],
  notIncluded: sharedNotIncluded,
  timingAdvice: [
    "Book early in peak aurora season, December to March fills quickly.",
    "Confirm meeting time on your voucher, winter darkness makes pier navigation harder.",
    "Allow buffer before ship departure on overnight calls, aurora chases run late.",
    "Pack camera, tripod, and spare batteries, cold drains power quickly.",
  ],
  faqs: [
    {
      question: "Can I see the Northern Lights on every aurora chase?",
      answer:
        "No. Aurora displays depend on solar activity and clear skies. Reputable operators chase weather but cannot guarantee sightings.",
    },
    {
      question: "Is this tour suitable for cruise passengers?",
      answer:
        "Yes on overnight winter calls or late departures. Daytime port calls cannot fit an evening aurora chase unless your ship stays overnight.",
    },
    {
      question: "What is the difference from Private Aurora Chase?",
      answer:
        "The small group tour shares transport and guide time with other guests. Private touring offers flexible routing and exclusive vehicle use.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Excursions", href: "/excursions" },
    { label: "Aurora Chase Small Group" },
  ],
  relatedLinks: sharedRelatedLinks,
  bookingHref: "/excursions",
  bookingLabel: "Explore this excursion",
  ctaTitle: "Compare Tromsø aurora chase options",
  ctaText:
    "Read the notes above, then compare small-group and private aurora pages. This site does not sell tickets. Aurora sightings are never guaranteed.",
};

export const fjordPhotoTourExcursion: ExcursionData = {
  slug: "fjord-photo-tour",
  path: "/excursions/fjord-photo-tour",
  title: "Fjord Photo Tour",
  headline: "Tromsø Fjord Photo Tour",
  lead: "Daytime Arctic fjord tour with mountains, beaches, photo stops, wildlife possibilities, and photography-friendly pacing for cruise passengers and land visitors.",
  metaTitle: "Tromsø Fjord Photo Tour | Arctic Fjord Shore Excursion",
  metaDescription:
    "Tromsø fjord photo tour with Arctic fjords, mountains, beaches, wildlife possibilities, and scenic coastal landscapes. Photography-friendly shore excursion.",
  heroImage: siteImages.fjordPhotoTour,
  heroImageAlt: imageAlts.fjordPhotoCard,
  heroBadge: "Main daytime scenic tour",
  summary: {
    duration: "Approx. 3 to 4 hours",
    meetingPoint: "Tromsø cruise pier or central harbour pickup",
    returnReassurance: "Paced for typical Tromsø cruise port calls with return buffer",
    bestFor:
      "Cruise passengers and photographers wanting Arctic fjord scenery without a long transfer",
  },
  snapshotCards: [
    { label: "Activity level", value: "Easy activity level" },
    { label: "Region", value: "Kvaløya & Tromsø coastal fjords" },
    { label: "Season", value: "Year-round" },
    { label: "Focus", value: "Photography & scenic coastal landscapes" },
  ],
  gallery: [
    { src: siteImages.kaldfjord, alt: imageAlts.kaldfjord },
    { src: siteImages.arcticCathedralBridge, alt: imageAlts.arcticCathedralBridge },
    { src: siteImages.tromsoHarbour, alt: imageAlts.tromsoHarbour },
    { src: siteImages.arcticCathedral, alt: imageAlts.arcticCathedral },
  ],
  highlights: [
    "Arctic fjords and mountain backdrops",
    "Beaches and coastal photo stops",
    "Wildlife possibilities including seabirds and marine mammals",
    "Scenic coastal landscapes on Kvaløya and surrounding areas",
    "Photography-friendly pacing with stop time",
    "Suitable for cruise passengers and land visitors",
  ],
  description: [
    "The Tromsø Fjord Photo Tour is the main daytime scenic option for cruise passengers who want Arctic coastal beauty without committing to a long inland drive. Routes typically cross the Tromsø Bridge toward Kvaløya and Kaldfjord, where steep mountains drop into cold blue water.",
    "Guides schedule deliberate photo stops at beaches, viewpoints, and harbour villages. Wildlife sightings are possible but never guaranteed, eagles, seabirds, and occasional marine mammals appear when conditions allow. Bring a camera with a versatile zoom lens.",
    "The tour fits the four-to-six-hour port window in our Cruise Smart Planner. Shorter calls may work if departures align tightly with your all-aboard time. Confirm exact return times on your voucher when multiple ships share Tromsø.",
    "For a quieter experience with flexible stops, compare the Private Tromsø Fjord and Photo Experience. Read our fjord tours Tromsø guide for SEO-focused planning on photography shore excursions.",
  ],
  included: [
    "Guided fjord touring as described",
    "Transport from Tromsø meeting points",
    "Photo stop time at scenic viewpoints",
    "Local guide commentary",
  ],
  notIncluded: sharedNotIncluded,
  timingAdvice: [
    "Match this tour to four or more hours ashore when possible.",
    "Disembark promptly on busy Arctic cruise days.",
    "Allow 45 minutes before all aboard for bridge traffic and weather delays.",
    "Summer daylight is long, winter days are short, dress for wind on coastal stops.",
  ],
  faqs: [
    {
      question: "How long is the Tromsø Fjord Photo Tour?",
      answer:
        "Most operators run three to four hours including transport, photo stops, and return to Tromsø cruise berths.",
    },
    {
      question: "Is this tour good for beginners with a phone camera?",
      answer:
        "Yes. Guides often help with composition and timing even if you are not using a DSLR.",
    },
    {
      question: "Will I see whales or eagles?",
      answer:
        "Wildlife is possible but not guaranteed. Fjord routes focus on scenery and photography stops first.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Excursions", href: "/excursions" },
    { label: "Tromsø Fjord Photo Tour" },
  ],
  relatedLinks: [
    ...sharedRelatedLinks,
    { label: "Fjord tours Tromsø", href: "/fjord-tours-tromso" },
  ],
  bookingHref: "/excursions",
  bookingLabel: "Explore this excursion",
  ctaTitle: "Compare Tromsø fjord photo options",
  ctaText:
    "Use these notes to judge fit for your hours ashore, then browse other Tromsø excursions. This site does not sell tickets.",
};

export const reindeerSamiExperienceExcursion: ExcursionData = {
  slug: "reindeer-sami-experience",
  path: "/excursions/reindeer-sami-experience",
  title: "Reindeer & Sami",
  headline: "Reindeer Visit and Sami Experience",
  lead: "Reindeer visit with Sami culture, Arctic traditions, local food where available, and Lyngen Alps scenery where relevant. Family-friendly winter and Arctic appeal.",
  metaTitle: "Reindeer Visit and Sami Experience Tromsø | Arctic Culture Tour",
  metaDescription:
    "Reindeer visit and Sami experience from Tromsø with Arctic traditions, local food, Lyngen Alps scenery, and family-friendly shore excursion timing.",
  heroImage: siteImages.reindeerSamiTour,
  heroImageAlt: imageAlts.reindeerSamiCard,
  heroBadge: "Culture & wildlife experience",
  summary: {
    duration: "Approx. 3 to 5 hours",
    meetingPoint: "Tromsø harbour or hotel pickup depending on operator",
    returnReassurance: "Structured returns for typical Tromsø port calls",
    bestFor:
      "Families and culture-focused travellers wanting reindeer and Sami heritage",
  },
  snapshotCards: [
    { label: "Activity level", value: "Easy activity level" },
    { label: "Region", value: "Tromsø region & Lyngen Alps where relevant" },
    { label: "Season", value: "Year-round, winter especially atmospheric" },
    { label: "Focus", value: "Reindeer, Sami culture & Arctic traditions" },
  ],
  gallery: [
    { src: siteImages.reindeer, alt: imageAlts.reindeer },
    { src: siteImages.samiCulture, alt: imageAlts.samiCulture },
    { src: siteImages.tromsoHarbour, alt: imageAlts.tromsoHarbour },
    { src: siteImages.kaldfjord, alt: imageAlts.kaldfjord },
  ],
  highlights: [
    "Reindeer visit and feeding where offered",
    "Sami culture and Arctic traditions",
    "Local food tastings where available",
    "Lyngen Alps and surrounding scenery on longer routes",
    "Family-friendly pacing",
    "Winter and Arctic appeal",
  ],
  description: [
    "The Reindeer Visit and Sami Experience introduces cruise passengers to indigenous Arctic heritage beyond the city skyline. Guests meet reindeer, learn about Sami traditions, and hear how herding culture persists in modern Troms region tourism.",
    "Some itineraries include local food such as bidos or other Arctic specialities where operators offer tastings. Routes toward the Lyngen Alps add dramatic mountain scenery when timing and season allow, though exact locations vary by operator and weather.",
    "This tour suits families and guests who want culture and wildlife without a late-night aurora chase. It pairs well with a morning fjord photo tour only on long port calls of six hours or more.",
    "Read our reindeer tours Tromsø guide for keyword-focused planning on Sami experiences and family Arctic tours from cruise ships.",
  ],
  included: [
    "Guided reindeer and Sami experience as described",
    "Transport from Tromsø meeting points unless stated otherwise",
    "Local guide or Sami host where offered",
    "Food tastings where included by operator",
  ],
  notIncluded: sharedNotIncluded,
  timingAdvice: [
    "Allow three to five hours including transfer to camp locations outside central Tromsø.",
    "Winter clothing is essential, camp areas are exposed and colder than the city.",
    "Confirm pickup location on your voucher, some tours depart from hotels rather than the pier.",
    "Keep 45 minutes before all aboard on cruise port days.",
  ],
  faqs: [
    {
      question: "Is the reindeer experience suitable for children?",
      answer:
        "Yes. Most operators welcome families and keep pacing gentle, confirm age policies when booking.",
    },
    {
      question: "Do I need to book Sami culture tours separately?",
      answer:
        "This combined experience covers reindeer and cultural storytelling in one itinerary on most departures.",
    },
    {
      question: "How far from Tromsø is the reindeer camp?",
      answer:
        "Transfer times vary from 30 to 90 minutes depending on operator and season. Confirm on your voucher.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Excursions", href: "/excursions" },
    { label: "Reindeer & Sami Experience" },
  ],
  relatedLinks: [
    ...sharedRelatedLinks,
    { label: "Reindeer tours Tromsø", href: "/reindeer-tours-tromso" },
  ],
  bookingHref: "/excursions",
  bookingLabel: "Explore this excursion",
  ctaTitle: "Compare Tromsø cultural experiences",
  ctaText:
    "Read the notes above, then compare other Tromsø options that fit your hours ashore. This site does not sell tickets.",
};

export const privateAuroraChaseExcursion: ExcursionData = {
  slug: "private-aurora-chase",
  path: "/excursions/private-aurora-chase",
  title: "Private Aurora",
  headline: "Private Aurora Chase",
  lead: "Private Northern Lights search with flexible routing, photography support, and local guide. Ideal for couples, families, and small groups.",
  metaTitle: "Private Aurora Chase Tromsø | Private Northern Lights Tour",
  metaDescription:
    "Private aurora chase from Tromsø with flexible routing, photography support, and expert local guide. Ideal for couples, families, and small groups.",
  heroImage: siteImages.privateAuroraTour,
  heroImageAlt: imageAlts.privateAuroraCard,
  heroBadge: "Premium private aurora option",
  summary: {
    duration: "Approx. 3 to 6 hours (evening)",
    meetingPoint: "Flexible pickup near Tromsø harbour or hotel",
    returnReassurance: "Private vehicle return timed to your booking window",
    bestFor:
      "Couples, families, and small groups wanting exclusive aurora routing",
  },
  snapshotCards: [
    { label: "Activity level", value: "Easy activity level" },
    { label: "Group size", value: "Private vehicle for your party" },
    { label: "Season", value: "September to April" },
    { label: "Focus", value: "Photography & flexible aurora routing" },
  ],
  gallery: [
    { src: siteImages.northernLightsLauklines, alt: imageAlts.northernLightsLauklines },
    { src: siteImages.northernLights, alt: imageAlts.northernLights },
    { src: siteImages.hero, alt: imageAlts.hero },
    { src: siteImages.tromsoCruiseHarbour, alt: imageAlts.tromsoCruiseHarbour },
  ],
  highlights: [
    "Private Northern Lights search",
    "Flexible routing based on weather",
    "Photography support from local guide",
    "Ideal for couples, families, and small groups",
    "Exclusive vehicle and itinerary control",
    "Weather-dependent visibility",
  ],
  description: [
    "The Private Aurora Chase removes shared-coach constraints so your guide can pivot toward clearer skies and darker viewpoints as weather shifts. This suits photographers, honeymooners, and families who want space to set up tripods without crowding.",
    "Flexible routing may cross fjords, coastal roads, or inland valleys depending on cloud forecasts. Guides still cannot guarantee aurora displays. Private touring mainly adds routing flexibility within the hours you book, not a higher sighting promise.",
    "Evening timing suits overnight cruise calls and land visitors. Compare with the Aurora Chase Small Group Experience if you prefer a lower per-person cost and social group atmosphere.",
    "Read best Northern Lights tours Tromsø for a side-by-side comparison of small group and private aurora options.",
  ],
  included: [
    "Private guided aurora chase",
    "Exclusive transport for your party",
    "Photography support where offered",
    "Local expert aurora guide",
  ],
  notIncluded: sharedNotIncluded,
  timingAdvice: [
    "Book private tours early in peak winter, vehicle availability is limited.",
    "Share your camera gear level with the operator so guides can plan stop lengths.",
    "Overnight ship calls are ideal, confirm latest return time before booking.",
  ],
  faqs: [
    {
      question: "How many guests can join a private aurora chase?",
      answer:
        "Most operators accommodate couples through small families, typically up to six guests per vehicle. Confirm capacity when booking.",
    },
    {
      question: "Is private aurora touring worth the premium?",
      answer:
        "Guests who want flexible routing, photography time, and exclusive transport often prefer private touring over shared groups.",
    },
    {
      question: "What happens if clouds cover Tromsø?",
      answer:
        "Guides chase clearer areas when possible. No operator can guarantee aurora or clear skies.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Excursions", href: "/excursions" },
    { label: "Private Aurora Chase" },
  ],
  relatedLinks: sharedRelatedLinks,
  bookingHref: "/excursions",
  bookingLabel: "Explore this excursion",
  ctaTitle: "Compare private and small-group aurora options",
  ctaText:
    "Use these notes to judge fit for your hours ashore. Aurora visibility remains weather and solar-activity dependent. This site does not sell tickets.",
};

export const privateFjordPhotoExperienceExcursion: ExcursionData = {
  slug: "private-fjord-photo-experience",
  path: "/excursions/private-fjord-photo-experience",
  title: "Private Fjord Photo",
  headline: "Private Tromsø Fjord and Photo Experience",
  lead: "Private guide, Arctic fjord scenery, flexible stops, and photography focus for travellers wanting a quieter daytime experience.",
  metaTitle: "Private Tromsø Fjord Photo Experience | Premium Shore Excursion",
  metaDescription:
    "Private Tromsø fjord and photo experience with flexible coastal stops, Arctic scenery, and photography-focused guiding for cruise passengers.",
  heroImage: siteImages.privateFjordPhotoTour,
  heroImageAlt: imageAlts.privateFjordPhotoCard,
  heroBadge: "Premium scenic daytime option",
  summary: {
    duration: "Approx. 4 to 6 hours",
    meetingPoint: "Tromsø cruise pier or flexible hotel pickup",
    returnReassurance: "Private return timed for your port window",
    bestFor:
      "Travellers wanting quieter fjord touring with flexible photo stops",
  },
  snapshotCards: [
    { label: "Activity level", value: "Easy activity level" },
    { label: "Group size", value: "Private party only" },
    { label: "Region", value: "Tromsø & Kvaløya fjords" },
    { label: "Focus", value: "Photography & flexible scenic routing" },
  ],
  gallery: [
    { src: siteImages.kaldfjord, alt: imageAlts.kaldfjord },
    { src: siteImages.tromsoHarbour, alt: imageAlts.tromsoHarbour },
    { src: siteImages.arcticCathedral, alt: imageAlts.arcticCathedral },
    { src: siteImages.arcticCathedralBridge, alt: imageAlts.arcticCathedralBridge },
  ],
  highlights: [
    "Private guide and vehicle",
    "Arctic fjord scenery on Kvaløya and coastal routes",
    "Flexible stops for photography",
    "Photography focus with unhurried timing",
    "Best for travellers wanting a quieter experience",
    "Suitable for six-hour port calls and longer",
  ],
  description: [
    "The Private Tromsø Fjord and Photo Experience suits guests who want the Arctic coastal landscapes of the standard fjord photo tour without sharing a coach. Your guide adjusts stop length for golden-hour light, tripod setup, or simply enjoying a quiet beach.",
    "Routes typically explore Kvaløya, Kaldfjord, and surrounding viewpoints, with optional detours when weather and your port window allow. Wildlife remains a bonus, not the primary focus.",
    "This premium option fits six-hour port calls in the Cruise Smart Planner. Shorter calls should choose the shared Tromsø Fjord Photo Tour instead unless your operator confirms an abbreviated private route.",
    "Pair with harbourfront walking time on long days, or combine with reindeer touring only when your ship publishes eight or more hours ashore.",
  ],
  included: [
    "Private guided fjord touring",
    "Exclusive transport for your party",
    "Flexible photo stops as described",
    "Local guide commentary",
  ],
  notIncluded: sharedNotIncluded,
  timingAdvice: [
    "Best on six-hour or longer port calls with confirmed return times.",
    "Tell your guide your photography priorities before departure.",
    "Summer evenings with extended daylight can offer longer soft light for private touring when your call timing allows.",
    "Allow 45 minutes before all aboard on cruise days.",
  ],
  faqs: [
    {
      question: "How is this different from the shared fjord photo tour?",
      answer:
        "Private touring offers exclusive vehicle use, flexible stop timing, and customised routing for your party.",
    },
    {
      question: "Can we request specific fjord locations?",
      answer:
        "Guides accommodate requests when drive times fit your booking window and road conditions allow.",
    },
    {
      question: "Is this tour available in winter?",
      answer:
        "Yes, though daylight hours are short. Winter routes emphasise blue-hour and coastal Arctic atmosphere.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Excursions", href: "/excursions" },
    { label: "Private Fjord Photo Experience" },
  ],
  relatedLinks: [
    ...sharedRelatedLinks,
    { label: "Fjord tours Tromsø", href: "/fjord-tours-tromso" },
  ],
  bookingHref: "/excursions",
  bookingLabel: "Explore this excursion",
  ctaTitle: "Compare Tromsø private fjord options",
  ctaText:
    "Use these notes to judge fit for your hours ashore, then browse other Tromsø excursions. This site does not sell tickets.",
};
