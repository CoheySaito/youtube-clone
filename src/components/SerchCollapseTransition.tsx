import { useDisclosure, IconButton, Collapse, Box } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SerchCollapseTransition: React.FC = () => {
  const { isOpen: isOpenSearch, onToggle: onToggleSearch } = useDisclosure();
  return (
    <>
      <IconButton
        aria-label="Serch"
        fontSize="xl"
        w="80px"
        opacity="0.8"
        onClick={onToggleSearch}
      >
        <AiOutlineSearch />
      </IconButton>

      <Collapse in={isOpenSearch} animateOpacity>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          test
        </Box>
      </Collapse>
    </>
  );
};
export default SerchCollapseTransition;
