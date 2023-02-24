import { Flex, Divider, Heading, Text, Button } from '@chakra-ui/react';

const Indicator = ({ header, body }) => (
  <Flex
    direction="column"
    justify="space-between"
    align="flex-start"
    gap="9px"
    h="100%"
  >
    <Heading
      as="h5"
      textAlign="left"
      letterSpacing="1px"
      fontSize="xs"
      whiteSpace="nowrap"
      color="primary.green"
    >
      {header}
    </Heading>
    <Text color="primary.navy" lineHeight="1" fontWeight="700" fontSize="40px">
      {body}
    </Text>
  </Flex>
);

const StatPanel = () => {
  return (
    <Flex
      borderRadius="xl"
      bg="primary.greenLight"
      gap="12"
      flexGrow="1"
      maxW="888px"
      py="5"
      px="8"
    >
      <Indicator header="NEW ORDERS" body="60" />

      <Divider orientation="vertical" />

      <Flex w="100%">
        <Indicator header="SALES" body="$12,400" />

        <Flex
          gap="3"
          justify="flex-end"
          align="flex-end"
          wrap="nowrap"
          w="100%"
        >
          <Button variant="brandWhite">View</Button>
          <Button variant="brandGreen">Export</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default StatPanel;
