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
import NextLink from 'next/link';
import { VideoType } from './index';

export type Props = {
  video?: VideoType;
  fetchedThumbnailUrl?: string;
  fetchedAvatarlUrl?: string;
  datetime?: string;
};

const ItemPresenter: React.FC<Props> = ({
  video = undefined,
  fetchedThumbnailUrl = '',
  fetchedAvatarlUrl = '',
  datetime = '',
}) => {
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

export default ItemPresenter;
