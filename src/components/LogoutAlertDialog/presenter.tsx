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

type useLogoutReturnType = ReturnType<typeof useLogout>;
type useLoginUserIdContextReturnType = ReturnType<typeof useLoginUserIdContext>;

type Props = {
  isOpen?: boolean;
  onClose?: () => void;
  cancelRef?: React.MutableRefObject<HTMLButtonElement>;
} & Partial<useLogoutReturnType> &
  Partial<useLoginUserIdContextReturnType>;

const LogoutAlertDialogPresenter: React.FC<Props> = ({
  isOpen = false,
  onClose = () => undefined,
  cancelRef = undefined,
  logout = () => undefined,
  resetLoginUserId = () => undefined,
}) => {
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
export default LogoutAlertDialogPresenter;
