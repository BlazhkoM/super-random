import { Box, Divider, Flex, Heading } from '@chakra-ui/react';
import Calendar from '../components/Calendar';
import StatPanel from '../components/StatPanel';
import ChartPanel from '../components/ChartPanel';
import ProgressPanel from '../components/ProgressPanel';

const Dashboard = () => {
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
            <Calendar />
          </Flex>
          <StatPanel />
        </Flex>

        <Flex gap="5" alignSelf="flex-end">
          <ChartPanel />
          <ProgressPanel />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Dashboard;
