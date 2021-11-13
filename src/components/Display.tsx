import { Box, Center, Grid, Spinner, Text } from '@chakra-ui/react';
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

  //serchQuery
  const { serchQuery, setSerchQuery } = useContext(SerchQueryContext);
  //iフラグ	ignoreCase	大文字・小文字を区別しない
  const regex = new RegExp(serchQuery, 'i');

  //videoTitleとdescriptionとusernameで検索
  const videos = serchQuery
    ? data?.videos.filter(
        (video) =>
          regex.test(video.title) ||
          regex.test(video.description) ||
          regex.test(video?.user.name),
      )
    : data?.videos;

  //Pagination
  const { current, setCurrent, pageSize, currentVideos } = usePagination(
    videos,
    8,
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

  //2ページ目以降だとpaginationが戻らないため
  useEffect(() => {
    if (current !== 1) {
      setCurrent(1);
    }
  }, [serchQuery]);

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
