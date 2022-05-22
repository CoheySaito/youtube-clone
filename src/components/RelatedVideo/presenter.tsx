import { Grid, Center, Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { useGetVideosQuery } from '../../generated/graphql';
import RelatedVideoItem from './RelatedVideoItem';

//type
type useGetVideosQueryReturnType = ReturnType<typeof useGetVideosQuery>;
type useRouterReturnType = ReturnType<typeof useRouter>;
export type Props = Partial<useGetVideosQueryReturnType> &
  Partial<useRouterReturnType> & { id?: string };

const RelatedVideoPresenter: React.FC<Props> = ({
  loading = false,
  error = undefined,
  data = undefined,
  id = '',
}) => {
  if (loading) {
    return (
      <Center height="100%">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          data-testid="spinner"
        />
      </Center>
    );
  }

  if (error) {
    console.error(error?.message);
  }

  return (
    <Grid rowGap={4}>
      {data.videos
        .filter((video) => video.id !== id)
        //ランダムソート
        .sort(() => Math.random() - 0.5)
        // 最初から8つ目まで
        .slice(0, 7)
        .map((video) => (
          <RelatedVideoItem {...{ video }} key={video.id} />
        ))}
    </Grid>
  );
};
export default RelatedVideoPresenter;
