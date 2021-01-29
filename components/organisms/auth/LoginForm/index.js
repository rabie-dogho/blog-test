import React from 'react';
// import PropTypes from 'prop-types'
import { Formik, Form } from 'formik';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { Button, Grid, Typography } from '@material-ui/core';
import TextField from '../../../molecules/TextField';
import { login } from '../../../../redux/actions';

const LoginForm = () => {
  const dispatch = useDispatch();

  const loginToAccount = (values) => {
    dispatch(login(values));
  };

  return (
    <div>
      <Typography variant="h2">Login</Typography>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Email Address is required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'invalid email address';
          }

          return errors;
        }}
        onSubmit={loginToAccount}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          /* and other goodies */
        }) => (
          <Form>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  value={values.email}
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && errors.email}
                  helperText={touched.email && errors.email}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="password"
                  label="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="password"
                  error={touched.password && errors.password}
                  helperText={touched.password && errors.password}
                />
              </Grid>

              <Grid item xs={12}>
                <Button onClick={handleSubmit} variant="contained" color="primary" type="submit">
                  Login
                </Button>
              </Grid>
              <Grid item xs={12}>
                You don&apos;t have an account?
                <Link href="/register">Register</Link>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
