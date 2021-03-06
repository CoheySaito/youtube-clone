import React from 'react';
import { GetVideosQuery } from '../../generated/graphql';
import { ValueOf } from '../../utils/valueOf';
import { formatDate } from '../../utils/formatDate/formatDate';

import useFetchFirebaseStorage from '../../hooks/useFetchFirebaseStorage/useFetchFirebaseStorage';
import ItemPresenter from './presenter';

//type
type VideosType = Pick<GetVideosQuery, 'videos'>;
export type VideoType = ValueOf<VideosType>[number];
export type Props = { video: VideoType };

const ItemContainer: React.FC<Props> = ({ video }) => {
  const fetchedThumbnailUrl = useFetchFirebaseStorage(
    video?.thumbnail_url || 'thumbnails/no_image.jpeg',
  );
  const fetchedAvatarlUrl = useFetchFirebaseStorage(
    video?.user?.profile_photo_url || 'avatar/no_avatar.png',
  );

  const { datetime } = formatDate(new Date(video.created_at), new Date());

  return (
    <ItemPresenter
      {...{ video, fetchedThumbnailUrl, fetchedAvatarlUrl, datetime }}
    />
  );
};
export default ItemContainer;
