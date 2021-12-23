/**
 * @jest-environment jsdom
 */
import 'setimmediate';
import { renderHook, act } from '@testing-library/react-hooks';
import firebase from '../../utils/firebase/firebaseConfig';
import { useLogout } from './useLogout';

//Mock
jest.mock('../../utils/firebase/firebaseConfig');

describe('useLogoutテスト', () => {
  it('logout()実行→unSubMeta(),firebase.auth().signOut()', () => {
    //--GIVEN--
    //Mock
    //firebase.auth().signOut()
    const expectedSignOut = jest.fn();
    (firebase.auth as jest.MockedFunction<any>).mockReturnValue({
      signOut: expectedSignOut,
    });

    const { result } = renderHook(() => useLogout());
    const { logout } = result.current;

    act(() => {
      logout();
    });

    expect(expectedSignOut).toHaveBeenCalledTimes(1);
  });
});
