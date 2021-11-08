import React, { useEffect, useState } from 'react';
import { formatDate } from '../utils/formatDate';

import { Grid, AspectRatio, Box, Image, Text, Link } from '@chakra-ui/react';
import { firebaseStorage } from '../utils/firebase/firebaseConfig';

import NextLink from 'next/link';

type RelatedVideoItemProps = {
  video: {
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
};

const RelatedVideoItem: React.FC<RelatedVideoItemProps> = ({ video }) => {
  const { datetime } =
    video?.created_at && formatDate(new Date(video.created_at), new Date());

  const [fetchedThumbnailUrl, setFetchedThumbnailUrl] = useState<string>();

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
        <Text fontSize="sm" color="gray.500">
          投稿者
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
export default RelatedVideoItem;
