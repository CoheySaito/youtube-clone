/**
 * @jest-environment jsdom
 */
import 'setimmediate';
import { renderHook, act } from '@testing-library/react-hooks';
import useVideoSelect from './useVideoSelect';
import useCreateThumbnails from '../../hooks/useCreateThumbnails/useCreateThumbnails';

//mock
jest.mock('../../hooks/useCreateThumbnails/useCreateThumbnails');
const mockeduseCreateThumbnails = useCreateThumbnails as jest.MockedFunction<
  typeof useCreateThumbnails
>;

describe('useVideoSelectテスト', () => {
  it('正常系→createThumbnailsFCがcall', () => {
    //mock
    URL.createObjectURL = jest.fn();

    // useCreateThumbnails
    const expectedCreateThumbnailsFC = jest.fn();
    mockeduseCreateThumbnails.mockReturnValue({
      createdURLs: [''],
      createThumbnailsFC: expectedCreateThumbnailsFC,
    });

    //props
    const file = new File(['foo'], 'foo.txt', {
      type: 'text/plain',
    });
    const props = {
      selectedVideoFile: file,
      setSelectedVideoFile: jest.fn(),
      setThumbFile: jest.fn(),
    };

    const { result } = renderHook(() => useVideoSelect(props));
    const {
      videoURL,
      createdURLs,
      selectedThumbFn,
      selectedThumbnailUrl,
      inputRef,
      changeHandler,
      clickHandler,
    } = result.current;
    expect(expectedCreateThumbnailsFC).toBeCalled();
  });
});
