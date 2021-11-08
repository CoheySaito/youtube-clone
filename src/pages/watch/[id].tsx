import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
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
import Layout from '../../components/layouts/Layout';
import AppContextWrapper from '../../context/AppContextWrapper';

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
    views: 0,
    user: {
      __typename: 'users',
      name: '',
      number_of_subscribers: 0,
      profile_photo_url: '',
    },
  };
  const { datetime } =
    video?.created_at && formatDate(new Date(video.created_at), new Date());

  const [fetchedVideoUrl, setFetchedVideolUrl] = useState<string>();
  const [fetchedAvatarlUrl, setFetchedAvatarlUrl] = useState<string>(null);

  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const fetchFn = async () => {
      const res: string = await firebaseStorage
        .ref(video?.video_url || 'videos/no_video.jpeg')
        .getDownloadURL();

      if (isMounted) {
        setFetchedVideolUrl(res);
      }

      const avatarRes: string = await firebaseStorage
        .ref(video?.user?.profile_photo_url || 'avatar/no_avatar.png')
        .getDownloadURL();
      if (isMounted) {
        setFetchedAvatarlUrl(avatarRes);
      }
    };
    try {
      fetchFn();
    } catch (error) {
      console.error(error);
    }
  });

  if (loading) {
    return (
      <AppContextWrapper>
        <Layout sidebar={false} title="Watch">
          <Center height="100%">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Center>
        </Layout>
      </AppContextWrapper>
    );
  }

  if (error) {
    console.error(error?.message);
  }

  return (
    <AppContextWrapper>
      <Layout sidebar={false} title="Watch">
        <Grid
          gridTemplateColumns={{ base: '1fr', md: '4fr 2fr' }}
          columnGap={6}
          alignContent="start"
          justifyContent="start"
          py={6}
        >
          <GridItem gridColumn={{ base: '1/2', md: '1/2' }}>
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
                  name={video?.user?.name}
                  src={fetchedAvatarlUrl}
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
      </Layout>
    </AppContextWrapper>
  );
};
export default Watch;
