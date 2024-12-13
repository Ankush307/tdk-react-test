/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors  : {
            'blue-chalk' : '#0046AD',
            'bluish-grey' : '#525252',
          },
          backgroundImage: {
            'hero-image' : "url('../public/assets/image/webp/hero-bg-img.webp')",
          },
      },
    },
    plugins: [],
  }