import { useEffect, useState } from 'react';
import {
  isSameDay,
  format,
  startOfWeek,
  endOfWeek,
  addDays,
  previousMonday,
  nextMonday,
} from 'date-fns';
import { Flex, Box, Text, IconButton, Divider, chakra } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState([]);
  const [header, setHeader] = useState('');

  useEffect(() => {
    getWeekDaysNames(currentDate);
    setHeader(getHeaderData(currentDate));
  }, [currentDate]);

  const getHeaderData = date => {
    const weekStartDate = startOfWeek(date, { weekStartsOn: 1 });
    const weekEndDate = endOfWeek(date, { weekStartsOn: 1 });
    const weekStartMonth = format(weekStartDate, 'MMMM');
    const weekEndMonth = format(weekEndDate, 'MMMM');
    const month =
      weekStartMonth === weekEndMonth
        ? weekStartMonth
        : `${weekStartMonth}-${weekEndMonth}`;

    const dates = `${format(weekStartDate, 'd')}-${format(weekEndDate, 'd')}`;
    return `${dates} ${month}`;
  };

  const getWeekDaysNames = date => {
    const weekStartDate = startOfWeek(date, { weekStartsOn: 1 });
    const weekDays = [];
    for (let day = 0; day < 7; day++) {
      const current = addDays(weekStartDate, day);
      const isToday = isSameDay(current, new Date());

      weekDays.push(
        <Flex
          direction="column"
          gap="2"
          align="center"
          className="day weekNames"
          color={isToday ? 'primary.navy' : 'grey.60'}
          fontWeight={isToday ? '700' : '400'}
        >
          <chakra.span>{format(current, 'EEEEEE')}</chakra.span>
          <chakra.span>{format(current, 'd')}</chakra.span>
        </Flex>
      );
    }
    setCurrentWeek(weekDays);
  };

  const nextWeekHandle = () => {
    setCurrentDate(current => nextMonday(current));
  };

  const prevWeekHandle = () => {
    setCurrentDate(current => previousMonday(current));
  };

  return (
    <Box w="404px">
      <Flex
        as="header"
        align="center"
        justifyContent="space-between"
        pl="2"
        mb="3.5"
      >
        <Text color="primary.navy" fontWeight="700" size="3.5">
          {header}
        </Text>

        <Flex gap="2">
          <IconButton
            aria-label="Next week"
            icon={<ChevronLeftIcon color="primary.green" boxSize={8} />}
            onClick={prevWeekHandle}
            isRound
            colorScheme="greenButton"
          />
          <IconButton
            aria-label="Previous week"
            icon={<ChevronRightIcon color="primary.green" boxSize={8} />}
            onClick={nextWeekHandle}
            isRound
            colorScheme="greenButton"
          />
        </Flex>
      </Flex>
      <Divider />
      <Flex
        fontSize="13px"
        fontWeight="normal"
        justify="space-between"
        py="2"
        px="6"
      >
        {currentWeek}
      </Flex>
      <Divider />
    </Box>
  );
};

export default Calendar;
