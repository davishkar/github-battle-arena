/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        card: "#12121a",
        primary: "#ff0055",
        secondary: "#00f0ff",
        accent: "#7000ff",
        text: "#e0e0e0",
        muted: "#6b7280"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 10px #ff0055, 0 0 20px #ff0055' },
          '100%': { boxShadow: '0 0 20px #ff0055, 0 0 40px #ff0055' },
        }
      }
    },
  },
  plugins: [],
}
