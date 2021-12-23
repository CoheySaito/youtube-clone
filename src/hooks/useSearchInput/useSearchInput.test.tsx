/**
 * @jest-environment jsdom
 */
import 'setimmediate';
import { renderHook, act } from '@testing-library/react-hooks';
import useSearchInput from './useSearchInput';
import * as serchQueryContext from '../../context/serchQueryContext';
import * as router from 'next/router';
import { MutableRefObject } from 'react';

describe('useSearchInputテスト', () => {
  it('serchキーワードを入力、clickHandlerをcall→setSerchQueryがcall、setSerchQueryがcall', async () => {
    //mock
    //useSerchQueryContext
    const expectedSetSerchQuery = jest.fn();
    const useSerchQueryContextSpy = jest.spyOn(
      serchQueryContext,
      'useSerchQueryContext',
    );
    useSerchQueryContextSpy.mockReturnValue({
      serchQuery: 'test',
      setSerchQuery: expectedSetSerchQuery,
    });

    //useRouter
    const expectedRouterPush = jest.fn();
    const useRouterSpy = jest.spyOn(router, 'useRouter');
    (useRouterSpy as jest.MockedFunction<any>).mockReturnValue({
      push: expectedRouterPush,
    });

    //render
    let resultCurrent: {
      inputRef: MutableRefObject<HTMLInputElement>;
      clickHandler: () => void;
    };
    await act(async () => {
      const { result } = await renderHook(() => useSearchInput());
      resultCurrent = result.current;
    });
    const { inputRef, clickHandler } = resultCurrent;
    expect(inputRef?.current).toBeFalsy();

    //serchキーワードを入力
    const expectedInput = 'testInput';
    inputRef.current = { ...inputRef.current, ...{ value: expectedInput } };
    await act(async () => {
      await clickHandler();
    });
    expect(expectedSetSerchQuery).toBeCalledWith(expectedInput);
    expect(expectedRouterPush).toBeCalledWith('/');
  });
});
