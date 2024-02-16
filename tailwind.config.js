/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'social-box-shadow': '0 0px 0px rgba(255, 255, 255, 0.1)',
        "glow-1": "0 0px 20px rgba(255,255, 255, 0.35)",
        "glow-2": "0 0px 65px rgba(255, 255,255, 0.2)",
      },
      backgroundImage: {
      },
        colors: {
            'snow': '#F5FEFD',
            'gunmetal': '#2C3539', // this is the trashiest name I've ever seen for a colour
            'eerie-black': '#1B1B1B', 
            'paper': "#FFF2D7", // this is coffee cream
            'sky': "#A7D8E7", // this is sky blue
            'sky2': "#B9E9FC",
            "atomic-tangerine": "#FF9966",
        },
      
        // that is animation class
        animation: {
            fade_in: 'fadeIn 2s ease-in-out',
            fade_out: 'fadeOut 2s ease-in-out',
            'text-slide': 'text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        },
        // that is actual animation
        keyframes: theme => ({
            // I have no clue how to incorporate this with light/dark mode
            fadeIn: {
                '0%': { opacity: '0' },
                '100%': { opacity: '1' },
            },
            fadeOut: {
                '0%': { opacity: '1' },
                '100%': { opacity: '0' },
            },
            'text-slide': {
              '0%, 16%': {
                  transform: 'translateY(0%)',
              },
              '20%, 36%': {
                  transform: 'translateY(-16.66%)',
              },
              '40%, 56%': {
                  transform: 'translateY(-33.33%)',
              },
              '60%, 76%': {
                  transform: 'translateY(-50%)',
              },
              '80%, 96%': {
                  transform: 'translateY(-66.66%)',
              },
              '100%': {
                  transform: 'translateY(-83.33%)',
              },
          },         
        }),
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
  ],
}