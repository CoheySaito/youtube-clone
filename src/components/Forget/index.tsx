import React from 'react';
import useForget from '../../hooks/useForget/useForget';
import Forget from './Forget';

const ForgetContainer: React.VFC = () => {
  const { emailRef, loading, clickHandler } = useForget();
  return <Forget {...{ emailRef, loading, clickHandler }} />;
};
export default ForgetContainer;
