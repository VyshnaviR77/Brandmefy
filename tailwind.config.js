/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#080E18',  // Deep Slate Navy
        surface: '#0E1626',     // Sapphire Navy Surface
        card: 'rgba(255,255,255,0.05)',
        primary: '#F59E0B',     // Solar Amber Gold
        secondary: '#EF4444',   // Sunset Red / Crimson
        accent: '#FF7E1D',      // Neon Orange Flare
        text: '#FFFFFF',
        muted: '#94A3B8',
      },
      fontFamily: {
        heading: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
