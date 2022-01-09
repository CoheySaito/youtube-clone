import React from 'react';

import { useRouter } from 'next/router';
import { useGetVideosQuery } from '../../generated/graphql';
import RelatedVideo from './RelatedVideo';

const RelatedVideoContainer: React.VFC = () => {
  const router = useRouter();
  const id = router.query.id as string;

  const { data, loading, error } = useGetVideosQuery({
    fetchPolicy: 'cache-and-network',
  });

  return <RelatedVideo {...{ loading, error, data, id }} />;
};
export default RelatedVideoContainer;
