import React, { useState } from 'react';

import useFirebaseAuth from '../../hooks/useFirebaseAuth/useFirebaseAuth';
import Login from './Login';
const LoginContainer: React.VFC = () => {
  const { emailRef, passwordRef, loginFn } = useFirebaseAuth();
  const [loading, setLoading] = useState(false);

  return (
    <Login
      {...{
        emailRef,
        passwordRef,
        loginFn,
        loading,
        setLoading,
      }}
    />
  );
};
export default LoginContainer;
