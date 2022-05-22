import React from 'react';
import { VideoType } from '../../components/Item';

/**
 * Pagination用Hooks
 *
 * @param {VideosType} videos データ
 * @param {number} pageSize 1ページに表示するアイテム数
 * @return {*}
 */
const usePagination = (videos: VideoType[], pageSize: number) => {
  // 現在のページ
  const [current, setCurrent] = React.useState(1);

  //ページ開始のアイテム番号
  const offset = (current - 1) * pageSize;

  //表示するアイテム
  //arr.slice()start から end まで (end は含まれない) 配列浅いコピー→新しい配列オブジェクト
  const currentVideos = videos?.slice(offset, offset + pageSize);

  return {
    pageSize,
    current,
    setCurrent,
    currentVideos,
  };
};

export default usePagination;
