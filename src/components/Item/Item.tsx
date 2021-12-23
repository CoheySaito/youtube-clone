import {
  Box,
  Grid,
  Text,
  Avatar,
  Image,
  GridItem,
  Link,
} from '@chakra-ui/react';

import React from 'react';
import { formatDate } from '../../utils/formatDate/formatDate';
import NextLink from 'next/link';
import { GetVideosQuery } from '../../generated/graphql';
import { ValueOf } from '../../utils/valueOf';
import useFetchFirebaseStorage from '../../hooks/useFetchFirebaseStorage/useFetchFirebaseStorage';

//type
type VideosType = Pick<GetVideosQuery, 'videos'>;
export type VideoType = ValueOf<VideosType>[number];
export type ItemProps = { video: VideoType };

const Item: React.FC<ItemProps> = ({ video }) => {
  const fetchedThumbnailUrl = useFetchFirebaseStorage(
    video?.thumbnail_url || 'thumbnails/no_image.jpeg',
  );
  const fetchedAvatarlUrl = useFetchFirebaseStorage(
    video?.user?.profile_photo_url || 'avatar/no_avatar.png',
  );

  const { datetime } = formatDate(new Date(video.created_at), new Date());

  return (
    <Link as={NextLink} href={`/watch/${video.id}`} passHref>
      <Grid
        gridTemplateColumns="auto 1fr"
        gridTemplateRows="repeat(4,auto)"
        justifyItems="center"
        alignItems="center"
        rowGap={1}
        py={6}
        cursor="pointer"
      >
        <GridItem
          colSpan={2}
          position="relative"
          w="100%"
          h="0"
          paddingBottom="61.8%"
        >
          <Image
            position="absolute"
            src={fetchedThumbnailUrl}
            alt={video.title}
            objectFit="cover"
            w="100%"
            h="100%"
            data-testid="image"
          />
        </GridItem>

        <Avatar
          gridColumn="span 1"
          gridRow="span 3"
          size="md"
          name={video?.user?.name}
          src={fetchedAvatarlUrl}
          mr={4}
          data-testid="avatar"
        />
        <Text
          w="100%"
          textAlign="left"
          as="h2"
          fontSize="lg"
          lineHeight="short"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {video.title}
        </Text>
        <Text
          w="100%"
          textAlign="left"
          fontSize="0.9rem"
          fontWeight="thin"
          lineHeight="short"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {video?.user?.name}
        </Text>
        <Text
          w="100%"
          textAlign="left"
          fontSize="sm"
          fontWeight="thin"
          lineHeight="short"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {video?.views && (
            <Box as="span" mr={1} letterSpacing="0.04em">
              {video.views}回視聴
            </Box>
          )}
          <Box as="span"> {datetime}</Box>
        </Text>
      </Grid>
    </Link>
  );
};

export default Item;
