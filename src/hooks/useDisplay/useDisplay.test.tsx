/**
 * @jest-environment jsdom
 */
import 'setimmediate';
import { renderHook, act } from '@testing-library/react-hooks';
import useDisplay from './useDisplay';
import React from 'react';
import { MockedProvider } from '@apollo/client/testing';

import * as serchQueryContext from '../../context/serchQueryContext';
import * as graphql from '../../generated/graphql';
import usePagination from '../usePagination/usePagination';
import { GetVideosQuery } from '../../generated/graphql';

//mock
jest.mock('../usePagination/usePagination');
const mockedusePagination = usePagination as jest.MockedFunction<
  typeof usePagination
>;
describe('useDisplayテスト', () => {
  it('pageSizeProp=2,videoデータ3つ→usePaginationが左の引数でcall', () => {
    //mock
    //useSerchQueryContext
    const useSerchQueryContextSpy = jest.spyOn(
      serchQueryContext,
      'useSerchQueryContext',
    );
    useSerchQueryContextSpy.mockReturnValue({
      serchQuery: '',
      setSerchQuery: null,
    });

    //useGetVideosQuery
    const dummyData: GetVideosQuery = {
      videos: [
        { id: 'test1', title: 'test1', created_at: 'test1' },
        { id: 'test2', title: 'test2', created_at: 'test2' },
        { id: 'test3', title: 'test3', created_at: 'test3' },
      ],
    };

    const useGetVideosQuerySpy = jest.spyOn(graphql, 'useGetVideosQuery');
    (useGetVideosQuerySpy as jest.MockedFunction<any>).mockReturnValue({
      data: dummyData,
      loading: false,
      error: null,
    });

    //usePagination
    const expectedUsePagination = jest.fn();
    mockedusePagination.mockImplementation(expectedUsePagination);

    const expectedPageSizeProp = 3;
    //render
    const wrapper = ({ children }) => {
      return <MockedProvider mocks={[]}>{children}</MockedProvider>;
    };
    const { result } = renderHook(() => useDisplay(expectedPageSizeProp), {
      wrapper,
    });

    expect(expectedUsePagination).toBeCalledWith(
      dummyData.videos,
      expectedPageSizeProp,
    );
  });
});
