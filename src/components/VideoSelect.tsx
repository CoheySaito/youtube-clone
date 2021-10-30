import {
  Grid,
  AspectRatio,
  SimpleGrid,
  Input,
  Button,
  Text,
  Image,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import useCreateThumbnails from '../hooks/useCreateThumbnails';

type VideoSelectProps = {
  selectedVideoFile: File;
  setSelectedVideoFile: React.Dispatch<React.SetStateAction<File>>;
  setThumbFile: React.Dispatch<React.SetStateAction<File>>;
};

const VideoSelect: React.FC<VideoSelectProps> = ({
  selectedVideoFile,
  setSelectedVideoFile,
  setThumbFile,
}) => {
  //hiddenのinput要素をclickするため
  const inputRef = useRef<HTMLInputElement>(null);
  const clickHandler = () => {
    inputRef.current?.click();
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files?.length) {
      setSelectedVideoFile(e.currentTarget.files[0]);
    }
  };

  // 動画表示用のURLを格納します。
  // URLは文字列なので、string型を指定しています。
  const [videoURL, setVideoURL] = useState('');

  // サムネイルの画像URLを作成
  const { createdURLs, createThumbnailsFC } = useCreateThumbnails();

  //選んだサムネイルURL
  const [selectedThumbnailUrl, setSelectedThumbnailUrl] = useState('');

  // サムネイルを選択して、
  // 1. 参照URLを`selectThumbURL`に格納
  // 2. 参照URLから画像ファイルを生成し、`setThumbFile`でファイルを親コンポーネントに渡す
  const selectedThumbFn = (url: string) => {
    //  参照URLを`selectThumbURL`に格納
    setSelectedThumbnailUrl(url);

    // 参照URLから画像ファイルを生成し、`setThumbFile`でファイルを親コンポーネントに渡す
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const thumb = new File([blob], 'thumb.jpeg');
        setThumbFile(thumb);
      });
  };

  useEffect(() => {
    if (selectedVideoFile) {
      // URL.createObjectURLは、ファイルを引数に受け取り、<video>タグで読み込み可能なローカルURLを生成します。
      // URL.createObjectURLで生成されたURLを<video>のsrcにわたすことでファイルを動画で表示できます。
      const videoURL = URL.createObjectURL(selectedVideoFile);
      setVideoURL(videoURL);
      // サムネイルを作成
      createThumbnailsFC(videoURL);
    }
  }, [selectedVideoFile]);

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
