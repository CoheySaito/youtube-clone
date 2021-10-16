import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_HASURA_URL,
  // headers: { 'x-hasura-admin-secret': process.env.EXT_PUBLIC_HASURA_KEY },
});

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;
export const createApolloClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
  });
};
const initializeApollo = (initialState = null) => {
  const _apolloClient = apolloClient ?? createApolloClient();
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};

export default initializeApollo;
