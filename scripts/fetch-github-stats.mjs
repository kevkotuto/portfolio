#!/usr/bin/env node
/**
 * Recupere les vraies statistiques GitHub et ecrit lib/data/github-stats.json.
 * Necessite la CLI `gh` authentifiee. A relancer pour rafraichir les chiffres :
 *   node scripts/fetch-github-stats.mjs
 */
import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";

const USER = "kevkotuto";

const gh = (query) =>
  JSON.parse(execFileSync("gh", ["api", "graphql", "-f", `query=${query}`], {
    encoding: "utf8",
    maxBuffer: 32 * 1024 * 1024,
  })).data;

const { user } = gh(`{
  user(login: "${USER}") {
    createdAt
    repositories(ownerAffiliations: OWNER) { totalCount }
    contributionsCollection {
      totalCommitContributions
      totalPullRequestContributions
      totalRepositoryContributions
      contributionCalendar {
        totalContributions
        weeks { contributionDays { date contributionCount contributionLevel } }
      }
    }
  }
}`);

const cc = user.contributionsCollection;
const LEVELS = { NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4 };

const calendar = cc.contributionCalendar.weeks
  .flatMap((w) => w.contributionDays)
  .map((d) => ({ date: d.date, count: d.contributionCount, level: LEVELS[d.contributionLevel] ?? 0 }));

// Repartition des langages, ponderee par la taille de code de chaque depot
const { user: langUser } = gh(`{
  user(login: "${USER}") {
    repositories(first: 100, ownerAffiliations: OWNER, orderBy: {field: PUSHED_AT, direction: DESC}) {
      nodes { languages(first: 10, orderBy: {field: SIZE, direction: DESC}) { edges { size node { name color } } } }
    }
  }
}`);

// Chaque depot pese autant que les autres : on additionne des parts, pas des
// octets. Sinon un seul artefact genere (21 Mo de HTML dans akili-server-final)
// ecrase la distribution et fait passer le HTML devant tout le reste.
const sizes = new Map();
const colors = new Map();
for (const repo of langUser.repositories.nodes) {
  const repoTotal = repo.languages.edges.reduce((a, e) => a + e.size, 0);
  if (!repoTotal) continue;
  for (const { size, node } of repo.languages.edges) {
    sizes.set(node.name, (sizes.get(node.name) ?? 0) + size / repoTotal);
    colors.set(node.name, node.color);
  }
}
const total = [...sizes.values()].reduce((a, b) => a + b, 0);
const ranked = [...sizes.entries()].sort((a, b) => b[1] - a[1]);
const top = ranked.slice(0, 7).map(([name, size]) => ({
  name,
  percentage: Math.round((size / total) * 100),
  color: colors.get(name) ?? "#94a3b8",
}));
const covered = top.reduce((a, l) => a + l.percentage, 0);
if (covered < 100) top.push({ name: "Autres", percentage: 100 - covered, color: "#94a3b8" });

const yearsActive = Math.floor((Date.now() - new Date(user.createdAt)) / (365.25 * 24 * 3600 * 1000));

writeFileSync(
  new URL("../lib/data/github-stats.json", import.meta.url),
  JSON.stringify(
    {
      fetchedAt: new Date().toISOString().split("T")[0],
      totalRepos: user.repositories.totalCount,
      yearContributions: cc.contributionCalendar.totalContributions,
      totalCommitsThisYear: cc.totalCommitContributions,
      pullRequests: cc.totalPullRequestContributions,
      yearsActive,
      topLanguages: top,
      calendar,
    },
    null,
    2
  ) + "\n"
);

console.log(
  `OK — ${user.repositories.totalCount} depots, ${cc.contributionCalendar.totalContributions} contributions sur 12 mois, ${calendar.length} jours de calendrier.`
);
