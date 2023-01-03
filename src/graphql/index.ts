import {
    ApolloClient,
    ApolloLink,
    createHttpLink,
    InMemoryCache,
  } from '@apollo/client';
import { getBaseUrlGraphql } from '../utils';

const commerceLink = createHttpLink({
    uri: getBaseUrlGraphql(),
    headers: {
      authorization: localStorage.getItem('Auth-Token')
        ? `Bearer ${localStorage.getItem('Auth-Token')}`
        : '',
    },
  });
  
  const afterwareLink = new ApolloLink((operation, forward) => {
    return forward(operation).map((response) => {
      const context = operation.getContext();
      const authHeader = context.response.headers.get('Vendure-Auth-Token');
  
      if (authHeader) {
        localStorage.setItem('Auth-Token', authHeader);
      }
      return response;
    });
  });
  
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([afterwareLink, commerceLink]),
  });

  export default client;