/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { TextField as MuiTextField } from '@material-ui/core';

const TextField = ({ variant, label, margin, fullWidth, type, multiline, ...props }) => (
  <MuiTextField
    label={label}
    fullWidth={fullWidth}
    margin={margin}
    variant={variant}
    type={type}
    multiline={multiline}
    {...props}
  />
);

TextField.propTypes = {
  variant: PropTypes.string,
  margin: PropTypes.string,
  label: PropTypes.string,
  fullWidth: PropTypes.bool,
  type: PropTypes.string,
  multiline: PropTypes.bool,
};

TextField.defaultProps = {
  margin: 'normal',
  fullWidth: true,
  variant: 'outlined',
  label: undefined,
  type: undefined,
  multiline: false,
};

export default TextField;
