import React from 'react';
import { Box, Grid, Text, Avatar, GridItem, Divider } from '@chakra-ui/react';

import { VideoDetailContainerProps } from './VideoDetailContainer';

type VideoDetailProps = {
  datetime?: string;
} & Partial<VideoDetailContainerProps>;

const VideoDetail: React.FC<VideoDetailProps> = ({
  video = undefined,
  fetchedAvatarlUrl = '',
  datetime = '',
}) => {
  return (
    <Grid>
      <Text as="h1" mb={1} fontSize="lg">
        {video?.title}
      </Text>
      <Text fontSize="sm" color="gray.500" mb={3}>
        {video?.views && (
          <Box as="span" mr={1} letterSpacing="0.04em">
            {video.views}回視聴
          </Box>
        )}
        {datetime && <Box as="span"> {datetime}</Box>}
      </Text>
      <Divider borderColor="gray.300" border="0.6px" mb={3} />
      <Grid
        gridTemplateColumns="auto 1fr"
        gridTemplateRows="auto auto"
        rowGap={2}
      >
        <Avatar
          size="md"
          name={video?.user?.name}
          src={fetchedAvatarlUrl}
          mr={4}
          gridColumn="1/2"
          gridRow="1/2"
          data-testid="avatar"
        />
        <Box
          w="100%"
          textAlign="left"
          lineHeight="short"
          gridColumn="2/3"
          gridRow="1/2"
        >
          <Text>{video?.user?.name}</Text>
          <Text fontSize="sm" color="gray.400">
            {`${video?.user?.number_of_subscribers} subscribers`}
          </Text>
        </Box>
        <Text fontSize="sm" gridColumn="2/3" gridRow="2/3">
          {video.description}
        </Text>
      </Grid>
    </Grid>
  );
};
export default VideoDetail;
