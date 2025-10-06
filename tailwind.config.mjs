import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        serifjp: ['"Noto Serif JP"', 'serif'],
      },
    },
  },
  plugins: [],
})
