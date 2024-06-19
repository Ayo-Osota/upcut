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
        'displayLarge': ['57px', {
          lineHeight: '64px',
          letterSpacing: '-0.25px',
        }],
        'displayMedium': ['45px', {
          lineHeight: '52px',
          letterSpacing: '0',
        }],
        'displaySmall': ['36px', {
          lineHeight: '44px',
          letterSpacing: '0',
        }],
        'headlineLarge': ['32px', {
          lineHeight: '40px',
          letterSpacing: '0',
        }],
        'headlineMedium': ['28px', {
          lineHeight: '36px',
          letterSpacing: '0',
        }],
        'headlineSmall': ['24px', {
          lineHeight: '32px',
          letterSpacing: '0',
        }],
        'titleLarge': ['22px', {
          lineHeight: '28px',
          letterSpacing: '0',
        }],
        'titleMedium': ['16px', {
          lineHeight: '24px',
          letterSpacing: '0.15px',
        }],
        'titleSmall': ['14px', {
          lineHeight: '20px',
          letterSpacing: '0.1px',
        }],
        'labelLarge': ['14px', {
          lineHeight: '20px',
          letterSpacing: '0.1px',
        }],
        'labelMedium': ['12px', {
          lineHeight: '16px',
          letterSpacing: '0.5px',
        }],
        'labelSmall': ['11px', {
          lineHeight: '16px',
          letterSpacing: '0.5px',
        }],
        'bodyLarge': ['16px', {
          lineHeight: '24px',
          letterSpacing: '0.5px',
        }],
        'bodyMedium': ['14px', {
          lineHeight: '20px',
          letterSpacing: '0.25px',
        }],
        'bodySmall': ['12px', {
          lineHeight: '16px',
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
      },
    },
  },
  plugins: [],
}

