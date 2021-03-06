import React from 'react';
import { Grid, AspectRatio, Box, Image, Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { VideoType } from '../../Item';

type Props = {
  video?: VideoType;
  fetchedThumbnailUrl?: string;
  datetime?: string;
};

const RelatedVideoItemPresenter: React.VFC<Props> = ({
  video = {},
  fetchedThumbnailUrl = '',
  datetime = '',
}) => {
  return (
    <Grid
      key={video.id}
      gridTemplateColumns="1fr 1fr"
      columnGap={4}
      alignItems="center"
    >
      <AspectRatio maxW="100%" ratio={16 / 9}>
        <Link as={NextLink} href={`/watch/${video.id}`} passHref>
          <Image
            src={fetchedThumbnailUrl}
            alt={video.title}
            objectFit="cover"
            cursor="pointer"
            _hover={{ opacity: 0.8 }}
            data-testid="image"
          />
        </Link>
      </AspectRatio>
      <Box textAlign="left" lineHeight="base">
        <Link as={NextLink} href={`/watch/${video.id}`} passHref>
          <Text
            cursor="pointer"
            _hover={{ color: 'blue.600' }}
            transition="ease-out 0.5"
          >
            {video.title}
          </Text>
        </Link>
        <Text fontSize=".9rem" color="gray.500">
          {video?.user?.name}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {video?.views && (
            <Box as="span" mr={1} letterSpacing="0.04em">
              {video.views}回視聴
            </Box>
          )}
          {datetime && <Box as="span"> {datetime}</Box>}
        </Text>
      </Box>
    </Grid>
  );
};
export default RelatedVideoItemPresenter;
