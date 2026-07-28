/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#38A128',        // Logo Leafy Green
          greenDark: '#1F7A14',    // Logo Deep Green
          orange: '#F36F21',       // Logo Curry Orange
          orangeDark: '#D85906',   // Logo Deep Orange
          cream: '#FFF9F2',        // Warm Luxury Cream
          charcoal: '#1A1615',     // Deep Charcoal
          grey: '#A0A6AC',
          gold: '#EBA826',         // Logo Gold Highlight
          goldLight: '#FFF0C2',
          card: '#FFFFFF',
          cardBorder: '#F3E2D0',
        }
      },
      backgroundImage: {
        // Multi-stop clean logo gradient: Green (#38A128) -> Gold (#EBA826) -> Orange (#F36F21)
        'brand-gradient': 'linear-gradient(135deg, #38A128 0%, #EBA826 50%, #F36F21 100%)',
        'green-gradient': 'linear-gradient(135deg, #38A128 0%, #1F7A14 100%)',
        'orange-gradient': 'linear-gradient(135deg, #F36F21 0%, #D85906 100%)',
        'gold-gradient': 'linear-gradient(135deg, #FFD700 0%, #EBA826 50%, #F36F21 100%)',
        'cream-radial': 'radial-gradient(circle at 50% 0%, #FFF9F2 0%, #FFEEDD 100%)',
        'dark-card': 'linear-gradient(145deg, #241E1C 0%, #151110 100%)',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 12px 35px -8px rgba(243, 111, 33, 0.45)',
        'glow-green': '0 12px 35px -8px rgba(56, 161, 40, 0.45)',
        'glow-gold': '0 12px 35px -8px rgba(235, 168, 38, 0.5)',
        'luxury': '0 20px 45px -15px rgba(32, 28, 26, 0.12)',
        'luxury-hover': '0 25px 55px -10px rgba(243, 111, 33, 0.28)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 0.9 },
        }
      }
    },
  },
  plugins: [],
}
