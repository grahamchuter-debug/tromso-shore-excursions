import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContentPage } from "@/components/content-page";
import { ShipScheduleTable } from "@/components/ship-schedule-table";
import {
  formatMonthLabel,
  getTromsoEntriesForMonthKey,
  getTromsoMonthKeysWithCalls,
  getTromsoMonthSummaries,
  monthKeyToSlug,
  monthSlugToKey,
  scheduleDisclaimer,
  shipScheduleHubPath,
  shipScheduleMonthPath,
} from "@/lib/tromso-schedules";
import { imageAlts, siteImages } from "@/lib/site-images";
import { buildPageMetadata } from "@/lib/site-metadata";

type MonthPageProps = {
  params: Promise<{ monthSlug: string }>;
};

export function generateStaticParams() {
  return getTromsoMonthKeysWithCalls().map((monthKey) => ({
    monthSlug: monthKeyToSlug(monthKey),
  }));
}

export async function generateMetadata({
  params,
}: MonthPageProps): Promise<Metadata> {
  const { monthSlug } = await params;
  const monthKey = monthSlugToKey(monthSlug);
  if (!monthKey) return {};
  const label = formatMonthLabel(monthKey);
  return buildPageMetadata({
    title: `Tromsø Cruise Ship Schedule ${label}`,
    description: `View the Tromsø cruise ship schedule for ${label} including arrival times, departure times, and cruise lines visiting Tromsø, Norway.`,
    path: shipScheduleMonthPath(monthSlug),
  });
}

export default async function TromsoShipScheduleMonthPage({
  params,
}: MonthPageProps) {
  const { monthSlug } = await params;
  const monthKey = monthSlugToKey(monthSlug);
  if (!monthKey) notFound();

  const entries = getTromsoEntriesForMonthKey(monthKey);
  if (entries.length === 0) notFound();

  const label = formatMonthLabel(monthKey);
  const otherMonths = getTromsoMonthSummaries().filter(
    (m) => m.slug !== monthSlug,
  );

  return (
    <ContentPage
      title={`Tromsø cruise schedule: ${label}`}
      lead={`${entries.length} published ship call${entries.length === 1 ? "" : "s"} for ${label}. Find your vessel, note arrival and departure, then choose a realistic Tromsø plan.`}
      heroImage={siteImages.tromsoCruiseHarbour}
      heroImageAlt={imageAlts.tromsoCruiseHarbour}
      pagePath={shipScheduleMonthPath(monthSlug)}
      pageDescription={`Tromsø cruise ship schedule for ${label}.`}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ship schedule", href: shipScheduleHubPath },
        { label },
      ]}
      ctaTitle="Plan your Tromsø port day"
      ctaText="Use your hours ashore to choose city daylight scenery, cultural Arctic time, or evening aurora only when darkness and ship timing allow. Keep a clear return buffer."
      ctaHref="/one-day-in-tromso"
      ctaButtonLabel="Plan your Tromsø day"
      relatedLinks={[
        { label: "All months", href: shipScheduleHubPath },
        { label: "Explore excursions", href: "/excursions" },
        { label: "Port guide", href: "/tromso-port-guide" },
        { label: "One day in Tromsø", href: "/one-day-in-tromso" },
      ]}
    >
      <section>
        <p className="rounded border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          {scheduleDisclaimer}
        </p>
      </section>

      <section>
        <h2>{label} ship calls</h2>
        <ShipScheduleTable entries={entries} />
      </section>

      <section>
        <h2>Next: turn your date into a plan</h2>
        <p>
          Once you know roughly how long you have ashore, choose one main
          experience that fits. Ship times alone cannot prove that aurora or
          wildlife will be visible on your call.
        </p>
        <ul>
          <li>
            <Link href="/one-day-in-tromso">One day in Tromsø</Link>
          </li>
          <li>
            <Link href="/excursions">Tromsø shore excursions</Link>
          </li>
          <li>
            <Link href="/tromso-port-guide">Tromsø cruise port guide</Link>
          </li>
          <li>
            <Link href="/northern-lights-tromso">Northern Lights Tromsø</Link>
          </li>
        </ul>
      </section>

      <section>
        <h2>Other Tromsø months</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {otherMonths.map((month) => (
            <li key={month.slug}>
              <Link href={shipScheduleMonthPath(month.slug)}>
                {month.label} · {month.callCount} calls
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </ContentPage>
  );
}
