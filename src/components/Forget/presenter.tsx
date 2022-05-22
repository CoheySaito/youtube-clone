import React from 'react';
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

import NextLink from 'next/link';
import useForget from '../../hooks/useForget/useForget';

type Props = Partial<ReturnType<typeof useForget>>;

const ForgetPresenter: React.VFC<Props> = ({
  emailRef = undefined,
  loading = false,
  clickHandler = () => undefined,
}) => {
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
            data-testid="fromForgetToMain"
          />
        </Link>
        <Text as="h1" fontSize="3xl" mb={6}>
          パスワードの再発行
        </Text>

        <Grid as="form" rowGap={6} mb="4">
          <FormControl id="email" isRequired>
            <FormLabel>メールアドレス</FormLabel>
            <Input type="email" ref={emailRef} data-testid="emailInput" />
          </FormControl>

          <Button
            w="20%"
            minW="160px"
            type="button"
            bg={'blue.600'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
            boxShadow="md"
            fontSize="sm"
            onClick={clickHandler}
            isLoading={loading}
            loadingText="送信中"
            spinnerPlacement="end"
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
            data-testid="fromForgetToLogin"
          >
            ログインはこちら
          </Text>
        </Link>
      </Grid>
    </Center>
  );
};
export default ForgetPresenter;
