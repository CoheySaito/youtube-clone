import { NextPage } from 'next';
import React from 'react';
import Display from '../../components/Display';
import Layout from '../../components/layouts/Layout';
import AppContextWrapper from '../../context/AppContextWrapper';

const Trial: NextPage = () => {
  return (
    <AppContextWrapper>
      <Layout sidebar title="Trial">
        <Display />
      </Layout>
    </AppContextWrapper>
  );
};
export default Trial;
