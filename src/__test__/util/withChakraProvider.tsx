import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import React from 'react';
import customaizedTheme from '../../styles/customaizedTheme';

const customRender = ({ children }: { children: JSX.Element }) => {
  return <ChakraProvider theme={customaizedTheme}>{children}</ChakraProvider>;
};

const WithChakraProvider = (ui: JSX.Element, options?: any) =>
  render(ui, { wrapper: customRender, ...options });

export default WithChakraProvider;
