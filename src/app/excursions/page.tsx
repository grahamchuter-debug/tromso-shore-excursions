import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { JsonLd } from "@/components/json-ld";
import { TourCard } from "@/components/tour-card";
import { tromsoTourCards, tromsoTourListItems } from "@/lib/tromso-tours";
import { buildPageMetadata } from "@/lib/site-metadata";
import { buildItemListSchema } from "@/lib/site-schema";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Tromsø Excursions, All Arctic Shore Tours",
  description:
    "Browse all Tromsø shore excursions: Aurora Chase, fjord photo tours, reindeer and Sami experiences, private aurora chases, and private fjord photography tours.",
  path: "/excursions",
  ogImage: siteImages.auroraChaseTour,
  ogImageAlt: imageAlts.auroraChaseCard,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Excursions" },
] as const;

const relatedLinks = [
  { label: "Tromsø port guide", href: "/tromso-port-guide" },
  { label: "One day in Tromsø", href: "/one-day-in-tromso" },
  { label: "Ship schedule", href: "/ship-schedule" },
  { label: "Northern Lights Tromsø", href: "/northern-lights-tromso" },
] as const;

const faqs = [
  {
    question: "What is the best Tromsø excursion for first-time cruise visitors?",
    answer:
      "The Aurora Chase Small Group Experience is the premium headline tour on overnight winter calls. Daytime port days suit the Tromsø Fjord Photo Tour or Reindeer Visit and Sami Experience depending on your interests.",
  },
  {
    question: "How do I choose between aurora and fjord tours?",
    answer:
      "Aurora tours require evening departures and overnight ship calls. Fjord photo tours fit standard daytime port windows. Use the Cruise Smart Planner to match duration to your all-aboard time.",
  },
  {
    question: "Do Tromsø excursions depart near the cruise port?",
    answer:
      "Yes. Featured tours meet in central Tromsø near harbour berths or designated coach pickups, typically a short walk from most piers.",
  },
] as const;

export default function ExcursionsIndexPage() {
  return (
    <>
      <JsonLd data={[buildItemListSchema(tromsoTourListItems)]} />
      <ContentPage
        title="Tromsø Excursions"
        lead="Every cruise-friendly shore excursion in Tromsø, aurora chases, fjord photography, reindeer and Sami culture, and premium private Arctic experiences."
        heroImage={pageMeta.ogImage}
        heroImageAlt={pageMeta.ogImageAlt}
        pagePath={pageMeta.path}
        pageDescription={pageMeta.description}
        breadcrumbs={breadcrumbs}
        relatedLinks={relatedLinks}
        faqs={faqs}
        ctaTitle="Need help choosing a Tromsø tour?"
        ctaText="Use the Cruise Smart Planner on the homepage to match tours to your ship's timetable."
        ctaHref="/#planner"
        ctaButtonLabel="Open Cruise Smart Planner"
        belowHero={
          <section className="border-b bg-surface-muted">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {tromsoTourCards.map((tour) => (
                  <TourCard
                    key={tour.href}
                    href={tour.href}
                    image={tour.image}
                    imageAlt={tour.imageAlt}
                    title={tour.title}
                    description={tour.description}
                    accent={tour.accent}
                  />
                ))}
              </div>
            </div>
          </section>
        }
      >
        <section>
          <h2>Compare Tromsø shore excursions</h2>
          <p>
            Aurora chases need overnight or late-departure ship calls. Fjord photo
            tours and reindeer experiences fit standard daytime port windows.
            Private touring suits guests who want flexible routing and photography
            time without sharing a coach.
          </p>
          <p>
            For dedicated guides see{" "}
            <Link href="/northern-lights-tromso">Northern Lights Tromsø</Link>,{" "}
            <Link href="/fjord-tours-tromso">fjord tours</Link>, and{" "}
            <Link href="/reindeer-tours-tromso">reindeer tours</Link>. Use the{" "}
            <Link href="/#planner">Cruise Smart Planner</Link> on the homepage.
          </p>
        </section>
      </ContentPage>
    </>
  );
}
