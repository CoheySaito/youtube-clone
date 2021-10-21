/**
 * サムネイルを生成する関数
 *
 * @param {string} URLofVideo -サムネイル作成をする動画
 * @param {React.Dispatch<React.SetStateAction<string[]>>} setStrings -サムネイルを格納するsetState関数
 */
const createThumbnail = (
  URLofVideo: string,
  setStrings: React.Dispatch<React.SetStateAction<string[]>>,
) => {
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
    setStrings((prev) => [...prev, canvas.toDataURL('image/jpeg')]);
    video.currentTime += Math.ceil(video.duration / 3);
  };
};

export default createThumbnail;
