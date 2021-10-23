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
} from '@chakra-ui/react';
import useCreateThumbnails from '../hooks/useCreateThumbnails';

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
  //hiddenのinput要素をclickするため
  const inputRef = useRef<HTMLInputElement>(null);
  const clickHandler = () => {
    inputRef.current?.click();
  };

  //ファイル選択で選択したファイルを格納
  const [selectedFile, setSelectedFile] = useState<File>();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files?.length) {
      setSelectedFile(e.currentTarget.files[0]);
    }
  };

  // これは、動画表示用のURLを格納します。
  // URLは文字列なので、string型を指定しています。
  const [videoURL, setVideoURL] = useState('');

  // サムネイルの画像URLを作成
  const { createdURLs, createThumbnailsFC } = useCreateThumbnails();

  useEffect(() => {
    if (selectedFile) {
      // URL.createObjectURLは、ファイルを引数に受け取り、<video>タグで読み込み可能なローカルURLを生成します。
      // URL.createObjectURLで生成されたURLを<video>のsrcにわたすことでファイルを動画で表示できます。
      const videoURL = URL.createObjectURL(selectedFile);
      setVideoURL(videoURL);
      // サムネイルを作成
      createThumbnailsFC(videoURL);
    }
  }, [selectedFile]);

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
            {videoURL ? (
              <Grid w="100%">
                <AspectRatio ratio={16 / 9} maxW="100%" w="100%" mb={4}>
                  <iframe title="test" src={videoURL} allowFullScreen />
                </AspectRatio>
                <Text as="h2" mb={2} fontSize="sm">
                  サムネイル
                </Text>
                <SimpleGrid columns={3} spacing={3}>
                  {createdURLs?.map((url, i) => (
                    <AspectRatio maxW="100%" ratio={4 / 3} key={i}>
                      <Image
                        src={url}
                        objectFit="cover"
                        alt={`サムネイル${i}`}
                      />
                    </AspectRatio>
                  ))}
                </SimpleGrid>
              </Grid>
            ) : (
              // <input type="file" hidden />とすることで<input>タグを非表示に
              // onChange={selectedFile}を追加
              // <input>の値が変更される、つまりファイルが選択時にselectedFile関数を実行する
              <>
                <Input
                  type="file"
                  ref={inputRef}
                  onChange={changeHandler}
                  hidden
                />
                <Button colorScheme="blue" onClick={clickHandler}>
                  ファイルを選択
                </Button>
              </>
            )}

            <Grid as="form" rowGap={8} w="100%">
              <FormControl isRequired>
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
