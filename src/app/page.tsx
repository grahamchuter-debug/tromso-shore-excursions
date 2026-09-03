import type { Metadata } from "next";
import Link from "next/link";

import { CruisePortDayPlanner } from "@/components/cruise-port-day-planner";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { TourCard } from "@/components/tour-card";
import {
  tromsoScheduleIntegrity,
  formatScheduleDate,
} from "@/lib/tromso-schedules";
import { tromsoTourCards, tromsoTourListItems } from "@/lib/tromso-tours";
import { siteConfig } from "@/lib/site-config";
import { imageAlts, siteImages } from "@/lib/site-images";
import { buildPageMetadata } from "@/lib/site-metadata";
import {
  buildFaqSchema,
  buildItemListSchema,
  buildWebPageSchema,
} from "@/lib/site-schema";

const pageMeta = {
  title:
    "Tromso Shore Excursions | Cruise Port Tours, Arctic City & Aurora Guides",
  description:
    "Plan your Tromsø cruise port day: city and fjord daylight, Northern Lights when darkness and ship timing allow, reindeer and Sami culture, published ship schedules, and honest return-buffer planning.",
  path: "/",
} as const;

export const metadata: Metadata = buildPageMetadata({
  ...pageMeta,
  ogImage: siteImages.hero,
  ogImageAlt: imageAlts.hero,
  absoluteTitle: true,
});

const homeFaqs = [
  {
    question: "Is this site for cruise passengers calling at Tromsø?",
    answer:
      "Yes. This is an independent Tromsø cruise-port planning site. It helps you choose between city daylight scenery, cultural Arctic time, and evening aurora only when darkness and ship timing allow. Confirm final timings with your cruise line.",
  },
  {
    question: "Can I see the Northern Lights on a Tromsø cruise port day?",
    answer:
      "Only when darkness and your ship timing allow, typically overnight winter calls or late departures. Daytime summer calls sit in midnight-sun daylight, so aurora chasing is not realistic then. A published ship call never proves lights will appear.",
  },
  {
    question: "Should I book shore excursions on this site?",
    answer:
      "This site is for planning and discovery. There is no live booking checkout here. Use the excursion pages and guides to understand options, then arrange tours through operators or your usual booking channel.",
  },
  {
    question: "How do I choose between fjord scenery, aurora and reindeer?",
    answer:
      "Match the outing to hours ashore and season. Daylight calls suit harbour walks, fjord photo touring and cultural experiences. Evening aurora needs darkness plus confirmed return timing. Pick one main direction unless tickets and timing are already locked in.",
  },
] as const;

export default function Home() {
  const firstLabel = tromsoScheduleIntegrity.firstDate
    ? formatScheduleDate(tromsoScheduleIntegrity.firstDate)
    : "";
  const lastLabel = tromsoScheduleIntegrity.lastDate
    ? formatScheduleDate(tromsoScheduleIntegrity.lastDate)
    : "";
  const featured = tromsoTourCards.slice(0, 3);
  const remaining = tromsoTourCards.slice(3);

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
      <main>
        <PageHero
          image={siteImages.hero}
          imageAlt={imageAlts.hero}
          className="min-h-[28rem] md:min-h-[32rem]"
        >
          <p className="hero-eyebrow mb-3 text-xs font-semibold uppercase tracking-[0.2em]">
            {siteConfig.name}
          </p>
          <h1 className="mb-5 max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
            Your ship is in Tromsø. City daylight, evening aurora, or cultural
            Arctic time?
          </h1>
          <p className="max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
            Harbour and fjord scenery by day, Northern Lights only when darkness
            and your call allow, or reindeer and Sami culture. Choose one main
            direction, then keep time to get back.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/excursions"
              className="btn-primary w-full justify-center sm:w-auto"
            >
              Explore Tromsø excursions
            </Link>
            <Link
              href="/ship-schedule"
              className="btn-secondary w-full justify-center sm:w-auto"
            >
              Check your ship schedule
            </Link>
          </div>
        </PageHero>

        <section className="border-b border-[var(--border-light)] bg-[var(--surface)] py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Three Tromsø days</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              City daylight, evening aurora, or cultural Arctic time
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              The inventory on this site already splits that way. Use the one-day
              guide for hours. A published ship call is not proof of aurora or
              wildlife.
            </p>
            <div className="mt-10 grid gap-10 md:grid-cols-3">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  City and daylight scenery
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Harbour walks, Arctic Cathedral views and Kvaløya fjord photo
                  touring when you want Tromsø in daylight.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <Link
                    href="/excursions/fjord-photo-tour"
                    className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--norway-blue)] underline-offset-4 hover:underline"
                  >
                    Tromsø Fjord Photo Tour
                  </Link>
                  <Link
                    href="/tromso-port-guide"
                    className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--norway-blue)] underline-offset-4 hover:underline"
                  >
                    Tromsø port guide
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Evening aurora
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Aurora chases only when darkness and ship timing allow,
                  typically overnight winter calls. Visibility stays weather and
                  solar-activity dependent. No sighting is promised.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <Link
                    href="/excursions/aurora-chase-small-group"
                    className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--norway-blue)] underline-offset-4 hover:underline"
                  >
                    Aurora Chase Small Group
                  </Link>
                  <Link
                    href="/northern-lights-tromso"
                    className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--norway-blue)] underline-offset-4 hover:underline"
                  >
                    Northern Lights guide
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Cultural Arctic time
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Reindeer visits and Sami culture for guests who want heritage
                  and wildlife context without a late-night chase.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <Link
                    href="/excursions/reindeer-sami-experience"
                    className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--norway-blue)] underline-offset-4 hover:underline"
                  >
                    Reindeer and Sami Experience
                  </Link>
                  <Link
                    href="/reindeer-tours-tromso"
                    className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--norway-blue)] underline-offset-4 hover:underline"
                  >
                    Reindeer tours guide
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border-light)] bg-surface-muted py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Find your ship</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Check when your ship is in Tromsø
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              {tromsoScheduleIntegrity.total} published Tromsø calls from{" "}
              {firstLabel} to {lastLabel}. Arrival and departure times shape what
              is realistic ashore. Always confirm with your cruise line.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/ship-schedule" className="btn-outline-dark">
                Open Tromsø ship schedule
              </Link>
              <Link
                href="/one-day-in-tromso"
                className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--norway-blue)] underline-offset-4 hover:underline"
              >
                Then plan your hours
              </Link>
            </div>
          </div>
        </section>

        <section id="tours" className="scroll-mt-24 py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Excursion options</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Experiences already on this site
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Five products. No invented prices. Durations are approximate. Keep
              a return buffer. This site does not sell tickets.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {featured.map((tour) => (
                <TourCard key={tour.href} {...tour} />
              ))}
            </div>
            {remaining.length > 0 ? (
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {remaining.map((tour) => (
                  <TourCard key={tour.href} {...tour} />
                ))}
              </div>
            ) : null}
            <p className="mt-8">
              <Link
                href="/excursions"
                className="text-sm font-semibold text-[var(--norway-blue)] underline-offset-4 hover:underline"
              >
                Compare all Tromsø excursions
              </Link>
            </p>
          </div>
        </section>

        <section className="border-y border-[var(--border-light)] bg-[var(--surface)] py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Season and timing</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Schedule presence is not aurora availability
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Summer calls bring long daylight and fjord scenery. Darker months
              open evening aurora possibilities when skies cooperate. Midnight
              sun and Northern Lights are seasonal context only, both still
              depend on weather and visibility. No particular ship call is
              promised lights.
            </p>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">First time in Tromsø</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Useful planning guides
            </h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: "/tromso-port-guide",
                  title: "Cruise port guide",
                  text: "Harbour layout, city access and pickup context for Tromsø.",
                },
                {
                  href: "/one-day-in-tromso",
                  title: "One day in Tromsø",
                  text: "Sample shapes for short, classic and longer port calls.",
                },
                {
                  href: "/is-tromso-worth-visiting",
                  title: "Is Tromsø worth visiting?",
                  text: "Honest context if you are deciding how to spend hours ashore.",
                },
              ].map((item) => (
                <li
                  key={item.href}
                  className="border-t border-[var(--border-light)] pt-5"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    <Link
                      href={item.href}
                      className="underline-offset-4 hover:underline"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="planner"
          className="scroll-mt-24 border-y border-[var(--border-light)] bg-surface-muted py-14 sm:py-16"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Port-day planning</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Think in hours, darkness and return buffer
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Use published times as a planning start. This Cruise Smart Planner
              helps you think through the day. It does not invent coach
              operation, weather or aurora visibility.
            </p>
            <div className="mt-8">
              <CruisePortDayPlanner />
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Norway beyond Tromsø</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Planning other Norwegian ports?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              For multi-port itineraries, the national planning site covers the
              wider Norway cruise picture.
            </p>
            <a
              href={siteConfig.nationalAuthorityUrl}
              className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--norway-blue)] underline-offset-4 hover:underline"
            >
              Norway Shore Excursions
            </a>
          </div>
        </section>

        <section className="border-y border-[var(--border-light)] bg-[var(--surface)] py-14 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <p className="section-eyebrow">FAQ</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Tromsø cruise questions
            </h2>
            <dl className="mt-8 space-y-6">
              {homeFaqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="font-semibold text-slate-900">{faq.question}</dt>
                  <dd className="mt-2 text-sm leading-6 text-slate-600">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="bg-navy py-14 text-white sm:py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Tromsø planning concierge
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
              {siteConfig.contactEmailVerified
                ? `Questions about shaping a Tromsø port day? Email ${siteConfig.contactEmail}.`
                : "A destination email is being prepared. Until then, use the schedule, one-day guide and excursion pages on this site."}
            </p>
            <Link href="/contact" className="btn-primary mt-6">
              Contact
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
