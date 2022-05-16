import React, { ReactNode } from 'react';

import Head from 'next/head';
import { Grid, GridItem } from '@chakra-ui/layout';
import DashboardHeaderContainer from '../DashboardHeader';

type SidelessHomeLayoutProps = {
  title?: string;
  children: ReactNode;
};

// eslint-disable-next-line react/display-name
const SidelessHomeLayout: React.FC<SidelessHomeLayoutProps> = React.memo(
  ({ title = 'YouTube', children }) => {
    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>

        <Grid templateColumns="1fr" templateRows="auto 1fr" minHeight="100vh">
          <GridItem as="div" colSpan={1} rowSpan={1} px={8}>
            <DashboardHeaderContainer />
          </GridItem>
          <GridItem as="div" colSpan={1} rowSpan={1} bgColor="#fafafa" px={8}>
            {children}
          </GridItem>
        </Grid>
      </>
    );
  },
);
export default SidelessHomeLayout;
