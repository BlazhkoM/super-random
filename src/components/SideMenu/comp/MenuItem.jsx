import { Text, Flex, Link, Box, keyframes, ScaleFade } from '@chakra-ui/react';
import getItemIcon from '../helpers/getItemIcon';

const appear = keyframes`
  from { transform: opacity(0); }
  to { transform: opcity(1); }
`;

const MenuItem = ({ text, path, isSmall, icon, ...rest }) => {
  return (
    <Link
      href={path}
      py={4}
      pl={!isSmall ? 12 : 0}
      w="100%"
      _hover={{
        bg: 'linear-gradient(270deg, rgba(255, 255, 255, 0) -39.2%, rgba(81, 217, 176, 0.1) 100%)',
        color: '#fff',
        borderRadius: null,
      }}
      style={{ textDecoration: 'none' }}
      display="flex"
      justifyContent={isSmall ? 'center' : 'flex-start'}
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
        {!isSmall && (
          <ScaleFade initialScale={0.3} in={!isSmall}>
            <Text whiteSpace="nowrap" lineHeight={4}>
              {text}
            </Text>
          </ScaleFade>
        )}
      </Flex>
    </Link>
  );
};

export default MenuItem;
