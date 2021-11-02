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

const SignUp: NextPage = () => {
  const { email, password, emailChange, pwChange, createUserFn } =
    useFirebaseAuth();

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
    }

    // アカウントにトークンが設定されるまで待機
    await checkAuthToken(user.uid);

    try {
      await insert_users_one({
        variables: {
          id: user.uid,
          name,
          email,
        },
      });
    } catch (error) {
      alert(error?.messagge);
    }
    setSubmitLoading(false);
    router.push('/trial');
  };
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
          新規アカウント登録
        </Text>

        <Grid as="form" rowGap={6} mb="4">
          <FormControl id="text" isRequired>
            <FormLabel>お名前</FormLabel>
            <Input
              placeholder="Alan Kay"
              _placeholder={{ color: 'gray.500' }}
              type="text"
              value={name}
              onChange={nameChange}
              name="name"
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>メールアドレス</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
              value={email}
              onChange={emailChange}
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>パスワード</FormLabel>
            <Input type="password" value={password} onChange={pwChange} />
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
  );
};
export default SignUp;
