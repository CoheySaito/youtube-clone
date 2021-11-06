/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Button,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';
import Pagination from '@choc-ui/paginator';

const TestPagination = () => {
  const [data, setData] = React.useState([]);
  const [current, setCurrent] = React.useState(1);
  const pageSize = 10;
  //ページ開始のアイテム番号
  const offset = (current - 1) * pageSize;
  //表示するアイテム
  const posts = data.slice(offset, offset + pageSize);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  const Prev = forwardRef((props, ref: React.LegacyRef<HTMLButtonElement>) => (
    <Button ref={ref} {...props}>
      Prev
    </Button>
  ));
  const Next = forwardRef((props, ref: React.LegacyRef<HTMLButtonElement>) => (
    <Button ref={ref} {...props}>
      Next
    </Button>
  ));

  const itemRender = (_, type) => {
    if (type === 'prev') {
      return Prev;
    }
    if (type === 'next') {
      return Next;
    }
  };
  return (
    <>
      <Table
        maxW="98%"
        m={15}
        mt={20}
        shadow="base"
        rounded="lg"
        bg="gray.200"
        variant="simple"
      >
        <TableCaption>
          <Pagination
            current={current}
            onChange={(page) => {
              setCurrent(page);
            }}
            pageSize={pageSize}
            total={data.length}
            itemRender={itemRender}
            paginationProps={{
              display: 'flex',
              pos: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
            colorScheme="blue"
            focusRing="gray"
          />
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Title</Th>
            <Th>Body</Th>
          </Tr>
        </Thead>
        <Tbody>
          {posts.map((post) => (
            <Tr key={post.id}>
              <Td>{post.id}</Td>
              <Td>{post.title}</Td>
              <Td>{post.body}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default TestPagination;
