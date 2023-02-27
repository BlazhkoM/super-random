import { Button, Box, Flex } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Header from './Header';
import ProgressItem from './ProgressItem';
import progressData from '../shared/progressData';

const ProgressPanel = ({ data }) => {
  return (
    <Box
      boxShadow="0 0 8px rgba(0,0,0, 0.1)"
      borderRadius="lg"
      w="432px"
      h="419px"
      p="8"
      pr="4"
    >
      <Flex justify="space-between" align="center" mb="10">
        <Header fontSize="xs">TOP PERFORMING CUSTOMERS</Header>

        <ChevronRightIcon color="grey.60" />

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

      <Flex gap="8" direction="column">
        {data.map(({ id, subTitle, title, value }, index) => (
          <ProgressItem
            key={id}
            headingText={title}
            preheadText={subTitle}
            value={value}
            delay={index}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default ProgressPanel;
