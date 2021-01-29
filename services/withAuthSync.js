/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/**
 * Important Disclaimer
 *
 * Most of this code was copied from the official next.js examples
 * https://github.com/zeit/next.js/blob/canary/examples/with-cookie-auth/www/utils/auth.js
 *
 * Kindly refere to the above link for the full example and information
 */

import React, { Component } from 'react';
import nextCookie from 'next-cookies';
import { connect } from 'react-redux';
import { setAuthState } from '../redux/actions';
// import { setTokenHeader, /* setLocaleHeader */ } from '../config/axios';
// import { goTo } from '../../config/helpers';
// import { getLocale } from '../../config/localization';

const signInUrl = '/login';

// Passthrough allows displaying the page while authentication only if possible.
// Useful for public pages with enhanced/modified functionality for signed in users.
const authCheck = (ctx, redirect = true) => {
  const { token, user } = nextCookie(ctx);

  if (!token || !user) {
    if (redirect) {
      if (ctx.req) {
        /*
         * This happens on server only, ctx.req is available means it's being
         * rendered on server. If we are on server and token is not available,
         * means user is not logged in.
         */
        ctx.res.writeHead(302, { Location: signInUrl });
        ctx.res.end();
      } else {
        // We already checked for server. This should only happen on client.
        // goTo(signInUrl);
      }
    }

    return null;
  }
// console.log("user =====", user)
  // const parsedUser = JSON.parse(user);
  return { token, user };
};

const withAuthSync = (WrappedComponent, { redirect = true } = {}) => {
  class ComposedComponent extends Component {
    static async getInitialProps(ctx) {
      // console.log("CTX ===", ctx)

      const authProps = authCheck(ctx, redirect);

      if (authProps) {
        const { store } = ctx;
        const { token, user } = authProps;
        store.dispatch(setAuthState('user', { ...user, token }));
        // setTokenHeader(token);
      }

      const componentProps =
        WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx));

      return { ...componentProps, ...authProps };
    }

    constructor(props) {
      super(props);

      this.syncLogout = this.syncLogout.bind(this);
    }

    componentDidMount() {
      window.addEventListener('storage', this.syncLogout);
    }

    componentWillUnmount() {
      window.removeEventListener('storage', this.syncLogout);
      window.localStorage.removeItem('logout');
    }

    // eslint-disable-next-line class-methods-use-this
    syncLogout(event) {
      if (event.key === 'logout') {
        // goTo(signInUrl);
      }
    }

    render() {
      const { token } = this.props;
      // setTokenHeader(token);
      // setLocaleHeader('en');
      return token || !redirect ? <WrappedComponent {...this.props} /> : null;
    }
  }

  return connect()(ComposedComponent);
};

export default withAuthSync;
