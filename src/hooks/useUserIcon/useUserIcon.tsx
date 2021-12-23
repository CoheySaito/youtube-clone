import { GetUserByIdQuery } from '../../generated/graphql';
import React, { useEffect, useState } from 'react';
import { firebaseStorage } from '../../utils/firebase/firebaseConfig';

const useUserIcon = (data: GetUserByIdQuery) => {
  //FirebaseStorageからAvatarをfetch
  const [fetchedAvatarlUrl, setFetchedAvatarlUrl] = useState<string>(null);
  //途中でunMountした場合の処理
  const [isMounted, setIsMounted] = useState(true);
  useEffect(() => {
    setIsMounted(true);
    const fetchFn = async () => {
      const avatarRes: string = await firebaseStorage
        .ref(data?.users_by_pk?.profile_photo_url || 'avatar/no_avatar.png')
        .getDownloadURL();

      if (isMounted) {
        setFetchedAvatarlUrl(avatarRes);
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
  }, [data]);
  return { fetchedAvatarlUrl };
};
export default useUserIcon;
