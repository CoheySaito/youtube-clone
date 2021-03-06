import React, { ReactNode } from 'react';

import Head from 'next/head';
import { Grid, GridItem } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/react';
import DashboardHeader from '../DashboardHeader';
import SideBar from '../SideBar';

type Props = {
  title?: string;
  children: ReactNode;
};

const HomeLayout: React.FC<Props> = ({ title = 'YouTubeClone', children }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Grid
        templateColumns={{ base: '1fr', md: '240px 1fr' }}
        templateRows="auto 1fr"
        minHeight="100vh"
      >
        <GridItem as="div" colSpan={{ base: 1, md: 2 }} rowSpan={1} px={8}>
          <DashboardHeader />
        </GridItem>
        {!isMobile && (
          <GridItem as="div" colSpan={1} rowSpan={1} px={8}>
            <SideBar />
          </GridItem>
        )}
        <GridItem as="div" colSpan={1} rowSpan={1} bgColor="#fafafa" px={8}>
          {children}
        </GridItem>
      </Grid>
    </>
  );
};
export default React.memo(HomeLayout);
