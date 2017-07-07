import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface('http://localhost:4000/graphql'),
  dataIdFromObject: r => r.id
});


ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>, 
  document.getElementById('root'));

registerServiceWorker();
