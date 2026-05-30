import type { Metadata } from "next";
import Link from "next/link";

import { CruisePortDayPlanner } from "@/components/cruise-port-day-planner";
import {
  ExploreNorwegianPorts,
  explorePortsFromTromso,
} from "@/components/explore-norwegian-ports";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { PlannerInterestGroups } from "@/components/planner-interest-groups";
import { TourCard } from "@/components/tour-card";
import { tromsoTourCards, tromsoTourListItems } from "@/lib/tromso-tours";
import { siteConfig } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/site-metadata";
import { buildFaqSchema, buildItemListSchema, buildWebPageSchema } from "@/lib/site-schema";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title:
    "Tromso Shore Excursions | Northern Lights, Arctic Fjords & Cruise Port Guides",
  description:
    "Plan your Tromsø cruise port day with Northern Lights aurora chases, fjord photo tours, reindeer and Sami experiences, Arctic Cathedral visits, and return-to-ship friendly shore excursion advice.",
  path: "/",
} as const;

export const metadata: Metadata = buildPageMetadata({
  ...pageMeta,
  ogImage: siteImages.hero,
  ogImageAlt: imageAlts.hero,
  absoluteTitle: true,
});

const trustBadges = [
  { label: "Return to ship on time", accent: true },
  { label: "Arctic adventure specialists", accent: false },
  { label: "Northern Lights experiences", accent: false },
] as const;

const homeFaqs = [
  {
    question: "What is the best shore excursion in Tromsø for cruise passengers?",
    answer:
      "The Aurora Chase Small Group Experience is the premium headline choice on overnight winter calls. For daytime port days, the Tromsø Fjord Photo Tour is the main scenic option. Culture-focused guests often choose the Reindeer Visit and Sami Experience.",
  },
  {
    question: "Can I see the Northern Lights on a Tromsø cruise port day?",
    answer:
      "Daytime port calls cannot fit an evening aurora chase unless your ship stays overnight in Tromsø. Winter repositioning cruises and land-and-sea combinations offer the best chance for Northern Lights shore excursions.",
  },
  {
    question: "How far is Tromsø city centre from the cruise port?",
    answer:
      "Most berths are within 10 to 20 minutes on foot of the harbourfront, Arctic Cathedral viewpoint across the bridge, and main excursion meeting points. Confirm your exact pier on the ship's app.",
  },
  {
    question: "Should I book Tromsø shore excursions independently?",
    answer:
      "Independent bookings often cost less than ship tours, but you manage your own return-to-ship timing. Use our Cruise Smart Planner, confirm all-aboard on your cruise app, and allow 45 minutes before the gangway closes.",
  },
] as const;

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          buildWebPageSchema({
            path: pageMeta.path,
            title: pageMeta.title,
            description: pageMeta.description,
          }),
          buildItemListSchema(tromsoTourListItems),
          buildFaqSchema(homeFaqs),
        ]}
      />
      <main className="min-h-screen bg-white text-slate-900">
        <PageHero
          image={siteImages.hero}
          imageAlt={imageAlts.hero}
          centered
          className="min-h-[28rem] md:min-h-[32rem]"
        >
          <h1 className="mb-4 text-3xl font-bold text-white sm:mb-6 sm:text-4xl md:text-6xl lg:text-7xl">
            Tromso Shore Excursions
          </h1>

          <p className="mx-auto mb-6 max-w-3xl text-base text-white/90 sm:mb-8 sm:text-xl md:text-2xl">
            Explore Northern Lights, Arctic fjords, Sami culture, reindeer
            experiences and unforgettable adventures from Tromsø.
          </p>

          <a href="#tours" className="btn-primary px-8 py-4 text-base sm:text-lg">
            View Excursions
          </a>

          <ul className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-3">
            {trustBadges.map((badge) => (
              <li
                key={badge.label}
                className={`rounded-full px-3 py-1.5 text-xs font-medium text-white/95 backdrop-blur-sm sm:px-4 sm:text-sm ${
                  badge.accent
                    ? "badge-accent-red"
                    : "border border-white/25 bg-white/10"
                }`}
              >
                {badge.label}
              </li>
            ))}
          </ul>
        </PageHero>

        <section id="tours" className="border-t bg-surface-muted">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 className="mb-2 text-3xl font-bold sm:mb-3 sm:text-4xl">
              Popular Tromsø Tours
            </h2>
            <p className="mb-4 max-w-2xl text-slate-600">
              Arctic shore excursions departing near Tromsø harbour, from premium
              aurora chases to fjord photography and Sami culture experiences.
            </p>
            <p className="mb-8 max-w-2xl rounded-lg border border-slate-200 border-l-[3px] border-l-[var(--norway-blue)] bg-white px-4 py-3 text-sm leading-6 text-slate-700">
              Every excursion featured is selected to fit comfortably within a
              typical Tromsø cruise port call when matched to your hours ashore.
            </p>

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
            <p className="mt-8">
              <Link
                href="/excursions"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-[var(--norway-blue)] hover:text-[var(--norway-blue)]"
              >
                View all Tromsø excursions
              </Link>
            </p>
          </div>
        </section>

        <section id="why-tromso" className="border-t bg-white">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Why Tromsø is ideal for Arctic shore excursions
            </h2>
            <p className="text-base leading-8 text-slate-700 sm:text-lg">
              Tromsø is the Arctic capital of Norway, a premium cruise destination
              where aurora tourism, Sami heritage, reindeer encounters, and fjord
              photography converge. Unlike southern fjord ports focused on
              waterfalls and glaciers, Tromsø delivers Northern Lights access,
              midnight sun summers, and indigenous Arctic culture within reach of
              the harbour.
            </p>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-base leading-8 text-slate-700">
              <li>Headline Northern Lights and aurora chase experiences in winter</li>
              <li>Arctic fjord photo tours on Kvaløya with mountain and beach scenery</li>
              <li>Reindeer visits and Sami culture with family-friendly pacing</li>
              <li>Arctic Cathedral and harbourfront within walking distance of many berths</li>
              <li>Match excursions to your actual hours ashore with our Cruise Smart Planner</li>
            </ul>
          </div>
        </section>

        <section id="aurora" className="border-t bg-surface-muted">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
                  Northern Lights and Arctic Experiences
                </h2>
                <p className="text-base leading-8 text-slate-700">
                  Tromsø sits under the auroral oval, making it one of Europe&apos;s
                  best bases for Northern Lights tourism. The{" "}
                  <Link
                    href="/excursions/aurora-chase-small-group"
                    className="content-link"
                  >
                    Aurora Chase Small Group Experience
                  </Link>{" "}
                  is the premium headline product for aurora seekers, with
                  photography-focused guiding and expert local weather routing.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Daytime calls suit the{" "}
                  <Link href="/excursions/fjord-photo-tour" className="content-link">
                    Tromsø Fjord Photo Tour
                  </Link>{" "}
                  or{" "}
                  <Link
                    href="/excursions/reindeer-sami-experience"
                    className="content-link"
                  >
                    Reindeer Visit and Sami Experience
                  </Link>
                  . Read our{" "}
                  <Link href="/northern-lights-tromso" className="content-link">
                    Northern Lights Tromsø guide
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/northern-lights-cruise-excursions"
                    className="content-link"
                  >
                    winter cruise excursions page
                  </Link>{" "}
                  for seasonal planning.
                </p>
                <Link
                  href="/northern-lights-tromso"
                  className="btn-primary-on-light mt-6 inline-block"
                >
                  Northern Lights guide
                </Link>
              </div>
              <figure className="overflow-hidden rounded-xl border border-slate-200 shadow-md">
                <img
                  src={siteImages.northernLights}
                  alt={imageAlts.northernLights}
                  className="aspect-[4/3] h-full w-full object-cover"
                />
              </figure>
            </div>
          </div>
        </section>

        <section id="planner" className="border-t bg-white">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <CruisePortDayPlanner />
            <PlannerInterestGroups />
          </div>
        </section>

        <ExploreNorwegianPorts config={explorePortsFromTromso} variant="full" />

        <section id="faqs" className="border-t bg-surface-muted">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
            <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl">
              Tromsø cruise passenger FAQs
            </h2>
            <dl className="space-y-6">
              {homeFaqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-lg border border-slate-200 border-l-[3px] border-l-[var(--norway-blue)] bg-white p-5 shadow-sm"
                >
                  <dt className="font-semibold text-slate-900">{faq.question}</dt>
                  <dd className="mt-2 leading-7 text-slate-700">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="border-t bg-navy text-white">
          <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-16">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Plan your Tromsø port day with confidence
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
              Browse Arctic shore excursions, read the port guide, and use the
              Cruise Smart Planner, everything built for cruise passengers who
              need to return on time.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href={siteConfig.shoreExcursionsPath} className="btn-primary sm:text-base">
                Book a Tour
              </Link>
              <Link href="/tromso-port-guide" className="btn-secondary sm:text-base">
                Tromsø Port Guide
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
