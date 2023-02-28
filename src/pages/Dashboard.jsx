import { useState, useEffect } from 'react';
import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import Calendar from '../components/Calendar';
import StatPanel from '../components/StatPanel';
import ChartPanel from '../components/ChartPanel';
import ProgressPanel from '../components/ProgressPanel';
import demoData from '../shared/demoData';
import CalendarInfo from '../components/CalendarInfo';
import PageHeading from '../components/PageHeading';

const Dashboard = () => {
  const [isLargerThan768, isLowerThan768, isLowerThan978] = useMediaQuery([
    '(min-width: 768px)',
    '(max-width: 768px)',
    '(max-width: 978px)',
  ]);
  const [mockData, setMockData] = useState(null);

  useEffect(() => {
    setMockData(demoData[0]);
  }, []);

  const changeWeekHandle = () => {
    const randomIndex = Math.floor(Math.random() * (2 - 0 + 1) + 0);

    setMockData(demoData[randomIndex]);
  };

  if (!mockData) return null;

  return (
    <Box w="100%" pt="66px" pb="8">
      {isLargerThan768 && <PageHeading>DASHBOARD</PageHeading>}

      <Flex
        direction={isLowerThan768 ? 'column' : 'row'}
        alignItems={isLowerThan768 ? 'center' : 'flex-start'}
      >
        {isLargerThan768 && isLowerThan978 && (
          <StatPanel
            orders={mockData.statData.orders}
            sales={mockData.statData.sales}
            orientation="vertical"
          />
        )}

        <Flex direction="column" grow="1" gap="8" pl={{ md: '60px', '3xl': 0 }}>
          <Flex
            p={{ base: 0, lg: 7, '3xl': 0 }}
            borderRadius="lg"
            justify="space-between"
            bg={{
              base: 'transparent',
              lg: 'rgba(152, 165, 183, 0.15)',
              '3xl': 'transparent',
            }}
            gap={{ base: '8', '3xl': '12' }}
            direction={{ base: 'column', '3xl': 'row' }}
            maxW={{ md: '711px', '2lg': '888px', '3xl': '100%' }}
          >
            <Flex
              flexShrink="0"
              direction={isLowerThan978 ? 'column' : 'row'}
              justify="space-between"
              gap={isLowerThan978 ? '4' : 0}
            >
              <CalendarInfo />
              <Calendar change={changeWeekHandle} />
            </Flex>
            {!isLargerThan768 ||
              (!isLowerThan978 && (
                <StatPanel
                  orders={mockData.statData.orders}
                  sales={mockData.statData.sales}
                />
              ))}

            {isLowerThan768 && (
              <StatPanel
                orders={mockData.statData.orders}
                sales={mockData.statData.sales}
                mobileView
              />
            )}
          </Flex>

          <Flex
            gap="5"
            direction={isLowerThan978 ? 'column' : 'row'}
            alignSelf={{ base: 'flex-start', '3xl': 'flex-end' }}
          >
            <ChartPanel data={mockData.chartData} />
            <ProgressPanel data={mockData.progressData} />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Dashboard;
