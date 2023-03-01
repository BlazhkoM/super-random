import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Grid, GridItem, Show, Container } from '@chakra-ui/react';
import MobileHeader from '../components/layoutComponents/MobileHeader';
import SideMenu from '../components/SideMenu/SideMenu';
import DesktopHeader from '../components/layoutComponents/DesktopHeader';
import MobileFooter from '../components/layoutComponents/MobileFooter';
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
          <Show below="md">
            <MobileHeader />
          </Show>
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

        <GridItem area={'main'}>
          <Container maxW="container.2xl">
            <Outlet />
          </Container>
        </GridItem>

        <Show below="md">
          <GridItem area={'footer'}>
            <MobileFooter />
          </GridItem>
        </Show>
      </Grid>
    </Box>
  );
};

export default Layout;
