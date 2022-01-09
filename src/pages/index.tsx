import { NextPage } from 'next';
import React from 'react';
import DisplayContainer from '../components/Display/DisplayContainer';
import Layout from '../components/Layout/Layout';
import AppContextWrapper from '../context/AppContextWrapper';

const Home: NextPage = () => {
  return (
    <AppContextWrapper>
      <Layout sidebar title="YouTubeClone | Home">
        <DisplayContainer />
      </Layout>
    </AppContextWrapper>
  );
};
export default Home;
