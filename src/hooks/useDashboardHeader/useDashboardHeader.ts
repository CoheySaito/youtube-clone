import { useEffect } from 'react';
import { useLoginUserIdContext } from '../../context/loginUserIdrContext';
import { useGetUserByIdLazyQuery } from '../../generated/graphql';

const useDashboardHeader = () => {
  const { loginUserId, checkLocalStorage } = useLoginUserIdContext();

  const [GetUserByIdQuery, { data, error }] = useGetUserByIdLazyQuery({
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    checkLocalStorage();
  }, []);

  useEffect(() => {
    if (loginUserId) {
      GetUserByIdQuery({
        variables: {
          id: loginUserId,
        },
      });
    }
  }, [loginUserId]);

  if (error) {
    console.error(error?.message);
  }

  return {
    loginUserId,
    data,
  };
};

export default useDashboardHeader;
