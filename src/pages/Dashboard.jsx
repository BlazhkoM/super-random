import { Box, Divider, Flex, Heading } from '@chakra-ui/react';
import Calendar from '../components/Calendar';
import StatPanel from '../components/StatPanel';

const Dashboard = () => {
  return (
    <Box w="100%" pt="66px" pl="100px">
      <Flex as="header" align="center" w="100%" gap="9" mb="16">
        <Heading color="grey.60" fontSize="14px" fontWeight="700">
          DASHBOARD
        </Heading>
        <Divider />
      </Flex>

      <Flex wrap="wrap">
        <Flex flexShrink="0" mr="12">
          <Calendar />
        </Flex>
        <StatPanel />
      </Flex>
    </Box>
  );
};

export default Dashboard;
