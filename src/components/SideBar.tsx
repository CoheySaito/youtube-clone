import { Text, Link, Grid } from '@chakra-ui/react';
import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { MdOutlineWhatshot } from 'react-icons/md';
import { GrChannel } from 'react-icons/gr';
import NextLink from 'next/link';

// eslint-disable-next-line react/display-name
const SideBar: React.VFC = React.memo(() => {
  const contents = [
    { title: 'ホーム', icon: <AiFillHome /> },
    { title: 'トレンド', icon: <MdOutlineWhatshot /> },
    { title: '登録チャンネル', icon: <GrChannel /> },
  ] as const;
  return (
    <Grid as="nav">
      {contents?.map((content, i) => (
        <Link as={NextLink} href={'/'} passHref key={i}>
          <Grid
            as="nav"
            gridAutoFlow="column"
            alignItems="center"
            gridTemplateColumns="auto 1fr"
            columnGap="6"
            py="3"
            cursor="pointer"
            transition={'background 0.3s ease'}
            _hover={{
              bg: 'gray.100',
            }}
            borderRadius="lg"
          >
            <Text textAlign="left" fontSize="2xl" opacity="0.4">
              {content.icon}
            </Text>
            <Text fontSize="md">{content.title}</Text>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
});
export default SideBar;
