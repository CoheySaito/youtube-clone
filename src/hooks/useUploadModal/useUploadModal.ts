import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useVideoCrud from '../../hooks/useVideoCrud/useVideoCrud';
import uploadFirebaseStorage from '../../utils/uploadFirebaseStorage';
import { useUploadModalContext } from '../../context/uploadModalContext';

const useUploadModal = () => {
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

  // UploadModal
  const { onClose } = useUploadModalContext();

  // Firebase Storageにファイルをアップロードする処理
  const [uploadLoading, setUploadLoading] = useState(false);

  const handleSubmit = async () => {
    if (!selectedVideoFile || !thumbFile) {
      seterrorMessage(new Error('ファイルを選択してください。'));
      return;
    }
    if (!titleRef?.current.value) {
      seterrorMessage(new Error('titleを入力してください。'));
      return;
    }

    //loading true
    setUploadLoading(true);

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
        onClose();
      }
    } catch (error) {
      alert(error?.message);
    } finally {
      //loading false
      setUploadLoading(false);
    }
  };

  return {
    selectedVideoFile,
    setSelectedVideoFile,
    setThumbFile,
    titleRef,
    descRef,
    thumbFile,
    handleSubmit,
    uploadLoading,
    errorMessage,
  };
};

export default useUploadModal;
