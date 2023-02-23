import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme.chakra';
import Layout from './layout/Layout';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout />
    </ChakraProvider>
  );
}

export default App;
