import { useCreateUserMutation } from '../../generated/graphql';

const useUserCrud = () => {
  // APIcall-CREATE
  const [insert_users_one] = useCreateUserMutation({
    update(cache, { data: { insert_users_one } }) {
      const cacheId = cache.identify(insert_users_one);
      cache.modify({
        fields: {
          users(existingUsers, { toReference }) {
            return [toReference(cacheId), ...existingUsers];
          },
        },
      });
    },
  });

  return { insert_users_one };
};

export default useUserCrud;
