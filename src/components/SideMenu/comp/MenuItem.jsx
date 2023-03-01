import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Text,
  Flex,
  Box,
  ScaleFade,
  Tooltip,
  useMediaQuery,
} from '@chakra-ui/react';
import getItemIcon from '../helpers/getItemIcon';

const MenuItem = ({ text, path, isSmall, icon, ...rest }) => {
  const [isLowerThan978] = useMediaQuery('(max-width: 978px)');
  const [active, setActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const isCurrentActive = location.pathname
      .toLowerCase()
      .includes(text.toLowerCase());

    if (isCurrentActive) {
      setActive(true);
      return;
    }
    setActive(false);
  }, [location, text]);

  return (
    <NavLink to={path} style={{ width: '100%' }}>
      <Tooltip
        hasArrow
        label={text}
        bg="primary.navy"
        placement="right"
        isDisabled={!isSmall || isLowerThan978}
      >
        <Box
          py={4}
          pl={!isSmall ? 12 : 0}
          w="100%"
          _hover={
            !active
              ? {
                  bg: 'linear-gradient(270deg, rgba(255, 255, 255, 0) -39.2%, rgba(81, 217, 176, 0.1) 100%)',
                  color: '#fff',
                  borderRadius: null,
                }
              : null
          }
          bg={
            active
              ? 'linear-gradient(270deg, rgba(255, 255, 255, 0) -39.2%, rgba(81, 217, 176, 0.1) 100%)'
              : ''
          }
          color={active ? '#fff' : 'inherit'}
          cursor={active ? 'default' : 'pointer'}
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
            display={active ? 'block' : 'none'}
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
        </Box>
      </Tooltip>
    </NavLink>
  );
};

export default MenuItem;
