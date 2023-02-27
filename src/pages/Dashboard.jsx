import { useState, useEffect } from 'react';
import { Box, Divider, Flex, Heading } from '@chakra-ui/react';
import Calendar from '../components/Calendar';
import StatPanel from '../components/StatPanel';
import ChartPanel from '../components/ChartPanel';
import ProgressPanel from '../components/ProgressPanel';
import demoData from '../shared/demoData';

const Dashboard = () => {
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
    <Box w="100%" pt="66px">
      <Flex as="header" align="center" w="100%" gap="9" mb="16">
        <Heading color="grey.60" fontSize="14px" fontWeight="700">
          DASHBOARD
        </Heading>
        <Divider />
      </Flex>

      <Flex direction="column" gap="8">
        <Flex wrap="wrap" justify="space-between">
          <Flex flexShrink="0" mr="12">
            <Calendar change={changeWeekHandle} />
          </Flex>
          <StatPanel
            orders={mockData.statData.orders}
            sales={mockData.statData.sales}
          />
        </Flex>

        <Flex gap="5" alignSelf="flex-end">
          <ChartPanel data={mockData.chartData} />
          <ProgressPanel data={mockData.progressData} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Dashboard;
