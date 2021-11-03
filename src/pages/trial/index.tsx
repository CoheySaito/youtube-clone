import { NextPage } from 'next';
import React from 'react';
import Display from '../../components/Display';
import Layout from '../../components/layouts/Layout';

const index: NextPage = () => {
  return (
    <Layout sidebar title="Trial">
      <Display />
    </Layout>
  );
};
export default index;
