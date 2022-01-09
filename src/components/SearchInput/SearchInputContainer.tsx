import React from 'react';
import SearchInput from './SearchInput';
import useSearchInput from '../../hooks/useSearchInput/useSearchInput';

const SearchInputContainer: React.VFC = () => {
  const { inputRef, clickHandler } = useSearchInput();
  return <SearchInput {...{ inputRef, clickHandler }} />;
};
export default SearchInputContainer;
