/* eslint-disable react-hooks/rules-of-hooks */
import { Grid } from '@chakra-ui/layout';
import NextLink from 'next/link';
import {
  Button,
  IconButton,
  Link,
  Image,
  Center,
  Avatar,
  Box,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
  useBreakpointValue,
  Collapse,
} from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import { useColorModeValue } from '@chakra-ui/system';

import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import UploadModal from './UploadModal';
import ButtonWithAlertDialog from './ButtonWithAlertDialog';
import BasicDrawer from './BasicDrawer';
import SearchInput from './SearchInput';

import { useGetUserByIdLazyQuery } from '../generated/graphql';
import { firebaseStorage } from '../utils/firebase/firebaseConfig';
import { LoginUserIdContext } from '../context/loginUserIdrContext';
import { UploadModalContext } from '../context/uploadModalContext';

// eslint-disable-next-line react/display-name
const DashboardHeaderL: React.VFC = React.memo(() => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const { loginUserId, checkLocalStorage } = useContext(LoginUserIdContext);

  const [GetUserByIdQuery, { data, error }] = useGetUserByIdLazyQuery({
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    checkLocalStorage();
  }, []);

  useEffect(() => {
    if (loginUserId) {
      GetUserByIdQuery({
        variables: {
          id: loginUserId,
        },
      });
    }
  }, [loginUserId]);

  //FirebaseStorageからAvatarをfetch
  const [fetchedAvatarlUrl, setFetchedAvatarlUrl] = useState<string>(null);
  //途中でunMountした場合の処理
  const [isMounted, setIsMounted] = useState(true);
  useEffect(() => {
    setIsMounted(true);
    const fetchFn = async () => {
      const avatarRes: string = await firebaseStorage
        .ref(data?.users_by_pk?.profile_photo_url || 'avatar/no_avatar.png')
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

    return () => {
      setIsMounted(false);
    };
  }, [data]);

  //Popover
  const initialFocusRef = React.useRef();

  // UploadModal
  const { isOpen, onOpen, onClose } = useContext(UploadModalContext);

  //BasicDrawer
  const {
    isOpen: isOpenDrawer,
    onOpen: onOpenDrawer,
    onClose: onCloseDrawer,
  } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>();

  //SearchDrawwer For Mobile
  const { isOpen: isOpenSearch, onToggle: onToggleSearch } = useDisclosure();

  if (error) {
    console.error(error?.message);
  }

  return (
    <Grid
      gridAutoFlow="column"
      justifyContent="space-around"
      gridTemplateColumns={{
        base: 'auto auto minmax(0,1fr)',
        md: 'auto auto minmax(0,1fr) auto auto',
      }}
      gridTemplateRows={{ base: 'auto auto', md: 'auto' }}
      alignItems="center"
      columnGap={4}
      py={4}
    >
      <Box gridRow="1/2">
        <IconButton
          aria-label="Open menu"
          fontSize="24px"
          color={'gray.800'}
          opacity="0.4"
          variant="ghost"
          icon={<AiOutlineMenu />}
          ref={btnRef}
          onClick={onOpenDrawer}
        />
        <BasicDrawer
          {...{ btnRef, isOpenDrawer, onOpenDrawer, onCloseDrawer }}
        />
      </Box>
      <Box gridRow="1/2">
        <Link as={NextLink} href={'/'} passHref>
          <Image
            src="/img/yt_logo_rgb_light.png"
            height="28px"
            alt="logo"
            cursor="pointer"
          />
        </Link>
      </Box>
      <Center gridRow="1/2">
        {isMobile ? (
          <IconButton
            aria-label="Serch"
            fontSize="xl"
            w="80px"
            opacity="0.8"
            onClick={onToggleSearch}
          >
            {isOpenSearch ? <AiOutlineClose /> : <AiOutlineSearch />}
          </IconButton>
        ) : (
          <SearchInput />
        )}
      </Center>
      {loginUserId && (
        <Box display={{ base: 'none', md: 'block' }}>
          <Button
            variant="ghost"
            leftIcon={<BsFillCameraVideoFill fontSize="18px" />}
            size="md"
            colorScheme="gray"
            opacity="0.4"
            onClick={onOpen}
          >
            Upload
          </Button>
          <UploadModal {...{ isOpen, onOpen, onClose }} />
        </Box>
      )}
      {loginUserId ? (
        <Popover
          initialFocusRef={initialFocusRef}
          placement="bottom"
          closeOnBlur={false}
        >
          <PopoverTrigger>
            <Avatar
              size="sm"
              name={data?.users_by_pk?.name}
              src={fetchedAvatarlUrl}
              cursor="pointer"
              display={{ base: 'none', md: 'block' }}
            />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverCloseButton />
            <PopoverBody display="flex" justifyContent="center" py={6}>
              <ButtonWithAlertDialog {...{ initialFocusRef }} />
            </PopoverBody>
          </PopoverContent>
        </Popover>
      ) : (
        <Link as={NextLink} href="/login" passHref>
          <Button
            colorScheme="blue"
            variant="outline"
            display={{ base: 'none', md: 'block' }}
          >
            ログイン
          </Button>
        </Link>
      )}
      <Box
        gridColumn="1/4"
        gridRow="2/3"
        display={{ base: 'block', md: 'none' }}
      >
        <Collapse in={isOpenSearch} animateOpacity>
          <Box mt={6}>
            <SearchInput />
          </Box>
        </Collapse>
      </Box>
    </Grid>
  );
});
export default DashboardHeaderL;
