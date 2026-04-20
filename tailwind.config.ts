import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'text-theme': 'var(--text-theme)',
        accent: 'var(--accent)',
        'bg-btn': 'var(--bg-btn)',
        'text-btn': 'var(--text-btn)',
        primary: 'var(--primary)',
        kakao: 'var(--kakao)',
        'bg-hero': 'var(--bg-hero)',
      },
      keyframes: {},

      animation: {},
    },
  },
  plugins: [],
};

export default config;
