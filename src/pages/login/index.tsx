import { NextPage } from 'next';
import React from 'react';

import Head from 'next/head';
import Login from '../../components/Login';

const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>YouTubeClone | Login</title>
      </Head>
      <Login />
    </>
  );
};
export default LoginPage;
