import React from 'react';
import { IconButton, useDisclosure } from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import BasicDrawer from '../BasicDrawer';

// eslint-disable-next-line react/display-name
const HamburgerButton: React.VFC = React.memo(() => {
  //BasicDrawer
  const {
    isOpen: isOpenDrawer,
    onOpen: onOpenDrawer,
    onClose: onCloseDrawer,
  } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>();

  return (
    <>
      <IconButton
        aria-label="Open menu"
        fontSize="24px"
        color={'gray.800'}
        opacity="0.4"
        variant="ghost"
        icon={<AiOutlineMenu />}
        ref={btnRef}
        onClick={onOpenDrawer}
        data-testid="humburgerbutton"
      />
      <BasicDrawer {...{ btnRef, isOpenDrawer, onOpenDrawer, onCloseDrawer }} />
    </>
  );
});
export default HamburgerButton;
