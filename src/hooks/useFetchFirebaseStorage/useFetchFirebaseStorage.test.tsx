/**
 * @jest-environment jsdom
 */
import 'setimmediate';
import { renderHook, act } from '@testing-library/react-hooks';
import React from 'react';
import { MockedProvider } from '@apollo/client/testing';

import { firebaseStorage } from '../../utils/firebase/firebaseConfig';
import { waitFor } from '@testing-library/dom';
import useFetchFirebaseStorage from './useFetchFirebaseStorage';

//mock
jest.mock('../../utils/firebase/firebaseConfig');

describe('useFetchFirebaseStorageテスト', () => {
  it('firebaseStorage.refがcall 引数:video?.video_url,firebaseStorage.refがcall', async () => {
    //mock
    const expectedGetDownloadURL = jest.fn().mockReturnValue('');
    const expectedFirebaseStorageRef = jest
      .fn()
      .mockReturnValue({ getDownloadURL: expectedGetDownloadURL });

    (firebaseStorage.ref as jest.MockedFunction<any>).mockImplementation(
      expectedFirebaseStorageRef,
    );

    //render
    const expectedUrl = 'expectedUrl';
    const wrapper = ({ children }) => {
      return <MockedProvider mocks={[]}>{children}</MockedProvider>;
    };
    await act(async () => {
      const { result } = await renderHook(
        () => useFetchFirebaseStorage(expectedUrl),
        {
          wrapper,
        },
      );
    });

    await waitFor(() => {
      expect(expectedFirebaseStorageRef).toBeCalledWith(expectedUrl);
    });
  });
});
