import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Northern Lights Tromsø | Aurora Tours & Cruise Shore Excursions",
  description:
    "Northern Lights Tromso guide: Tromso aurora tours, best Northern Lights tours Tromso, small group aurora chase Tromso, private aurora chase Tromso, and cruise passenger planning.",
  path: "/northern-lights-tromso",
  ogImage: siteImages.northernLightsPage,
  ogImageAlt: imageAlts.northernLightsPage,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Northern Lights Tromsø" },
] as const;

const relatedLinks = [
  { label: "Best Northern Lights tours", href: "/best-northern-lights-tours-tromso" },
  { label: "Aurora Chase tour", href: "/excursions/aurora-chase-small-group" },
  { label: "Winter cruise excursions", href: "/northern-lights-cruise-excursions" },
] as const;

const faqs = [
  {
    question: "What are the best Northern Lights tours in Tromsø?",
    answer:
      "The Aurora Chase Small Group Experience is the headline small group option. Private Aurora Chase suits couples and families wanting flexible routing. Compare both on our best Northern Lights tours page.",
  },
  {
    question: "Can cruise passengers join a Tromso aurora tour?",
    answer:
      "Yes on overnight winter calls with evening departures. Daytime-only port calls cannot fit aurora chases unless the ship stays in port overnight.",
  },
  {
    question: "When do aurora tours operate in Tromsø?",
    answer:
      "Typically September through April when skies are dark enough. Peak season runs December to March. Tours are weather-dependent and cannot guarantee sightings.",
  },
] as const;

export default function NorthernLightsTromsoPage() {
  return (
    <ContentPage
      title="Northern Lights Tromsø"
      lead="Plan Northern Lights Tromso tours: small group aurora chase, private aurora chase, photography-focused aurora experiences, and cruise-friendly winter shore excursion advice."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Northern Lights Tromso and the auroral oval</h2>
        <p>
          Tromsø sits beneath the auroral oval, attracting aurora tourism from
          September through April. Tromso aurora tours chase clearer skies away
          from city light pollution toward coastal and fjord viewpoints.
        </p>
      </section>

      <section>
        <h2>Small group aurora chase Tromso</h2>
        <p>
          The{" "}
          <Link href="/excursions/aurora-chase-small-group">
            Aurora Chase Small Group Experience
          </Link>{" "}
          is the premium headline product for aurora seekers. Photography-focused
          guiding, expert local weather routing, and small group sizing keep the
          experience intimate.
        </p>
      </section>

      <section>
        <h2>Private aurora chase Tromso</h2>
        <p>
          The{" "}
          <Link href="/excursions/private-aurora-chase">Private Aurora Chase</Link>{" "}
          offers flexible routing for couples, families, and small groups who want
          exclusive transport and extended tripod time.
        </p>
      </section>

      <section>
        <h2>Best Northern Lights tours Tromso comparison</h2>
        <p>
          Read our dedicated{" "}
          <Link href="/best-northern-lights-tours-tromso">
            best Northern Lights tours Tromsø
          </Link>{" "}
          page for side-by-side comparison of small group, private, and
          photography-focused aurora touring, plus what to wear and visibility
          expectations.
        </p>
      </section>
    </ContentPage>
  );
}
