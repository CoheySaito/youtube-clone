import React, { ReactNode, useEffect, useRef, useState } from 'react';
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
  Text,
  AspectRatio,
  SimpleGrid,
  Image,
  Spinner,
  Alert,
  AlertDescription,
  AlertIcon,
  CloseButton,
} from '@chakra-ui/react';

import { useRouter } from 'next/dist/client/router';
import { v4 as uuidv4 } from 'uuid';
import useVideoCrud from '../hooks/useVideoCrud';
import uploadFirebaseStorage from '../utils/uploadFirebaseStorage';
import VideoSelect from './VideoSelect';

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
  const router = useRouter();

  //ファイル選択で選択したファイルを格納
  const [selectedVideoFile, setSelectedVideoFile] = useState<File>();

  //選んだサムネイルFile
  const [thumbFile, setThumbFile] = useState<File>();

  // ユーザー入力を受け取る`ref`変数
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);

  // エラーを表示する用のステート
  const [errorMessage, seterrorMessage] = useState<Error>();

  //insert_videos_one createVideos
  const { insert_videos_one } = useVideoCrud();
  // Firebase Storageにファイルをアップロードする処理

  const [uploadLoading, setUploadLoading] = useState(false);
  const handleSubmit = async () => {
    //loading true
    setUploadLoading(true);

    if (!selectedVideoFile || !thumbFile) {
      seterrorMessage(new Error('ファイルを選択してください。'));
      return;
    }
    if (!titleRef?.current.value) {
      seterrorMessage(new Error('titleを入力してください。'));
      return;
    }
    try {
      //Firebaseにvideoアップロード
      const videoId = uuidv4();

      const videoUploadTask = await uploadFirebaseStorage(
        videoId,
        selectedVideoFile,
        'videos',
      );

      //Firebaseにthumbnailアップロード
      const thumbnailId = uuidv4();

      const thumbnailUploadTask = await uploadFirebaseStorage(
        thumbnailId,
        thumbFile,
        'thumbnails',
      );

      //Hasuraにvideoデータをcreate
      const res = await insert_videos_one({
        variables: {
          id: videoId,
          title: titleRef.current.value,
          description: descRef?.current?.value,
          video_url: videoUploadTask.ref.fullPath,
          thumbnail_url: thumbnailUploadTask.ref.fullPath,
        },
      });
      if (res?.data?.insert_videos_one) {
        router.push('/');
      }
    } catch (error) {
      alert(error?.message);
    } finally {
      //loading true
      setUploadLoading(false);
    }
  };

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
            columnGap={6}
          >
            <VideoSelect
              {...{
                selectedVideoFile,
                setSelectedVideoFile,
                setThumbFile,
              }}
            />

            <Grid as="form" rowGap={8} w="100%">
              <FormControl isRequired>
                <FormLabel>タイトル</FormLabel>
                <Input
                  ref={titleRef}
                  placeholder="Title..."
                  _placeholder={{ color: 'gray.500' }}
                  type="text"
                />
              </FormControl>
              <FormControl>
                <FormLabel>説明</FormLabel>
                <Textarea
                  ref={descRef}
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
