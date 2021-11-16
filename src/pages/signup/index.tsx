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
import React, { ChangeEvent, useCallback, useState } from 'react';
import NextLink from 'next/link';
import { useFirebaseAuth } from '../../hooks/useFirebaseAuth';
import useUserCrud from '../../hooks/useUserCrud';
import { useRouter } from 'next/router';
import { checkAuthToken } from '../../utils/checkAuthToken';
import Head from 'next/head';

import Cookie from 'universal-cookie';

const SignUp: NextPage = () => {
  const { emailRef, passwordRef, createUserFn } = useFirebaseAuth();

  //name
  const [name, setName] = useState('');

  const nameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const { insert_users_one } = useUserCrud();

  const router = useRouter();

  const [submitLoading, setSubmitLoading] = useState(false);

  const submitHandeler = async () => {
    //loading
    setSubmitLoading(true);

    const user = await createUserFn();

    if (!user?.uid) {
      alert('ユーザーの登録に失敗しました。');
      setSubmitLoading(false);
      return;
    }

    // アカウントにトークンが設定されるまで待機
    await checkAuthToken(user.uid);

    //token→cookie
    const HASURA_TOKEN_KEY = 'https://hasura.io/jwt/claims';
    const cookie = new Cookie();

    const token = await user.getIdToken();
    cookie.set('token', token, { path: '/' });

    try {
      await insert_users_one({
        variables: {
          id: user.uid,
          name,
          email: emailRef.current.value,
        },
      });
    } catch (error) {
      alert(error?.messagge);
    }
    setSubmitLoading(false);
    router.push('/');
  };
  return (
    <>
      <Head>
        <title>YouTubeClone | SignUp</title>
      </Head>
      <Center bg="#fafafa">
        <Grid
          rowGap={4}
          w="560px"
          mx="auto"
          bg="white"
          border="1px solid rgba(0, 0, 0, 0.12);"
          px={10}
          py={12}
          borderRadius="md"
        >
          <Link as={NextLink} href={'/'} passHref>
            <Image
              src="/img/yt_logo_rgb_light.png"
              w="80px"
              alt="logo"
              cursor="pointer"
            />
          </Link>
          <Text as="h1" fontSize="3xl" mb={6}>
            新規アカウント登録
          </Text>

          <Grid as="form" rowGap={6} mb="4">
            <FormControl id="text" isRequired>
              <FormLabel>お名前</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={nameChange}
                name="name"
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>メールアドレス</FormLabel>
              <Input type="email" ref={emailRef} />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>パスワード</FormLabel>
              <Input type="password" ref={passwordRef} />
            </FormControl>

            <Button
              w="20%"
              minW="96px"
              type="button"
              bg={'blue.600'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              boxShadow="md"
              fontSize="sm"
              onClick={submitHandeler}
              isLoading={submitLoading}
              loadingText="作成中..."
              spinnerPlacement="end"
            >
              新規登録
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
    </>
  );
};
export default SignUp;
