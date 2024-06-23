const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Miriam Libre', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: {
          50: "#fff6e6",
          100: "#ffe3b0",
          200: "#ffd68a",
          300: "#ffc354",
          400: "#ffb733",
          500: "#ffa500",
          600: "#e89600",
          700: "#b57500",
          800: "#8c5b00",
          900: "#6b4500",
        },
        secondary: {
          50: "#fdfdfd",
          100: "#f7f7f7",
          200: "#f4f4f4",
          300: "#eeeeee",
          400: "#ebebeb",
          500: "#e6e6e6",
          600: "#d1d1d1",
          700: "#a3a3a3",
          800: "#7f7f7f",
          900: "#616161",
        },
        success: {
          50: "#e6f2e6",
          100: "#b0d8b0",
          200: "#8ac58a",
          300: "#54aa54",
          400: "#339933",
          500: "#008000",
          600: "#007400",
          700: "#005b00",
          800: "#004600",
          900: "#003600",
        },
        error: {
          50: "#fae7eb",
          100: "#f1b5c0",
          200: "#ea92a2",
          300: "#e06077",
          400: "#da415d",
          500: "#d11134",
          600: "#be0f2f",
          700: "#940c25",
          800: "#73091d",
          900: "#580716",
        },
      },
      fontSize: {
        'displayLarge': ['3.5625rem', {
          lineHeight: '4rem',
          letterSpacing: '-0.0156rem',
        }],
        'displayMedium': ['2.8125rem', {
          lineHeight: '3.25rem',
          letterSpacing: '0',
        }],
        'displaySmall': ['2.25rem', {
          lineHeight: '2.75rem',
          letterSpacing: '0',
        }],
        'headlineLarge': ['2rem', {
          lineHeight: '2.5rem',
          letterSpacing: '0',
        }],
        'headlineMedium': ['1.75rem', {
          lineHeight: '2.25rem',
          letterSpacing: '0',
        }],
        'headlineSmall': ['1.5rem', {
          lineHeight: '2rem',
          letterSpacing: '0',
        }],
        'titleLarge': ['1.375rem', {
          lineHeight: '1.75rem',
          letterSpacing: '0',
        }],
        'titleMedium': ['1rem', {
          lineHeight: '1.5rem',
          letterSpacing: '0.0094rem',
        }],
        'titleSmall': ['0.875rem', {
          lineHeight: '1.25rem',
          letterSpacing: '0.0063rem',
        }],
        'labelLarge': ['0.875rem', {
          lineHeight: '1.25rem',
          letterSpacing: '0.0063rem',
        }],
        'labelMedium': ['0.75rem', {
          lineHeight: '1rem',
          letterSpacing: '0.0313rem',
        }],
        'labelSmall': ['0.6875rem', {
          lineHeight: '1rem',
          letterSpacing: '0.0313rem',
        }],
        'bodyLarge': ['1rem', {
          lineHeight: '1.5rem',
          letterSpacing: '0.0313rem',
        }],
        'bodyMedium': ['0.875rem', {
          lineHeight: '1.25rem',
          letterSpacing: '0.0156rem',
        }],
        'bodySmall': ['0.75rem', {
          lineHeight: '1rem',
          letterSpacing: '0',
        }],
      },
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '6.5': '1.625rem',
        '7.5': '1.875rem',
        '8.5': '2.125rem',
        '9.5': '2.375rem',
        '10.5': '2.625rem',
        '11.5': '2.875rem',
        '12.5': '3.25rem',
        '13.5': '3.375rem',
        '19': '4.625rem',
        '22': '5.625rem'
      },
    },
  },
  plugins: [],
}

