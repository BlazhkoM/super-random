import { Box, Heading, Text } from '@chakra-ui/react';
import format from 'date-fns/format';

const CalendarInfo = () => (
  <Box textAlign="left" display={{ md: 'block', '3xl': 'none' }}>
    <Heading
      as="h3"
      color="primary.navy"
      fontSize="20px"
      fontWeight="700"
      mb="35px"
    >
      {`Today, ${format(new Date(), 'd LLLL')}`}
    </Heading>
    <Text fontSize="14px" maxW="290px" color="grey.60">
      Select a week in the calendar to see the orders and sales for that day
    </Text>
  </Box>
);

export default CalendarInfo;
