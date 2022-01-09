import { useDisclosure, Grid, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineLogout, AiOutlineLogin } from 'react-icons/ai';
import NextLink from 'next/link';
import LogoutAlertDialogContainer from '../LogoutAlertDialog/LogoutAlertDialogContainer';
import SideBarUploadItemContainer from './SideBarUploadItem/SideBarUploadItemContainer';

//type
type useDisclosureReturnType = ReturnType<typeof useDisclosure>;

type SideBarProps = {
  contents?: {
    title: string;
    icon: JSX.Element;
    href: string;
    testid: string;
  }[];
  loginUserId?: string;
} & Partial<useDisclosureReturnType>;

// eslint-disable-next-line react/display-name
const SideBar: React.VFC<SideBarProps> = React.memo(
  ({
    contents = undefined,
    loginUserId = '',
    isOpen = false,
    onOpen = () => undefined,
    onClose = () => undefined,
  }) => {
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

        {loginUserId && <SideBarUploadItemContainer />}

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
            <LogoutAlertDialogContainer {...{ isOpen, onClose }} />
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
  },
);
export default SideBar;
