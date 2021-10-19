import { Grid, AspectRatio, Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

type RelatedVideoProps = {
  title?: string;
};

const RelatedVideo: React.FC<RelatedVideoProps> = () => {
  return (
    <Grid gridTemplateColumns="1fr 1fr" columnGap={4} alignItems="center">
      <AspectRatio maxW="100%" ratio={16 / 9}>
        <Image
          src="https://bit.ly/naruto-sage"
          alt="naruto"
          objectFit="cover"
        />
      </AspectRatio>
      <Box textAlign="left" lineHeight="base">
        <Text>タイトル</Text>
        <Text fontSize="sm" color="gray.500">
          投稿者
        </Text>
        <Text fontSize="sm" color="gray.500">
          <Text>13 回視聴 2021/9/11</Text>
        </Text>
      </Box>
    </Grid>
  );
};
export default RelatedVideo;
