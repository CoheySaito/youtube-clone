import React from 'react';

import {
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from '@chakra-ui/react';
import { useLoginUserIdContext } from '../../context/loginUserIdrContext';
import { useLogout } from '../../hooks/useLogout/useLogout';

type LogoutAlertDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

const LogoutAlertDialog: React.FC<LogoutAlertDialogProps> = ({
  isOpen,
  onClose,
}) => {
  const { logout } = useLogout();
  const cancelRef = React.useRef<HTMLButtonElement>();

  const { resetLoginUserId } = useLoginUserIdContext();
  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              ログアウト確認
            </AlertDialogHeader>

            <AlertDialogBody>ログアウトしてよろしいですか。</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                キャンセル
              </Button>
              <Button
                colorScheme="red"
                onClick={async () => {
                  await logout();
                  onClose();
                  resetLoginUserId();
                }}
                ml={3}
              >
                ログアウト
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
export default LogoutAlertDialog;
