import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

// eslint-disable-next-line react/display-name
const SearchInput: React.VFC = React.memo(() => {
  return (
    <InputGroup maxW="600px">
      <Input type="tel" placeholder="Search..." fontSize="lg" />
      <InputRightElement w="80px" cursor="pointer">
        <IconButton
          aria-label="Serch"
          fontSize="xl"
          w="80px"
          borderLeftRadius="none"
          opacity="0.8"
        >
          <AiOutlineSearch />
        </IconButton>
      </InputRightElement>
    </InputGroup>
  );
});
export default SearchInput;
