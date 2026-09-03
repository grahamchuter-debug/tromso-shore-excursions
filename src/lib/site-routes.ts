import {
  getTromsoMonthSummaries,
  shipScheduleHubPath,
  shipScheduleMonthPath,
} from "@/lib/tromso-schedules";

const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  {
    path: "/excursions",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/aurora-chase-small-group",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/fjord-photo-tour",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/reindeer-sami-experience",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/private-aurora-chase",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/private-fjord-photo-experience",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/tromso-port-guide",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/one-day-in-tromso",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/is-tromso-worth-visiting",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/best-time-to-visit-tromso",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/northern-lights-tromso",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/best-northern-lights-tours-tromso",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/reindeer-tours-tromso",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/fjord-tours-tromso",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/northern-lights-cruise-excursions",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: shipScheduleHubPath,
    priority: 0.85,
    changeFrequency: "weekly" as const,
  },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" as const },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/about", priority: 0.5, changeFrequency: "yearly" as const },
] as const;

export function getSiteRoutes() {
  const monthRoutes = getTromsoMonthSummaries().map((month) => ({
    path: shipScheduleMonthPath(month.slug),
    priority: 0.7,
    changeFrequency: "weekly" as const,
  }));
  return [...staticRoutes, ...monthRoutes];
}

export const siteRoutes = staticRoutes;
