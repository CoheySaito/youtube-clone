import { firebaseStorage } from './firebaseConfig';

const fetchfirebaseStorage = async (url: string) =>
  await firebaseStorage.ref(url).getDownloadURL();

export default fetchfirebaseStorage;
