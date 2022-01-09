import { useCallback, useState } from 'react';

/**
 * サムネイルを生成するカスタムHook
 *
 *@return {*} createdURLs
 *@return {*} createThumbnailsFC -サムネイル作成関数
 */

// const useCreateThumbnails = () => {
// const [createdURLs, setCreatedURLs] = useState<string[]>([]);

/**
 * サムネイル作成関数
 *
 * @param {string} URLofVideo - 作成元のvideo
 */
export const createThumbnailsFC = (URLofVideo: string) => {
  // サムネイル生成のための準備
  // canvasタグを使って、<video>のビューを転写する
  const video = document.createElement('video');
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  // 動画の読み込み
  video.src = URLofVideo;
  video.load();

  // <video>の動画の読み込みが終わったら、<canvas>に<video>と同じサイズにリサイズ
  video.onloadeddata = () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    video.currentTime = 0;
  };

  let createdURLs: string[] = [];

  // video.currentTime が変更されるたびに呼び出される関数(onseeked)を指定する
  // video.currentTimeの時のvideoのビュー表示を<canvas>に転写して画像を生成
  // video.currentTime が動画の最後になるまで繰り返す
  video.onseeked = () => {
    if (video.currentTime >= video.duration || !context) return;

    // media.currentTime
    // 再生中のメディアの現時点での再生時間（秒数）を示します。
    // media.duration
    // ビデオやオーディオの全体の長さ（秒数）を取得します。

    //  <video>のビューを<canvas>に転写
    context.drawImage(video, 0, 0);
    // setCreatedURLs((prev) => [...prev, canvas.toDataURL('image/jpeg')]);
    createdURLs.push(canvas.toDataURL('image/jpeg'));
    video.currentTime += Math.ceil(video.duration / 3);
  };

  return createdURLs;
};

//   return { createdURLs, createThumbnailsFC };
// };

// export default useCreateThumbnails;
