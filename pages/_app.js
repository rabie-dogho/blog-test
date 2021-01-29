/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'draft-js/dist/Draft.css';
import 'draft-js-inline-toolbar-plugin/lib/plugin.css';
import '../styles/toastStyles.css';
import { wrapper } from '../redux/store';

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <ToastContainer style={{ zIndex: 10001 }} closeOnClick />
    </>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  ctx.store.dispatch({ type: 'APP', payload: 'was set in _app' });

  return {
    pageProps: {
      // Call page-level getInitialProps
      ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
      // Some custom thing for all pages
      appProp: ctx.pathname,
    },
  };
};

export default wrapper.withRedux(MyApp);
