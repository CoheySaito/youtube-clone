import React from 'react';
import { useBreakpointValue } from '@chakra-ui/react';
import SearchPresenter from './presenter';

type Props = {
  isOpen: boolean;
  onToggle: () => void;
};

const SearchContainer: React.FC<Props> = ({ isOpen, onToggle }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return <SearchPresenter {...{ isOpen, onToggle, isMobile }} />;
};
export default SearchContainer;
