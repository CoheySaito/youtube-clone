import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { Center, Spinner } from '@chakra-ui/react';
import { useGetVideoByIdQuery } from '../../generated/graphql';
import Layout from '../../components/Layout';
import AppContextWrapper from '../../context/AppContextWrapper';
import WatchContainer from '../../components/Watch/WatchContainer';

const WatchPage: NextPage = () => {
  const router = useRouter();
  //pathパラメータ
  const id = router.query.id as string;

  const { data, loading, error } = useGetVideoByIdQuery({
    variables: {
      id,
    },
  });

  if (loading) {
    return (
      <AppContextWrapper>
        <Layout sidebar={false} title="YouTubeClone | Watch">
          <Center height="100%">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Center>
        </Layout>
      </AppContextWrapper>
    );
  }

  if (error) {
    console.error(error?.message);
  }

  return (
    <AppContextWrapper>
      <Layout sidebar={false} title="YouTubeClone | Watch">
        <WatchContainer {...{ data }} />
      </Layout>
    </AppContextWrapper>
  );
};
export default WatchPage;
