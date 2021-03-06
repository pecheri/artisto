module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fill: (theme) => ({
            red: theme('colors.red.primary'),
        }),

        extend: {
            zIndex: {
                90: '90',
            },
            animation: {
                fadeIn: 'fadeIn 2s',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(-20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0px)' },
                },
            },
            maxWidth: {
                52: '13rem',
            },
            fontSize: {
                tiny: '10px',
            },
        },
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
