import React from 'react';
import AuthOneColumn from '../../components/templates/AuthOneColumn';
import RegisterAccount from '../../components/organisms/auth/RegisterForm';
// import PropTypes from 'prop-types'

const RegisterPage = () => (
  <AuthOneColumn title="Register new account">
    <RegisterAccount />
  </AuthOneColumn>
);

RegisterPage.propTypes = {};

export default RegisterPage;
