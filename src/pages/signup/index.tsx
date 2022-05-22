import { NextPage } from 'next';
import React from 'react';

import Head from 'next/head';
import SignUp from '../../components/SignUp';

const SignUpPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>YouTubeClone | SignUp</title>
      </Head>
      <SignUp />
    </>
  );
};
export default SignUpPage;
