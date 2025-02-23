/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#F0EEED',
        mainBlack: '#242424',
        borderColor: '#F5F5F5',
        basicBlack: '#333',
        basicYellow: '#BFAC69',
        basicGrey: '#808080',
        basicBrown: '#50463c',
        basicBlue: '#3A686C',
        basicOrange: '#ECA478',
        darkBlue: '#050b0b',
        rankGold: '#FFB93C',
        rankSilver: '#DDE9F3',
        rankBronze: '#CA9372',
        itemYellow: '#C4B678',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
