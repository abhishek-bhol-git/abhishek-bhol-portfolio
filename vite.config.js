import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const defaultGitHubPagesBase = '/abhishek-bhol-portfolio/';

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES === 'true'
    ? process.env.VITE_BASE_PATH || defaultGitHubPagesBase
    : '/',
});
