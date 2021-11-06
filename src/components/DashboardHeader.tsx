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
import React, { useContext } from 'react';
import { useColorModeValue } from '@chakra-ui/system';

import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import UploadModal from './UploadModal';
import ButtonWithAlertDialog from './ButtonWithAlertDialog';
import BasicDrawer from './BasicDrawer';
import SearchInput from './SearchInput';
import { CurrentUserContext } from '../context/CurrentUserContext';

// eslint-disable-next-line react/display-name
const DashboardHeaderL: React.VFC = React.memo(() => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const { currentUser, checkFirebaseUser } = useContext(CurrentUserContext);

  //Popover
  const initialFocusRef = React.useRef();

  // UploadModal
  const { isOpen, onOpen, onClose } = useDisclosure();

  //BasicDrawer
  const {
    isOpen: isOpenDrawer,
    onOpen: onOpenDrawer,
    onClose: onCloseDrawer,
  } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>();

  //SearchDrawwer
  const { isOpen: isOpenSearch, onToggle: onToggleSearch } = useDisclosure();

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
          color={useColorModeValue('gray.800', 'inherit')}
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
      {currentUser && (
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
              display={{ base: 'none', md: 'block' }}
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
