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
      blue: '#33A8E2',
      navy: '#152144',
      white: '#FFF',
      yellow: '#FFD54F',
      red: '#EA6363',
    },
    grey: {
      10: '#F8F9FB',
      20: '#DFE3E9',
      40: '#BFC9D5',
      60: '#98A5B7',
      80: '#5B6578',
    },
  },
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '978px',
    xl: '1278px',
    '2xl': '1536px',
  },
});

export default theme;
