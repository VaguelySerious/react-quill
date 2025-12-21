import { defineConfig } from 'vitest/config';

export default defineConfig({
  optimizeDeps: {
    include: ['react/jsx-runtime', 'react/jsx-dev-runtime'],
  },
  test: {
    include: ['test/**/*.browser.test.*'],
    browser: {
      enabled: true,
      provider: 'playwright',
      name: 'chromium',
      headless: true,
    },
  },
});
