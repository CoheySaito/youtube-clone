import {
  Box,
  Grid,
  Text,
  Avatar,
  Image,
  GridItem,
  Link,
} from '@chakra-ui/react';

import React, { useEffect, useState } from 'react';
import { firebaseStorage } from '../utils/firebase/firebaseConfig';
import { formatDate } from '../utils/formatDate';
import NextLink from 'next/link';

export type VideoType = {
  __typename?: 'videos';
  created_at: string;
  description?: string;
  duration?: number;
  id: string;
  owner_id?: string;
  title: string;
  updated_at?: string;
  views?: number;
  video_url?: string;
  thumbnail_url?: string;
};

type ItemProps = { video: VideoType };

const Item: React.FC<ItemProps> = ({ video }) => {
  const { datetime } = formatDate(new Date(video.created_at), new Date());
  const [fetchedThumbnailUrl, setFetchedThumbnailUrl] = useState<string>(null);

  useEffect(() => {
    const fetchFn = async () => {
      const res: string = await firebaseStorage
        .ref(video?.thumbnail_url || 'thumbnails/no_image.jpeg')
        .getDownloadURL();
      setFetchedThumbnailUrl(res);
    };
    try {
      fetchFn();
    } catch (error) {
      console.error(error);
    }
  });

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
          />
        </GridItem>

        <Avatar
          gridColumn="span 1"
          gridRow="span 3"
          size="md"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          mr={4}
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
          Dan Abrahmov
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
