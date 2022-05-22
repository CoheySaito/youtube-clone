import React, { useState } from 'react';

import useFirebaseAuth from '../../hooks/useFirebaseAuth/useFirebaseAuth';
import LoginPresenter from './presenter';

const LoginContainer: React.VFC = () => {
  const { emailRef, passwordRef, loginFn } = useFirebaseAuth();
  const [loading, setLoading] = useState(false);

  return (
    <LoginPresenter
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
