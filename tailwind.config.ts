import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        text: 'var(--text)',
        'text-accent': 'var(--text-accent)',
        'bg-btn': 'var(--bg-btn)',
        'text-btn': 'var(--text-btn)',
        primary: 'var(--primary)',
      },
      keyframes: {},

      animation: {},
    },
  },
  plugins: [],
};

export default config;
