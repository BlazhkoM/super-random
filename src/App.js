import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme.chakra';
import Layout from './layout/Layout';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Dashboard />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
