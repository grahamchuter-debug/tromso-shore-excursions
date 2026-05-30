import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "One Day in Tromsø Cruise Itinerary & Shore Excursion Ideas",
  description:
    "Sample one day in Tromsø itineraries: short summer cruise call, Arctic fjord photo day, reindeer and Sami culture day, winter aurora day, and photography-focused port plans.",
  path: "/one-day-in-tromso",
  ogImage: siteImages.oneDay,
  ogImageAlt: imageAlts.oneDay,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "One Day in Tromsø" },
] as const;

const relatedLinks = [
  { label: "Tromsø port guide", href: "/tromso-port-guide" },
  { label: "Shore excursions", href: "/excursions" },
  { label: "Cruise Smart Planner", href: "/#planner" },
] as const;

const faqs = [
  {
    question: "Can I do an aurora chase and fjord tour on the same cruise day?",
    answer:
      "Only on overnight calls with an evening departure for aurora touring and a separate daytime window. Standard daytime port calls suit one structured excursion plus city time.",
  },
  {
    question: "What fits a short summer cruise call under four hours?",
    answer:
      "Harbourfront walking, Arctic Cathedral viewpoint if time allows, and the port guide route. Skip long fjord drives unless a confirmed short tour aligns with all-aboard.",
  },
] as const;

export default function OneDayInTromsoPage() {
  return (
    <ContentPage
      title="One Day in Tromsø"
      lead="Sample cruise port itineraries for Tromsø: short summer calls, fjord photography days, reindeer and Sami culture, winter aurora planning, and photography-focused shore days."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Short summer cruise call (under 4 hours)</h2>
        <p>
          Disembark promptly and walk the harbourfront toward the main street.
          Visit the Polar Museum or cathedral viewpoint if timing allows. Skip
          long transfers. Return 45 minutes before all aboard.
        </p>
      </section>

      <section>
        <h2>Arctic fjord photo day (4 to 6 hours)</h2>
        <p>
          Book the{" "}
          <Link href="/excursions/fjord-photo-tour">Tromsø Fjord Photo Tour</Link>{" "}
          for Kvaløya scenery, beaches, and mountain backdrops. Premium guests
          with six or more hours may prefer the{" "}
          <Link href="/excursions/private-fjord-photo-experience">
            Private Fjord Photo Experience
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Reindeer and Sami culture day</h2>
        <p>
          Allow three to five hours for the{" "}
          <Link href="/excursions/reindeer-sami-experience">
            Reindeer Visit and Sami Experience
          </Link>
          . Family-friendly and strong in winter atmosphere. Pair with minimal
          city time unless your ship publishes six or more hours ashore.
        </p>
      </section>

      <section>
        <h2>Winter aurora day (overnight call)</h2>
        <p>
          Daytime: harbour walk or reindeer tour if hours allow. Evening:{" "}
          <Link href="/excursions/aurora-chase-small-group">
            Aurora Chase Small Group
          </Link>{" "}
          or{" "}
          <Link href="/excursions/private-aurora-chase">Private Aurora Chase</Link>
          . Read{" "}
          <Link href="/northern-lights-cruise-excursions">
            Northern Lights cruise excursions
          </Link>{" "}
          for winter ship timing.
        </p>
      </section>

      <section>
        <h2>Photography-focused day</h2>
        <p>
          Combine the fjord photo tour with golden-hour planning in summer or
          blue-hour coastal stops in winter. Aurora chasers should book evening
          photography tours on overnight calls. See{" "}
          <Link href="/fjord-tours-tromso">fjord tours Tromsø</Link> for more
          routing ideas.
        </p>
      </section>
    </ContentPage>
  );
}
