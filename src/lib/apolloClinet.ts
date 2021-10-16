import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
} from '@apollo/client';
import 'cross-fetch/polyfill';

// Add an authorization header to every HTTP request by chaining together Apollo Links. In this example, we'll pull the login token from localStorage every time a request is sent:
const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_HASURA_URL,
  headers: { 'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_KEY },
});

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;
const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
};
export const initializeApollo = (initialState = null) => {
  const _apolloClient = apolloClient ?? createApolloClient();
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};
