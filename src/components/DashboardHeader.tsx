import { Grid } from '@chakra-ui/layout';
import NextLink from 'next/link';
import {
  Button,
  IconButton,
  Input,
  InputGroup,
  Link,
  useDisclosure,
  Image,
  InputRightElement,
  Center,
  Avatar,
  Box,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useColorModeValue } from '@chakra-ui/system';

import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import UploadModal from './UploadModal';
import firebase from '../utils/firebase/firebaseConfig';
import ButtonWithAlertDialog from './ButtonWithAlertDialog';

// eslint-disable-next-line react/display-name
const DashboardHeaderL: React.VFC = React.memo(() => {
  const mobileNav = useDisclosure();

  // Modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  //FirebaseUser
  const [currentUser, setCurrentUser] = useState<firebase.User>(
    firebase.auth().currentUser,
  );

  //ログアウト時userを確認用
  const checkFirebaseUser = () => {
    setCurrentUser(firebase.auth().currentUser);
  };

  //Popover
  const initialFocusRef = React.useRef();

  return (
    <Grid
      gridAutoFlow="column"
      justifyContent="space-around"
      gridTemplateColumns="auto auto minmax(0,1fr) auto auto"
      alignItems="center"
      columnGap={4}
      py={4}
    >
      <IconButton
        aria-label="Open menu"
        fontSize="24px"
        color={useColorModeValue('gray.800', 'inherit')}
        opacity="0.4"
        variant="ghost"
        icon={<AiOutlineMenu />}
        onClick={mobileNav.onOpen}
      />
      <Link as={NextLink} href={'/'} passHref>
        <Image
          src="/img/yt_logo_rgb_light.png"
          height="28px"
          alt="logo"
          cursor="pointer"
        />
      </Link>
      <Center>
        <InputGroup maxW="600px">
          <Input type="tel" placeholder="Search..." fontSize="lg" />
          <InputRightElement w="80px" cursor="pointer">
            <IconButton
              aria-label="Serch"
              fontSize="xl"
              w="80px"
              borderLeftRadius="none"
              opacity="0.8"
            >
              <AiOutlineSearch />
            </IconButton>
          </InputRightElement>
        </InputGroup>
      </Center>
      {currentUser && (
        <Box>
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
      {currentUser ? (
        <Popover
          initialFocusRef={initialFocusRef}
          placement="bottom"
          closeOnBlur={false}
        >
          <PopoverTrigger>
            <Avatar
              size="sm"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
              cursor="pointer"
            />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverCloseButton />
            <PopoverBody display="flex" justifyContent="center" py={6}>
              <ButtonWithAlertDialog
                {...{ initialFocusRef, checkFirebaseUser }}
              />
            </PopoverBody>
          </PopoverContent>
        </Popover>
      ) : (
        <Link as={NextLink} href="/login" passHref>
          <Button colorScheme="blue" variant="outline">
            ログイン
          </Button>
        </Link>
      )}
    </Grid>
  );
});
export default DashboardHeaderL;
