/** @type {import('tailwindcss').Config} */
module.exports = {
    // content: ["./src/**/*.{html,js}"],
    content: ["./*.html"],
    theme: {
        container: {
            center: true,
            padding: '2rem',
        },
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '868px', // '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '868px', // '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '868px', // '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        extend: {},
    },
    plugins: [
        // require('@tailwindcss/forms'),
    ],
}
