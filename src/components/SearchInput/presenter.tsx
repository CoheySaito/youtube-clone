import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import useSearchInput from '../../hooks/useSearchInput/useSearchInput';

type Props = Partial<ReturnType<typeof useSearchInput>>;

const SearchInputPresenter: React.VFC<Props> = ({
  inputRef = undefined,
  clickHandler = () => undefined,
}) => {
  return (
    <InputGroup maxW="600px">
      <Input
        type="text"
        placeholder="Search..."
        fontSize="lg"
        ref={inputRef}
        //Enterキー押下時の処理
        onKeyPress={(e) => {
          if (e.key == 'Enter') {
            e.preventDefault();
            clickHandler();
          }
        }}
      />
      <InputRightElement w="80px" cursor="pointer">
        <IconButton
          aria-label="Serch"
          fontSize="xl"
          w="80px"
          borderLeftRadius="none"
          opacity="0.8"
          onClick={clickHandler}
          data-testid="IconButton"
        >
          <AiOutlineSearch />
        </IconButton>
      </InputRightElement>
    </InputGroup>
  );
};
export default React.memo(SearchInputPresenter);
