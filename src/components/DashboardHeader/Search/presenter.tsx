import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import SearchInput from '../../SearchInput';

export type Props = {
  isOpen?: boolean;
  onToggle?: () => void;
  isMobile?: boolean;
};

const SearchPresenter: React.VFC<Props> = ({
  onToggle = () => undefined,
  isOpen = false,
  isMobile = false,
}) => {
  return (
    <>
      {isMobile ? (
        <IconButton
          aria-label="Serch"
          fontSize="xl"
          w="80px"
          opacity="0.8"
          onClick={onToggle}
          data-testid="iconButton"
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineSearch />}
        </IconButton>
      ) : (
        <SearchInput />
      )}
    </>
  );
};
export default React.memo(SearchPresenter);
