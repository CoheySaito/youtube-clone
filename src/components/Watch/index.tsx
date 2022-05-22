import React from 'react';
import { GetVideoByIdQuery } from '../../generated/graphql';
import useFetchFirebaseStorage from '../../hooks/useFetchFirebaseStorage/useFetchFirebaseStorage';
import { ValueOf } from '../../utils/valueOf';
import WatchPresenter from './presenter';

type Props = { data: GetVideoByIdQuery };
export type VideoByPkType = ValueOf<Pick<GetVideoByIdQuery, 'videos_by_pk'>>;

const WatchContainer: React.FC<Props> = ({ data }) => {
  const video: VideoByPkType = data?.videos_by_pk ?? {
    __typename: 'videos',
    created_at: '',
    description: '',
    id: '',
    thumbnail_url: '',
    video_url: '',
    title: '',
    views: 0,
    user: {
      __typename: 'users',
      name: '',
      number_of_subscribers: 0,
      profile_photo_url: '',
    },
  };

  const fetchedVideoUrl = useFetchFirebaseStorage(
    video?.video_url || 'videos/no_video.jpeg',
  );
  const fetchedAvatarlUrl = useFetchFirebaseStorage(
    video?.user?.profile_photo_url || 'avatar/no_avatar.png',
  );
  return (
    <WatchPresenter
      {...{
        video,
        fetchedVideoUrl,
        fetchedAvatarlUrl,
      }}
    />
  );
};
export default WatchContainer;
