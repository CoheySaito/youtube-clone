import { firebaseStorage } from './firebase/firebaseConfig';

const uploadFirebaseStorage = (id: string, file: File, path: string) => {
  const extension = extractExtension(file.name);

  // `ref`でファイルのパスを指定する。
  // putでファイルのアップロードを実際に行う
  return firebaseStorage.ref(`${path}/${id}.${extension}`).put(file);
};

export default uploadFirebaseStorage;

// pop() メソッドは、配列から最後の要素を取り除き、その要素を返します。
const extractExtension = (fileName) => fileName.split('.').pop();
