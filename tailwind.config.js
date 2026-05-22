/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0D0D0D',
          card: '#121212',
          elevated: '#1E1E1E',
        },
        accent: {
          DEFAULT: '#00BFA6',
          light: '#1DE9B6',
        },
        muted: {
          DEFAULT: '#B0B0B0',
          dim: '#A0A0A0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(0, 191, 166, 0.25)',
        'glow-sm': '0 4px 20px rgba(0, 191, 166, 0.3)',
        card: '0 8px 32px rgba(0, 0, 0, 0.35)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-20px)' },
        },
        'pulse-soft': {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
