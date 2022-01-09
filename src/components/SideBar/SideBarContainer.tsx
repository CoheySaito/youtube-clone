import React from 'react';
import SideBar from './SideBar';
import { useDisclosure } from '@chakra-ui/react';
import { useLoginUserIdContext } from '../../context/loginUserIdrContext';
import { AiFillHome } from 'react-icons/ai';
import { MdOutlineWhatshot } from 'react-icons/md';
import { GrChannel } from 'react-icons/gr';

const SideBarContainer: React.VFC = () => {
  const contents = [
    { title: 'ホーム', icon: <AiFillHome />, href: '/', testid: 'homeTest' },
    {
      title: 'トレンド',
      icon: <MdOutlineWhatshot />,
      href: '/',
      testid: 'trendTest',
    },
    {
      title: '登録チャンネル',
      icon: <GrChannel />,
      href: '/',
      testid: 'channelTest',
    },
  ];

  const { loginUserId } = useLoginUserIdContext();

  //LogoutAlertDialog
  const { isOpen, onOpen, onClose } = useDisclosure();
  return <SideBar {...{ contents, loginUserId, isOpen, onOpen, onClose }} />;
};
export default SideBarContainer;
