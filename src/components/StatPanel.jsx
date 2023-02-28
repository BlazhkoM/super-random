import {
  Flex,
  Divider,
  Heading,
  Text,
  Button,
  useMediaQuery,
} from '@chakra-ui/react';
import AnimatedNumber from './AnimatedNumber';

const Indicator = ({
  header,
  body,
  unit = null,
  orientation = 'horizontal',
}) => (
  <Flex
    direction="column"
    justify="space-between"
    align="flex-start"
    gap="9px"
    h={orientation === 'vertical' ? 'auto' : '100%'}
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

const ButtonsGroup = ({ isVertical, direction }) => (
  <Flex
    gap="3"
    direction={direction}
    justify="flex-end"
    align={isVertical ? 'center' : 'flex-end'}
    wrap="nowrap"
    w="100%"
  >
    <Button variant="brandWhite" w={isVertical ? '148px' : null}>
      View
    </Button>
    <Button variant="brandGreen" w={isVertical ? '148px' : null}>
      Export
    </Button>
  </Flex>
);

const StatPanel = ({
  orders,
  sales,
  mobileView = false,
  orientation = 'horizontal',
}) => {
  const [isLargerThan1144] = useMediaQuery('(min-width: 1144px)');
  const isVertical = orientation === 'vertical';
  const direction = isVertical ? 'column' : 'row';

  return (
    <Flex
      borderRadius="xl"
      bg="primary.greenLight"
      maxW={mobileView ? '345px' : '888px'}
      w={isVertical ? '189px' : 'auto'}
      h={mobileView ? 'auto' : isVertical ? '100vh' : '116px'}
      py="5"
      gap={isLargerThan1144 ? '12' : '6'}
      px={isVertical || mobileView ? '4' : '8'}
      flexGrow="1"
      direction="column"
    >
      <Flex
        flexGrow="1"
        direction={direction}
        gap={isLargerThan1144 ? '12' : '6'}
      >
        <Indicator
          header="NEW ORDERS"
          orientation={orientation}
          body={<AnimatedNumber num={orders} />}
        />

        <Divider
          orientation={isVertical ? 'horizontal' : 'vertical'}
          borderColor="primary.green"
        />

        <Flex
          w="100%"
          direction={mobileView ? 'column' : direction}
          gap={isVertical ? '10' : 0}
        >
          <Indicator
            header="SALES"
            orientation={orientation}
            body={<AnimatedNumber num={sales} />}
            unit={{ position: 'left', value: '$' }}
          />

          {!mobileView && (
            <ButtonsGroup direction={direction} isVertical={isVertical} />
          )}
        </Flex>
      </Flex>
      {mobileView && (
        <ButtonsGroup
          direction={direction}
          mobileView
          isVertical={isVertical}
        />
      )}
    </Flex>
  );
};

export default StatPanel;
