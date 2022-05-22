import React from 'react';
import useForget from '../../hooks/useForget/useForget';
import ForgetPresenter from './presenter';

const ForgetContainer: React.VFC = () => {
  const { emailRef, loading, clickHandler } = useForget();
  return <ForgetPresenter {...{ emailRef, loading, clickHandler }} />;
};
export default ForgetContainer;
