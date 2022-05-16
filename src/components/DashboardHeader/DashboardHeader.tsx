/* eslint-disable react-hooks/rules-of-hooks */
import NextLink from 'next/link';
import { Grid, Link, Image, Center, Box, Collapse } from '@chakra-ui/react';
import React from 'react';

import { GetUserByIdQuery } from '../../generated/graphql';
import HamburgerButtonContainer from './HamburgerButton';
import HeaderUploadContainer from './HeaderUpload';
import SearchContainer from './Search/SearchContainer';
import UserIconContainer from './UserIcon/UserIconContainer';
import SearchInputContainer from '../SearchInput/SearchInputContainer';

export type DashboardHeaderProps = {
  loginUserId?: string;
  data?: GetUserByIdQuery;
  isOpen?: boolean;
  onToggle?: () => void;
};

// eslint-disable-next-line react/display-name
const DashboardHeader: React.VFC<DashboardHeaderProps> = React.memo(
  ({
    loginUserId = undefined,
    data = undefined,
    isOpen = false,
    onToggle = () => undefined,
  }) => {
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
          <HamburgerButtonContainer />
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
          <SearchContainer {...{ onToggle, isOpen }} />
        </Center>
        <HeaderUploadContainer {...{ loginUserId }} />
        <UserIconContainer {...{ loginUserId, data }} />

        <Box
          gridColumn="1/4"
          gridRow="2/3"
          display={{ base: 'block', md: 'none' }}
        >
          <Collapse in={isOpen} animateOpacity>
            <Box mt={6}>
              <SearchInputContainer />
            </Box>
          </Collapse>
        </Box>
      </Grid>
    );
  },
);
export default DashboardHeader;
