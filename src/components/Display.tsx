import { Box, Center, Grid, Spinner } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import { useGetVideosQuery } from '../generated/graphql';
import usePagination from '../hooks/usePagination';
import Item from './Item';
import BasicPagination from './BasicPagination';
import { SerchQueryContext } from '../context/serchQueryContext';

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

  //Pagination
  const { current, setCurrent, pageSize, currentVideos } = usePagination(
    videos,
    4,
  );

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
    console.error(error?.message);
  }

  return (
    <>
      <Grid
        gridTemplateColumns={{
          base: 'repeat(auto-fit,minmax(200px,1fr))',
          md: 'repeat(2,1fr)',
          lg: 'repeat(4,1fr)',
        }}
        columnGap={6}
        rowGap={6}
      >
        {currentVideos?.map((video) => (
          <Item key={video.id} {...{ video }} />
        ))}
      </Grid>
      <Box mt={4}>
        <BasicPagination
          total={videos?.length}
          {...{ current, setCurrent, pageSize }}
        />
      </Box>
    </>
  );
};
export default Display;
