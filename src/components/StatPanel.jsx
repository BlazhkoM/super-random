import { Flex, Divider, Heading, Text, Button } from '@chakra-ui/react';
import AnimatedNumber from './AnimatedNumber';

const Indicator = ({ header, body, unit = null }) => (
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
      {unit && unit.position === 'left' && unit.value}
      {body}
      {unit && unit.position === 'right' && unit.value}
    </Text>
  </Flex>
);

const StatPanel = ({ orders, sales }) => {
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
      <Indicator header="NEW ORDERS" body={<AnimatedNumber num={orders} />} />

      <Divider orientation="vertical" />

      <Flex w="100%">
        <Indicator
          header="SALES"
          body={<AnimatedNumber num={sales} />}
          unit={{ position: 'left', value: '$' }}
        />

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
