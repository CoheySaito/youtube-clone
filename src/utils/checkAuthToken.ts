import firebase from './firebase/firebaseConfig';

export const checkAuthToken = (userId: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    // `userId`のドキュメントをリッスンします。
    // onSnapshotでリッスンすると、返り値としてリッスンをリセットする関数が返される。
    // unsubscribeを実行することで、ドキュメントのリッスンを取りやめます。
    const unsubscribe = firebase
      .firestore()
      .collection('user_meta')
      .doc(userId)
      // onSnapshotでドキュメントの変更をリッスンします。
      .onSnapshot(
        // データの中身が変更されたことを検出するためには、`includeMetadataChanges`オプションを有効にします。
        { includeMetadataChanges: true },
        async (doc) => {
          if (!doc.exists) return;
          // トークンを取得  //* forceRefresh */ true
          const idToken = await firebase
            .auth()
            .currentUser?.getIdTokenResult(true);

          // トークンがあり、Hasuraカスタムクレームが追加されているか
          if (
            idToken?.token &&
            idToken?.claims['https://hasura.io/jwt/claims']
          ) {
            // 追加されていれば、リッスンをしセットし、
            // トークンを返します。
            unsubscribe();
            resolve(idToken?.token);
          }
        },
        reject,
      );
  });
};
