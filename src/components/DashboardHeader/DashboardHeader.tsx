/* eslint-disable react-hooks/rules-of-hooks */
import NextLink from 'next/link';
import {
  Grid,
  Link,
  Image,
  Center,
  Box,
  Collapse,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

import SearchInput from '../SearchInput/SearchInput';

import useDashboardHeader from '../../hooks/useDashboardHeader/useDashboardHeader';
import HamburgerButton from './HamburgerButton';
import HeaderUpload from './HeaderUpload';
import Search from './Search';
import UserIcon from './UserIcon';

// eslint-disable-next-line react/display-name
const DashboardHeaderL: React.VFC = React.memo(() => {
  const { loginUserId, data } = useDashboardHeader();

  //SearchDrawwer For Mobile
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
        <HamburgerButton />
      </Box>
      <Box gridRow="1/2">
        <Link as={NextLink} href={'/'} passHref>
          <Image
            src="/img/yt_logo_rgb_light.png"
            height="28px"
            alt="logo"
            cursor="pointer"
            data-testid="youtubeLogo"
          />
        </Link>
      </Box>
      <Center gridRow="1/2">
        <Search {...{ onToggleSearch, isOpenSearch }} />
      </Center>
      <HeaderUpload {...{ loginUserId }} />
      <UserIcon {...{ loginUserId, data }} />

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
