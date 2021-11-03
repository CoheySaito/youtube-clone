import {
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import LogoutAlertDialog from './LogoutAlertDialog';

type ButtonWithAlertDialogProps = {
  initialFocusRef: React.MutableRefObject<undefined>;
};

const ButtonWithAlertDialog: React.VFC<ButtonWithAlertDialogProps> = ({
  initialFocusRef,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      <LogoutAlertDialog {...{ isOpen, onClose }} />
    </>
  );
};
export default ButtonWithAlertDialog;
