import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/dist/shared/lib/router/router';
import React from 'react';
import { useUserChanged } from '../hooks/useUserChanged';
import { initializeApollo } from '../lib/apolloClinet';
import customaizedTheme from '../styles/customaizedTheme';

function MyApp({ Component, pageProps }: AppProps) {
  const {} = useUserChanged();
  const client = initializeApollo();

  return (
    <ApolloProvider {...{ client }}>
      <ChakraProvider resetCSS={true} theme={customaizedTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
