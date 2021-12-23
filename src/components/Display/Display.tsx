import { Box, Center, Grid, Spinner, Text } from '@chakra-ui/react';
import React from 'react';
import Item from '../Item/Item';
import BasicPagination from '../BasicPagination';

import useDisplay from '../../hooks/useDisplay/useDisplay';

const Display: React.VFC = () => {
  const pageSizeProp: number = 8;
  const {
    loading,
    error,
    serchQuery,
    videos,
    currentVideos,
    current,
    setCurrent,
    pageSize,
  } = useDisplay(pageSizeProp);

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

  if (serchQuery && videos.length == 0) {
    return (
      <Center h="50%">
        <Text>{`「 ${serchQuery}」を含む動画はありません`}</Text>
      </Center>
    );
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
        {currentVideos
          //ランダムソート
          ?.sort(() => Math.random() - 0.5)
          .map((video) => (
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
