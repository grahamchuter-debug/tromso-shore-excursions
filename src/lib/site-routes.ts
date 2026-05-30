export const siteRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/excursions", priority: 0.9, changeFrequency: "weekly" as const },
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
] as const;
