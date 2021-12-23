import React from 'react';
import { IconButton, useBreakpointValue } from '@chakra-ui/react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import SearchInput from '../SearchInput/SearchInput';

type SearchProps = { isOpenSearch: boolean; onToggleSearch: () => void };

const Search: React.VFC<SearchProps> = React.memo(
  ({ onToggleSearch, isOpenSearch }) => {
    const isMobile = useBreakpointValue({ base: true, md: false });
    return (
      <>
        {isMobile ? (
          <IconButton
            aria-label="Serch"
            fontSize="xl"
            w="80px"
            opacity="0.8"
            onClick={onToggleSearch}
          >
            {isOpenSearch ? <AiOutlineClose /> : <AiOutlineSearch />}
          </IconButton>
        ) : (
          <SearchInput />
        )}
      </>
    );
  },
);
export default Search;
