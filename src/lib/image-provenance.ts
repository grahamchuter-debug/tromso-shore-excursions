/**
 * Image provenance registry for Tromso Shore Excursions.
 * NEW IMAGE SOURCING IS NOT AUTHORISED without verified rights.
 */

export type ImageProvenance = {
  key: string;
  urlOrPath: string;
  status:
    | "KEEP"
    | "REPLACE"
    | "WRONG_LOCATION"
    | "DUPLICATE"
    | "PROVENANCE_UNKNOWN"
    | "BROKEN";
  notes: string;
};

export const tromsoImageProvenance: readonly ImageProvenance[] = [
  {
    key: "hero",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Andi_Gentsch_-_Northern_lights_in_Troms%C3%B8_Norway.jpg/1280px-Andi_Gentsch_-_Northern_lights_in_Troms%C3%B8_Norway.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. Northern lights in Tromsø. Rights later-hardening.",
  },
  {
    key: "northernLights",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Northern_lights_in_Tromso.jpg/1280px-Northern_lights_in_Tromso.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. Northern lights in Tromsø.",
  },
  {
    key: "northernLightsLauklines",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Northern_Lights_at_Lauklines_Norway.jpg/1280px-Northern_Lights_at_Lauklines_Norway.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. Lauklines near Tromsø region.",
  },
  {
    key: "arcticCathedral",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/NOR-2016-Troms%C3%B8-Arctic_Cathedral_%28Ishavskatedralen%29_01_front.jpg/1280px-NOR-2016-Troms%C3%B8-Arctic_Cathedral_%28Ishavskatedralen%29_01_front.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. Arctic Cathedral, Tromsø.",
  },
  {
    key: "arcticCathedralBridge",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/09512_Tromsdalen_church_and_bridge_-_Tromso%2C_Norway_-_V-P.jpg/1280px-09512_Tromsdalen_church_and_bridge_-_Tromso%2C_Norway_-_V-P.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. Arctic Cathedral and Tromsø bridge.",
  },
  {
    key: "tromsoHarbour",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Troms%C3%B8_harbour_01.jpg/1280px-Troms%C3%B8_harbour_01.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. Tromsø harbour.",
  },
  {
    key: "tromsoCruiseHarbour",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Cruise_ship_Mein_Schiff_5_in_Troms%C3%B8_%28June_2018%29.jpg/1280px-Cruise_ship_Mein_Schiff_5_in_Troms%C3%B8_%28June_2018%29.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. Cruise ship in Tromsø harbour.",
  },
  {
    key: "kaldfjord",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Kaldfjord_on_Kval%C3%B8ya_as_seen_from_the_Store_Bl%C3%A5mannen.jpg/1280px-The_Kaldfjord_on_Kval%C3%B8ya_as_seen_from_the_Store_Bl%C3%A5mannen.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. Kaldfjord on Kvaløya near Tromsø.",
  },
  {
    key: "reindeer",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Feeding_reindeer%2C_Troms%C3%B8_%283%29.jpg/1280px-Feeding_reindeer%2C_Troms%C3%B8_%283%29.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. Reindeer feeding near Tromsø.",
  },
  {
    key: "samiCulture",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Sami_people_at_the_reindeer_fence.jpg/1280px-Sami_people_at_the_reindeer_fence.jpg",
    status: "KEEP",
    notes:
      "Wikimedia Commons. Sami reindeer fence scene used for culture context. Not labelled as a specific Tromsø pier view.",
  },
  {
    key: "midnightSun",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Midnight_sun_at_the_Nordkapp_Globe_Monument_2024-07-22.jpg/1280px-Midnight_sun_at_the_Nordkapp_Globe_Monument_2024-07-22.jpg",
    status: "WRONG_LOCATION",
    notes:
      "Nordkapp Globe Monument is Honningsvåg / North Cape, not Tromsø. Removed from Tromsø-local and gallery presentation. Key retained only so provenance stays auditable; do not remount as Tromsø scenery.",
  },
  {
    key: "snowyArctic",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Mager%C3%B8ya_Reindeer_along_the_E69_Norway_16.jpg/1280px-Mager%C3%B8ya_Reindeer_along_the_E69_Norway_16.jpg",
    status: "WRONG_LOCATION",
    notes:
      "Magerøya reindeer along E69 is Finnmark / North Cape region, not Tromsø. Removed from Tromsø-local galleries and page heroes. Do not present as Tromsø scenery.",
  },
  {
    key: "sisterPortCards",
    urlOrPath:
      "src/lib/site-images.ts flam/bergen/stavanger related-port cards",
    status: "KEEP",
    notes:
      "Related-port assets in explore-norwegian-ports. Not labelled as Tromsø local.",
  },
] as const;
