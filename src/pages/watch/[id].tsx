import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import SidelessHomeLayout from '../../components/layouts/SidelessHomeLayout';
import {
  Box,
  Grid,
  Text,
  Avatar,
  GridItem,
  AspectRatio,
  Divider,
  Center,
  Spinner,
  Image,
} from '@chakra-ui/react';
import RelatedVideo from '../../components/RelatedVideo';
import { useGetVideoByIdQuery } from '../../generated/graphql';
import { firebaseStorage } from '../../utils/firebase/firebaseConfig';
import { formatDate } from '../../utils/formatDate';

const Watch: NextPage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  const { data, loading, error } = useGetVideoByIdQuery({
    variables: {
      id,
    },
  });
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
  };
  const { datetime } =
    video?.created_at && formatDate(new Date(video.created_at), new Date());

  const [fetchedVideoUrl, setFetchedVideolUrl] = useState<string>();

  useEffect(() => {
    const fetchFn = async () => {
      const res: string = await firebaseStorage
        .ref(video?.video_url || 'videos/no_video.jpeg')
        .getDownloadURL();
      setFetchedVideolUrl(res);
    };
    try {
      fetchFn();
    } catch (error) {
      console.error(error);
    }
  });

  if (loading) {
    return (
      <SidelessHomeLayout title="Watch">
        <Center height="100%">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      </SidelessHomeLayout>
    );
  }

  if (error) {
    return <p>Error:{error?.message}</p>;
  }

  return (
    <SidelessHomeLayout title="Watch">
      <Grid
        gridTemplateColumns="4fr 2fr"
        columnGap={6}
        alignContent="start"
        justifyContent="start"
        py={6}
      >
        <GridItem gridColumn="1/2">
          <AspectRatio maxW="100%" ratio={16 / 9} mb={4}>
            {video?.video_url ? (
              <iframe
                title={video.title}
                src={fetchedVideoUrl}
                allowFullScreen
              />
            ) : (
              <Image src={fetchedVideoUrl} alt="no_video" objectFit="cover" />
            )}
          </AspectRatio>

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
                <Text>Dan Abrahmov</Text>
                <Text fontSize="sm" color="gray.400">
                  4 subscribers test1
                </Text>
              </Box>
              <Text fontSize="sm" gridColumn="2/3" gridRow="2/3">
                {video.description}
              </Text>
            </Grid>
          </Grid>
        </GridItem>

        <GridItem gridColumn="2/3">
          <RelatedVideo />
        </GridItem>
      </Grid>
    </SidelessHomeLayout>
  );
};
export default Watch;
