import { Button, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import LogoutAlertDialog from '../LogoutAlertDialog';

type useDisclosureReturnType = ReturnType<typeof useDisclosure>;

export type Props = {
  label?: string;
  initialFocusRef?: React.MutableRefObject<undefined>;
} & Partial<useDisclosureReturnType>;

const ButtonWithAlertDialogPresenter: React.VFC<Props> = ({
  label = 'ログアウト',
  initialFocusRef = undefined,
  isOpen = false,
  onOpen = () => undefined,
  onClose = () => undefined,
}) => {
  return (
    <>
      <Button
        type="button"
        colorScheme="red"
        ref={initialFocusRef}
        w="60%"
        onClick={onOpen}
        data-testid="logoutButton"
      >
        {label}
      </Button>
      <LogoutAlertDialog {...{ isOpen, onClose }} />
    </>
  );
};
export default ButtonWithAlertDialogPresenter;
