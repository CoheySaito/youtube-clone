import { Center, Grid, Spinner } from '@chakra-ui/react';
import React from 'react';
import { GetVideosQuery, useGetVideosQuery } from '../generated/graphql';
import Item from './Item';

const Display: React.VFC = () => {
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
    <Grid
      gridTemplateColumns="repeat(auto-fit,minmax(200px,1fr))"
      columnGap={6}
      rowGap={6}
    >
      {data?.videos.map((video) => (
        <Item key={video.id} {...{ video }} />
      ))}
    </Grid>
  );
};
export default Display;
