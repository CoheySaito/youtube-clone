/**
 * @jest-environment jsdom
 */
import { MockedProvider } from '@apollo/client/testing';
import '@testing-library/jest-dom/extend-expect';
import { act, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import WithChakraProvider from '../../__test__/util/withChakraProvider';
import useUploadModal from '../../hooks/useUploadModal/useUploadModal';
import UploadModalContainer from './UploadModalContainer';

//mock
//useUploadModal
jest.mock('../../hooks/useUploadModal/useUploadModal');
const mockedUseUploadModal = useUploadModal as jest.MockedFunction<
  typeof useUploadModal
>;

//VideoSelectContainer
jest.mock('./VideoSelect/VideoSelectContainer', () => {
  return {
    __esModule: true,
    default: () => {
      return <div>VideoSelectContainer</div>;
    },
  };
});

describe('UploadModalテスト', () => {
  afterEach(() => {
    cleanup();
  });
  it('表示確認', () => {
    //mock
    //useUploadModal
    const expectedHandleSubmit = jest.fn();
    mockedUseUploadModal.mockReturnValue({
      selectedVideoFile: null,
      setSelectedVideoFile: jest.fn(),
      setThumbFile: jest.fn(),
      titleRef: null,
      descRef: null,
      thumbFile: null,
      handleSubmit: expectedHandleSubmit,
      uploadLoading: false,
      errorMessage: null,
    });

    //props
    const props = {
      isOpen: true,
      onClose: jest.fn(),
    };
    //render
    WithChakraProvider(
      <MockedProvider mocks={[]}>
        <UploadModalContainer {...props} />
      </MockedProvider>,
    );

    //THEN
    expect(screen.getByText('動画のアップロード')).toBeInTheDocument();
    expect(screen.getByText('動画のタイトル')).toBeInTheDocument();
    expect(screen.getByText('動画の説明')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: '動画をアップロード' }),
    ).toBeInTheDocument();
  });
  it('button押下→handleSubmitがcall', () => {
    //mock
    //useUploadModal
    const file = new File(['foo'], 'foo.txt', {
      type: 'text/plain',
    });
    const expectedHandleSubmit = jest.fn();
    mockedUseUploadModal.mockReturnValue({
      selectedVideoFile: file,
      setSelectedVideoFile: jest.fn(),
      setThumbFile: jest.fn(),
      titleRef: null,
      descRef: null,
      thumbFile: file,
      handleSubmit: expectedHandleSubmit,
      uploadLoading: false,
      errorMessage: null,
    });

    //props
    const props = {
      isOpen: true,
      onClose: jest.fn(),
    };
    //render
    WithChakraProvider(
      <MockedProvider mocks={[]}>
        <UploadModalContainer {...props} />
      </MockedProvider>,
    );

    //WHEN
    userEvent.click(screen.getByRole('button', { name: '動画をアップロード' }));
    expect(expectedHandleSubmit).toBeCalledTimes(1);
  });
  it('エラーメッセージ確認', () => {
    //mock
    //useUploadModal
    const expectedError = new Error('testErrorMessage');
    const file = new File(['foo'], 'foo.txt', {
      type: 'text/plain',
    });
    const expectedHandleSubmit = jest.fn();
    mockedUseUploadModal.mockReturnValue({
      selectedVideoFile: file,
      setSelectedVideoFile: jest.fn(),
      setThumbFile: jest.fn(),
      titleRef: null,
      descRef: null,
      thumbFile: file,
      handleSubmit: expectedHandleSubmit,
      uploadLoading: false,
      errorMessage: expectedError,
    });

    //props
    const props = {
      isOpen: true,
      onClose: jest.fn(),
    };
    //render
    WithChakraProvider(
      <MockedProvider mocks={[]}>
        <UploadModalContainer {...props} />
      </MockedProvider>,
    );
    expect(screen.getByText(expectedError.message)).toBeInTheDocument();
  });
});
