import React from 'react';
import { Button, Box } from '@chakra-ui/react';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import UploadModalContainer from '../../UploadModal/UploadModalContainer';

type HeaderUploadProps = {
  loginUserId: string;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
};

// eslint-disable-next-line react/display-name
const HeaderUpload: React.FC<HeaderUploadProps> = React.memo(
  ({
    loginUserId = undefined,
    isOpen = false,
    onOpen = () => undefined,
    onClose = () => undefined,
  }) => {
    return (
      <>
        {loginUserId && (
          <Box display={{ base: 'none', md: 'block' }}>
            <Button
              variant="ghost"
              leftIcon={<BsFillCameraVideoFill fontSize="18px" />}
              size="md"
              colorScheme="gray"
              opacity="0.4"
              onClick={onOpen}
              data-testid="uploadButton"
            >
              Upload
            </Button>
            <UploadModalContainer {...{ isOpen, onOpen, onClose }} />
          </Box>
        )}
      </>
    );
  },
);
export default HeaderUpload;
