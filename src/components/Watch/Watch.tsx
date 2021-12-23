import React from 'react';
import { Box, Grid, Text, Avatar, GridItem, Divider } from '@chakra-ui/react';
import RelatedVideo from '../RelatedVideo/RelatedVideo';
import { GetVideoByIdQuery } from '../../generated/graphql';
import Video from './Video';
import VideoDetail from './VideoDetail';
import useFetchFirebaseStorage from '../../hooks/useFetchFirebaseStorage/useFetchFirebaseStorage';

type WatchProps = { data: GetVideoByIdQuery };

const Watch: React.FC<WatchProps> = ({ data }) => {
  const video = data?.videos_by_pk ?? {
    __typename: 'videos',
    created_at: '',
    description: '',
    duration: 0,
    id: '',
    thumbnail_url: '',
    video_url: '',
    title: '',
    updated_at: '',
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
        <RelatedVideo />
      </GridItem>
    </Grid>
  );
};
export default Watch;
