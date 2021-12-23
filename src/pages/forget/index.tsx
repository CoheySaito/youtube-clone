import { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import Forget from '../../components/Forget/Forget';

const ForgetPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>YouTubeClone | Forget</title>
      </Head>
      <Forget />
    </>
  );
};
export default ForgetPage;
