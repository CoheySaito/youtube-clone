import { Grid, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import UploadModal from './UploadModal';

const SideBarUploadItem: React.VFC = () => {
  // UploadModal
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Grid
      as="nav"
      gridAutoFlow="column"
      alignItems="center"
      gridTemplateColumns="auto 1fr"
      columnGap="6"
      py="3"
      cursor="pointer"
      transition={'background 0.3s ease'}
      _hover={{
        bg: 'gray.100',
      }}
      borderRadius="lg"
      display={{ base: 'grid', md: 'none' }}
      onClick={onOpen}
    >
      <Text textAlign="left" fontSize="2xl" opacity="0.4">
        <BsFillCameraVideoFill />
      </Text>
      <Text fontSize="md">アップロード</Text>
      <UploadModal {...{ isOpen, onOpen, onClose }} />
    </Grid>
  );
};
export default SideBarUploadItem;
