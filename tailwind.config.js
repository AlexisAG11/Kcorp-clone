/** @type {import('tailwindcss').Config} */

const backupFonts = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  'Helvetica',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
];

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nippo: [
          'Nippo-medium', ...backupFonts
        ], // Add Nippo as a custom font
        cairo: ['Cairo', ...backupFonts], // Add Cairo to the font list
      },
      colors: {
        primary: {
          black: '#0d1015',
          light: '#0cf',  // Light variant
        },
      },
      keyframes: {
 
        slider1: {
          // my base is for 4 images I have 20% of breaks and 5% of animation which mean 100/nb_images+1 to have the the percentage of the pause depend on the number of the images and the value of the animation is (100/nb_images) - (100/nb_images+1)
          '0%, 9.09%': { transform: 'translateX(0)'},
          '10%, 19.09%': { transform: 'translateX(-50%)'},
          '20%, 29.09%': { transform: 'translateX(-100%)'},
          '30%, 39.09%': { transform: 'translateX(-150%)'},
          '40%, 49.09%': { transform: 'translateX(-200%)'},
          '50%, 59.09%': { transform: 'translateX(-250%)'},
          '60%, 69.09%': { transform: 'translateX(-300%)'},
          '70%, 79.09%': { transform: 'translateX(-350%)'},
          '80%, 89.09%': { transform: 'translateX(-400%)'},
          '90%, 99.09%': { transform: 'translateX(-450%)'},
          '100%': { transform: 'translateX(-500%)'},
        },
        slider2: {
          '0%, 9.09%': { transform: 'translateX(0)'},
          '10%, 19.09%': { transform: 'translateX(-25%)'},
          '20%, 29.09%': { transform: 'translateX(-50%)'},
          '30%, 39.09%': { transform: 'translateX(-75%)'},
          '40%, 49.09%': { transform: 'translateX(-100%)'},
          '50%, 59.09%': { transform: 'translateX(-125%)'},
          '60%, 69.09%': { transform: 'translateX(-150%)'},
          '70%, 79.09%': { transform: 'translateX(-175%)'},
          '80%, 89.09%': { transform: 'translateX(-200%)'},
          '90%, 99.09%': { transform: 'translateX(-225%)'},
          '100%': { transform: 'translateX(-250%)'},
        },
        slider3: {
          '0%, 9.09%': { transform: 'translateX(0)'},
          '10%, 19.09%': { transform: 'translateX(-16.6666666666%)'},
          '20%, 29.09%': { transform: 'translateX(-33.3333333333%)'},
          '30%, 39.09%': { transform: 'translateX(-50%)'},
          '40%, 49.09%': { transform: 'translateX(-66.6666666666%)'},
          '50%, 59.09%': { transform: 'translateX(-83.3333333333%)'},
          '60%, 69.09%': { transform: 'translateX(-100%)'},
          '70%, 79.09%': { transform: 'translateX(-116.6666666666%)'},
          '80%, 89.09%': { transform: 'translateX(-133.3333333333%)'},
          '90%, 99.09%': { transform: 'translateX(-150%)'},
          '100%': { transform: 'translateX(-166.6666666666%)'},
        },
      },
      animation: {
        // my base is for 4 images I have 10 secondes of animation and 20% of pause so I adpate myself for the number of image base on that with that base (10/4 = 2.5)
        slider1: 'slider1 25s ease-in-out infinite',
        slider2: 'slider2 25s ease-in-out infinite',
        slider3: 'slider3 25s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

