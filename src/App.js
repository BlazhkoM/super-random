import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme.chakra';
import Layout from './layout/Layout';
import Dashboard from './pages/Dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Customers from './pages/Customers';
import Orders from './pages/Orders';
import Products from './pages/Products';
import Reports from './pages/Reports';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/customers',
        element: <Customers />,
      },
      {
        path: '/orders',
        element: <Orders />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/reports',
        element: <Reports />,
      },
    ],
  },
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
