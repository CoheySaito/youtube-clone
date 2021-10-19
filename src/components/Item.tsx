import { Box, Grid, Text, Avatar, Image, GridItem } from '@chakra-ui/react';

const data = {
  isNew: true,
  imageURL:
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
  name: 'Wayfarer Classic',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

function Item() {
  return (
    <Grid
      gridTemplateColumns="auto 1fr"
      gridTemplateRows="repeat(4,auto)"
      justifyItems="center"
      alignItems="center"
      rowGap={1}
    >
      <GridItem
        colSpan={2}
        position="relative"
        w="100%"
        h="0"
        paddingBottom="75%"
      >
        <Image
          position="absolute"
          src={data.imageURL}
          alt={`Picture of ${data.name}`}
          objectFit="cover"
          w="100%"
          h="100%"
        />
      </GridItem>

      <Avatar
        gridColumn="span 1"
        gridRow="span 3"
        size="md"
        name="Dan Abrahmov"
        src="https://bit.ly/dan-abramov"
        mr={4}
      />
      <Text w="100%" textAlign="left" as="h2" fontSize="lg" lineHeight="short">
        test1
      </Text>
      <Text
        w="100%"
        textAlign="left"
        fontSize="sm"
        fontWeight="thin"
        ineHeight="short"
      >
        test2
      </Text>
      <Text
        w="100%"
        textAlign="left"
        fontSize="sm"
        fontWeight="thin"
        ineHeight="short"
      >
        test3
      </Text>
    </Grid>
  );
}

export default Item;
