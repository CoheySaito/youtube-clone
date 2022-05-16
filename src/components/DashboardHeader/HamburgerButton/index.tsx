import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import HamburgerButton from './HamburgerButton';

const HamburgerButtonContainer: React.VFC = () => {
  //BasicDrawer
  const {
    isOpen: isOpenDrawer,
    onOpen: onOpenDrawer,
    onClose: onCloseDrawer,
  } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>();

  return (
    <HamburgerButton
      {...{ isOpenDrawer, onOpenDrawer, onCloseDrawer, btnRef }}
    />
  );
};
export default HamburgerButtonContainer;
