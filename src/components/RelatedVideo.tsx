import { Grid, Center, Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { useGetVideosQuery } from '../generated/graphql';

import RelatedVideoItem from './RelatedVideoItem';

type RelatedVideoProps = {
  title?: string;
};

const RelatedVideo: React.FC<RelatedVideoProps> = () => {
  const router = useRouter();
  const id = router.query.id as string;

  const { data, loading, error } = useGetVideosQuery({
    fetchPolicy: 'cache-and-network',
  });

  if (loading) {
    return (
      <Center height="100%">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  }

  if (error) {
    return <p>Error:{error?.message}</p>;
  }
  return (
    <Grid rowGap={4}>
      {data.videos
        .filter((video) => video.id !== id)
        .map((video) => (
          <RelatedVideoItem {...{ video }} key={video.id} />
        ))}
    </Grid>
  );
};
export default RelatedVideo;
