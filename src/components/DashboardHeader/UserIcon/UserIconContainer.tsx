import React from 'react';
import { GetUserByIdQuery } from '../../../generated/graphql';
import useUserIcon from '../../../hooks/useUserIcon/useUserIcon';
import UserIcon from './UserIcon';

type UserIconContainerProps = { loginUserId: string; data: GetUserByIdQuery };

const UserIconContainer: React.FC<UserIconContainerProps> = ({
  loginUserId,
  data,
}) => {
  const { fetchedAvatarlUrl } = useUserIcon(data);

  //Popover
  const initialFocusRef = React.useRef();
  return (
    <UserIcon {...{ loginUserId, data, fetchedAvatarlUrl, initialFocusRef }} />
  );
};
export default UserIconContainer;
