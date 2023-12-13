/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
    colors: {
      'third': "#F5DB13",
      "primary": "#F2B807",
      "second" : "#F28F16",
      "danger" : "#D93E30",
      "withepok" : "#F6F7F9",
      "drakpok" : "#212121"
    }
  },
  plugins: [],
}