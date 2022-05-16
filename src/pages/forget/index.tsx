import { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import ForgetContainer from '../../components/Forget';

const ForgetPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>YouTubeClone | Forget</title>
      </Head>
      <ForgetContainer />
    </>
  );
};
export default ForgetPage;
