import * as React from 'react';
import { Box, Grid, GridItem, Show, Hide } from '@chakra-ui/react';
import MobileHeader from '../components/MobileHeader';
import SideMenu from '../components/SideMenu/SideMenu';
import DesktopHeader from '../components/DesktopHeader';

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
          xl: '62px 1fr',
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
          px="5"
          py="1.5"
          area={'header'}
          display={{ base: 'block', md: 'none', lg: 'block' }}
        >
          <Hide above="md">
            <MobileHeader />
          </Hide>
          <Show above="lg">
            <DesktopHeader />
          </Show>
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
        <GridItem pl="2" bg="green.300" area={'main'}></GridItem>
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
