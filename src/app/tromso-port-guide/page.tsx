import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Tromsø Cruise Port Guide for Shore Excursions",
  description:
    "Tromsø cruise port guide: pier locations, walking distance to city centre, Arctic Cathedral, harbourfront, winter and summer cruise advice, Northern Lights season, midnight sun, clothing, and return-to-ship buffer advice.",
  path: "/tromso-port-guide",
  ogImage: siteImages.portGuide,
  ogImageAlt: imageAlts.portGuide,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Tromsø Port Guide" },
] as const;

const relatedLinks = [
  { label: "Shore excursions", href: "/excursions" },
  { label: "One day in Tromsø", href: "/one-day-in-tromso" },
  { label: "Northern Lights Tromsø", href: "/northern-lights-tromso" },
  { label: "Cruise Smart Planner", href: "/#planner" },
] as const;

const faqs = [
  {
    question: "How far is Tromsø city centre from the cruise pier?",
    answer:
      "Most berths are within 10 to 20 minutes on foot of the harbourfront, main street, and excursion meeting points. The Arctic Cathedral in Tromsdalen is across the bridge, allow extra time.",
  },
  {
    question: "Do cruise ships tender in Tromsø?",
    answer:
      "Most large ships dock at Prostneset or nearby harbour berths. Tender operations are uncommon but possible when berths are full. Check your ship's plan and add buffer if tendering.",
  },
  {
    question: "When is Northern Lights season in Tromsø?",
    answer:
      "Aurora activity is possible from September through April when skies are dark enough. Peak demand runs December to March. Evening aurora tours require overnight or late ship calls.",
  },
  {
    question: "What should cruise passengers wear in Tromsø?",
    answer:
      "Layer windproof jackets, warm mid-layers, hat, gloves, and waterproof boots year-round. Winter port days need full Arctic clothing. Summer calls still feel cool on exposed fjord stops.",
  },
] as const;

export default function TromsoPortGuidePage() {
  return (
    <ContentPage
      title="Tromsø Port Guide for Cruise Passengers"
      lead="Navigate Tromsø cruise port, harbour berths, walking routes to the city centre and Arctic Cathedral, excursion meeting points, seasonal Arctic weather, and how to return to your ship on time."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Tromsø cruise port location</h2>
        <p>
          Tromsø sits on an island archipelago in Troms og Finnmark, well above the
          Arctic Circle. Cruise ships typically berth at Prostneset or nearby
          harbour piers within walking distance of the compact city centre,
          waterfront cafés, and coach pickup points for shore excursions.
        </p>
        <p>
          Confirm your exact pier assignment on the ship&apos;s app the night
          before arrival. Berths can change when several vessels share Tromsø on
          peak Arctic cruise days in summer and winter.
        </p>
      </section>

      <section>
        <h2>Walking distance to city centre and Arctic Cathedral</h2>
        <p>
          The harbourfront and main pedestrian street are usually a short walk
          from the cruise pier. Museums, polar history sites, and excursion
          meeting points cluster near the waterfront.
        </p>
        <p>
          The Arctic Cathedral (Ishavskatedralen) stands in Tromsdalen across the
          Tromsø Bridge. Allow 30 to 45 minutes round trip on foot including
          bridge crossing and viewpoint time, or join a structured tour if your
          port call is short.
        </p>
      </section>

      <section>
        <h2>Winter weather and summer cruise season advice</h2>
        <p>
          Winter calls bring polar darkness, snow, and aurora tourism demand.
          Roads to fjord and reindeer camps can be icy. Build extra return buffer
          before all aboard when coaches operate in Arctic conditions.
        </p>
        <p>
          Summer cruise season runs roughly May through September with midnight
          sun light. Daytime fjord photo tours and harbour walks fit standard port
          windows. Peak summer berths fill the harbour, disembark promptly.
        </p>
      </section>

      <section>
        <h2>Northern Lights season and midnight sun</h2>
        <p>
          Northern Lights shore excursions operate when skies are dark enough,
          typically September to April. Overnight ship calls are essential for
          evening aurora chases on the same visit.
        </p>
        <p>
          Midnight sun season from late May through July offers extended daylight
          for fjord photography and city exploration. Read our{" "}
          <Link href="/best-time-to-visit-tromso">best time to visit Tromsø</Link>{" "}
          guide for month-by-month planning.
        </p>
      </section>

      <section>
        <h2>Return-to-ship buffer advice</h2>
        <p>
          Allow 45 minutes before your cruise line&apos;s all-aboard time when
          returning from fjord tours or reindeer camps outside the city. Arctic
          weather, bridge traffic, and winter road conditions can delay coaches.
        </p>
        <p>
          Use the{" "}
          <Link href="/#planner">Tromsø Cruise Smart Planner</Link> on our
          homepage to match excursion duration to your published port hours before
          booking independently.
        </p>
      </section>
    </ContentPage>
  );
}
