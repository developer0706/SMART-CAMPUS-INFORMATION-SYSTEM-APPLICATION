export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        amsterdam: ['Amsterdam', 'Georgia', 'serif'],
        star: ['Star', 'Arial Black', 'sans-serif'],
      },
      colors: {
        campus: {
          50: '#f0fdf4',
          100: '#dcfce7',
          // ... green color scale
          900: '#14532d',
        },
      },
    },
  },
  plugins: [],
};
