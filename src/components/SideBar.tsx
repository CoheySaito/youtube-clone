import { Text, Link, Grid, useDisclosure } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { MdOutlineWhatshot } from 'react-icons/md';
import { GrChannel } from 'react-icons/gr';
import NextLink from 'next/link';
import { CurrentUserContext } from '../context/CurrentUserContext';
import LogoutAlertDialog from './LogoutAlertDialog';
import { AiFillHome, AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import SideBarUploadItem from './SideBarUploadItem';

// eslint-disable-next-line react/display-name
const SideBar: React.VFC = React.memo(() => {
  const contents = [
    { title: 'ホーム', icon: <AiFillHome />, href: '/' },
    { title: 'トレンド', icon: <MdOutlineWhatshot />, href: '/' },
    { title: '登録チャンネル', icon: <GrChannel />, href: '/' },
  ] as const;

  const { currentUser } = useContext(CurrentUserContext);

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
          >
            <Text textAlign="left" fontSize="2xl" opacity="0.4">
              {content.icon}
            </Text>
            <Text fontSize="md">{content.title}</Text>
          </Grid>
        </Link>
      ))}

      {currentUser && <SideBarUploadItem />}

      {currentUser ? (
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
          <Text fontSize="md">ログアウト</Text>
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
