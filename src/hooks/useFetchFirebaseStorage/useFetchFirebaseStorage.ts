import { useEffect, useState } from 'react';
import fetchfirebaseStorage from '../../utils/firebase/fetchfirebaseStorage';
/**
 * firebaseからダウンロード
 *
 * @param {string} url
 * @return {*}
 */
const useFetchFirebaseStorage = (url: string) => {
  const [fetchedUrl, setFetchedlUrl] = useState<string>();

  //途中でunMountした場合の処理
  const [isMounted, setIsMounted] = useState(true);
  useEffect(() => {
    setIsMounted(true);
    const fetchFn = async () => {
      const res: string = await fetchfirebaseStorage(url);

      if (isMounted) {
        setFetchedlUrl(res);
      }
    };
    try {
      fetchFn();
    } catch (error) {
      console.error(error);
    }
    return () => {
      setIsMounted(false);
    };
  });

  return fetchedUrl;
};

export default useFetchFirebaseStorage;
