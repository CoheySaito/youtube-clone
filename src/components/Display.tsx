import { Grid } from '@chakra-ui/react';
import React from 'react';
import Item from './Item';

const Display: React.VFC = () => {
  return (
    <Grid
      gridTemplateColumns="repeat(auto-fit,minmax(200px,1fr))"
      columnGap={6}
      rowGap={6}
    >
      {[...Array.from(Array(10).keys())].map((each, i) => (
        <Item key={i} />
      ))}
    </Grid>
  );
};
export default Display;
