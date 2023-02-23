import * as React from 'react';
import { Box, Grid, GridItem, Show } from '@chakra-ui/react';
import Main from '../components/Main';
import SideMenu from '../components/SideMenu/SideMenu';

const Layout = () => {
  return (
    <Box textAlign="center">
      <Grid
        minH="100vh"
        templateAreas={{
          base: ` 
                "header"
                "main"
                "footer"
            `,
          md: `
                "side main"
            `,
          lg: `
                "side header"
                "side main"
            `,
        }}
        gridTemplateRows={{
          base: '48px 1fr 61px',
          md: '1fr',
          lg: '62px 1fr',
          xl: '50px 1fr',
        }}
        gridTemplateColumns={{
          base: '1fr',
          md: '94px 1fr',
          lg: '94px 1fr',
          xl: '264px 1fr',
        }}
      >
        <GridItem
          pl="2"
          bg="orange.300"
          area={'header'}
          display={{ base: 'block', md: 'none', lg: 'block' }}
        >
          Header
        </GridItem>
        <Show above="md">
          <GridItem
            as="aside"
            position="relative"
            bg="primary.navy"
            area={'side'}
          >
            <SideMenu />
          </GridItem>
        </Show>
        <GridItem pl="2" bg="green.300" area={'main'}>
          <Main />
        </GridItem>
        <Show below="md">
          <GridItem pl="2" bg="blue.300" area={'footer'}>
            Footer
          </GridItem>
        </Show>
      </Grid>
    </Box>
  );
};

export default Layout;

{
  /* <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text color="primary.green">
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
            <Button colorScheme="primary">Button</Button>
          </VStack>
        </Grid>
      </Box> */
}
