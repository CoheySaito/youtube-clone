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
import React from 'react';
import NextLink from 'next/link';
import useSignUp from '../../hooks/useSignUp/useSignUp';

const SignUp: React.VFC = () => {
  const { nameRef, emailRef, passwordRef, submitHandeler, submitLoading } =
    useSignUp();
  return (
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
              ref={nameRef}
              name="name"
              data-testid="nameInput"
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>メールアドレス</FormLabel>
            <Input type="email" ref={emailRef} data-testid="emailInput" />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>パスワード</FormLabel>
            <Input
              type="password"
              ref={passwordRef}
              data-testid="passwordInput"
            />
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
            data-testid="fromSignupToLogin"
          >
            ログインはこちら
          </Text>
        </Link>
      </Grid>
    </Center>
  );
};
export default SignUp;
