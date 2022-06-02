import React from 'react';
import useUploadModal from '../../../hooks/useUploadModal/useUploadModal';
import useVideoSelect from '../../../hooks/useVideoSelect/useVideoSelect';
import VideoSelectPresenter from './presenter';

type Props = Pick<
  ReturnType<typeof useUploadModal>,
  'selectedVideoFile' | 'setSelectedVideoFile' | 'setThumbFile'
>;

const VideoSelectContainer: React.FC<Props> = ({
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
    <VideoSelectPresenter
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
