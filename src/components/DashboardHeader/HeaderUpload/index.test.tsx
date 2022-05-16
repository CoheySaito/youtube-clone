/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WithChakraProvider from '../../../__test__/util/withChakraProvider';
import * as uploadModalContext from '../../../context/uploadModalContext';
import { MockedProvider } from '@apollo/client/testing';
import HeaderUploadContainer from '.';

describe('HeaderUploadContainerテスト', () => {
  afterEach(() => {
    cleanup();
  });

  it('Uploadボタン表示', async () => {
    //mock
    const useUploadModalContextSpy = jest.spyOn(
      uploadModalContext,
      'useUploadModalContext',
    );
    useUploadModalContextSpy.mockReturnValue({
      isOpen: false,
      onOpen: null,
      onClose: null,
    });
    //render
    const loginUserId = 'testid';
    WithChakraProvider(
      <MockedProvider mocks={[]}>
        <HeaderUploadContainer {...{ loginUserId }} />
      </MockedProvider>,
    );

    // expect(screen.getByRole('button', { name: 'Upload' })).toBeInTheDocument();

    expect(screen.getByTestId('uploadButton')).toBeInTheDocument();
  });
});

it('Uploadボタン押下→onOpenがcall', () => {
  //mock
  const useUploadModalContextSpy = jest.spyOn(
    uploadModalContext,
    'useUploadModalContext',
  );
  const ecpectedonOpen = jest.fn();
  useUploadModalContextSpy.mockReturnValue({
    isOpen: false,
    onOpen: ecpectedonOpen,
    onClose: null,
  });

  //render
  const loginUserId = 'testid';
  WithChakraProvider(
    <MockedProvider mocks={[]}>
      <HeaderUploadContainer {...{ loginUserId }} />
    </MockedProvider>,
  );

  //WHEN
  userEvent.click(screen.getByTestId('uploadButton'));
  //THEN
  expect(ecpectedonOpen).toBeCalledTimes(1);
});
