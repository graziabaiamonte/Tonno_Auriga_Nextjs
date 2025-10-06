/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      ricetteHero: "url('/img/ricetta_peperone.webp')",
      sanCusumanoHero: "url('/imgSanCusumano/familyPattern.webp')",
    },
    colors: {
      yellowLight: "#f8efd3",
      yellowLightOpac: "rgba(248, 239, 211, 0.8)",
      yellowDark: "#FFCE00",
      red: " #CE122D",
      black: "#000000",
      bolliniPaginazione: "rgba(0, 0, 0, 0.1)",
      trasparent: "#00000000",
    },
    fontFamily: {
      primary: ["alkaline", "serif"], // Replace "My Adobe Font" with your actual Adobe Font family name
      // You can also add the Poppins font here if you want to use it with a Tailwind class
      // poppins: ['Poppins', 'sans-serif'],
    },
  },
};
export const plugins = [];
