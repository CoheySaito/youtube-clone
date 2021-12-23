/**
 * @jest-environment jsdom
 */
import 'setimmediate';
import { renderHook, act } from '@testing-library/react-hooks';
import { useUserChanged } from './useUserChanged';
import firebase from '../../utils/firebase/firebaseConfig';

//Mock
jest.mock('../../utils/firebase/firebaseConfig');
describe('useUserChangedテスト', () => {
  it(' firebase.auth().onAuthStateChangedがよばれる', () => {
    //mock
    const expectedOnAuthStateChanged = jest.fn();
    (firebase.auth as jest.MockedFunction<any>).mockReturnValue({
      onAuthStateChanged: expectedOnAuthStateChanged,
    });

    //render
    const { result } = renderHook(() => useUserChanged());

    expect(expectedOnAuthStateChanged).toBeCalledTimes(1);
  });
});
