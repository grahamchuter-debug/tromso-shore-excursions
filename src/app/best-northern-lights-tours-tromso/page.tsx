import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Best Northern Lights Tours Tromsø Compared",
  description:
    "Compare best Northern Lights tours Tromso: small group aurora chase, private aurora chase, photography aurora tours, weather expectations, operating season, and what to wear.",
  path: "/best-northern-lights-tours-tromso",
  ogImage: siteImages.bestNorthernLightsTours,
  ogImageAlt: imageAlts.bestNorthernLightsTours,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Best Northern Lights Tours Tromsø" },
] as const;

const relatedLinks = [
  { label: "Northern Lights Tromsø", href: "/northern-lights-tromso" },
  { label: "Aurora Chase tour", href: "/excursions/aurora-chase-small-group" },
  { label: "Private Aurora Chase", href: "/excursions/private-aurora-chase" },
] as const;

const faqs = [
  {
    question: "Small group or private aurora tour in Tromsø?",
    answer:
      "Small group tours cost less per person and suit solo travellers. Private tours offer flexible routing and exclusive vehicle use for photographers and families.",
  },
  {
    question: "Are photography-focused aurora tours different?",
    answer:
      "Both featured tours include photography guidance. Private touring allows longer stop times for tripod setup without shared coach schedules.",
  },
  {
    question: "What should I wear on a Tromsø aurora tour?",
    answer:
      "Thermal base layers, insulated mid-layer, windproof outer shell, hat, gloves, and waterproof boots. Many operators provide thermal suits on winter chases.",
  },
] as const;

export default function BestNorthernLightsToursTromsoPage() {
  return (
    <ContentPage
      title="Best Northern Lights Tours Tromsø"
      lead="Compare small group aurora chase, private aurora chase, and photography-focused Northern Lights tours in Tromsø, plus weather expectations, operating season, and packing advice."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Small group aurora chase</h2>
        <p>
          The{" "}
          <Link href="/excursions/aurora-chase-small-group">
            Aurora Chase Small Group Experience
          </Link>{" "}
          balances cost and intimacy. Expert guides chase weather, help with
          camera settings, and keep groups small enough for photography along
          the shoreline.
        </p>
      </section>

      <section>
        <h2>Private aurora chase</h2>
        <p>
          The{" "}
          <Link href="/excursions/private-aurora-chase">Private Aurora Chase</Link>{" "}
          suits honeymooners, families, and serious photographers who want
          flexible routing without sharing a coach schedule.
        </p>
      </section>

      <section>
        <h2>Photography-focused aurora tours</h2>
        <p>
          Both tours emphasise aurora photography. Choose private touring if you
          need extended exposure times or custom stop selection. Pack a tripod,
          spare batteries, and a wide-angle lens.
        </p>
      </section>

      <section>
        <h2>Weather and visibility expectations</h2>
        <p>
          No operator guarantees aurora or clear skies. Reputable guides chase
          breaks in cloud cover but solar activity and Arctic weather remain
          unpredictable. Manage expectations and enjoy the Arctic night even if
          aurora stays hidden.
        </p>
      </section>

      <section>
        <h2>When aurora tours operate</h2>
        <p>
          Typically September through April. Peak demand December to March.
          Confirm departure times on your voucher. Cruise passengers need
          overnight calls for evening departures.
        </p>
      </section>
    </ContentPage>
  );
}
