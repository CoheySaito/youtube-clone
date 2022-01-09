import React from 'react';
import SignUp from './SignUp';
import useSignUp from '../../hooks/useSignUp/useSignUp';

const SignUpContainer: React.VFC = () => {
  const { nameRef, emailRef, passwordRef, submitHandeler, submitLoading } =
    useSignUp();
  return (
    <SignUp
      {...{ nameRef, emailRef, passwordRef, submitHandeler, submitLoading }}
    />
  );
};
export default SignUpContainer;
