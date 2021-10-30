import {
  useCreateNewsMutation,
  useDeleteNewsMutation,
  useGetNewsQuery,
  useUpdateNewsMutation,
} from '../generated/graphql';

const useCrudNews = () => {
  // APIcall-GET
  const {
    data: newsData,
    error: newsError,
    loading: newsLoading,
  } = useGetNewsQuery({ fetchPolicy: 'cache-and-network' });

  // APIcall-UPDATE
  const [update_news_by_pk] = useUpdateNewsMutation();

  // APIcall-CREATE
  const [insert_news_one] = useCreateNewsMutation({
    update(cache, { data: { insert_news_one } }) {
      const cacheId = cache.identify(insert_news_one);
      cache.modify({
        fields: {
          news(existingNews, { toReference }) {
            return [toReference(cacheId), ...existingNews];
          },
        },
      });
    },
  });

  // APIcall-DELETE
  const [delete_news_by_pk] = useDeleteNewsMutation({
    update(cache, { data: { delete_news_by_pk } }) {
      cache.modify({
        fields: {
          news(existingNews, { readField }) {
            return existingNews.filter(
              (news) => delete_news_by_pk.id !== readField('id', news),
            );
          },
        },
      });
    },
  });

  return {
    newsData,
    newsError,
    newsLoading,
    insert_news_one,
    update_news_by_pk,
    delete_news_by_pk,
  };
};

export default useCrudNews;
