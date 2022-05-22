import React from 'react';
import { GetUserByIdQuery } from '../../../generated/graphql';
import useUserIcon from '../../../hooks/useUserIcon/useUserIcon';
import UserIconPresenter from './presenter';

type Props = { loginUserId: string; data: GetUserByIdQuery };

const UserIconContainer: React.FC<Props> = ({ loginUserId, data }) => {
  const { fetchedAvatarlUrl } = useUserIcon(data);

  //Popover
  const initialFocusRef = React.useRef();
  return (
    <UserIconPresenter
      {...{ loginUserId, data, fetchedAvatarlUrl, initialFocusRef }}
    />
  );
};
export default UserIconContainer;
