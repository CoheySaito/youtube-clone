import React from 'react';
import { VideoType } from '../../Item';
import RelatedVideoItem from './RelatedVideoItem';
import { formatDate } from '../../../utils/formatDate/formatDate';
import useFetchFirebaseStorage from '../../../hooks/useFetchFirebaseStorage/useFetchFirebaseStorage';

type RelatedVideoItemContainerProps = {
  video: VideoType;
};

const RelatedVideoItemContainer: React.FC<RelatedVideoItemContainerProps> = ({
  video,
}) => {
  const { datetime } =
    video?.created_at && formatDate(new Date(video.created_at), new Date());

  const fetchedThumbnailUrl = useFetchFirebaseStorage(
    video?.thumbnail_url || 'thumbnails/no_image.jpeg',
  );

  return <RelatedVideoItem {...{ video, fetchedThumbnailUrl, datetime }} />;
};
export default RelatedVideoItemContainer;
