const { spacing, fontFamily, screens, fontSize } = require('tailwindcss/defaultTheme');

module.exports = {
   // mode: 'jit',
   important: true,
   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   darkMode: 'class',
   theme: {
      screens: {
         tiny: '320px',
         xs: '500px',
         mdS: '862px',
         ...screens,
      },
      fontSize: {
         '10xl': ['8rem', '90px'],
         '10x': '4rem',
         '2sm': ['6rem', '70px'],
         ...fontSize,
      },
      extend: {
         colors: {
            dark: {
               light: '#1e262f',
               DEFAULT: '#0e141b',
            },
            sentence: '#ffffff',
         },
         fontFamily: {
            sans: ['Inter', ...fontFamily.sans],
         },
         typography: (theme) => ({
            DEFAULT: {
               css: {
                  color: theme('colors.gray.700'),
                  a: {
                     color: theme('colors.blue.500'),
                     '&:hover': {
                        color: theme('colors.blue.700'),
                     },
                     code: { color: theme('colors.blue.400') },
                  },
                  'h2,h3,h4': {
                     'scroll-margin-top': spacing[32],
                  },
                  code: { color: theme('colors.pink.500') },
                  'blockquote p:first-of-type::before': false,
                  'blockquote p:last-of-type::after': false,
               },
            },
            dark: {
               css: {
                  color: theme('colors.gray.300'),
                  a: {
                     color: theme('colors.blue.400'),
                     '&:hover': {
                        color: theme('colors.blue.600'),
                     },
                     code: { color: theme('colors.blue.400') },
                  },
                  blockquote: {
                     borderLeftColor: theme('colors.gray.700'),
                     color: theme('colors.gray.300'),
                  },
                  'h2,h3,h4': {
                     color: theme('colors.gray.100'),
                     'scroll-margin-top': spacing[32],
                  },
                  hr: { borderColor: theme('colors.gray.700') },
                  ol: {
                     li: {
                        '&:before': { color: theme('colors.gray.500') },
                     },
                  },
                  ul: {
                     li: {
                        '&:before': { backgroundColor: theme('colors.gray.500') },
                     },
                  },
                  strong: { color: theme('colors.gray.300') },
                  thead: {
                     color: theme('colors.gray.100'),
                  },
                  tbody: {
                     tr: {
                        borderBottomColor: theme('colors.gray.700'),
                     },
                  },
               },
            },
         }),
      },
   },
   variants: {
      typography: ['dark'],
   },
   plugins: [require('@tailwindcss/typography')],
};
