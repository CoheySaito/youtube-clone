import React from 'react';

import { useRouter } from 'next/router';
import { useGetVideosQuery } from '../../generated/graphql';
import RelatedVideoPresenter from './presenter';

const RelatedVideoContainer: React.VFC = () => {
  const router = useRouter();
  const id = router.query.id as string;

  const { data, loading, error } = useGetVideosQuery({
    fetchPolicy: 'cache-and-network',
  });

  return <RelatedVideoPresenter {...{ loading, error, data, id }} />;
};
export default RelatedVideoContainer;
