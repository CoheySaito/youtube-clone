import {
  Grid,
  Image,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
  Center,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import NextLink from 'next/link';

const index: NextPage = () => {
  return (
    <Center bg="#fafafa">
      <Grid
        rowGap={4}
        maxW="560px"
        w="42%"
        mx="auto"
        bg="white"
        border="1px solid rgba(0, 0, 0, 0.12);"
        px={10}
        py={12}
        borderRadius="md"
      >
        <Image
          src="/img/yt_logo_rgb_light.png"
          w="80px"
          alt="logo"
          cursor="pointer"
        />
        <Text as="h1" fontSize="3xl" mb={6}>
          パスワードの再発行
        </Text>

        <Grid as="form" rowGap={6} mb="4">
          <FormControl id="email" isRequired>
            <FormLabel>メールアドレス</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
            />
          </FormControl>

          <Button
            w="20%"
            minW="160px"
            type="submit"
            bg={'blue.600'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
            boxShadow="md"
            fontSize="sm"
          >
            再発行メールを送信
          </Button>
        </Grid>

        <Link as={NextLink} href={'/login'} passHref>
          <Text
            color="blue.600"
            _hover={{ color: 'blue.300' }}
            cursor="pointer"
            fontSize=".8rem"
          >
            ログインはこちら
          </Text>
        </Link>
      </Grid>
    </Center>
  );
};
export default index;
