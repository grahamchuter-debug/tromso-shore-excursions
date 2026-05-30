import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Northern Lights Cruise Excursions Tromsø | Winter Aurora Shore Tours",
  description:
    "Northern Lights cruise excursions: Tromso cruise Northern Lights, aurora shore excursions Tromso, winter cruise Tromso excursions, and overnight ship call planning.",
  path: "/northern-lights-cruise-excursions",
  ogImage: siteImages.northernLightsCruise,
  ogImageAlt: imageAlts.northernLightsCruise,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Northern Lights Cruise Excursions" },
] as const;

const relatedLinks = [
  { label: "Northern Lights Tromsø", href: "/northern-lights-tromso" },
  { label: "Aurora Chase tour", href: "/excursions/aurora-chase-small-group" },
  { label: "Best Northern Lights tours", href: "/best-northern-lights-tours-tromso" },
] as const;

const faqs = [
  {
    question: "Can I book Northern Lights cruise excursions on a daytime port call?",
    answer:
      "Evening aurora tours require the ship to remain in Tromsø overnight or depart late. Standard daytime calls suit fjord or reindeer tours instead.",
  },
  {
    question: "What are the best aurora shore excursions Tromso for cruise passengers?",
    answer:
      "The Aurora Chase Small Group Experience and Private Aurora Chase are the headline winter options on overnight calls.",
  },
  {
    question: "When do winter cruise Tromso excursions run?",
    answer:
      "Peak winter cruise season aligns with aurora tourism December through March. Confirm tour departure times against your ship's overnight schedule.",
  },
] as const;

export default function NorthernLightsCruiseExcursionsPage() {
  return (
    <ContentPage
      title="Northern Lights Cruise Excursions Tromsø"
      lead="Plan Northern Lights cruise excursions from Tromsø: aurora shore excursions, Tromso cruise Northern Lights timing, and winter repositioning cruise advice."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Northern Lights cruise excursions and ship timing</h2>
        <p>
          Aurora shore excursions Tromso depart in the evening when skies are
          dark. Tromso cruise Northern Lights touring requires overnight ship calls
          or late departure times. Daytime-only visits should plan fjord or
          reindeer tours instead.
        </p>
      </section>

      <section>
        <h2>Winter cruise Tromso excursions</h2>
        <p>
          Winter repositioning cruises increasingly call at Tromsø for aurora
          tourism. Book{" "}
          <Link href="/excursions/aurora-chase-small-group">
            Aurora Chase Small Group
          </Link>{" "}
          or{" "}
          <Link href="/excursions/private-aurora-chase">Private Aurora Chase</Link>{" "}
          early in peak season. Read{" "}
          <Link href="/best-northern-lights-tours-tromso">
            best Northern Lights tours
          </Link>{" "}
          for comparison.
        </p>
      </section>

      <section>
        <h2>Combining daytime and aurora shore excursions</h2>
        <p>
          On overnight calls with six or more hours before evening, combine a{" "}
          <Link href="/excursions/fjord-photo-tour">fjord photo tour</Link> or{" "}
          <Link href="/excursions/reindeer-sami-experience">
            reindeer experience
          </Link>{" "}
          with an evening aurora chase. Use the{" "}
          <Link href="/#planner">Cruise Smart Planner</Link> to confirm margins.
        </p>
      </section>
    </ContentPage>
  );
}
