import {
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from '@chakra-ui/react';
import React from 'react';

import { useLogout } from '../hooks/useLogout';

type ButtonWithAlertDialogProps = {
  initialFocusRef: React.MutableRefObject<undefined>;
  checkFirebaseUser: () => void;
};

const ButtonWithAlertDialog: React.VFC<ButtonWithAlertDialogProps> = ({
  initialFocusRef,
  checkFirebaseUser,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  const { logout } = useLogout();

  return (
    <>
      <Button
        type="button"
        colorScheme="red"
        ref={initialFocusRef}
        w="60%"
        onClick={() => setIsOpen(true)}
      >
        ログアウト
      </Button>
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

            <AlertDialogBody>
              ログアウトしてよろしいでしょうか。
            </AlertDialogBody>

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
export default ButtonWithAlertDialog;
