# Abhishek Bhol Portfolio

A premium single-page React portfolio for Abhishek Bhol, Senior Application Developer focused on DevOps, Platform Engineering, OpenShift, Kubernetes, CI/CD automation, Node.js microservices, and cloud-native modernization.

## Tech Stack

- React
- Vite
- Vanilla JavaScript
- CSS
- Framer Motion
- Lucide React
- GitHub Actions
- GitHub Pages

## Features

- Premium modern dark UI
- Recruiter-focused hero section
- Strong skill-first layout
- Responsive desktop, tablet, and mobile design
- Smooth but subtle animations
- Glassmorphism cards and cloud-native visual language
- Concise LinkedIn-style experience timeline
- Generic case studies without confidential client or project names
- Accessible semantic markup
- Mailto-based contact CTA with no backend required
- GitHub Pages deployment workflow included

## Local Setup

```bash
git clone https://github.com/<your-github-username>/abhishek-portfolio.git
cd abhishek-portfolio
npm install
npm run dev
```

Vite will print a local development URL, usually:

```bash
http://localhost:5173/
```

## Build Locally

```bash
npm run build
npm run preview
```

## Profile Image

Place your professional profile photo here:

```bash
public/images/profile.jpg
```

The app is already wired to use this path. If the image is missing, the UI gracefully falls back to an `AB` initials block instead of crashing.

## Update Portfolio Content

Most profile content is centralized in:

```bash
src/data/portfolioData.js
```

Update this file to change:

- Name, title, location, email, LinkedIn, GitHub
- Hero badges
- Skill categories
- Experience bullets
- Case studies
- Certifications
- Education

## GitHub Pages Deployment

This project includes a GitHub Actions workflow at:

```bash
.github/workflows/deploy.yml
```

The workflow:

1. Runs on every push to `main`
2. Installs dependencies
3. Builds the Vite app
4. Uploads the `dist` folder
5. Deploys to GitHub Pages using official GitHub Pages actions

### Repository Base Path

The default GitHub Pages base path assumes the repository name is:

```bash
abhishek-portfolio
```

This is configured in:

```bash
vite.config.js
```

For a different repository name, update either:

```js
const defaultGitHubPagesBase = '/abhishek-portfolio/';
```

or change the workflow environment variable:

```yaml
VITE_BASE_PATH: '/abhishek-portfolio/'
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<your-github-username>/abhishek-portfolio.git
git push -u origin main
```

## Enable GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings**.
3. Go to **Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Push to `main` again if needed.
6. The workflow will deploy the site automatically.

## Author

**Abhishek Bhol**  
Senior Application Developer  
Kolkata, India  
Email: abhishekkbhol@gmail.com  
LinkedIn: https://www.linkedin.com/in/abhishek-b-2a34b3359/  
GitHub: https://github.com/abhishek-bhol-git
