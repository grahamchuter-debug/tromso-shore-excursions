/** Verified Wikimedia Commons thumb URLs (HTTP 200 via Commons API). */

const auroraHero =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Andi_Gentsch_-_Northern_lights_in_Troms%C3%B8_Norway.jpg/1280px-Andi_Gentsch_-_Northern_lights_in_Troms%C3%B8_Norway.jpg";
const northernLightsTromso =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Northern_lights_in_Tromso.jpg/1280px-Northern_lights_in_Tromso.jpg";
const northernLightsLauklines =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Northern_Lights_at_Lauklines_Norway.jpg/1280px-Northern_Lights_at_Lauklines_Norway.jpg";
const arcticCathedral =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/NOR-2016-Troms%C3%B8-Arctic_Cathedral_%28Ishavskatedralen%29_01_front.jpg/1280px-NOR-2016-Troms%C3%B8-Arctic_Cathedral_%28Ishavskatedralen%29_01_front.jpg";
const arcticCathedralBridge =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/09512_Tromsdalen_church_and_bridge_-_Tromso%2C_Norway_-_V-P.jpg/1280px-09512_Tromsdalen_church_and_bridge_-_Tromso%2C_Norway_-_V-P.jpg";
const tromsoHarbour =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Troms%C3%B8_harbour_01.jpg/1280px-Troms%C3%B8_harbour_01.jpg";
const tromsoCruiseHarbour =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Cruise_ship_Mein_Schiff_5_in_Troms%C3%B8_%28June_2018%29.jpg/1280px-Cruise_ship_Mein_Schiff_5_in_Troms%C3%B8_%28June_2018%29.jpg";
const kaldfjord =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Kaldfjord_on_Kval%C3%B8ya_as_seen_from_the_Store_Bl%C3%A5mannen.jpg/1280px-The_Kaldfjord_on_Kval%C3%B8ya_as_seen_from_the_Store_Bl%C3%A5mannen.jpg";
const reindeerTromso =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Feeding_reindeer%2C_Troms%C3%B8_%283%29.jpg/1280px-Feeding_reindeer%2C_Troms%C3%B8_%283%29.jpg";
const samiReindeerFence =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Sami_people_at_the_reindeer_fence.jpg/1280px-Sami_people_at_the_reindeer_fence.jpg";
const midnightSun =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Midnight_sun_at_the_Nordkapp_Globe_Monument_2024-07-22.jpg/1280px-Midnight_sun_at_the_Nordkapp_Globe_Monument_2024-07-22.jpg";
const snowyArctic =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Mager%C3%B8ya_Reindeer_along_the_E69_Norway_16.jpg/1280px-Mager%C3%B8ya_Reindeer_along_the_E69_Norway_16.jpg";

export const siteImages = {
  hero: auroraHero,
  northernLights: northernLightsTromso,
  northernLightsLauklines,
  arcticCathedral,
  arcticCathedralBridge,
  tromsoHarbour,
  tromsoCruiseHarbour,
  kaldfjord,
  reindeer: reindeerTromso,
  samiCulture: samiReindeerFence,
  midnightSun,
  snowyArctic,
  portGuide: tromsoCruiseHarbour,
  worthVisiting: auroraHero,
  oneDay: kaldfjord,
  bestTime: midnightSun,
  northernLightsPage: northernLightsTromso,
  bestNorthernLightsTours: northernLightsLauklines,
  reindeerTours: reindeerTromso,
  fjordTours: kaldfjord,
  northernLightsCruise: auroraHero,
  auroraChaseTour: auroraHero,
  fjordPhotoTour: kaldfjord,
  reindeerSamiTour: reindeerTromso,
  privateAuroraTour: northernLightsLauklines,
  privateFjordPhotoTour: kaldfjord,
  flamPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Fl%C3%A5m_fr%C3%A5_cruiseskip_ved_kai.jpg/1280px-Fl%C3%A5m_fr%C3%A5_cruiseskip_ved_kai.jpg",
  bergenPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Harbour_Bergen_Norway_2009_5.jpg/1280px-Harbour_Bergen_Norway_2009_5.jpg",
  stavangerPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Cruise_ship_Stavanger_Norway.jpg/1280px-Cruise_ship_Stavanger_Norway.jpg",
  alesundPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/%C3%85lesund_Hafen_lub_2025-07-28_img04.jpg/1280px-%C3%85lesund_Hafen_lub_2025-07-28_img04.jpg",
  geirangerPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flydalsjuvet_Geiranger_Geirangerfjorden.jpg/1280px-Flydalsjuvet_Geiranger_Geirangerfjorden.jpg",
  oldenPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Briksdalsbreen_Glacier_-Norway.jpg/1280px-Briksdalsbreen_Glacier_-Norway.jpg",
  eidfjordPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Voringsfossen_waterfall_at_Eidfjord%2C_Norway.jpg/1280px-Voringsfossen_waterfall_at_Eidfjord%2C_Norway.jpg",
  moldePortCard:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Molde_Hafen.jpg/1280px-Molde_Hafen.jpg",
  honningsvagPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Globe_Monument_at_Nordkapp.jpg/1280px-Globe_Monument_at_Nordkapp.jpg",
  kristiansandPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Kristiansand_harbour_2015.jpg/1280px-Kristiansand_harbour_2015.jpg",
  hellesyltPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Hellesyltfossen_%282%29.jpg/1280px-Hellesyltfossen_%282%29.jpg",
  trondheimPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Puerto%2C_Trondheim%2C_Noruega%2C_2019-09-06%2C_DD_26.jpg/1280px-Puerto%2C_Trondheim%2C_Noruega%2C_2019-09-06%2C_DD_26.jpg",
  nordfjordeidPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Hornindalsvatnet.jpg/1280px-Hornindalsvatnet.jpg",
  skjoldenPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Skjolden_village.jpg/1280px-Skjolden_village.jpg",
} as const;

export const imageAlts = {
  hero: "Northern lights aurora over Tromsø, Norway, Tromso Shore Excursions Arctic flagship hero",
  northernLights:
    "Northern lights aurora display above Tromsø in Arctic Norway",
  northernLightsLauklines:
    "Northern lights aurora near Lauklines outside Tromsø, Norway",
  arcticCathedral:
    "Arctic Cathedral Ishavskatedralen in Tromsdalen, Tromsø shore excursions",
  arcticCathedralBridge:
    "Arctic Cathedral and Tromsø bridge seen from Tromsdalen, Norway",
  tromsoHarbour:
    "Tromsø harbour waterfront with Arctic city skyline",
  tromsoCruiseHarbour:
    "Cruise ship at Tromsø harbour, Tromsø cruise port guide",
  kaldfjord:
    "Kaldfjord on Kvaløya near Tromsø with Arctic mountains and coastal scenery",
  reindeer:
    "Reindeer feeding experience near Tromsø, Arctic wildlife shore excursion",
  samiCulture:
    "Sami people at a reindeer fence, Sami culture experience near Tromsø",
  midnightSun:
    "Midnight sun over Arctic Norway, best time to visit Tromsø summer cruise season",
  snowyArctic:
    "Reindeer in snowy Arctic landscape near northern Norway",
  portGuide:
    "Cruise ship at Tromsø harbour, Tromsø port guide for shore excursion passengers",
  worthVisiting:
    "Northern lights over Tromsø, is Tromsø worth visiting on a cruise",
  oneDay:
    "Kaldfjord Arctic fjord scenery near Tromsø, one day in Tromsø itinerary",
  bestTime:
    "Midnight sun in Arctic Norway, best time to visit Tromsø for aurora or summer",
  northernLightsPage:
    "Northern lights aurora over Tromsø, Northern Lights tours and aurora chase",
  bestNorthernLightsTours:
    "Aurora borealis near Tromsø, comparing best Northern Lights tours",
  reindeerTours:
    "Reindeer visit near Tromsø, family-friendly Arctic reindeer tours",
  fjordTours:
    "Kaldfjord on Kvaløya, Tromsø fjord photo tour and Arctic coastal landscapes",
  northernLightsCruise:
    "Northern lights aurora over Tromsø, winter cruise Northern Lights shore excursions",
  auroraChaseCard:
    "Northern lights aurora over Tromsø, Aurora Chase small group experience",
  fjordPhotoCard:
    "Arctic fjord scenery on Kvaløya near Tromsø, fjord photo tour",
  reindeerSamiCard:
    "Reindeer feeding near Tromsø, reindeer visit and Sami culture experience",
  privateAuroraCard:
    "Aurora borealis near Tromsø, private Northern Lights chase tour",
  privateFjordPhotoCard:
    "Kaldfjord Arctic scenery near Tromsø, private fjord and photo experience",
  flamPortCard:
    "Flam harbour with a cruise ship at the pier, Flam Shore Excursions",
  bergenPortCard:
    "Bergen harbour and waterfront, Bergen Shore Excursions",
  stavangerPortCard:
    "Stavanger harbour with cruise-friendly waterfront, Stavanger Shore Excursions",
  alesundPortCard:
    "Alesund harbour with cruise-friendly waterfront, Alesund Shore Excursions",
  geirangerPortCard:
    "Geirangerfjord viewpoint with cruise ship, Geiranger Shore Excursions",
  oldenPortCard:
    "Briksdal Glacier and Nordfjord scenery, Olden Shore Excursions",
  eidfjordPortCard:
    "Vøringsfossen waterfall and Hardanger scenery, Eidfjord Shore Excursions",
  moldePortCard:
    "Molde harbour and Atlantic coast, Molde Shore Excursions",
  honningsvagPortCard:
    "Globe Monument at North Cape, Honningsvag Shore Excursions",
  kristiansandPortCard:
    "Kristiansand harbour, Kristiansand Shore Excursions",
  hellesyltPortCard:
    "Hellesylt waterfall and fjord, Hellesylt Shore Excursions",
  trondheimPortCard:
    "Trondheim harbour and waterfront, Trondheim Shore Excursions",
  nordfjordeidPortCard:
    "Hornindalsvatnet lake near Nordfjordeid, Nordfjordeid Shore Excursions",
  skjoldenPortCard:
    "Skjolden village at the head of Lustrafjord, Skjolden Shore Excursions",
} as const;
