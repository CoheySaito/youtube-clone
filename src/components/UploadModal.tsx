import React, { ReactNode } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Grid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';

type UploadModalProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  children?: ReactNode;
};

const UploadModal: React.VFC<UploadModalProps> = ({
  isOpen,
  onOpen,
  onClose,
  children,
}) => {
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
            gridTemplateColumns="1fr 1fr"
            justifyItems="center"
            alignItems="center"
            my={6}
          >
            <Button colorScheme="blue">ファイルを選択</Button>
            <Grid as="form" rowGap={8} w="100%">
              <FormControl>
                <FormLabel>タイトル</FormLabel>
                <Input
                  placeholder="Title..."
                  _placeholder={{ color: 'gray.500' }}
                  type="text"
                />
              </FormControl>
              <FormControl>
                <FormLabel>説明</FormLabel>
                <Textarea
                  placeholder="Discription..."
                  _placeholder={{ color: 'gray.500' }}
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
                type="submit"
                _hover={{
                  bg: 'blue.500',
                  color: 'white',
                  boxShadow: 'none',
                }}
                boxShadow="md"
                fontSize="sm"
                variant="ghost"
              >
                動画をアップロード
              </Button>
            </Grid>
          </Grid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default UploadModal;
