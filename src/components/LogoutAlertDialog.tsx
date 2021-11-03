import React, { useContext } from 'react';

import {
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from '@chakra-ui/react';
import { CurrentUserContext } from './context/CurrentUserContext';
import { useLogout } from '../hooks/useLogout';

type LogoutAlertDialogProps = { isOpen: boolean; onClose: () => void };

const LogoutAlertDialog: React.FC<LogoutAlertDialogProps> = ({
  isOpen,
  onClose,
}) => {
  const { logout } = useLogout();
  const { checkFirebaseUser } = useContext(CurrentUserContext);
  const cancelRef = React.useRef<HTMLButtonElement>();
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
                  checkFirebaseUser();
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
