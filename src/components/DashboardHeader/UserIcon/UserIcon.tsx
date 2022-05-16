import React from 'react';
import NextLink from 'next/link';
import {
  Button,
  Link,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Avatar,
} from '@chakra-ui/react';
import { GetUserByIdQuery } from '../../../generated/graphql';
import ButtonWithAlertDialogContainer from '../../ButtonWithAlertDialog';

type UserIconProps = {
  loginUserId: string;
  data: GetUserByIdQuery;
  fetchedAvatarlUrl: string;
  initialFocusRef: React.MutableRefObject<undefined>;
};

// eslint-disable-next-line react/display-name
const UserIcon: React.VFC<UserIconProps> = React.memo(
  ({
    loginUserId = false,
    data = undefined,
    fetchedAvatarlUrl = '',
    initialFocusRef = undefined,
  }) => {
    return (
      <>
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
                data-testid="avatar"
              />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverCloseButton />
              <PopoverBody display="flex" justifyContent="center" py={6}>
                <ButtonWithAlertDialogContainer {...{ initialFocusRef }} />
              </PopoverBody>
            </PopoverContent>
          </Popover>
        ) : (
          <Link as={NextLink} href="/login" passHref>
            <Button
              colorScheme="blue"
              variant="outline"
              display={{ base: 'none', md: 'block' }}
              data-testid="loginbutton"
            >
              ログイン
            </Button>
          </Link>
        )}
      </>
    );
  },
);

export default UserIcon;
