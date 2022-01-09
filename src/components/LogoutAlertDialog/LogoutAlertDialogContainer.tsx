import React from 'react';
import { useLoginUserIdContext } from '../../context/loginUserIdrContext';
import { useLogout } from '../../hooks/useLogout/useLogout';
import LogoutAlertDialog from './LogoutAlertDialog';

type LogoutAlertDialogContainerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const LogoutAlertDialogContainer: React.VFC<LogoutAlertDialogContainerProps> =
  ({ isOpen, onClose }) => {
    const { logout } = useLogout();
    const cancelRef = React.useRef<HTMLButtonElement>();

    const { resetLoginUserId } = useLoginUserIdContext();

    return (
      <LogoutAlertDialog
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
