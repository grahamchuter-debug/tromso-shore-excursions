import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Reindeer Tours Tromsø | Sami Experience Shore Excursions",
  description:
    "Reindeer tours Tromso: Sami experience Tromso, reindeer visit Tromso, family Arctic tours Tromso, and cruise-friendly reindeer shore excursions from Tromsø port.",
  path: "/reindeer-tours-tromso",
  ogImage: siteImages.reindeerTours,
  ogImageAlt: imageAlts.reindeerTours,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Reindeer Tours Tromsø" },
] as const;

const relatedLinks = [
  { label: "Reindeer & Sami excursion", href: "/excursions/reindeer-sami-experience" },
  { label: "One day in Tromsø", href: "/one-day-in-tromso" },
  { label: "Is Tromsø worth visiting?", href: "/is-tromso-worth-visiting" },
] as const;

const faqs = [
  {
    question: "What is included in a Tromso reindeer visit?",
    answer:
      "Most tours include reindeer feeding or encounters, Sami cultural storytelling, and transport from Tromsø. Local food tastings vary by operator and season.",
  },
  {
    question: "Are reindeer tours Tromso family-friendly?",
    answer:
      "Yes. Most operators welcome children with gentle pacing. Confirm age policies and camp accessibility when booking.",
  },
  {
    question: "How long are Sami experience Tromso tours?",
    answer:
      "Typically three to five hours including transfer to camp locations outside central Tromsø. Match duration to your port window via the Cruise Smart Planner.",
  },
] as const;

export default function ReindeerToursTromsoPage() {
  return (
    <ContentPage
      title="Reindeer Tours Tromsø"
      lead="Compare reindeer tours Tromso, Sami experience shore excursions, family Arctic tours, and the Reindeer Visit and Sami Experience for cruise passengers."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Reindeer visit Tromso and Sami heritage</h2>
        <p>
          Reindeer tours Tromso connect cruise passengers with indigenous Sami
          culture beyond city museums. Guests meet reindeer, hear herding
          traditions, and experience Arctic camp atmosphere especially in winter.
        </p>
      </section>

      <section>
        <h2>Sami experience Tromso shore excursions</h2>
        <p>
          The{" "}
          <Link href="/excursions/reindeer-sami-experience">
            Reindeer Visit and Sami Experience
          </Link>{" "}
          combines reindeer encounters with cultural storytelling and local food
          where available. Lyngen Alps scenery appears on some longer routes.
        </p>
      </section>

      <section>
        <h2>Family Arctic tours Tromso</h2>
        <p>
          Reindeer feeding and camp visits suit families seeking gentle activity
          levels. Pack warm layers for exposed camp areas colder than Tromsø city
          centre. Allow three to five hours including transfers.
        </p>
      </section>
    </ContentPage>
  );
}
