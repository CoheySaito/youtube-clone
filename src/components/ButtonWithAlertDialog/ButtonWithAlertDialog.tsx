import { Button, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import LogoutAlertDialogContainer from '../LogoutAlertDialog/LogoutAlertDialogContainer';

type useDisclosureReturnType = ReturnType<typeof useDisclosure>;
type ButtonWithAlertDialogProps = {
  label?: string;
  initialFocusRef?: React.MutableRefObject<undefined>;
} & Partial<useDisclosureReturnType>;

const ButtonWithAlertDialog: React.VFC<ButtonWithAlertDialogProps> = ({
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
      >
        {label}
      </Button>
      <LogoutAlertDialogContainer {...{ isOpen, onClose }} />
    </>
  );
};
export default ButtonWithAlertDialog;
