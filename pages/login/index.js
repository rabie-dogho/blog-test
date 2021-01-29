import React from 'react';
import LoginForm from '../../components/organisms/auth/LoginForm';
import AuthOneColumn from '../../components/templates/AuthOneColumn';
// import PropTypes from 'prop-types'

const LoginPage = () => (
  <AuthOneColumn title="Login">
    <LoginForm />
  </AuthOneColumn>
);

LoginPage.propTypes = {};

export default LoginPage;
