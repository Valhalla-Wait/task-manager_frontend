import { wrapper } from 'core';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import 'core/styles/index.css';
import { AuthProvider } from 'core/providers/AuthProvider';
import { ComponentWithAuthFields } from 'shared/types/auth/authPage';

type TypedApp = AppProps & ComponentWithAuthFields;

const App = ({ Component, ...rest }: TypedApp) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  // const { theme, setTheme } = useTheme()

  return (
    <Provider store={store}>
      <AuthProvider Component={Component}>
        {/* <ConfigProvider
          theme={{
            token: {
              colorPrimary: "var(--color3)",
            },
          }}
        > */}
        <Component {...pageProps} />
        {/* </ConfigProvider> */}
      </AuthProvider>
    </Provider>
  );
};

export default App;
