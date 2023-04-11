/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}",
  "./node_modules/flowbite/**/*.js"
],
  theme: {
    extend: {
      height: {
        'hero': '60vh',
      },
      backgroundImage: {
        'hero-pattern': "url('symphoni_banner.jpeg')",
      },
      
              colors: {
                mybg: '#22c55e',},
      letterSpacing: {
        widest: '.25em',
           
              }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

