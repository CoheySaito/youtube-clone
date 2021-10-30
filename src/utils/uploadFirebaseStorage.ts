import { firebaseStorage } from './firebase/firebaseConfig';

const uploadFirebaseStorage = (id: string, file: File, path: string) => {
  // ファイルから拡張子を抜き出す
  // pop() メソッドは、配列から最後の要素を取り除き、その要素を返します。
  const exe = file.name.split('.').pop();

  // `ref`でファイルのパスを指定する。
  // putでファイルのアップロードを実際に行う
  return firebaseStorage.ref(`${path}/${id}.${exe}`).put(file);
};

export default uploadFirebaseStorage;
