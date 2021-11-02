import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
} from "@apollo/client";
import "cross-fetch/polyfill";

import { setContext } from "@apollo/client/link/context";
import Cookie from "universal-cookie";
const cookie = new Cookie();

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_HASURA_URL,
  // headers: { 'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_KEY },
});

const authLink = setContext(() => {
  // get the authentication token from local storage if it exists
  const token = cookie.get("token");
  // return the headers to the context so httpLink can read them
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  return { headers };
});

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;
const createApolloClient = () => {
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};
export const initializeApollo = (initialState = null) => {
  const _apolloClient = apolloClient ?? createApolloClient();
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};
