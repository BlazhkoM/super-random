import { Box, Flex, Image, Text, ScaleFade } from '@chakra-ui/react';
import logoSmall from '../../../icons/logo-small.png';

const MobileMenuFooter = ({ isOpen = true }) => {
  return (
    <Box
      as="footer"
      bg={isOpen ? 'rgba(152, 165, 183, 0.15)' : 'transparent'}
      borderRadius={20}
      w="100%"
      px={[12, null, isOpen ? '6' : '0']}
      py="6"
      mb="4"
    >
      <Flex gap="5" justifyContent="center" alignItems="center">
        <Image alt="logo" src={logoSmall} w={10} h={10} borderRadius="50%" />

        {isOpen && (
          <ScaleFade initialScale={0.3} in={isOpen}>
            <Text
              color="grey.60"
              fontWeight="700"
              fontSize={12}
              letterSpacing="1px"
              whiteSpace="nowrap"
            >
              HUDSON MEAT &
            </Text>
            <Text
              color="grey.60"
              fontWeight="700"
              fontSize={12}
              letterSpacing="1px"
              whiteSpace="nowrap"
            >
              POULTY SUPPLIERS
            </Text>
          </ScaleFade>
        )}
      </Flex>
    </Box>
  );
};

export default MobileMenuFooter;
