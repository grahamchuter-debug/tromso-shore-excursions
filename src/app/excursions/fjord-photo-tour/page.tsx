import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { fjordPhotoTourExcursion } from "@/lib/excursions/tromso-excursions";
import { buildPageMetadata } from "@/lib/site-metadata";

const excursion = fjordPhotoTourExcursion;

export const metadata: Metadata = buildPageMetadata({
  title: excursion.metaTitle,
  description: excursion.metaDescription,
  path: excursion.path,
  ogImage: excursion.heroImage,
  ogImageAlt: excursion.heroImageAlt,
});

export default function Page() {
  return <ExcursionDetailPage excursion={excursion} />;
}
