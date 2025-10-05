/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {

                lato: ["Lato", "Avenir Next", "sans-serif"],
                baloo: ['"Baloo Thambi 2"', 'cursive'],
                montserrat: ['Montserrat', 'sans-serif'],

            },

            backgroundImage: {

                'btn-gradient': 'linear-gradient(92.32deg, rgb(255,185,199) 12.41%, rgb(255,229,234) 99.21%)',

            }
        },
    },
    plugins: [],
};
