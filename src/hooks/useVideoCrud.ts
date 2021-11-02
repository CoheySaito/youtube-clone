import {
  useCreateVideoMutation,
  useGetVideosQuery,
} from "../generated/graphql";

const useVideoCrud = () => {
  // APIcall-GET
  const {
    data: allVideosData,
    loading: allVideosLoading,
    error: allVideosError,
  } = useGetVideosQuery({
    fetchPolicy: "cache-and-network",
  });

  // APIcall-CREATE
  const [insert_videos_one] = useCreateVideoMutation({
    update(cache, { data: { insert_videos_one } }) {
      const cacheId = cache.identify(insert_videos_one);
      cache.modify({
        fields: {
          videos(existingVideos, { toReference }) {
            return [toReference(cacheId), ...existingVideos];
          },
        },
      });
    },
  });

  return { allVideosData, allVideosLoading, allVideosError, insert_videos_one };
};

export default useVideoCrud;
