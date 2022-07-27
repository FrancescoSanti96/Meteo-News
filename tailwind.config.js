/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize:{
        xxs: 12,
        xs: 14,
        s: 16,
        m: 18,
        l: 20,
        xl: 22,
        xxl:30
      },
      colors:{
        // The background of the page is set on the global index.css
        primaryBg: '#8c8c8c',
        primary: '#000000',
        secondaryBg: '#bfbfbf', 
        secondary: '#ffffff',
        third:'#4d4d4d',
        thirdBg: '#ff5c35',
        thirdBgHover: '#ffbcac',
        error: '#f8a9ad',
        errorHover: '#f5898e',
        send: '#9be4ae',
        sendHover: '#d7f4df'
      },
    },
  },
  plugins: [],
}
