/**
 * @jest-environment jsdom
 */
import 'setimmediate';
import { renderHook, act } from '@testing-library/react-hooks';
import useUserIcon from './useUserIcon';
import { GetUserByIdQuery } from '../../generated/graphql';
import { firebaseStorage } from '../../utils/firebase/firebaseConfig';
import { waitFor } from '@testing-library/dom';

//mock
jest.mock('../../utils/firebase/firebaseConfig');

describe('useUserIconテスト', () => {
  it('param:data→firebaseStorage.ref.getDownloadURLがcall', async () => {
    //Mock
    const expectedAvatarRes = 'avatarRes';
    const expectedGetDownloadURL = jest.fn().mockReturnValue(expectedAvatarRes);
    const expectedFirebaseStorageRef = jest
      .fn()
      .mockReturnValue({ getDownloadURL: expectedGetDownloadURL });

    (firebaseStorage.ref as jest.MockedFunction<any>).mockImplementation(
      expectedFirebaseStorageRef,
    );

    const expectedProfilePhotoUrl = 'testProfilePhotoUrl';
    const paramData: GetUserByIdQuery = {
      users_by_pk: {
        created_at: '',
        id: '',
        name: '',
        profile_photo_url: expectedProfilePhotoUrl,
      },
    };
    //render
    let fetchedAvatarlUrlReturn;
    await act(async () => {
      const { result, rerender } = await renderHook(() =>
        useUserIcon(paramData),
      );
      fetchedAvatarlUrlReturn = result.current.fetchedAvatarlUrl;
      await waitFor(() => {
        fetchedAvatarlUrlReturn = expectedAvatarRes;
      });
    });
    expect(expectedFirebaseStorageRef).toBeCalledWith(expectedProfilePhotoUrl);
    expect(expectedGetDownloadURL).toBeCalledTimes(1);
    expect(fetchedAvatarlUrlReturn).toEqual(expectedAvatarRes);
  });
});
