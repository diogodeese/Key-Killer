/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pinky: 'var(--color-pinky)',
        ring: 'var(--color-ring)',
        middle: 'var(--color-middle)',
        pointerout: 'var(--color-pointerout)',
        pointerin: 'var(--color-pointerin)',
      },
    },
  },
  plugins: [],
};
