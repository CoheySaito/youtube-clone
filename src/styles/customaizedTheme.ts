// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react';

// 2. Call `extendTheme` and pass your custom values
const customaizedTheme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily:
          " 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;",
      },
    },
  },
  colors: {
    primary: {
      50: '#FBE5FF',
      100: '#F3D4FF',
      200: '#D6BEFB',
      300: '#BB9CF5',
      400: '#A280EB',
      500: '#7F58DE',
      600: '#6140BE',
      700: '#472C9F',
      800: '#301C80',
      900: '#20106A',
    },
  },
  shadows: {
    'dark-lg':
      'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px',
    surface: '0 0 0 1px rgba(63,63,68,0.05), 0 1px 35px 0 rgba(63,63,68,0.05)',
    surfaceDark:
      '0 0 0 1px rgba(195,195,195,0.045), 0 1px 35px 0 rgba(0,0,0,0.1);',
  },

  layerStyles: {
    base: {
      bg: 'gray.50',
      border: '2px solid',
      borderColor: 'gray.500',
    },
    selected: {
      bg: 'teal.500',
      color: 'teal.700',
      borderColor: 'orange.500',
    },
  },
});

export default customaizedTheme;
