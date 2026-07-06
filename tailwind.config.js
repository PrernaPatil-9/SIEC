module.exports = {
  content: [
    "./**/*.html",
    "./**/*.js",
    "./pages/**/*.html",
    "./pages/**/*.js",
    "./header/**/*.html",
    "./footer/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7f4',
          100: '#dcebe4',
          200: '#b9d7cb',
          300: '#8fbfae',
          400: '#6aa890',
          500: '#2d6a4f',
          600: '#1b4332',
          700: '#14382a',
          800: '#0d2b20',
          900: '#081f16',
        },
        neutral: {
          50: '#fafbf9',
          100: '#f0f2f0',
          200: '#e2e5e2',
          300: '#c8cdc8',
          400: '#a8b0a8',
          500: '#889388',
          600: '#6a776a',
          700: '#4f5c4f',
          800: '#364236',
          900: '#1e2a1e',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease forwards',
        'slide-up': 'slideUp 0.8s ease forwards',
        'scale-in': 'scaleIn 0.6s ease forwards',
        'marquee': 'marquee 30s linear infinite',
        'float': 'float 20s infinite ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)', opacity: '0.3' },
          '25%': { transform: 'translateY(-30px) rotate(90deg)', opacity: '0.7' },
          '50%': { transform: 'translateY(-60px) rotate(180deg)', opacity: '0.5' },
          '75%': { transform: 'translateY(-30px) rotate(270deg)', opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}