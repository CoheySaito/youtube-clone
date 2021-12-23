import { useEffect } from 'react';
import { useSerchQueryContext } from '../../context/serchQueryContext';
import { useGetVideosQuery } from '../../generated/graphql';
import usePagination from '../usePagination/usePagination';

const useDisplay = (pageSizeProp: number) => {
  const { data, loading, error } = useGetVideosQuery({
    fetchPolicy: 'cache-and-network',
  });

  //serchQuery
  const { serchQuery, setSerchQuery } = useSerchQueryContext();
  //iフラグ	ignoreCase	大文字・小文字を区別しない
  const regex = new RegExp(serchQuery, 'i');

  //videoTitleとdescriptionとusernameで検索
  const videos = serchQuery
    ? data?.videos.filter(
        (video) =>
          regex.test(video.title) ||
          regex.test(video.description) ||
          regex.test(video?.user.name),
      )
    : data?.videos;

  //Pagination
  const { current, setCurrent, pageSize, currentVideos } = usePagination(
    videos,
    pageSizeProp,
  );

  //検索で別ページから遷移の場合、serchQueryをセット
  useEffect(() => {
    const query = localStorage.getItem('query');
    if (!serchQuery && query) {
      setSerchQuery(query);
    }
    return () => {
      localStorage.removeItem('query');
    };
  }, []);

  //2ページ目以降だとpaginationが戻らないため
  useEffect(() => {
    if (current !== 1) {
      setCurrent(1);
    }
  }, [serchQuery]);

  return {
    loading,
    error,
    serchQuery,
    videos,
    currentVideos,
    current,
    setCurrent,
    pageSize,
  };
};
export default useDisplay;
