import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { ShipScheduleMonthCards } from "@/components/ship-schedule-month-cards";
import {
  tromsoScheduleIntegrity,
  formatScheduleDate,
  getTromsoMonthSummaries,
  scheduleDisclaimer,
  shipScheduleHubPath,
} from "@/lib/tromso-schedules";
import { imageAlts, siteImages } from "@/lib/site-images";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Tromsø Cruise Ship Schedule",
  description:
    "Browse Tromsø cruise ship schedules by month. View arrival times, departure times, and cruise lines visiting Tromsø, Norway to plan your shore day.",
  path: shipScheduleHubPath,
});

export default function ShipScheduleHubPage() {
  const months = getTromsoMonthSummaries();
  const firstLabel = tromsoScheduleIntegrity.firstDate
    ? formatScheduleDate(tromsoScheduleIntegrity.firstDate)
    : "";
  const lastLabel = tromsoScheduleIntegrity.lastDate
    ? formatScheduleDate(tromsoScheduleIntegrity.lastDate)
    : "";

  return (
    <ContentPage
      title="Tromsø cruise ship schedule"
      lead={`Published calls for Tromsø from ${firstLabel} to ${lastLabel}. Find your month, check arrival and departure times, then decide between city daylight scenery, evening aurora when the call allows, or cultural Arctic time.`}
      heroImage={siteImages.tromsoCruiseHarbour}
      heroImageAlt={imageAlts.tromsoCruiseHarbour}
      pagePath={shipScheduleHubPath}
      pageDescription={metadata.description as string}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ship schedule" },
      ]}
      ctaTitle="Plan your Tromsø port day"
      ctaText="Once you know your hours ashore, compare daylight fjord scenery, cultural reindeer and Sami options, and aurora only when darkness and ship timing allow. Keep a clear return buffer."
      ctaHref="/one-day-in-tromso"
      ctaButtonLabel="Plan your Tromsø day"
      relatedLinks={[
        { label: "Tromsø shore excursions", href: "/excursions" },
        { label: "One day in Tromsø", href: "/one-day-in-tromso" },
        { label: "Port guide", href: "/tromso-port-guide" },
        { label: "Is Tromsø worth visiting?", href: "/is-tromso-worth-visiting" },
        { label: "Best time to visit Tromsø", href: "/best-time-to-visit-tromso" },
      ]}
    >
      <section>
        <p className="rounded border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          {scheduleDisclaimer}
        </p>
        <p className="mt-4 text-base leading-7 text-slate-700">
          This local timetable is filtered from the Norway Shore Excursions master
          schedule: {tromsoScheduleIntegrity.total} Tromsø calls,{" "}
          {tromsoScheduleIntegrity.byYear["2026"] ?? 0} in 2026 and{" "}
          {tromsoScheduleIntegrity.byYear["2027"] ?? 0} in 2027, across{" "}
          {tromsoScheduleIntegrity.uniqueShips} ships.
        </p>
      </section>

      <section>
        <h2>Browse by month</h2>
        <ShipScheduleMonthCards months={months} />
      </section>

      <section>
        <h2>Why ship times matter in Tromsø</h2>
        <p>
          A daytime call usually suits harbour walks, Arctic Cathedral views, fjord
          photo touring, or reindeer and Sami experiences. Evening aurora chases
          need darkness and typically an overnight or late departure. A published
          ship call does not prove aurora or wildlife will appear that day.
        </p>
        <p>
          Continue to{" "}
          <Link href="/one-day-in-tromso">one day in Tromsø</Link>,{" "}
          <Link href="/excursions">excursion options</Link>, the{" "}
          <Link href="/tromso-port-guide">port guide</Link>, or{" "}
          <Link href="/northern-lights-tromso">Northern Lights Tromsø</Link>.
        </p>
      </section>
    </ContentPage>
  );
}
