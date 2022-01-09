import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import SideBarUploadItem from './SideBarUploadItem';

const SideBarUploadItemContainer: React.VFC = () => {
  // UploadModal
  const { isOpen, onOpen, onClose } = useDisclosure();

  return <SideBarUploadItem {...{ isOpen, onOpen, onClose }} />;
};
export default SideBarUploadItemContainer;
