/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // You don't need to add 'capitalize' here, 
      // as it's already provided by Tailwind CSS.
    }
  },
  variants: {
    extend: {
      textTransform: ['hover'], // Enable hover variant for text-transform
    },
  },
  plugins: [],
}
