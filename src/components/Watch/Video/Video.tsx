import React from 'react';
import { AspectRatio, Image } from '@chakra-ui/react';
import { VideoType } from '../../Item/ItemContainer';

type VideoProps = { video: VideoType; fetchedVideoUrl: string };

const Video: React.FC<VideoProps> = ({ video, fetchedVideoUrl }) => {
  return (
    <AspectRatio maxW="100%" ratio={16 / 9} mb={4}>
      {video?.video_url ? (
        <iframe
          title={video.title}
          src={fetchedVideoUrl}
          data-testid="iframe"
          allowFullScreen
        />
      ) : (
        <Image
          src={fetchedVideoUrl}
          alt="no_video"
          objectFit="cover"
          data-testid="image"
        />
      )}
    </AspectRatio>
  );
};
export default Video;
