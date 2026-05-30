import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Best Time to Visit Tromsø for Cruise Passengers",
  description:
    "Best time to visit Tromsø: Northern Lights season, midnight sun cruise calls, winter aurora tourism, summer fjord photography, clothing by season, and shore excursion timing advice.",
  path: "/best-time-to-visit-tromso",
  ogImage: siteImages.bestTime,
  ogImageAlt: imageAlts.bestTime,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Best Time to Visit Tromsø" },
] as const;

const relatedLinks = [
  { label: "Northern Lights Tromsø", href: "/northern-lights-tromso" },
  { label: "Is Tromsø worth visiting?", href: "/is-tromso-worth-visiting" },
  { label: "Tromsø port guide", href: "/tromso-port-guide" },
] as const;

const faqs = [
  {
    question: "When is the best time for Northern Lights in Tromsø?",
    answer:
      "September through April with peak demand December to March. Clear skies matter as much as solar activity. Book aurora tours early in peak winter.",
  },
  {
    question: "When is midnight sun season in Tromsø?",
    answer:
      "Roughly late May through July. Summer cruise calls enjoy extended daylight for fjord photo tours and harbour walks.",
  },
  {
    question: "When should cruise passengers avoid long excursions?",
    answer:
      "On short port calls under four hours year-round, and during severe winter weather when road delays are likely. Use the Cruise Smart Planner before booking.",
  },
] as const;

export default function BestTimeToVisitTromsoPage() {
  return (
    <ContentPage
      title="Best Time to Visit Tromsø"
      lead="Season-by-season guidance for Tromsø cruise passengers: Northern Lights window, midnight sun summer calls, winter aurora tourism, fjord photography months, and what to wear."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Northern Lights season (September to April)</h2>
        <p>
          Dark skies return from September onward, with peak aurora tourism
          December through March. Evening{" "}
          <Link href="/excursions/aurora-chase-small-group">aurora chases</Link>{" "}
          require overnight ship calls or land stays. Visibility remains
          weather-dependent year-round.
        </p>
      </section>

      <section>
        <h2>Midnight sun and summer cruise season</h2>
        <p>
          May through September suits{" "}
          <Link href="/excursions/fjord-photo-tour">fjord photo tours</Link>,
          harbourfront walks, and Arctic Cathedral viewpoints without polar
          darkness. Peak summer berths mean prompt disembarkation matters.
        </p>
      </section>

      <section>
        <h2>Winter tourism and winter cruise calls</h2>
        <p>
          Winter delivers snowy Arctic atmosphere, reindeer camp appeal, and aurora
          demand. Pack full Arctic layers and expect shorter daylight for daytime
          touring. Read{" "}
          <Link href="/northern-lights-cruise-excursions">
            Northern Lights cruise excursions
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Clothing advice by season</h2>
        <p>
          Winter: thermal layers, windproof shell, hat, gloves, waterproof boots.
          Summer: still pack a warm mid-layer and rain shell for exposed fjord
          stops. Aurora evenings need heavier insulation than daytime city walks.
        </p>
      </section>
    </ContentPage>
  );
}
