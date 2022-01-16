import { useDisclosure } from '@chakra-ui/react';
import React from 'react';
import ButtonWithAlertDialog from './ButtonWithAlertDialog';

type ButtonWithAlertDialogContainerProps = {
  initialFocusRef: React.MutableRefObject<undefined>;
};

const ButtonWithAlertDialogContainer: React.VFC<ButtonWithAlertDialogContainerProps> =
  ({ initialFocusRef }) => {
    const label = 'ログアウト';
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <ButtonWithAlertDialog
        {...{ label, initialFocusRef, isOpen, onOpen, onClose }}
      />
    );
  };
export default ButtonWithAlertDialogContainer;
