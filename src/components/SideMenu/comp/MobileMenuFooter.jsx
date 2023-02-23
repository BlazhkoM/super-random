import { Box, Flex, Image, Text } from '@chakra-ui/react';
import logoSmall from '../../../icons/logo-small.png';

const MobileMenuFooter = () => {
  return (
    <Box
      bg="rgba(152, 165, 183, 0.15)"
      borderRadius={20}
      w="100%"
      mb="4"
      py="6"
      px="12"
    >
      <Flex gap="5" justifyContent="center" alignItems="center">
        <Image alt="logo" src={logoSmall} w={10} h={10} borderRadius="50%" />

        <Text
          color="grey.60"
          fontWeight="700"
          fontSize={12}
          letterSpacing="1px"
        >
          HUDSON MEAT & POULTY SUPPLIERS
        </Text>
      </Flex>
    </Box>
  );
};

export default MobileMenuFooter;
