import React from 'react';
import useDisplay from '../../hooks/useDisplay/useDisplay';
import Display from './Display';

const DisplayContainer: React.VFC = () => {
  const pageSizeProp: number = 8;
  const {
    loading,
    error,
    serchQuery,
    videos,
    currentVideos,
    current,
    setCurrent,
    pageSize,
  } = useDisplay(pageSizeProp);

  return (
    <Display
      {...{
        loading,
        error,
        serchQuery,
        videos,
        currentVideos,
        current,
        setCurrent,
        pageSize,
      }}
    />
  );
};
export default DisplayContainer;
