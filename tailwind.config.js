/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    darkMode: 'selector',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Lato', 'sans-serif'], // Set Lato as the default sans-serif font
            },
            backgroundImage: {
                'hero-pattern': "url('/assets/istockphoto-1327449500-612x612.jpg')",
                'footer-texture': "url('/assets/images.jpeg')",
            },
        },
    },
    plugins: [],
};
