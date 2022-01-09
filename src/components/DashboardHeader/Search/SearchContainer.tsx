import React from 'react';
import { useBreakpointValue } from '@chakra-ui/react';
import Search from './Search';

type SearchContainerProps = {
  isOpen: boolean;
  onToggle: () => void;
};

const SearchContainer: React.FC<SearchContainerProps> = ({
  isOpen,
  onToggle,
}) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return <Search {...{ isOpen, onToggle, isMobile }} />;
};
export default SearchContainer;
