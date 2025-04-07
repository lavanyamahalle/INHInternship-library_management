// src/services/graphql.js
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5000/query',  // Your GraphQL backend URL
  cache: new InMemoryCache(),
});

export { client, ApolloProvider };
