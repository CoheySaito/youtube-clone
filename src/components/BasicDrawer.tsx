import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import React from 'react';
import SideBar from './SideBar/SideBar';

type BasicDrawerProps = {
  btnRef: React.MutableRefObject<HTMLButtonElement>;
  isOpenDrawer: boolean;
  onOpenDrawer: () => void;
  onCloseDrawer: () => void;
};

// eslint-disable-next-line react/display-name
const BasicDrawer: React.VFC<BasicDrawerProps> = React.memo(
  ({ btnRef, isOpenDrawer, onOpenDrawer, onCloseDrawer: onClose }) => {
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
  },
);
export default BasicDrawer;
