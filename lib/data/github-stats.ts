import stats from "@/lib/data/github-stats.json";

/**
 * Statistiques GitHub reelles, extraites de l'API par
 * `node scripts/fetch-github-stats.mjs` (a relancer pour rafraichir).
 * Le calendrier de contributions etait auparavant genere aleatoirement.
 */
export const githubStats = {
  username: "kevkotuto",
  url: "https://github.com/kevkotuto",
  /** Date de la derniere extraction, au format YYYY-MM-DD. */
  fetchedAt: stats.fetchedAt,
  totalRepos: stats.totalRepos,
  yearContributions: stats.yearContributions,
  totalCommitsThisYear: stats.totalCommitsThisYear,
  pullRequests: stats.pullRequests,
  yearsActive: stats.yearsActive,
  topLanguages: stats.topLanguages,
  highlights: [
    { label: "Repos", value: String(stats.totalRepos), suffix: "" },
    { label: "Apps en prod", value: "25", suffix: "+" },
    { label: "Contributions / an", value: String(stats.yearContributions), suffix: "" },
    { label: "Années actives", value: String(stats.yearsActive), suffix: "" },
  ],
};

export type ContributionDay = { date: string; count: number; level: number };

/** Calendrier reel des 12 derniers mois, du plus ancien au plus recent. */
export function generateContributionData(): ContributionDay[] {
  return stats.calendar;
}
