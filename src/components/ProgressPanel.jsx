import { Button, Box, Flex, useMediaQuery } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Header from './Header';
import ProgressItem from './ProgressItem';

const ProgressPanel = ({ data }) => {
  const [isLargerThan1144] = useMediaQuery('(min-width: 1144px)');
  return (
    <Box
      boxShadow="0 0 8px rgba(0,0,0, 0.1)"
      borderRadius="lg"
      w={isLargerThan1144 ? '432px' : '345px'}
      h="419px"
      p={isLargerThan1144 ? '8' : '4'}
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
