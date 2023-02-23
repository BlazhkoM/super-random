import { Text, Flex, Link, Box } from '@chakra-ui/react';
import getItemIcon from '../helpers/getItemIcon';

const MenuItem = ({ text, path, icon, ...rest }) => {
  return (
    <Link
      href={path}
      py={4}
      pl={12}
      w="100%"
      _hover={{
        bg: 'linear-gradient(270deg, rgba(255, 255, 255, 0) -39.2%, rgba(81, 217, 176, 0.1) 100%)',
        color: '#fff',
        borderRadius: null,
      }}
      style={{ textDecoration: 'none' }}
      position="relative"
      role="group"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        h="100%"
        w="1"
        bg="primary.green"
        display="none"
        _groupHover={{ display: 'block' }}
      />

      <Flex gap="3.5" alignItems="center" {...rest}>
        {getItemIcon(text)}
        <Text lineHeight={4}>{text}</Text>
      </Flex>
    </Link>
  );
};

export default MenuItem;
