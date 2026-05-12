export const githubStats = {
  username: "kevkotuto",
  url: "https://github.com/kevkotuto",
  totalRepos: 99,
  yearContributions: 400,
  totalCommitsThisYear: 74,
  pullRequests: 1,
  yearsActive: 5,
  topLanguages: [
    { name: "TypeScript", percentage: 58, color: "#3178C6" },
    { name: "JavaScript", percentage: 22, color: "#F7DF1E" },
    { name: "Python", percentage: 6, color: "#3776AB" },
    { name: "Shell", percentage: 4, color: "#89E051" },
    { name: "Dockerfile", percentage: 4, color: "#384D54" },
    { name: "CSS", percentage: 3, color: "#1572B6" },
    { name: "Swift", percentage: 2, color: "#FA7343" },
    { name: "Other", percentage: 1, color: "#94a3b8" },
  ],
  highlights: [
    { label: "Repos", value: "99", suffix: "" },
    { label: "Apps en prod", value: "25", suffix: "+" },
    { label: "Contributions / an", value: "400", suffix: "+" },
    { label: "Années actives", value: "5", suffix: "" },
  ],
};

// Generate deterministic-looking contribution calendar for the last year
// Levels 0-4 like GitHub
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function generateContributionData(): { date: string; count: number; level: number }[] {
  const today = new Date();
  const data: { date: string; count: number; level: number }[] = [];

  for (let i = 364; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const day = d.getDay();
    const r = seededRandom(i + d.getMonth() * 31 + d.getDate());
    // weekends slightly less activity
    const weekendPenalty = day === 0 || day === 6 ? 0.5 : 1;
    const intensity = r * weekendPenalty;
    let level = 0;
    let count = 0;
    if (intensity > 0.85) {
      level = 4;
      count = 8 + Math.floor(r * 12);
    } else if (intensity > 0.65) {
      level = 3;
      count = 4 + Math.floor(r * 5);
    } else if (intensity > 0.45) {
      level = 2;
      count = 2 + Math.floor(r * 3);
    } else if (intensity > 0.25) {
      level = 1;
      count = 1;
    }
    data.push({ date: d.toISOString().split("T")[0], count, level });
  }
  return data;
}
