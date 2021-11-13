import React from 'react';

type VideosType = {
  __typename?: 'videos';
  created_at: string;
  description?: string;
  duration?: number;
  id: string;
  owner_id?: string;
  title: string;
  updated_at?: string;
  views?: number;
  video_url?: string;
  thumbnail_url?: string;
}[];

/**
 * Pagination用Hooks
 *
 * @param {VideosType} videos データ
 * @param {number} pageSize 1ページに表示するアイテム数
 * @return {*}
 */
const usePagination = (videos: VideosType, pageSize: number) => {
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
