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
        // screens: {
        //     '2xl': { max: '1535px' },
        //     // => @media (max-width: 1535px) { ... }

        //     xl: { max: '1279px' },
        //     // => @media (max-width: 1279px) { ... }

        //     lg: { max: '1023px' },
        //     // => @media (max-width: 1023px) { ... }

        //     md: { max: '767px' },
        //     // => @media (max-width: 767px) { ... }

        //     sm: { max: '639px' },
        //     // => @media (max-width: 639px) { ... }
        // },
    },

    variants: {
        extend: {},
    },
    plugins: [],
};
