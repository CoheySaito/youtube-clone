import { useDisclosure, Grid, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { useLoginUserIdContext } from '../../context/loginUserIdrContext';
import LogoutAlertDialog from '../LogoutAlertDialog/LogoutAlertDialog';
import SideBarUploadItem from './SideBarUploadItem';
import { AiFillHome, AiOutlineLogout, AiOutlineLogin } from 'react-icons/ai';
import { MdOutlineWhatshot } from 'react-icons/md';
import { GrChannel } from 'react-icons/gr';
import NextLink from 'next/link';

// eslint-disable-next-line react/display-name
const SideBar: React.VFC = React.memo(() => {
  const contents = [
    { title: 'ホーム', icon: <AiFillHome />, href: '/', testid: 'homeTest' },
    {
      title: 'トレンド',
      icon: <MdOutlineWhatshot />,
      href: '/',
      testid: 'trendTest',
    },
    {
      title: '登録チャンネル',
      icon: <GrChannel />,
      href: '/',
      testid: 'channelTest',
    },
  ] as const;

  const { loginUserId } = useLoginUserIdContext();

  //LogoutAlertDialog
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Grid as="nav">
      {contents?.map((content, i) => (
        <Link as={NextLink} href={content.href} passHref key={i}>
          <Grid
            as="nav"
            gridAutoFlow="column"
            alignItems="center"
            gridTemplateColumns="auto 1fr"
            columnGap="6"
            py="3"
            cursor="pointer"
            transition={'background 0.3s ease'}
            _hover={{
              bg: 'gray.100',
            }}
            borderRadius="lg"
            data-testid={content.testid}
          >
            <Text textAlign="left" fontSize="2xl" opacity="0.4">
              {content.icon}
            </Text>
            <Text fontSize="md">{content.title}</Text>
          </Grid>
        </Link>
      ))}

      {loginUserId && <SideBarUploadItem />}

      {loginUserId ? (
        <Grid
          as="nav"
          gridAutoFlow="column"
          alignItems="center"
          gridTemplateColumns="auto 1fr"
          columnGap="6"
          py="3"
          cursor="pointer"
          transition={'background 0.3s ease'}
          _hover={{
            bg: 'gray.100',
          }}
          borderRadius="lg"
          onClick={onOpen}
        >
          <Text textAlign="left" fontSize="2xl" opacity="0.4">
            <AiOutlineLogout />
          </Text>
          <Text fontSize="md" data-testid="logoutText">
            ログアウト
          </Text>
          <LogoutAlertDialog {...{ isOpen, onClose }} />
        </Grid>
      ) : (
        <Link as={NextLink} href="/login" passHref>
          <Grid
            as="nav"
            gridAutoFlow="column"
            alignItems="center"
            gridTemplateColumns="auto 1fr"
            columnGap="6"
            py="3"
            cursor="pointer"
            transition={'background 0.3s ease'}
            _hover={{
              bg: 'gray.100',
            }}
            borderRadius="lg"
          >
            <Text textAlign="left" fontSize="2xl" opacity="0.4">
              <AiOutlineLogin />
            </Text>
            <Text fontSize="md">ログイン</Text>
          </Grid>
        </Link>
      )}
    </Grid>
  );
});
export default SideBar;
