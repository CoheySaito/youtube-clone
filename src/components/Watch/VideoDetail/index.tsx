import React from 'react';
import { ValueOf } from '../../../utils/valueOf';
import { GetVideoByIdQuery } from '../../../generated/graphql';
import { formatDate } from '../../../utils/formatDate/formatDate';
import VideoDetailPresenter from './presenter';

export type VideosByPkType = ValueOf<Pick<GetVideoByIdQuery, 'videos_by_pk'>>;

export type Props = {
  video: VideosByPkType;
  fetchedAvatarlUrl: string;
};

const VideoDetailContainer: React.VFC<Props> = ({
  video,
  fetchedAvatarlUrl,
}) => {
  const { datetime } =
    video?.created_at && formatDate(new Date(video.created_at), new Date());
  return <VideoDetailPresenter {...{ video, fetchedAvatarlUrl, datetime }} />;
};
export default VideoDetailContainer;
