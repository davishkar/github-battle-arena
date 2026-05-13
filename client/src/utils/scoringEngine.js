// Calculate profile score based on followers, following, repos, etc.
const calculateProfileScore = (profile) => {
  const followerScore = Math.min(profile.followers * 2, 40); // Max 40
  const followingRatio = profile.following > 0 ? profile.followers / profile.following : 1;
  const ratioScore = Math.min(followingRatio * 5, 20); // Max 20
  const repoScore = Math.min(profile.public_repos * 1.5, 30); // Max 30
  const gistScore = Math.min(profile.public_gists * 2, 10); // Max 10
  
  return Math.min(100, Math.round(followerScore + ratioScore + repoScore + gistScore));
};

// Calculate repo stats: stars, forks, languages
const analyzeRepos = (repos) => {
  let stars = 0;
  let forks = 0;
  let languages = {};

  repos.forEach((repo) => {
    stars += repo.stargazers_count;
    forks += repo.forks_count;
    if (repo.language) {
      languages[repo.language] = (languages[repo.language] || 0) + 1;
    }
  });

  // Calculate top languages for radar chart
  const topLanguages = Object.entries(languages)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([lang, count]) => ({ lang, count }));

  const repoStrength = Math.min(100, Math.round((stars * 0.5) + (forks * 1) + (repos.length * 0.5)));

  return { stars, forks, topLanguages, repoStrength };
};

// Calculate consistency from contributions
const analyzeContributions = (calendar) => {
  if (!calendar) return { consistency: 0, total: 0 };
  const total = calendar.totalContributions;
  let activeDays = 0;
  let totalDays = 0;

  calendar.weeks.forEach(week => {
    week.contributionDays.forEach(day => {
      totalDays++;
      if (day.contributionCount > 0) activeDays++;
    });
  });

  const consistency = totalDays > 0 ? Math.round((activeDays / totalDays) * 100) : 0;
  return { consistency, total };
};

export const evaluateBattle = (data) => {
  const p1 = data.player1;
  const p2 = data.player2;

  const p1ProfileScore = calculateProfileScore(p1.profile);
  const p2ProfileScore = calculateProfileScore(p2.profile);

  const p1RepoStats = analyzeRepos(p1.repos);
  const p2RepoStats = analyzeRepos(p2.repos);

  const p1Activity = analyzeContributions(p1.contributions);
  const p2Activity = analyzeContributions(p2.contributions);

  // Total Power Level
  const p1Total = Math.round((p1ProfileScore + p1RepoStats.repoStrength + p1Activity.consistency) / 3);
  const p2Total = Math.round((p2ProfileScore + p2RepoStats.repoStrength + p2Activity.consistency) / 3);

  let winner = null;
  if (p1Total > p2Total) winner = p1.profile.login;
  else if (p2Total > p1Total) winner = p2.profile.login;
  else winner = "Tie";

  return {
    player1: {
      login: p1.profile.login,
      avatar: p1.profile.avatar_url,
      profile: p1.profile,
      profileScore: p1ProfileScore,
      stats: p1RepoStats,
      activity: p1Activity,
      total: p1Total,
    },
    player2: {
      login: p2.profile.login,
      avatar: p2.profile.avatar_url,
      profile: p2.profile,
      profileScore: p2ProfileScore,
      stats: p2RepoStats,
      activity: p2Activity,
      total: p2Total,
    },
    winner,
  };
};
