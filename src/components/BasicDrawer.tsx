import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import React from 'react';
import SideBar from './SideBar';

type BasicDrawerProps = {
  btnRef: React.MutableRefObject<HTMLButtonElement>;
  isOpenDrawer: boolean;
  onOpenDrawer: () => void;
  onCloseDrawer: () => void;
};

const BasicDrawer: React.VFC<BasicDrawerProps> = ({
  btnRef,
  isOpenDrawer,
  onOpenDrawer,
  onCloseDrawer: onClose,
}) => {
  return (
    <>
      <Drawer
        isOpen={isOpenDrawer}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent px={7} py={6}>
          <DrawerCloseButton />
          <SideBar />
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default BasicDrawer;
