# Contributing to GitHub Battle Arena ⚔️

First off, thank you for considering contributing to **GitHub Battle Arena**! It's people like you that make open source such a great community to learn, inspire, and create.

## 🤝 Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct. Please be respectful, welcoming, and collaborative.

## 🚀 Getting Started

If you'd like to contribute, please follow these steps:

### Prerequisites

*   Node.js (v18 or higher)
*   A GitHub Personal Access Token (PAT)

### Local Setup

1.  **Fork the repository** to your own GitHub account.
2.  **Clone your fork** to your local machine:
    ```bash
    git clone https://github.com/YOUR_USERNAME/github-battle-arena.git
    cd github-battle-arena
    ```
3.  **Install dependencies** in the client directory:
    ```bash
    cd client
    npm install
    ```
4.  **Set up environment variables:**
    Create a `.env` file in the `client` directory:
    ```env
    ARENA_GITHUB_TOKEN=your_github_personal_access_token_here
    ```
5.  **Run the development server:**
    ```bash
    npm run dev
    ```

*Note: To fully test the `/api/battle` endpoint locally, use the Vercel CLI (`vercel dev`).*

## 📁 Project Structure

*   `client/`: Contains the React/Vite frontend application.
    *   `src/components/`: Reusable React components (UI, BattleCard, etc.).
    *   `src/services/`: API integration and data fetching logic.
    *   `public/`: Static assets.
*   `api/`: Vercel Serverless Functions (backend logic).

## 🌿 Branching Strategy

Please follow this naming convention for your branches:
*   `feature/your-feature-name` (For new features)
*   `fix/your-bug-fix-name` (For bug fixes)
*   `docs/your-doc-update-name` (For documentation updates)

## 💬 Commit Messages

We prefer clear and descriptive commit messages. Please try to follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:
*   `feat: add new radar chart component`
*   `fix: resolve api rate limit issue`
*   `docs: update readme with setup instructions`
*   `style: improve responsiveness on mobile`

## 🔄 Pull Request Process

1.  Ensure your code follows the existing style and conventions.
2.  Test your changes locally to ensure they don't break existing functionality.
3.  Update the README.md with details of changes to the interface, if applicable.
4.  Submit a Pull Request targeting the `main` branch.
5.  Provide a clear and descriptive title and description for your PR.
6.  Wait for a review from the maintainers and address any feedback.

## 🐛 Reporting Bugs

If you find a bug, please create an issue and include:
*   A clear and descriptive title.
*   Steps to reproduce the bug.
*   Expected and actual behavior.
*   Screenshots or error logs, if applicable.
*   Your environment (OS, Browser, Node version).

## 💡 Suggesting Enhancements

Have an idea for a cool new feature? We'd love to hear it! Open an issue and provide:
*   A clear description of the feature.
*   Why it would be useful.
*   Any potential alternatives you've considered.

Thank you for your contributions!
