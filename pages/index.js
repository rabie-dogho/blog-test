import React from 'react';
import Head from 'next/head';
import { Box, Typography } from '@material-ui/core';
// import { useDispatch, useSelector } from 'react-redux';
// import { setBlogState } from '../redux/actions';
// import { useLocalStorage } from '../hooks/useLocalStorage';
import HeaderOneColumn from '../components/templates/HeaderOneColumn';

// import TextField from '@material-ui/core/TextField';

export default function Home() {
  // const { test } = useSelector((state) => state.blog);
  // const dispatch = useDispatch();
  // const [testHook, setTestHook] = useLocalStorage('testHook', 'this is the default value')

  // const updateTestState = () => {
  //   dispatch(setBlogState('test', "This is the updated state"));
  //   setTestHook("THIS IS THE NEW VALUE")
  // };

  return (
    <HeaderOneColumn>
      <Head>
        <title>Rabie Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box paddingTop="4rem">
          <Typography variant="h1">Welcome to My Blog</Typography>
          {/* <Typography variant="h2">{testHook}</Typography> */}
        </Box>
      </main>
    </HeaderOneColumn>
  );
}
