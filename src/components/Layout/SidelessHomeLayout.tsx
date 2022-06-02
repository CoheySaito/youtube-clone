import React, { ReactNode } from 'react';

import Head from 'next/head';
import { Grid, GridItem } from '@chakra-ui/layout';
import DashboardHeader from '../DashboardHeader';

type Props = {
  title?: string;
  children: ReactNode;
};

const SidelessHomeLayout: React.FC<Props> = ({
  title = 'YouTube',
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Grid templateColumns="1fr" templateRows="auto 1fr" minHeight="100vh">
        <GridItem as="div" colSpan={1} rowSpan={1} px={8}>
          <DashboardHeader />
        </GridItem>
        <GridItem as="div" colSpan={1} rowSpan={1} bgColor="#fafafa" px={8}>
          {children}
        </GridItem>
      </Grid>
    </>
  );
};
export default React.memo(SidelessHomeLayout);
