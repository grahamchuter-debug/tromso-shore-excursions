export type PlannerExcursionLink = {
  label: string;
  href?: string;
};

export type PortTimeTier = {
  minHours: number;
  maxHours: number | null;
  label: string;
  confidenceScore: number;
  confidenceLabel: string;
  confidenceMessage: string;
  excursions: readonly PlannerExcursionLink[];
  dayPlan: readonly string[];
  conversionNote?: string;
};

export type CruisePortDayPlannerConfig = {
  portName: string;
  heading: string;
  subtitle: string;
  supportingCopy: string;
  returnBufferNote: string;
  tiers: readonly PortTimeTier[];
};

export const tromsoPortDayPlannerConfig: CruisePortDayPlannerConfig = {
  portName: "Tromsø",
  heading: "Tromsø Cruise Smart Planner™",
  subtitle:
    "Plan your Arctic shore excursions around your actual time in port.",
  supportingCopy:
    "Built specifically for cruise passengers visiting Tromsø, the Arctic capital of Norway.",
  returnBufferNote:
    "Always confirm your cruise line's official all-aboard time, as this may be earlier than the published departure time. Arctic weather and winter darkness can slow returns from fjord or aurora tours.",
  tiers: [
    {
      minHours: 0,
      maxHours: 3,
      label: "Under 3 hours",
      confidenceScore: 40,
      confidenceLabel: "Limited Port Call",
      confidenceMessage:
        "Best suited to the Tromsø Port Guide and short waterfront or city time, skip long fjord drives or evening aurora chases.",
      excursions: [
        {
          label: "Tromsø Port Guide",
          href: "/tromso-port-guide",
        },
        { label: "Short waterfront and city time near the harbour" },
      ],
      dayPlan: [
        "Disembark promptly and confirm your pier on the ship's app",
        "Walk the harbourfront toward the Arctic Cathedral viewpoint or city centre",
        "Visit the Polar Museum or main street if within walking distance",
        "Do not book long fjord or reindeer tours, transfer time exceeds this window",
        "Return to the gangway by your recommended buffer time",
      ],
    },
    {
      minHours: 3,
      maxHours: 4,
      label: "3 to 4 hours",
      confidenceScore: 65,
      confidenceLabel: "Short but Usable Port Call",
      confidenceMessage:
        "Good for the Tromsø Fjord Photo Tour or Reindeer Visit and Sami Experience when departures align with your all-aboard time.",
      excursions: [
        {
          label: "Tromsø Fjord Photo Tour (if timing fits)",
          href: "/excursions/fjord-photo-tour",
        },
        {
          label: "Reindeer Visit and Sami Experience (if timing fits)",
          href: "/excursions/reindeer-sami-experience",
        },
      ],
      dayPlan: [
        "Meet your guide at the Tromsø cruise pier or central pickup",
        "Morning or early afternoon: fjord photo stops or reindeer and Sami camp",
        "Allow minimal extra city time, focus on one structured excursion",
        "Keep 45 minutes before all aboard for coach return across bridges or fjord roads",
      ],
    },
    {
      minHours: 4,
      maxHours: 6,
      label: "4 to 6 hours",
      confidenceScore: 85,
      confidenceLabel: "Strong Port Call",
      confidenceMessage:
        "Enough time for the Tromsø Fjord Photo Tour, Reindeer Visit and Sami Experience, or Private Fjord Photo Experience with a comfortable return buffer.",
      excursions: [
        {
          label: "Tromsø Fjord Photo Tour",
          href: "/excursions/fjord-photo-tour",
        },
        {
          label: "Reindeer Visit and Sami Experience",
          href: "/excursions/reindeer-sami-experience",
        },
        {
          label: "Private Tromsø Fjord and Photo Experience",
          href: "/excursions/private-fjord-photo-experience",
        },
      ],
      dayPlan: [
        "Confirm departure immediately after clearing the ship",
        "Morning: fjord photo tour with beaches and mountain viewpoints",
        "Or reindeer and Sami culture with Arctic food tasting where offered",
        "Private fjord touring suits guests who want flexible photo stops",
        "Return to Tromsø harbour 45 minutes before all aboard",
      ],
      conversionNote:
        "Passengers with four to six hours often choose the Tromsø Fjord Photo Tour for the fullest Arctic coastal introduction in one efficient itinerary.",
    },
    {
      minHours: 6,
      maxHours: null,
      label: "6+ hours",
      confidenceScore: 95,
      confidenceLabel: "Excellent Full Day",
      confidenceMessage:
        "Ideal for Private Fjord Photo Experience, Reindeer Visit and Sami Experience, plus relaxed Tromsø city time.",
      conversionNote:
        "Guests with six or more hours frequently combine a private fjord photo tour with harbourfront walking time, or book the reindeer and Sami experience with an unhurched return.",
      excursions: [
        {
          label: "Private Tromsø Fjord and Photo Experience",
          href: "/excursions/private-fjord-photo-experience",
        },
        {
          label: "Reindeer Visit and Sami Experience",
          href: "/excursions/reindeer-sami-experience",
        },
        { label: "Relaxed Tromsø city time near the harbour" },
      ],
      dayPlan: [
        "Arrive early and board your first excursion without delay",
        "Morning: private fjord photo tour with flexible coastal stops",
        "Midday: reindeer and Sami culture if your operator schedules a break",
        "Afternoon: Arctic Cathedral viewpoint or harbour cafés if return times are confirmed",
        "Keep the final hour free near the cruise pier for a calm gangway return",
      ],
    },
  ],
};

export const plannerInterestGroups = [
  {
    title: "Evening / winter",
    items: [
      {
        label: "Aurora Chase Small Group Experience",
        href: "/excursions/aurora-chase-small-group",
      },
      {
        label: "Private Aurora Chase",
        href: "/excursions/private-aurora-chase",
      },
    ],
  },
  {
    title: "Photography",
    items: [
      {
        label: "Tromsø Fjord Photo Tour",
        href: "/excursions/fjord-photo-tour",
      },
      {
        label: "Aurora Chase Small Group Experience",
        href: "/excursions/aurora-chase-small-group",
      },
      {
        label: "Private Tromsø Fjord and Photo Experience",
        href: "/excursions/private-fjord-photo-experience",
      },
    ],
  },
  {
    title: "Culture",
    items: [
      {
        label: "Reindeer Visit and Sami Experience",
        href: "/excursions/reindeer-sami-experience",
      },
    ],
  },
  {
    title: "Premium",
    items: [
      {
        label: "Private Aurora Chase",
        href: "/excursions/private-aurora-chase",
      },
      {
        label: "Private Tromsø Fjord and Photo Experience",
        href: "/excursions/private-fjord-photo-experience",
      },
    ],
  },
] as const;

export const RECOMMENDED_RETURN_BUFFER_MINUTES = 45;
export const LATEST_COMFORTABLE_RETURN_BUFFER_MINUTES = 30;

export function parseTimeToMinutes(time: string): number | null {
  const match = /^(\d{1,2}):(\d{2})$/.exec(time.trim());

  if (!match) {
    return null;
  }

  const hours = Number(match[1]);
  const minutes = Number(match[2]);

  if (hours > 23 || minutes > 59) {
    return null;
  }

  return hours * 60 + minutes;
}

export function formatTimeLabel(time: string): string {
  const minutes = parseTimeToMinutes(time);
  if (minutes === null) {
    return time;
  }

  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
}

export function subtractMinutesFromTime(
  time: string,
  subtractMinutes: number,
): string | null {
  const totalMinutes = parseTimeToMinutes(time);
  if (totalMinutes === null) {
    return null;
  }

  let result = totalMinutes - subtractMinutes;
  if (result < 0) {
    result += 24 * 60;
  }

  const hours = Math.floor(result / 60) % 24;
  const minutes = result % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

export function calculatePortMinutes(
  arrival: string,
  departure: string,
): number | null {
  const arrivalMinutes = parseTimeToMinutes(arrival);
  const departureMinutes = parseTimeToMinutes(departure);

  if (arrivalMinutes === null || departureMinutes === null) {
    return null;
  }

  let diff = departureMinutes - arrivalMinutes;

  if (diff <= 0) {
    diff += 24 * 60;
  }

  return diff;
}

export function formatPortDuration(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours === 0) {
    return `${minutes} minute${minutes === 1 ? "" : "s"}`;
  }

  if (minutes === 0) {
    return `${hours} hour${hours === 1 ? "" : "s"}`;
  }

  return `${hours} hour${hours === 1 ? "" : "s"} ${minutes} minute${minutes === 1 ? "" : "s"}`;
}

export function getTierForPortMinutes(
  totalMinutes: number,
  tiers: readonly PortTimeTier[],
): PortTimeTier {
  const hours = totalMinutes / 60;

  return (
    tiers.find((tier) => {
      const meetsMinimum = hours >= tier.minHours;
      const belowMaximum = tier.maxHours === null || hours < tier.maxHours;
      return meetsMinimum && belowMaximum;
    }) ?? tiers[tiers.length - 1]
  );
}

export function getReturnGuidance(departure: string) {
  return {
    departureLabel: formatTimeLabel(departure),
    recommendedReturn: subtractMinutesFromTime(
      departure,
      RECOMMENDED_RETURN_BUFFER_MINUTES,
    ),
    latestComfortableReturn: subtractMinutesFromTime(
      departure,
      LATEST_COMFORTABLE_RETURN_BUFFER_MINUTES,
    ),
  };
}

export function getConfidenceTone(score: number): {
  badge: string;
  bar: string;
} {
  if (score >= 90) {
    return { badge: "bg-emerald-100 text-emerald-800", bar: "bg-emerald-500" };
  }
  if (score >= 65) {
    return { badge: "bg-amber-100 text-amber-800", bar: "bg-amber-500" };
  }
  return { badge: "bg-orange-100 text-orange-800", bar: "bg-orange-500" };
}
