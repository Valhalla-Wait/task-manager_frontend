import React from 'react';
import { wrapper } from 'core';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import 'core/styles/index.css';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from 'core';

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>

  );
};

export default App;
