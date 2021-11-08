import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { SerchQueryContext } from '../context/serchQueryContext';

import { useRouter } from 'next/router';

// eslint-disable-next-line react/display-name
const SearchInput: React.VFC = React.memo(() => {
  const { serchQuery, setSerchQuery } = useContext(SerchQueryContext);
  const inputRef = useRef<HTMLInputElement>();

  const router = useRouter();

  const clickHandler = () => {
    if (inputRef?.current?.value) {
      setSerchQuery(inputRef.current.value);
      localStorage.setItem('query', inputRef.current.value);
    } else {
      setSerchQuery('');
    }
    router.push('/');
  };

  useEffect(() => {
    //render後にrefにアクセス
    inputRef.current.value = serchQuery;
  }, [serchQuery]);

  return (
    <InputGroup maxW="600px">
      <Input type="tel" placeholder="Search..." fontSize="lg" ref={inputRef} />
      <InputRightElement w="80px" cursor="pointer">
        <IconButton
          aria-label="Serch"
          fontSize="xl"
          w="80px"
          borderLeftRadius="none"
          opacity="0.8"
          onClick={clickHandler}
        >
          <AiOutlineSearch />
        </IconButton>
      </InputRightElement>
    </InputGroup>
  );
});
export default SearchInput;
