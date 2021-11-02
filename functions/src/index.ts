import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const setCustomClaims = functions.auth.user().onCreate(async (user) => {
  const customClaims = {
    "https://hasura.io/jwt/claims": {
      "x-hasura-default-role": "user",
      // roleの値を上書きできる 上書きの指定がない場合のdefault
      "x-hasura-allowed-roles": ["user"],
      // 存在するroleを配列で
      "x-hasura-user-id": user.uid,
      // firebaseのユーザーIDを割り当てる
      // HasuraのColumn presetsで使われる
    },
  };
  try {
    await admin.auth().setCustomUserClaims(user.uid, customClaims);
    // firestoreにユーザのメタ情報を書き込む
    await admin.firestore().collection("user_meta").doc(user.uid).create({
      refreshTime: admin.firestore.FieldValue.serverTimestamp(),
    });
  } catch (e) {
    console.log(e);
  }
});
