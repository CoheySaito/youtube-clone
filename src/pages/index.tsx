import { NextPage } from 'next';
import React from 'react';
import Display from '../components/Display';
import Layout from '../components/layouts/Layout';
import AppContextWrapper from '../context/AppContextWrapper';

const Home: NextPage = () => {
  return (
    <AppContextWrapper>
      <Layout sidebar title="YouTubeClone | Home">
        <Display />
      </Layout>
    </AppContextWrapper>
  );
};
export default Home;
