import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import useDashboardHeader from '../../hooks/useDashboardHeader/useDashboardHeader';
import DashboardHeaderPresenter from './presenter';

const DashboardHeaderContainer: React.VFC = () => {
  const { loginUserId, data } = useDashboardHeader();

  //SearchDrawwer For Mobile
  const { isOpen, onToggle } = useDisclosure();

  return (
    <DashboardHeaderPresenter {...{ loginUserId, data, isOpen, onToggle }} />
  );
};
export default DashboardHeaderContainer;
