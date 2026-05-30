import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Is Tromsø Worth Visiting on a Cruise?",
  description:
    "Is Tromsø worth visiting? Northern Lights, Arctic landscapes, Sami culture, reindeer experiences, fjord photography, summer cruise calls, winter tourism, and why Tromsø differs from Norway's fjord ports.",
  path: "/is-tromso-worth-visiting",
  ogImage: siteImages.worthVisiting,
  ogImageAlt: imageAlts.worthVisiting,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Is Tromsø Worth Visiting?" },
] as const;

const relatedLinks = [
  { label: "Best time to visit", href: "/best-time-to-visit-tromso" },
  { label: "Northern Lights Tromsø", href: "/northern-lights-tromso" },
  { label: "Shore excursions", href: "/excursions" },
] as const;

const faqs = [
  {
    question: "Is Tromsø worth it compared to Geiranger or Flam?",
    answer:
      "Tromsø offers Arctic aurora, Sami culture, and reindeer experiences rather than steep fjord waterfalls. Choose Tromsø for Northern Lights and Arctic identity; choose southern fjord ports for classic waterfall scenery.",
  },
  {
    question: "Is Tromsø worth visiting in summer?",
    answer:
      "Yes for midnight sun, fjord photography, and compact harbour walks. Aurora chases are not available in midsummer due to daylight.",
  },
  {
    question: "Is Tromsø worth visiting in winter?",
    answer:
      "Yes for aurora tourism, snowy Arctic atmosphere, and reindeer experiences. Confirm overnight ship calls if you want evening Northern Lights tours.",
  },
] as const;

export default function IsTromsoWorthVisitingPage() {
  return (
    <ContentPage
      title="Is Tromsø Worth Visiting?"
      lead="Why Tromsø rewards cruise passengers seeking Northern Lights, Arctic landscapes, Sami culture, reindeer encounters, and fjord photography, and how it differs from Norway's classic fjord ports."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Northern Lights and Arctic landscapes</h2>
        <p>
          Tromsø sits under the auroral oval, making it one of Europe&apos;s best
          cruise gateways for Northern Lights tourism. Arctic fjords, snowy
          mountains, and coastal beaches on Kvaløya add landscape variety beyond
          the city skyline.
        </p>
      </section>

      <section>
        <h2>Sami culture and reindeer experiences</h2>
        <p>
          Indigenous Sami heritage and reindeer visits distinguish Tromsø from
          southern waterfall ports. The{" "}
          <Link href="/excursions/reindeer-sami-experience">
            Reindeer Visit and Sami Experience
          </Link>{" "}
          suits families and culture-focused travellers.
        </p>
      </section>

      <section>
        <h2>Fjord photography and wildlife appeal</h2>
        <p>
          Tromsø fjord tours emphasise photography, coastal light, and optional
          wildlife rather than single landmark waterfalls. The{" "}
          <Link href="/excursions/fjord-photo-tour">Tromsø Fjord Photo Tour</Link>{" "}
          fits daytime cruise calls when aurora touring is not possible.
        </p>
      </section>

      <section>
        <h2>Summer cruise calls vs winter tourism</h2>
        <p>
          Summer delivers midnight sun harbour days and relaxed fjord routing.
          Winter delivers polar darkness, aurora demand, and atmospheric reindeer
          camps. Match expectations to your sailing season via our{" "}
          <Link href="/best-time-to-visit-tromso">best time to visit</Link>{" "}
          guide.
        </p>
      </section>

      <section>
        <h2>Why Tromsø is different from Norway&apos;s fjord ports</h2>
        <p>
          Geiranger, Flam, and Olden sell vertical fjord drama. Tromsø sells
          Arctic identity: aurora, Sami culture, reindeer, and high-latitude
          coastal photography. If your itinerary already includes classic fjords,
          Tromsø adds an Arctic chapter rather than repeating the same scenery.
        </p>
      </section>
    </ContentPage>
  );
}
