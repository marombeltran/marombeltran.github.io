/** @type {import('tailwindcss').Config} */
module.exports = {
    // content: ["./src/**/*.{html,js}"],
    content: ["./**/*.html"],
    theme: {
        fontFeatureSettings: {
            numeric: ['tnum', 'salt', 'ss02']
        },
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '36px',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem'
        },
        container: {
            center: true,
            padding: '2rem',
        },
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1024px', // '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1024px', // '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        fontFamily: {
            'sans': ['ui-sans-serif', 'system-ui'],
            'serif': ['ui-serif', 'Georgia'],
            'mono': ['ui-monospace', 'SFMono-Regular'],
            'display': ['Oswald'],
            'body': ['"Open Sans"'],
        },
        extend: {},
    },
    plugins: [
        require('tailwindcss-font-inter')({ // default settings
            a: -0.0223,
            b: 0.185,
            c: -0.1745,
            baseFontSize: 16,
            importFontFace: true,
        }),
    ],
}
