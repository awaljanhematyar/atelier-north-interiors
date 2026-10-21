import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { seoBuildPlugin } from './scripts/seo-build.js'

const site = { origin: process.env.SITE_URL || '', index: process.env.INDEX_SITE === 'true' }

export default defineConfig({
  plugins: [react(), tailwindcss(), seoBuildPlugin(site)],
  define: {
    'import.meta.env.VITE_SITE_URL': JSON.stringify(site.origin),
    'import.meta.env.VITE_INDEX_SITE': JSON.stringify(String(site.index)),
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.js'],
    clearMocks: true,
    restoreMocks: true,
    // Keep per-file isolation while avoiding unreliable Windows child-process startup.
    pool: 'threads',
    maxWorkers: 2,
    testTimeout: 10000,
  },
})
