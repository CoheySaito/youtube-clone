import React from 'react';
import useUploadModal from '../../../hooks/useUploadModal/useUploadModal';
import VideoSelect from './VideoSelect';
import useVideoSelect from '../../../hooks/useVideoSelect/useVideoSelect';

type VideoSelectContainerProps = Pick<
  ReturnType<typeof useUploadModal>,
  'selectedVideoFile' | 'setSelectedVideoFile' | 'setThumbFile'
>;

const VideoSelectContainer: React.FC<VideoSelectContainerProps> = ({
  selectedVideoFile,
  setSelectedVideoFile,
  setThumbFile,
}) => {
  const {
    videoURL,
    createdURLs,
    selectedThumbFn,
    selectedThumbnailUrl,
    inputRef,
    changeHandler,
    clickHandler,
  } = useVideoSelect({ selectedVideoFile, setSelectedVideoFile, setThumbFile });

  return (
    <VideoSelect
      {...{
        videoURL,
        createdURLs,
        selectedThumbFn,
        selectedThumbnailUrl,
        inputRef,
        changeHandler,
        clickHandler,
      }}
    />
  );
};
export default VideoSelectContainer;
