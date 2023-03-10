import { Button, Box, Flex, useMediaQuery } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Header from '../components/Header';
import LineChart from './lineChart/LineChart';

const ChartPanel = ({ data }) => {
  const [isLargerThan1144] = useMediaQuery('(min-width: 1144px)');
  return (
    <Box
      p={isLargerThan1144 ? '8' : '4'}
      boxShadow="0 0 8px rgba(0,0,0, 0.1)"
      borderRadius="lg"
      w={isLargerThan1144 ? '432px' : '345px'}
      h="419px"
    >
      <Flex justify="space-between" align="center" mb="10">
        <Header fontSize="xs">SALES</Header>

        <Box maxW="148px">
          <Button
            variant="brandLightGreen"
            h="30px"
            fontSize="13px"
            rightIcon={<ChevronDownIcon />}
            px="10"
          >
            Last 7 Days
          </Button>
        </Box>
      </Flex>
      <LineChart data={data} />
    </Box>
  );
};

export default ChartPanel;
