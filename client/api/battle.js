export default async function handler(req, res) {
  const { p1, p2 } = req.query;

  if (!p1 || !p2) {
    return res.status(400).json({ error: 'Both p1 and p2 usernames are required' });
  }

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

  if (!GITHUB_TOKEN) {
    return res.status(500).json({ error: 'GitHub token is missing in server configuration' });
  }

  const headers = {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    Accept: 'application/vnd.github.v3+json',
  };

  const fetchProfile = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`, { headers });
    if (!response.ok) throw new Error(`Failed to fetch profile for ${username}`);
    return response.json();
  };

  const fetchRepos = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`, { headers });
    if (!response.ok) throw new Error(`Failed to fetch repos for ${username}`);
    return response.json();
  };

  const fetchContributions = async (username) => {
    const query = `
      query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables: { username } })
    });

    if (!response.ok) throw new Error(`Failed to fetch contributions for ${username}`);
    const result = await response.json();
    return result.data.user.contributionsCollection.contributionCalendar;
  };

  try {
    const [p1Profile, p2Profile, p1Repos, p2Repos, p1Contributions, p2Contributions] = await Promise.all([
      fetchProfile(p1),
      fetchProfile(p2),
      fetchRepos(p1),
      fetchRepos(p2),
      fetchContributions(p1),
      fetchContributions(p2),
    ]);

    res.status(200).json({
      player1: {
        profile: p1Profile,
        repos: p1Repos,
        contributions: p1Contributions,
      },
      player2: {
        profile: p2Profile,
        repos: p2Repos,
        contributions: p2Contributions,
      },
    });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: error.message });
  }
}
