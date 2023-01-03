import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_BASE_URI_GRAPHQL
});

const authLink = setContext((_, { headers }) => {
//   const token = getToken();
  return {
    headers: {
      ...headers,
    //   authorization: token ? `Basic ${token}` : '',
    }
  };
});

export const getGraphqlClient = () => {
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });
  return client;
};



// function getToken () {
//     return localStorage.getItem(LOCAL_STORAGE.AUTH);
// };