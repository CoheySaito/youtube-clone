import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import SidelessHomeLayout from '../../components/layouts/SidelessHomeLayout';
import {
  Box,
  Grid,
  Text,
  Avatar,
  Image,
  GridItem,
  AspectRatio,
  Divider,
} from '@chakra-ui/react';
import RelatedVideo from './RelatedVideo';

const Watch: NextPage = () => {
  const router = useRouter();
  const id = router.query.id;
  return (
    <SidelessHomeLayout title="Watch">
      <Grid
        gridTemplateColumns="4fr 2fr"
        columnGap={6}
        alignContent="start"
        justifyContent="start"
      >
        <GridItem gridColumn="1/2">
          <AspectRatio maxW="100%" ratio={16 / 9} mb={4}>
            <iframe
              title="naruto"
              src="https://www.youtube.com/embed/QhBnZ6NPOY0"
            />
          </AspectRatio>

          <Grid>
            <Text as="h1" mb={1} fontSize="lg">
              スキューバダイビング
            </Text>
            <Text fontSize="sm" color="gray.500" mb={3}>
              10 回視聴 • 2021/9/25
            </Text>
            <Divider borderColor="gray.300" border="0.6px" mb={3} />
            <Grid
              gridTemplateColumns="auto 1fr"
              gridTemplateRows="auto auto"
              rowGap={2}
            >
              <Avatar
                size="md"
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
                mr={4}
                gridColumn="1/2"
                gridRow="1/2"
              />
              <Box
                w="100%"
                textAlign="left"
                lineHeight="short"
                gridColumn="2/3"
                gridRow="1/2"
              >
                <Text>test1</Text>
                <Text fontSize="sm" color="gray.400">
                  4 subscribers test1
                </Text>
              </Box>
              <Text fontSize="sm" gridColumn="2/3" gridRow="2/3">
                海の中を快適に泳ぐ
              </Text>
            </Grid>
          </Grid>
        </GridItem>

        <GridItem gridColumn="2/3">
          <Grid rowGap={4}>
            {[...Array.from(Array(10).keys())].map((each, i) => (
              <RelatedVideo key={i} />
            ))}
          </Grid>
        </GridItem>
      </Grid>
    </SidelessHomeLayout>
  );
};
export default Watch;
