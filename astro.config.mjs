// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL et BASE_PATH sont fournis par GitHub Actions :
// - aperçu GitHub Pages : https://florian78140.github.io + /fsimon.fr
// - production OVH      : https://www.fsimon.fr + /
export default defineConfig({
  site: process.env.SITE_URL || 'https://www.fsimon.fr',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
});
