<div align="center">
  <img src="client/public/favicon.svg" alt="Logo" width="80" height="80">
  <h1 align="center">GitHub Battle Arena ⚔️</h1>
  <p align="center">
    <strong>"Two developers enter. One survives the algorithm."</strong>
    <br />
    <br />
    <a href="https://commit-clash.vercel.app">View Demo</a>
    ·
    <a href="https://github.com/davishkar/github-battle-arena/issues">Report Bug</a>
  </p>
</div>

---

## ⚡ Overview

**GitHub Battle Arena** is an interactive, cyberpunk-themed web application that pits two developers against each other to see who has the stronger GitHub profile. The platform uses an advanced scoring engine to fetch live GitHub data, analyze repositories, and crown the ultimate winner with a dramatic, animated reveal.

## 🔥 Key Features

- **Profile Strength Calculation:** Evaluates followers, following ratio, and repository count to determine raw profile power.
- **Repo Analysis:** Calculates the total stars and forks across a user's repositories.
- **Language Mastery (Radar Chart):** Aggregates the top languages used across all public repositories and maps them onto an interactive radar chart.
- **Commits Consistency Engine:** Leverages the GitHub GraphQL API to scan up to a year of commit history and evaluates how consistently each developer codes.
- **Epic UI/UX:** Built with a fully responsive "Cyberpunk / Gaming" aesthetic using Tailwind CSS and fluid micro-animations powered by Framer Motion.
- **AI Verdict:** Calculates a final "Power Level" and provides a detailed summary explaining why the winner survived the algorithm.

## 🛠️ Technology Stack

- **Frontend Framework:** React (Vite)
- **Styling:** Tailwind CSS (Custom Cyberpunk Theme)
- **Animations:** Framer Motion
- **Data Visualization:** Recharts
- **Icons:** Lucide React
- **Backend / API:** Vercel Serverless Functions (`api/battle.js`)
- **Data Source:** GitHub REST API & GitHub GraphQL API

---

## 🚀 Running Locally

Follow these steps to run the GitHub Battle Arena on your local machine.

### Prerequisites
- Node.js installed (v18+)
- A GitHub Personal Access Token (PAT)

### 1. Clone the repository
```bash
git clone https://github.com/davishkar/github-battle-arena.git
cd github-battle-arena
```

### 2. Install dependencies
```bash
cd client
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the `client` directory and add your GitHub Personal Access Token:
```env
ARENA_GITHUB_TOKEN=your_github_personal_access_token_here
```
*(Note: Do not share your token. The `.env` file is excluded from Git via `.gitignore`.)*

### 4. Start the development server
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

> **Note on Local API calls:** By default, local Vite environments do not serve Vercel Serverless Functions. To fully test the `/api/battle` endpoint locally, you should use the [Vercel CLI](https://vercel.com/docs/cli) and run `vercel dev`.

---

## 🌐 Deployment to Vercel

This project is perfectly configured to be deployed securely via Vercel Serverless Functions.

1. Push your code to your GitHub repository.
2. Import the repository into the **Vercel Dashboard**.
3. Set the **Root Directory** to `client`.
4. Ensure the Framework Preset is set to **Vite**.
5. Under **Environment Variables**, add:
   - **Key:** `ARENA_GITHUB_TOKEN`
   - **Value:** `your_github_personal_access_token_here`
6. Click **Deploy**.

Vercel will build the React frontend and automatically configure `api/battle.js` as a secure backend endpoint, hiding your token from public view!

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

<div align="center">
  <i>Built by <a href="https://github.com/davishkar">Avishkar Deshmukh</a></i>
</div>
