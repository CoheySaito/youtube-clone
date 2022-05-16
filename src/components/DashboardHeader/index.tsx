import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import useDashboardHeader from '../../hooks/useDashboardHeader/useDashboardHeader';
import DashboardHeaderL from './DashboardHeader';

const DashboardHeaderContainer: React.VFC = () => {
  const { loginUserId, data } = useDashboardHeader();

  //SearchDrawwer For Mobile
  const { isOpen, onToggle } = useDisclosure();

  return <DashboardHeaderL {...{ loginUserId, data, isOpen, onToggle }} />;
};
export default DashboardHeaderContainer;
