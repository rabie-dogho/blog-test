import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Container, Box } from '@material-ui/core';
import Head from 'next/head';
import Header from '../../organisms/common/Header';
import Footer from '../../organisms/common/Footer';

const HeaderOneColumn = ({ children, title }) => (
  <>
    <Head>
      <title>{`Rabie Blog -  ${title}`}</title>
    </Head>
    <Header />
    <Box
      paddingTop="80px"
      paddingBottom="60px"
      minHeight="92vh"
      // display="felx"
      // justifyContent="center"
    >
      <Container maxWidth="xl">{children}</Container>
    </Box>
    <Footer />
  </>
);

HeaderOneColumn.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

HeaderOneColumn.defaultProps = {
  title: '',
};
export default HeaderOneColumn;
