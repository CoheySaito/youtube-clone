import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Grid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Alert,
  AlertIcon,
  Box,
} from '@chakra-ui/react';

import useUploadModal from '../../hooks/useUploadModal/useUploadModal';
import VideoSelect from './VideoSelect';

type UploadModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const UploadModal: React.VFC<UploadModalProps> = ({ isOpen, onClose }) => {
  const {
    selectedVideoFile,
    setSelectedVideoFile,
    setThumbFile,
    titleRef,
    descRef,
    thumbFile,
    handleSubmit,
    uploadLoading,
    errorMessage,
  } = useUploadModal();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader borderBottom="1px solid gray">
          動画のアップロード
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid
            gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
            justifyItems="center"
            alignItems="center"
            my={6}
            columnGap={6}
          >
            <Box py={{ base: 12, md: 0 }}>
              <VideoSelect
                {...{
                  selectedVideoFile,
                  setSelectedVideoFile,
                  setThumbFile,
                }}
              />
            </Box>

            <Grid as="form" rowGap={8} w="100%">
              <FormControl isRequired>
                <FormLabel>動画のタイトル</FormLabel>
                <Input ref={titleRef} type="text" />
              </FormControl>
              <FormControl>
                <FormLabel>動画の説明</FormLabel>
                <Textarea
                  ref={descRef}
                  mt={1}
                  rows={3}
                  shadow="sm"
                  focusBorderColor="brand.400"
                  fontSize={{ sm: 'sm' }}
                />
              </FormControl>

              <Button
                w="20%"
                minW="160px"
                type="button"
                colorScheme="blue"
                bg={!selectedVideoFile || !thumbFile ? 'white' : 'blue.500'}
                fontSize="sm"
                variant={!selectedVideoFile || !thumbFile ? 'ghost' : 'solid'}
                onClick={handleSubmit}
                disabled={!selectedVideoFile || !thumbFile}
                isLoading={uploadLoading}
                loadingText="Upload中..."
                spinnerPlacement="end"
              >
                動画をアップロード
              </Button>

              {errorMessage && (
                <Alert status="error">
                  <AlertIcon />
                  {errorMessage?.message}
                </Alert>
              )}
            </Grid>
          </Grid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default UploadModal;
