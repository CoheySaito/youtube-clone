import React from 'react';
import { ValueOf } from '../../../utils/valueOf';
import { GetVideoByIdQuery } from '../../../generated/graphql';
import { formatDate } from '../../../utils/formatDate/formatDate';
import VideoDetail from './VideoDetail';

export type VideosByPkType = ValueOf<Pick<GetVideoByIdQuery, 'videos_by_pk'>>;

export type VideoDetailContainerProps = {
  video: VideosByPkType;
  fetchedAvatarlUrl: string;
};

const VideoDetailContainer: React.FC<VideoDetailContainerProps> = ({
  video,
  fetchedAvatarlUrl,
}) => {
  const { datetime } =
    video?.created_at && formatDate(new Date(video.created_at), new Date());
  return <VideoDetail {...{ video, fetchedAvatarlUrl, datetime }} />;
};
export default VideoDetailContainer;
