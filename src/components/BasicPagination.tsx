/* eslint-disable react/display-name */
import React, { useEffect } from 'react';
import Pagination from '@choc-ui/paginator';
import { Button, Icon } from '@chakra-ui/react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

type PaginationProps = {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  pageSize: number;
  total: number;
};

const BasicPagination: React.VFC<PaginationProps> = ({
  current,
  setCurrent,
  pageSize,
  total,
}) => {
  const Prev = React.forwardRef(
    (props, ref: React.LegacyRef<HTMLButtonElement>) => (
      <Button ref={ref} {...props}>
        <Icon as={IoIosArrowBack} />
      </Button>
    ),
  );
  const Next = React.forwardRef(
    (props, ref: React.LegacyRef<HTMLButtonElement>) => (
      <Button ref={ref} {...props}>
        <Icon as={IoIosArrowForward} />
      </Button>
    ),
  );

  const itemRender = (_, type) => {
    if (type === 'prev') {
      return Prev;
    }
    if (type === 'next') {
      return Next;
    }
  };

  //ページ遷移時ページ位置をトップに
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [current]);

  return (
    <Pagination
      current={current}
      onChange={(page) => {
        setCurrent(page);
      }}
      pageSize={pageSize}
      total={total}
      itemRender={itemRender}
      paginationProps={{
        display: 'flex',
        justifyContent: 'center',
      }}
      colorScheme="blue"
    />
  );
};
export default BasicPagination;
