import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import HamburgerButtonPresenter from './presenter';

const HamburgerButtonContainer: React.VFC = () => {
  //BasicDrawer
  const {
    isOpen: isOpenDrawer,
    onOpen: onOpenDrawer,
    onClose: onCloseDrawer,
  } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>();

  return (
    <HamburgerButtonPresenter
      {...{ isOpenDrawer, onOpenDrawer, onCloseDrawer, btnRef }}
    />
  );
};
export default HamburgerButtonContainer;
