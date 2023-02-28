import { Flex, Heading, Divider } from '@chakra-ui/react';

const PageHeading = ({ children }) => (
  <Flex
    as="header"
    align="center"
    flexGrow="1"
    w="100%"
    gap="9"
    mb="16"
    pl={{ base: 0, lg: '60px', '3xl': 0 }}
  >
    <Heading color="grey.60" fontSize="14px" fontWeight="700">
      {children}
    </Heading>
    <Divider />
  </Flex>
);

export default PageHeading;
