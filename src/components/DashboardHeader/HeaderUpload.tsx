import React from 'react';
import { Button, Box } from '@chakra-ui/react';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import UploadModal from '../UploadModal/UploadModal';
import { useUploadModalContext } from '../../context/uploadModalContext';

type HeaderUploadProps = { loginUserId: string };

// eslint-disable-next-line react/display-name
const HeaderUpload: React.FC<HeaderUploadProps> = React.memo(
  ({ loginUserId }) => {
    // UploadModal
    const { isOpen, onOpen, onClose } = useUploadModalContext();
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
            <UploadModal {...{ isOpen, onOpen, onClose }} />
          </Box>
        )}
      </>
    );
  },
);
export default HeaderUpload;
