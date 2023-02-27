import { useState, useEffect } from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const ProgressItem = ({ headingText, preheadText, delay, value }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => setProgress(value), 400 * (delay + 1));

    return () => clearTimeout(id);
  }, [value, delay]);

  return (
    <Flex direction="column" align="flex-start">
      <Heading
        as="h5"
        fontSize="16px"
        lineHeight="20px"
        fontWeight="600"
        color="primary.navy"
        mb="1.5"
      >
        {headingText}
      </Heading>
      <Text color="grey.60" lineHeight="20px" fontSize="13px" mb="7px">
        {preheadText}
      </Text>

      <Box
        position="relative"
        w="100%"
        h="9px"
        borderRadius="lg"
        bg="primary.greenLight"
        as="div"
      >
        <Box
          as="div"
          position="absolute"
          left="0"
          w={`${progress}%`}
          h="9px"
          borderRadius="lg"
          bg="primary.navy"
          transition="all 0.8s"
        />
      </Box>
    </Flex>
  );
};

export default ProgressItem;
