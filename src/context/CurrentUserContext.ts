import React from 'react';
import firebase from '../utils/firebase/firebaseConfig';

type CurrentUserContextType = {
  currentUser: firebase.User;
  checkFirebaseUser: () => void;
};

export const CurrentUserContext =
  React.createContext<CurrentUserContextType>(null);
