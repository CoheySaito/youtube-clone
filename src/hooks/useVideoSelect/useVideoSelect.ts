import React, { useEffect, useRef, useState } from 'react';
import { VideoSelectProps } from '../../components/UploadModal/VideoSelect';
import useCreateThumbnails from '../../hooks/useCreateThumbnails/useCreateThumbnails';

const useVideoSelect = ({
  setSelectedVideoFile,
  setThumbFile,
  selectedVideoFile,
}: VideoSelectProps) => {
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

  return {
    videoURL,
    createdURLs,
    selectedThumbFn,
    selectedThumbnailUrl,
    inputRef,
    changeHandler,
    clickHandler,
  };
};

export default useVideoSelect;
