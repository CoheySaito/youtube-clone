/**
 * @jest-environment jsdom
 */
import 'setimmediate';
import { renderHook, act } from '@testing-library/react-hooks';
import useUploadModal from './useUploadModal';
import { MockedProvider } from '@apollo/client/testing';
import * as uploadModalContext from '../../context/uploadModalContext';
import useVideoCrud from '../../hooks/useVideoCrud/useVideoCrud';
import { waitFor } from '@testing-library/dom';
import uploadFirebaseStorage from '../../utils/uploadFirebaseStorage';

// mock
//useVideoCrud
jest.mock('../../hooks/useVideoCrud/useVideoCrud');
const mockedUseVideoCrud = useVideoCrud as jest.MockedFunction<
  typeof useVideoCrud
>;
// uploadFirebaseStorage
jest.mock('../../utils/uploadFirebaseStorage');
const mockedUploadFirebaseStorage =
  uploadFirebaseStorage as jest.MockedFunction<typeof uploadFirebaseStorage>;

describe('useUploadModalテスト', () => {
  it('正常系', async () => {
    //mock
    //useUploadModalContext
    const ecpectedOnClose = jest.fn();
    const useUploadModalContextSpy = jest.spyOn(
      uploadModalContext,
      'useUploadModalContext',
    );
    useUploadModalContextSpy.mockReturnValue({
      isOpen: true,
      onOpen: null,
      onClose: ecpectedOnClose,
    });

    //UseVideoCrud
    const expectedInsertVideosOne = jest.fn();
    (mockedUseVideoCrud as jest.MockedFunction<any>).mockReturnValue({
      insert_videos_one: expectedInsertVideosOne,
    });

    //uploadFirebaseStorage
    const ecpectedUploadFirebaseStorage = jest.fn();
    mockedUploadFirebaseStorage.mockImplementation(
      ecpectedUploadFirebaseStorage,
    );

    //render
    const wrapper = ({ children }) => {
      return <MockedProvider mocks={[]}>{children}</MockedProvider>;
    };
    const { result, rerender } = renderHook(() => useUploadModal(), {
      wrapper,
    });
    const {
      selectedVideoFile,
      setSelectedVideoFile,
      setThumbFile,
      titleRef,
      descRef,
      thumbFile,
      handleSubmit,
      uploadLoading,
      errorMessage,
    } = result.current;

    await act(async () => {
      const file = new File(['foo'], 'foo.txt', {
        type: 'text/plain',
      });
      setSelectedVideoFile(() => file);
      await waitFor(() => selectedVideoFile === file);
      const expectedTitle = 'expectedTitle';
      titleRef.current = { ...titleRef.current, ...{ value: expectedTitle } };

      await handleSubmit();
    });
  });
});
