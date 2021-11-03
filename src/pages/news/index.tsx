/* eslint-disable react-hooks/rules-of-hooks */
import { NextPage } from 'next';
import React, { useState } from 'react';
import {
  Flex,
  useColorModeValue,
  ButtonGroup,
  IconButton,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Box,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  chakra,
  VisuallyHidden,
  Center,
  Spinner,
} from '@chakra-ui/react';
import { AiFillEdit } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import useCrudNews from '../../hooks/useCrudNews';
import { formatDate } from '../../utils/formatDate';

const News: NextPage = () => {
  const header = ['news', 'created', 'actions'] as const;

  const [editNews, setEditNews] = useState({ id: '', content: '' });

  const {
    newsData,
    newsError,
    newsLoading,
    insert_news_one,
    update_news_by_pk,
    delete_news_by_pk,
  } = useCrudNews();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (editNews.id) {
      try {
        await update_news_by_pk({
          variables: {
            id: editNews.id,
            content: editNews.content,
          },
        });
      } catch (error) {
        alert(error.message);
      }
    } else {
      try {
        await insert_news_one({
          variables: {
            content: editNews.content,
          },
        });
      } catch (error) {
        alert(error.message);
      }
    }

    setEditNews({ id: '', content: '' });
  };

  const handleDelete = (id: string) => {
    delete_news_by_pk({
      variables: {
        id,
      },
    });
    setEditNews({ id: '', content: '' });
  };

  if (newsLoading) {
    return (
      <Center>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  }

  if (newsError) {
    return <p>Error:{newsError.message}</p>;
  }

  return (
    <Flex
      w="full"
      bg="gray.400"
      p={50}
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Table
        w="full"
        borderRadius="md"
        bg={useColorModeValue('white', 'gray.800')}
        display={{
          base: 'block',
          md: 'table',
        }}
      >
        <Thead
          display={{
            base: 'none',
            md: 'table-header-group',
          }}
        >
          <Tr>
            {header.map((x) => (
              <Th key={x}>{x}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody
          display={{
            base: 'block',
            lg: 'table-row-group',
          }}
        >
          {newsData.news.map((eachNews) => {
            const { content, id } = eachNews;
            const { datetime } = formatDate(
              new Date(eachNews.created_at),
              new Date(),
            );

            const items = { content, datetime };

            return (
              <Tr
                key={id}
                display={{
                  base: 'grid',
                  md: 'table-row',
                }}
                sx={{
                  gridTemplateColumns: 'minmax(0px, 35%) minmax(0px, 65%)',
                  gridGap: '10px',
                }}
              >
                {Object.keys(items).map((x) => {
                  return (
                    <React.Fragment key={`${id}${x}`}>
                      <Td
                        display={{
                          base: 'table-cell',
                          md: 'none',
                        }}
                        sx={{
                          textTransform: 'uppercase',
                          color: useColorModeValue('gray.400', 'gray.400'),
                          fontSize: 'xs',
                          fontWeight: 'bold',
                          letterSpacing: 'wider',
                          fontFamily: 'heading',
                        }}
                      >
                        {x}
                      </Td>
                      <Td
                        color={useColorModeValue('gray.500', 'gray.500')}
                        fontSize="md"
                        fontWeight="hairline"
                      >
                        {items[x]}
                      </Td>
                    </React.Fragment>
                  );
                })}
                <Td
                  display={{
                    base: 'table-cell',
                    md: 'none',
                  }}
                  sx={{
                    textTransform: 'uppercase',
                    color: useColorModeValue('gray.400', 'gray.400'),
                    fontSize: 'xs',
                    fontWeight: 'bold',
                    letterSpacing: 'wider',
                    fontFamily: 'heading',
                  }}
                >
                  Actions
                </Td>
                <Td>
                  <ButtonGroup variant="solid" size="sm" spacing={4}>
                    <IconButton
                      colorScheme="green"
                      icon={<AiFillEdit />}
                      aria-label="edit"
                      onClick={() => setEditNews({ id, content })}
                      fontSize="xl"
                    />
                    <IconButton
                      colorScheme="red"
                      variant="outline"
                      icon={<BsFillTrashFill />}
                      aria-label="delete"
                      onClick={() => handleDelete(id)}
                      fontSize="xl"
                    />
                  </ButtonGroup>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>

      <chakra.form w="full" mb={6} mt={2} onSubmit={submitHandler}>
        <VisuallyHidden>News</VisuallyHidden>
        <Box display={{ base: 'block', md: 'none' }}>
          <Input
            size="lg"
            color="brand.900"
            type="text"
            placeholder="News..."
            bg="white"
            required={true}
            value={editNews.content}
            onChange={(e) =>
              setEditNews({ ...editNews, content: e.target.value })
            }
          />
          <Button
            w="full"
            color="white"
            variant="solid"
            colorScheme="primary"
            size="lg"
            type="submit"
          >
            POST
          </Button>
        </Box>
        <InputGroup size="lg" w="full" display={{ base: 'none', lg: 'flex' }}>
          <Input
            size="lg"
            color="brand.900"
            type="text"
            placeholder="News..."
            bg="gray.200"
            required={true}
            value={editNews.content}
            onChange={(e) =>
              setEditNews({ ...editNews, content: e.target.value })
            }
          />
          <InputRightElement w="auto">
            {editNews.id && (
              <Button
                bgGradient="linear(to-r, red.400,pink.400)"
                color={'white'}
                _hover={{
                  bgGradient: 'linear(to-r, red.300,pink.300)',
                  boxShadow: 'xl',
                }}
                variant="solid"
                size="lg"
                type="button"
                roundedRight={0}
                onClick={() => setEditNews({ id: '', content: '' })}
              >
                RESET
              </Button>
            )}
            <Button
              bgGradient="linear(to-r, blue.400,teal.400)"
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, blue.300,teal.300)',
                boxShadow: 'xl',
              }}
              variant="solid"
              size="lg"
              type="submit"
              roundedLeft={0}
            >
              {editNews.id ? 'UPDATE' : 'POST'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </chakra.form>
    </Flex>
  );
};
export default News;
