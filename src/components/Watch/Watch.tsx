import React from 'react';
import { Grid, GridItem, Divider } from '@chakra-ui/react';

import RelatedVideoContainer from '../RelatedVideo/RelatedVideoContainer';
import { VideoByPkType } from './WatchContainer';
import Video from './Video/Video';
import VideoDetail from './VideoDetail/VideoDetail';

type WatchProps = {
  video: VideoByPkType;
  fetchedVideoUrl: string;
  fetchedAvatarlUrl: string;
};

const Watch: React.FC<WatchProps> = ({
  video = undefined,
  fetchedVideoUrl = '',
  fetchedAvatarlUrl = '',
}) => {
  return (
    <Grid
      gridTemplateColumns={{ base: '1fr', md: '4fr 2fr' }}
      columnGap={6}
      alignContent="start"
      justifyContent="start"
      py={6}
    >
      <GridItem gridColumn={{ base: '1/2', md: '1/2' }}>
        <Video {...{ video, fetchedVideoUrl }} />

        <VideoDetail
          {...{
            video,
            fetchedAvatarlUrl,
          }}
        />
      </GridItem>

      <GridItem
        gridColumn={{ base: '1/2', md: '2/3' }}
        pt={{ base: 10, md: 0 }}
      >
        <Divider
          borderColor="gray.300"
          border="0.6px"
          mb={3}
          display={{ base: 'block', md: 'none' }}
        />
        <RelatedVideoContainer />
      </GridItem>
    </Grid>
  );
};
export default Watch;
