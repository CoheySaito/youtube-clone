import { Center, Grid, Spinner } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import { SerchQueryContext } from '../context/SerchQueryContext';
import { useGetVideosQuery } from '../generated/graphql';
import Item from './Item';

const Display: React.VFC = () => {
  const { data, loading, error } = useGetVideosQuery({
    fetchPolicy: 'cache-and-network',
  });

  const { serchQuery, setSerchQuery } = useContext(SerchQueryContext);
  const regex = new RegExp(serchQuery, 'i');

  const videos = serchQuery
    ? data?.videos.filter(
        (video) => regex.test(video.title) || regex.test(video.description),
      )
    : data?.videos;

  useEffect(() => {
    const query = localStorage.getItem('query');
    if (!serchQuery && query) {
      setSerchQuery(query);
    }
    return () => {
      localStorage.removeItem('query');
    };
  }, []);

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
      gridTemplateColumns={{
        base: 'repeat(auto-fit,minmax(200px,1fr))',
        md: 'repeat(2,1fr)',
        lg: 'repeat(4,1fr)',
      }}
      columnGap={6}
      rowGap={6}
    >
      {videos?.map((video) => (
        <Item key={video.id} {...{ video }} />
      ))}
    </Grid>
  );
};
export default Display;
