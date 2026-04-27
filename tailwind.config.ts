import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'text-theme': 'var(--text-theme)',
        'accent-dark-gold': 'var(--accent-dark-gold)',
        'accent-light-gold': 'var(--accent-light-gold)',
        'bg-btn': 'var(--bg-btn)',
        'text-btn': 'var(--text-btn)',
        kakao: 'var(--kakao)',
      },
      keyframes: {},

      animation: {},
    },
  },
  plugins: [],
};

export default config;
