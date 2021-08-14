module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            gray: {
                dark: '#363636',
                primary: '#E5E5E5',
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
