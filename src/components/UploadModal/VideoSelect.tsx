import {
  Grid,
  AspectRatio,
  SimpleGrid,
  Input,
  Button,
  Text,
  Image,
} from '@chakra-ui/react';
import React from 'react';
import useVideoSelect from '../../hooks/useVideoSelect/useVideoSelect';

export type VideoSelectProps = {
  selectedVideoFile: File;
  setSelectedVideoFile: React.Dispatch<React.SetStateAction<File>>;
  setThumbFile: React.Dispatch<React.SetStateAction<File>>;
};

const VideoSelect: React.FC<VideoSelectProps> = ({
  selectedVideoFile,
  setSelectedVideoFile,
  setThumbFile,
}) => {
  const {
    videoURL,
    createdURLs,
    selectedThumbFn,
    selectedThumbnailUrl,
    inputRef,
    changeHandler,
    clickHandler,
  } = useVideoSelect({ selectedVideoFile, setSelectedVideoFile, setThumbFile });

  return (
    <>
      {videoURL ? (
        <Grid w="100%">
          <AspectRatio ratio={16 / 9} maxW="100%" w="100%" mb={4}>
            <iframe title="test" src={videoURL} allowFullScreen />
          </AspectRatio>
          <Text as="h2" mb={2} fontSize="sm">
            サムネイルを選択してください。
          </Text>
          <SimpleGrid columns={3} spacing={3}>
            {createdURLs?.map((url, i) => (
              <AspectRatio maxW="100%" ratio={4 / 3} key={i}>
                <Image
                  src={url}
                  objectFit="cover"
                  alt={`サムネイル${i}`}
                  onClick={() => {
                    selectedThumbFn(url);
                  }}
                  border={url === selectedThumbnailUrl ? '1.6px solid red' : ''}
                />
              </AspectRatio>
            ))}
          </SimpleGrid>
        </Grid>
      ) : (
        // <input type="file" hidden />とすることで<input>タグを非表示に
        // onChange={selectedVideoFile}を追加
        // <input>の値が変更される、つまりファイルが選択時にselectedVideoFile関数を実行する
        <>
          <Input type="file" ref={inputRef} onChange={changeHandler} hidden />
          <Button colorScheme="blue" onClick={clickHandler}>
            ファイルを選択
          </Button>
        </>
      )}
    </>
  );
};
export default VideoSelect;
