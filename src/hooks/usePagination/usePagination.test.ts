/**
 * @jest-environment jsdom
 */
import 'setimmediate';
import { renderHook } from '@testing-library/react-hooks';
import usePagination from './usePagination';

describe('usePaginationテスト', () => {
  it('current初期値:1,pageSizeが引数と一致,currentVideosがページサイズの配列だけ(2)出力される', () => {
    //dummy
    const paramVideos = [
      { id: 'testId1', title: 'testTitle1', created_at: 'testDate1' },
      { id: 'testId2', title: 'testTitle2', created_at: 'testDate2' },
      { id: 'testId3', title: 'testTitle3', created_at: 'testDate3' },
    ];
    const expectedVideos = [
      { id: 'testId1', title: 'testTitle1', created_at: 'testDate1' },
      { id: 'testId2', title: 'testTitle2', created_at: 'testDate2' },
    ];
    const paramPageSize = 2;

    //render
    const { result, rerender } = renderHook(() =>
      usePagination(paramVideos, paramPageSize),
    );
    const { current, pageSize, currentVideos } = result.current;

    expect(current).toBe(1);
    expect(pageSize).toBe(paramPageSize);
    expect(currentVideos).toEqual(expectedVideos);
  });
});
