import React from 'react';
import useSignUp from '../../hooks/useSignUp/useSignUp';
import SignUpPresenter from './presenter';

const SignUpContainer: React.VFC = () => {
  const { nameRef, emailRef, passwordRef, submitHandeler, submitLoading } =
    useSignUp();
  return (
    <SignUpPresenter
      {...{ nameRef, emailRef, passwordRef, submitHandeler, submitLoading }}
    />
  );
};
export default SignUpContainer;
