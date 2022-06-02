import React from 'react';
import { VideoType } from '../../Item';
import { formatDate } from '../../../utils/formatDate/formatDate';
import useFetchFirebaseStorage from '../../../hooks/useFetchFirebaseStorage/useFetchFirebaseStorage';
import RelatedVideoItemPresenter from './presenter';

type Props = {
  video: VideoType;
};

const RelatedVideoItemContainer: React.VFC<Props> = ({ video }) => {
  const { datetime } =
    video?.created_at && formatDate(new Date(video.created_at), new Date());

  const fetchedThumbnailUrl = useFetchFirebaseStorage(
    video?.thumbnail_url || 'thumbnails/no_image.jpeg',
  );

  return (
    <RelatedVideoItemPresenter {...{ video, fetchedThumbnailUrl, datetime }} />
  );
};
export default RelatedVideoItemContainer;
