/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0a0a',
          surface: '#111111',
          card: '#1a1a1a',
          border: '#2a2a2a',
        },
        accent: {
          primary: '#3b82f6',
          secondary: '#8b5cf6',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'slow-fade-in': 'slowFadeIn 2s cubic-bezier(0.4, 0, 0.2, 1)',
        'slow-slide-up': 'slowSlideUp 1s cubic-bezier(0.4, 0, 0.2, 1)',
        'slow-slide-up-delayed': 'slowSlideUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.15s both',
        'slow-slide-up-delayed-2': 'slowSlideUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both',
        'slow-slide-up-delayed-3': 'slowSlideUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.45s both',
        'slow-slide-up-delayed-4': 'slowSlideUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.6s both',
        'text-reveal': 'textReveal 1.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'word-reveal': 'wordReveal 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'text-glow': 'textGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slowFadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slowSlideUp: {
          '0%': { transform: 'translateY(60px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        textReveal: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(40px)',
            clipPath: 'inset(0 0 100% 0)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
            clipPath: 'inset(0 0 0% 0)',
          },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { 
            opacity: '0.5',
            filter: 'blur(20px)',
          },
          '50%': { 
            opacity: '0.8',
            filter: 'blur(30px)',
          },
        },
        wordReveal: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px) scale(0.9)',
            filter: 'blur(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
            filter: 'blur(0px)',
          },
        },
        textGlow: {
          '0%, 100%': {
            textShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)',
          },
          '50%': {
            textShadow: '0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.5)',
          },
        },
      },
    },
  },
  plugins: [],
}
