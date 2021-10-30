import React, { ReactNode } from 'react';
import Error from 'next/error';
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  Center,
  Spinner,
  Button,
  Link,
} from '@chakra-ui/react';
import { useGetUsersQuery, useGetVideosQuery } from '../generated/graphql';
import NextLink from 'next/link';

const Test: React.VFC = () => {
  const { data, loading, error } = useGetVideosQuery({
    fetchPolicy: 'cache-and-network',
  });

  const {
    data: usersDate,
    loading: usersLoading,
    error: usersError,
  } = useGetUsersQuery({
    fetchPolicy: 'cache-and-network',
  });
  const LINKS = [
    {
      title: 'Watch',
      color: 'yellow',
      href: '/watch/1',
    },
    {
      title: 'Trial',
      color: 'pink',
      href: '/trial',
    },
    {
      title: 'Login',
      color: 'green',
      href: '/login',
    },
    {
      title: 'Signup',
      color: 'blue',
      href: '/signup',
    },
  ] as const;

  if (error || usersError) {
    <Error statusCode={400}>{error.message}</Error>;
  }

  if (loading || usersLoading) {
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />;
  }
  return (
    <>
      <SimpleGrid minChildWidth="240px" spacing={8} bg={'gray.800'} p={6}>
        {LINKS.map((link, i) => {
          return (
            <Link key={i} as={NextLink} href={link.href} passHref>
              <Button colorScheme={link.color} variant="outline">
                {link.title}
              </Button>
            </Link>
          );
        })}
      </SimpleGrid>
      <Center bg={'gray.800'}>
        <Container>
          <Stack direction={{ base: 'column', lg: 'row' }}>
            <Stack
              color={'gray.400'}
              justify={{ lg: 'center' }}
              py={{ base: 4, md: 20, xl: 60 }}
            >
              <Box mb={{ base: 8, md: 20 }}>
                <Text
                  fontFamily={'heading'}
                  fontWeight={700}
                  textTransform={'uppercase'}
                  mb={3}
                  fontSize={'xl'}
                  color={'gray.500'}
                >
                  Technology
                </Text>
                <Heading
                  color={'white'}
                  mb={5}
                  fontSize={{ base: '3xl', md: '5xl' }}
                >
                  21st century agriculture
                </Heading>
                <Text fontSize={'xl'} color={'gray.400'}>
                  The NewLife™ technology allows you to monitor your crops and
                  get complete insights at real time.
                </Text>
              </Box>
              {/* video */}
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={6}>
                {data?.videos.map((video) => (
                  <Box key={video.id}>
                    <Text
                      fontFamily={'heading'}
                      fontSize={'3xl'}
                      color={'white'}
                      mb={3}
                    >
                      {video.title}
                    </Text>
                    <Text fontSize={'xl'} color={'gray.400'}>
                      {video.description}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
              {/* users */}
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                {usersDate?.users?.map((user) => (
                  <Box key={user.id}>
                    <Text
                      fontFamily={'heading'}
                      fontSize={'3xl'}
                      color={'white'}
                      mb={3}
                    >
                      {user.name}
                    </Text>
                    <Text fontSize={'xl'} color={'gray.400'}>
                      {user.email}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
            <Flex flex={1} />
          </Stack>
        </Container>
      </Center>
    </>
  );
};
export default Test;
