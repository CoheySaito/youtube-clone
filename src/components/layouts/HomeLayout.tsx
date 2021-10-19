import React, { ReactNode } from 'react';

import Head from 'next/head';
import { Grid, GridItem } from '@chakra-ui/layout';
import DashboardHeader from '../DashboardHeader';
import SideBar from '../SideBar';

type HomeLayoutProps = {
  title?: string;
  children: ReactNode;
};

// eslint-disable-next-line react/display-name
const HomeLayout: React.FC<HomeLayoutProps> = React.memo(
  ({ title = 'YouTube', children }) => {
    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>

        <Grid
          templateColumns="240px 1fr"
          templateRows="auto 1fr"
          minHeight="100vh"
        >
          <GridItem as="div" colSpan={3} rowSpan={1} px={8}>
            <DashboardHeader />
          </GridItem>
          <GridItem as="div" colSpan={1} rowSpan={1} px={8}>
            <SideBar />
          </GridItem>
          <GridItem as="div" colSpan={1} rowSpan={1} bgColor="#fafafa" px={8}>
            {children}
          </GridItem>
        </Grid>
      </>
    );
  },
);
export default HomeLayout;
