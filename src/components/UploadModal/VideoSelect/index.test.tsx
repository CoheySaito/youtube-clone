/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import WithChakraProvider from '../../../__test__/util/withChakraProvider';
import useVideoSelect from '../../../hooks/useVideoSelect/useVideoSelect';
import VideoSelectContainer from '.';

// mock
//useVideoSelect
jest.mock('../../../hooks/useVideoSelect/useVideoSelect');
const mockeduseVideoSelect = useVideoSelect as jest.MockedFunction<
  typeof useVideoSelect
>;

describe('VideoSelectテスト', () => {
  it('ファイルを選択click→clickHnaderがcall', () => {
    // mock

    //useVideoSelect
    const expectedClickHandler = jest.fn();
    mockeduseVideoSelect.mockReturnValue({
      videoURL: '',
      createdURLs: [''],
      selectedThumbFn: jest.fn(),
      selectedThumbnailUrl: '',
      inputRef: null,
      changeHandler: jest.fn(),
      clickHandler: expectedClickHandler,
    });

    //props
    const props = {
      selectedVideoFile: null,
      setSelectedVideoFile: jest.fn(),
      setThumbFile: jest.fn(),
    };
    WithChakraProvider(<VideoSelectContainer {...props} />);
    userEvent.click(screen.getByRole('button', { name: 'ファイルを選択' }));
    expect(expectedClickHandler).toBeCalledTimes(1);
  });

  it('videoURL=true→サムネイルを選択してください表示', () => {
    // mock
    //useVideoSelect
    const expectedClickHandler = jest.fn();
    mockeduseVideoSelect.mockReturnValue({
      videoURL: 'testVideoUIrl',
      createdURLs: [''],
      selectedThumbFn: jest.fn(),
      selectedThumbnailUrl: '',
      inputRef: null,
      changeHandler: jest.fn(),
      clickHandler: expectedClickHandler,
    });

    //props
    const prpps = {
      selectedVideoFile: null,
      setSelectedVideoFile: jest.fn(),
      setThumbFile: jest.fn(),
    };
    WithChakraProvider(<VideoSelectContainer {...prpps} />);
    expect(
      screen.getByText('サムネイルを選択してください。'),
    ).toBeInTheDocument();
  });
  it('videoURL=false→サムネイルを選択してください非表示', () => {
    // mock
    //useVideoSelect
    const expectedClickHandler = jest.fn();
    mockeduseVideoSelect.mockReturnValue({
      videoURL: '',
      createdURLs: [''],
      selectedThumbFn: jest.fn(),
      selectedThumbnailUrl: '',
      inputRef: null,
      changeHandler: jest.fn(),
      clickHandler: expectedClickHandler,
    });

    //props
    const prpps = {
      selectedVideoFile: null,
      setSelectedVideoFile: jest.fn(),
      setThumbFile: jest.fn(),
    };
    WithChakraProvider(<VideoSelectContainer {...prpps} />);
    expect(screen.queryByText('サムネイルを選択してください。')).toBeNull();
  });
});
