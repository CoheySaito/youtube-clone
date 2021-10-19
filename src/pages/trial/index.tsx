import { NextPage } from 'next';
import React from 'react';
import Display from '../../components/Display';
import HomeLayout from '../../components/layouts/HomeLayout';

const index: NextPage = () => {
  return (
    <HomeLayout>
      <Display />
    </HomeLayout>
  );
};
export default index;
