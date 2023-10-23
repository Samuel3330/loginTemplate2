/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('hero.png')",
        hero2: "url('./public/edificios2.jpg')",
      },
      fontFamily: {
        body: "Poppins, sans-serif",
      },
      boxShadow: {
        inset:
          "inset 17px 24px 34px -9px rgba(0,0,0,0.1),inset 4px 0px 9px 0px rgba(0, 0, 0, 0.1)",
        signIn: "inset 12px 16px 32px -8px rgba(68, 94, 156, 1)",
      },
    },
  },
  plugins: [],
};
