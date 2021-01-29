import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import HeaderOneColumn from '../HeaderOneColumn';

const AuthOneColumn = ({ children, title }) => (
  <HeaderOneColumn title={title}>
    <Box display="flex" justifyContent="center">
      <Box maxWidth="500px">{children}</Box>
    </Box>
  </HeaderOneColumn>
);

AuthOneColumn.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

AuthOneColumn.defaultProps = {
  title: '',
};

export default AuthOneColumn;
