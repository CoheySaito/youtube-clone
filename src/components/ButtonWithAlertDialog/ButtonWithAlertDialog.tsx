import { Button, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import LogoutAlertDialogContainer from '../LogoutAlertDialog/LogoutAlertDialogContainer';

type useDisclosureReturnType = ReturnType<typeof useDisclosure>;
type ButtonWithAlertDialogProps = {
  initialFocusRef?: React.MutableRefObject<undefined>;
} & Partial<useDisclosureReturnType>;

const ButtonWithAlertDialog: React.VFC<ButtonWithAlertDialogProps> = ({
  initialFocusRef,
  isOpen,
  onOpen,
  onClose,
}) => {
  return (
    <>
      <Button
        type="button"
        colorScheme="red"
        ref={initialFocusRef}
        w="60%"
        onClick={onOpen}
      >
        ログアウト
      </Button>
      <LogoutAlertDialogContainer {...{ isOpen, onClose }} />
    </>
  );
};
export default ButtonWithAlertDialog;
