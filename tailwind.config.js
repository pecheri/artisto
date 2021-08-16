module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fill: (theme) => ({
            red: theme('colors.red.primary'),
        }),
        extend: {},
        fontFamily: {
            body: ['Poppins', 'sans-serif'],
        },
        colors: {
            gray: {
                dark: '#363636',
                primary: '#494848',
                light: '#F1F1F1',
            },
            yellow: {
                primary: '#FFD600',
            },
            red: {
                primary: '#FF4D00',
            },
            blue: {
                primary: '#0075FF',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
