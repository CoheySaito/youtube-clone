import React, { useState } from 'react';
import { firebaseStorage } from '../utils/firebase/firebaseConfig';
import useVideoCrud from './useVideoCrud';
import { v4 as uuidv4 } from 'uuid';

const useVideoUpload = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  //insert_videos_one createVideos
  const { insert_videos_one } = useVideoCrud();

  // Firebase Storageにファイルをアップロードする処理
  const uploadFirebaseStorage = (id: string, file: File, path: string) => {
    // ファイルから拡張子を抜き出す
    // pop() メソッドは、配列から最後の要素を取り除き、その要素を返します。
    const exe = file.name.split('.').pop();

    // `ref`でファイルのパスを指定する。
    // putでファイルのアップロードを実際に行う
    return firebaseStorage.ref().child(`${path}/${id}.${exe}`).put(file);
  };

  type UploadProps = {
    file: {
      thumbnail: File;
      video: File;
    };
    title: string;
    description?: string;
  };

  /**
   * 動画とサムネイルのそれぞれのuuidを生成する
   *
   * @param {UploadProps} { file, title, description }
   * @return {*} Hasuraにcreateしたvideoデータ
   */
  const upload = async ({ file, title, description = '' }: UploadProps) => {
    setLoading(true);
    // 動画とサムネイルのそれぞれのuuidを生成する
    const videoId = uuidv4();
    const thumbnaiId = uuidv4();

    try {
      const videoUploadTask = await uploadFirebaseStorage(
        videoId,
        file.video,
        'videos',
      );

      const thumbnailUploadTask = await uploadFirebaseStorage(
        thumbnaiId,
        file.thumbnail,
        'thumbnails',
      );

      //Hasuraにvideoデータをcreate
      const res = await insert_videos_one({
        variables: {
          id: videoId,
          title,
          description,
          thumbnail_url: thumbnailUploadTask.ref.fullPath,
          video_url: videoUploadTask.ref.fullPath,
        },
      });

      // 全ての処理が終わったら、videoのメタデータを返す
      return res?.data?.insert_videos_one;
    } catch (error) {
      console.error(error);
      setError(new Error('エラーが発生しました。最初からやり直してください。'));
    } finally {
      // 全ての処理が完了したら、ローディングをfalseにする
      setLoading(false);
    }
  };
  return {
    upload,
    loading,
    error,
  };
};

export default useVideoUpload;
