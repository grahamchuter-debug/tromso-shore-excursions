import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { siteConfig } from "@/lib/site-config";
import { imageAlts, siteImages } from "@/lib/site-images";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "About Tromso Shore Excursions",
  description:
    "About Tromso Shore Excursions: independent cruise-port planning for Arctic city daylight, Northern Lights when timing allows, reindeer and Sami culture, and published ship schedules.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <ContentPage
      title="About Tromso Shore Excursions"
      lead="An independent planning site for cruise passengers calling at Tromsø. City daylight scenery, evening aurora when the call allows, cultural Arctic time, and published ship schedules in one place."
      heroImage={siteImages.tromsoHarbour}
      heroImageAlt={imageAlts.tromsoHarbour}
      pagePath="/about"
      pageDescription={metadata.description as string}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "About" },
      ]}
      ctaTitle="Start with your Tromsø day"
      ctaText="Check the ship schedule, then explore daylight scenery, cultural options, or aurora only when darkness and ship timing allow."
      ctaHref="/ship-schedule"
      ctaButtonLabel="Check ship schedule"
      showShipReassurance={false}
      relatedLinks={[
        { label: "Contact", href: "/contact" },
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ]}
    >
      <section>
        <h2>What this site is</h2>
        <p>
          Tromso Shore Excursions helps cruise passengers plan a realistic day in
          Tromsø: harbour and Arctic Cathedral walks, fjord photography on
          Kvaløya, reindeer and Sami experiences, Northern Lights context when
          darkness and overnight timing allow, and published ship-call
          information drawn from the Norway Shore Excursions master schedule.
        </p>
      </section>

      <section>
        <h2>What this site is not</h2>
        <ul>
          <li>Not a cruise line, coach operator or port authority</li>
          <li>Not an official tourism board</li>
          <li>Not a live booking checkout</li>
          <li>Not a guarantee of berth, timings, aurora, wildlife or ticket availability</li>
        </ul>
      </section>

      <section>
        <h2>National context</h2>
        <p>
          For multi-port Norway planning, see{" "}
          <a href={siteConfig.nationalAuthorityUrl}>Norway Shore Excursions</a>.
          This site stays focused on Tromsø.
        </p>
        <p>
          <Link href="/contact">Contact</Link>
          {" · "}
          <Link href="/privacy">Privacy</Link>
          {" · "}
          <Link href="/terms">Terms</Link>
        </p>
      </section>
    </ContentPage>
  );
}
