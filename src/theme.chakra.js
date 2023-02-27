import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },

  colors: {
    primary: {
      green: '#51D9B0',
      greenLight: '#E4FCF5',
      greenDark: '#368a70',
      blue: '#33A8E2',
      navy: '#152144',
      white: '#FFF',
      yellow: '#FFD54F',
      red: '#EA6363',
    },
    whiteButton: {
      500: '#FFF',
      700: '#98A5B7',
    },
    greyButton: {
      500: 'rgba(152, 165, 183, 0.3)',
    },
    greenButton: {
      500: '#E4FCF5',
      700: '#9effe3',
    },
    grey: {
      10: '#F8F9FB',
      20: '#DFE3E9',
      40: '#BFC9D5',
      60: '#98A5B7',
      80: '#5B6578',
    },
  },
  sizes: {
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
  },
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '978px',
    xl: '1278px',
    '2xl': '1440px',
  },
  components: {
    Button: {
      variants: {
        brandGreen: {
          bg: 'primary.green',
          color: 'white',
          borderRadius: '3xl',
          width: '116px',
          _hover: {
            bg: 'primary.greenDark',
          },
        },

        brandLightGreen: {
          bg: 'primary.greenLight',
          color: 'primary.green',
          borderRadius: '3xl',
          width: '100%',
          _hover: {
            bg: 'primary.green',
            color: 'white',
          },
        },

        brandWhite: {
          bg: 'white',
          color: 'primary.navy',
          borderRadius: '3xl',
          width: '116px',
          _hover: {
            bg: 'grey.20',
          },
        },
      },
    },
  },
});

export default theme;
