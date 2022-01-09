import React, { ReactNode } from 'react';

import Head from 'next/head';
import { Grid, GridItem } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/react';
import DashboardHeaderContainer from '../DashboardHeader/DashboardHeaderContainer';
import SideBarContainer from '../SideBar/SideBarContainer';

type HomeLayoutProps = {
  title?: string;
  children: ReactNode;
};

// eslint-disable-next-line react/display-name
const HomeLayout: React.FC<HomeLayoutProps> = React.memo(
  ({ title = 'YouTubeClone', children }) => {
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
          <GridItem as="div" colSpan={{ base: 1, md: 3 }} rowSpan={1} px={8}>
            <DashboardHeaderContainer />
          </GridItem>
          {!isMobile && (
            <GridItem as="div" colSpan={1} rowSpan={1} px={8}>
              <SideBarContainer />
            </GridItem>
          )}
          <GridItem as="div" colSpan={1} rowSpan={1} bgColor="#fafafa" px={8}>
            {children}
          </GridItem>
        </Grid>
      </>
    );
  },
);
export default HomeLayout;
