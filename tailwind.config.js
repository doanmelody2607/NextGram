/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            fontFamily: {
                'proxima-nova': ['ProximaNova', 'sans-serif'],
            },
            colors: {
                'text-color': '#161823',
                primary: '#fe2c55',
                white: '#fff',
                black: '#000',
            },
            height: {
                'layout-header-height': '60px',
            },
            width: {
                'layout-width': '1150px',
            },
            padding: {
                'layout-horizontal-spacer': '24px',
            },
        },
    },
    plugins: [],
};
