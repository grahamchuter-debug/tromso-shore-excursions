import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Fjord Tours Tromsø | Fjord Photo Tour & Photography Excursions",
  description:
    "Tromso fjord tours: Tromso fjord photo tour, Arctic fjord tour Tromso, Tromso photography tours, and cruise-friendly daytime fjord shore excursions.",
  path: "/fjord-tours-tromso",
  ogImage: siteImages.fjordTours,
  ogImageAlt: imageAlts.fjordTours,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Fjord Tours Tromsø" },
] as const;

const relatedLinks = [
  { label: "Fjord Photo Tour", href: "/excursions/fjord-photo-tour" },
  { label: "Private Fjord Photo Experience", href: "/excursions/private-fjord-photo-experience" },
  { label: "One day in Tromsø", href: "/one-day-in-tromso" },
] as const;

const faqs = [
  {
    question: "What is the best Tromso fjord photo tour?",
    answer:
      "The Tromsø Fjord Photo Tour is the main shared daytime option for Kvaløya scenery. Private touring suits six-hour port calls and flexible photography stops.",
  },
  {
    question: "Are Tromso photography tours suitable for beginners?",
    answer:
      "Yes. Guides often help with phone and camera composition even if you are not using professional gear.",
  },
  {
    question: "How is an Arctic fjord tour Tromso different from southern fjords?",
    answer:
      "Tromsø fjords emphasise Arctic coastal light, beaches, and mountain backdrops rather than steep waterfall viewpoints. Wildlife sightings are possible but not guaranteed.",
  },
] as const;

export default function FjordToursTromsoPage() {
  return (
    <ContentPage
      title="Fjord Tours Tromsø"
      lead="Compare Tromso fjord tours, fjord photo tours, Arctic fjord shore excursions, and photography-focused daytime routing for cruise passengers."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Tromso fjord tours and Kvaløya scenery</h2>
        <p>
          Tromso fjord tours explore Kvaløya, Kaldfjord, and coastal routes with
          Arctic mountains, beaches, and photo stops. Routes suit daytime cruise
          calls when aurora touring is not possible.
        </p>
      </section>

      <section>
        <h2>Tromso fjord photo tour</h2>
        <p>
          The{" "}
          <Link href="/excursions/fjord-photo-tour">Tromsø Fjord Photo Tour</Link>{" "}
          is the main shared excursion for photography-friendly pacing, wildlife
          possibilities, and scenic coastal landscapes.
        </p>
      </section>

      <section>
        <h2>Arctic fjord tour Tromso and private options</h2>
        <p>
          The{" "}
          <Link href="/excursions/private-fjord-photo-experience">
            Private Tromsø Fjord and Photo Experience
          </Link>{" "}
          adds flexible stops and exclusive vehicle use for guests wanting quieter
          Tromso photography tours on six-hour port calls.
        </p>
      </section>
    </ContentPage>
  );
}
