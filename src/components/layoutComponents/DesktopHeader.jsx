import { Text, Flex, Image, Container } from '@chakra-ui/react';
import logoSmall from '../../icons/logo-small.png';

const DesktopHeader = () => {
  return (
    <Container maxW="container.2xl" h="100%">
      <Flex justifyContent="flex-end" align="center" h="100%">
        <Flex align="center" gap="4">
          <Text
            color="grey.60"
            fontWeight="700"
            fontSize={12}
            letterSpacing="1px"
            whiteSpace="nowrap"
          >
            HUDSON MEAT & POULTY SUPPLIERS
          </Text>
          <Image alt="logo" src={logoSmall} w={10} h={10} borderRadius="50%" />
        </Flex>
      </Flex>
    </Container>
  );
};

export default DesktopHeader;
