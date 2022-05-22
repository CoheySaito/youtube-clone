import { useDisclosure } from '@chakra-ui/react';
import React from 'react';
import ButtonWithAlertDialogPresenter from './presenter';

type Props = {
  initialFocusRef: React.MutableRefObject<undefined>;
};

const ButtonWithAlertDialogContainer: React.VFC<Props> = ({
  initialFocusRef,
}) => {
  const label = 'ログアウト';
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ButtonWithAlertDialogPresenter
      {...{ label, initialFocusRef, isOpen, onOpen, onClose }}
    />
  );
};
export default ButtonWithAlertDialogContainer;
