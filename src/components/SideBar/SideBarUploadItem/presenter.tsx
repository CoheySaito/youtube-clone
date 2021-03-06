import { Grid, useDisclosure, Text } from '@chakra-ui/react';
import React from 'react';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import UploadModal from '../../UploadModal';

type Props = Partial<ReturnType<typeof useDisclosure>>;

const SideBarUploadItemPresenter: React.VFC<Props> = ({
  isOpen = false,
  onOpen = () => undefined,
  onClose = () => undefined,
}) => {
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
export default React.memo(SideBarUploadItemPresenter);
