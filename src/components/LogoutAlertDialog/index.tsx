import React from 'react';
import { useLoginUserIdContext } from '../../context/loginUserIdrContext';
import { useLogout } from '../../hooks/useLogout/useLogout';
import LogoutAlertDialogPresenter from './presenter';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const LogoutAlertDialogContainer: React.VFC<Props> = ({ isOpen, onClose }) => {
  const { logout } = useLogout();
  const cancelRef = React.useRef<HTMLButtonElement>();

  const { resetLoginUserId } = useLoginUserIdContext();

  return (
    <LogoutAlertDialogPresenter
      {...{
        isOpen,
        onClose,
        cancelRef,
        logout,
        resetLoginUserId,
      }}
    />
  );
};
export default LogoutAlertDialogContainer;
