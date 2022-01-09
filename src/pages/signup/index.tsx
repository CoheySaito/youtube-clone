import { NextPage } from 'next';
import React from 'react';

import Head from 'next/head';

import SignUpContainer from '../../components/SignUp/SignUpContainer';

const SignUpPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>YouTubeClone | SignUp</title>
      </Head>
      <SignUpContainer />
    </>
  );
};
export default SignUpPage;
