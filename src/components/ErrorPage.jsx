import { useRouteError, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  useEffect(() => {
    const id = setTimeout(() => {
      navigate('/dashboard');
    }, 1500);

    return () => clearTimeout(id);
  }, [navigate]);

  console.error(error);

  return (
    <Flex gap="8" h="100vh" direction="column" justify="center" align="center">
      <Heading color="primary.navy">Oops!</Heading>
      <Text>Sorry, an unexpected error has occurred.</Text>
      <Text color="grey.60">
        <i>{error.statusText || error.message}</i>
      </Text>
    </Flex>
  );
}
