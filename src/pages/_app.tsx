import React from 'react';
import { wrapper } from 'core';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import 'core/styles/index.css';

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  );
};

export default App;
