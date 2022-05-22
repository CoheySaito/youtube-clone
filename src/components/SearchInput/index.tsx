import React from 'react';
import useSearchInput from '../../hooks/useSearchInput/useSearchInput';
import SearchInputPresenter from './presenter';

const SearchInputContainer: React.VFC = () => {
  const { inputRef, clickHandler } = useSearchInput();
  return <SearchInputPresenter {...{ inputRef, clickHandler }} />;
};
export default SearchInputContainer;
