import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/dist/shared/lib/router/router';
import React from 'react';
import { createApolloClient } from '../lib/apolloClinet';

function MyApp({ Component, pageProps }: AppProps) {
  const client = createApolloClient();
  return (
    <ApolloProvider {...{ client }}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
