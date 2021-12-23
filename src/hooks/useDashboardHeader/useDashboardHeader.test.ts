/**
 * @jest-environment jsdom
 */
import 'setimmediate';
import { renderHook, act } from '@testing-library/react-hooks';

import * as loginUserIdrContext from '../../context/loginUserIdrContext';
import * as graphql from '../../generated/graphql';
import useDashboardHeader from './useDashboardHeader';
describe('useDashboardHeaderテスト', () => {
  it('GetUserByIdQueryがloginUserIdを引数としてcall', () => {
    // Mock
    const useLoginUserIdContextSpy = jest.spyOn(
      loginUserIdrContext,
      'useLoginUserIdContext',
    );

    const expectedLoginUserId = 'testUserId';
    const expectedCheckLocalStorage = jest.fn();
    useLoginUserIdContextSpy.mockReturnValue({
      loginUserId: expectedLoginUserId,
      checkLocalStorage: expectedCheckLocalStorage,
      resetLoginUserId: null,
    });

    const ecpectedGetUserByIdQuery = jest.fn();
    const useGetUserByIdLazyQuerySpy = jest.spyOn(
      graphql,
      'useGetUserByIdLazyQuery',
    );
    (useGetUserByIdLazyQuerySpy as jest.MockedFunction<any>).mockReturnValue([
      ecpectedGetUserByIdQuery,
      { data: {}, error: false },
    ]);

    //render
    const { result } = renderHook(() => useDashboardHeader());
    const { loginUserId, data } = result.current;

    //THEN
    expect(loginUserId).toEqual(expectedLoginUserId);
    expect(expectedCheckLocalStorage).toBeCalledTimes(1);
    expect(ecpectedGetUserByIdQuery).toBeCalledTimes(1);
  });
});
