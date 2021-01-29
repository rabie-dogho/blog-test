// import React from 'react';
// import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
// import Alert from '@material-ui/lab/Alert';
// import CloseIcon from '@material-ui/icons/Close';

export const alert = (type, content = '', autoClose = 5000) => {
  toast(() => content, {
    // closeButton: type !== 'loading' ? <CloseIcon /> : null,
    autoClose,
    hideProgressBar: false,
    position: 'top-right',
    closeOnClick: true,
    type,
  });
};

/* eslint-disable */
export const prompt = (m) => window.prompt(m);
/* eslint-enable */
