import React from 'react';
// import PropTypes from 'prop-types'
import { Formik, Form } from 'formik';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { Button, Grid, Typography } from '@material-ui/core';
import TextField from '../../../molecules/TextField';
import { registerAccount } from '../../../../redux/actions';

const RegisterAccountForm = () => {
  const dispatch = useDispatch();

  const registerNewAccount = (values) => {
    dispatch(registerAccount(values));
  };

  return (
    <div>
      <Typography variant="h2">Register new Account</Typography>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          password_confirmation: '',
        }}
        validate={(values) => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = 'First Name is required';
          }
          if (!values.lastName) {
            errors.lastName = 'Last Name is required';
          }
          if (!values.email) {
            errors.email = 'Email Address is required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'invalid email address';
          }

          if (!values.password) {
            errors.password = 'required';
          } else if (values.password !== values.password_confirmation) {
            errors.password_confirmation = 'Password mismatch';
          }

          return errors;
        }}
        onSubmit={registerNewAccount}
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
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.firstName && errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.lastName && errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  value={values.email}
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.email && errors.email)}
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
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="password_confirmation"
                  label="Password confirmation"
                  type="password"
                  name="password_confirmation"
                  value={values.password_confirmation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  // fullWidth
                  error={Boolean(touched.password_confirmation && errors.password_confirmation)}
                  helperText={touched.password_confirmation && errors.password_confirmation}
                />
              </Grid>
              <Grid item xs={12}>
                <Button onClick={handleSubmit} variant="contained" color="primary" type="submit">
                  Register
                </Button>
              </Grid>
              <Grid item xs={12}>
                Already have an account?
                <Link href="/login">Login</Link>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};

RegisterAccountForm.propTypes = {};

export default RegisterAccountForm;
