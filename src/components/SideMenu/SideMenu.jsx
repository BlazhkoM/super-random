import { useEffect, useState } from 'react';
import { Box, Show, Hide } from '@chakra-ui/react';

import SideMenuHeader from './comp/SideMenuHeader';
import SideMenuLinkList from './comp/SideMenuLinkList';
import SideMenuFooter from './comp/SideMenuFooter';
import useWindowWidth from '../../hooks/useWindowWidth';

const SideMenu = () => {
  const [isOpen, onToggle] = useState();
  const width = useWindowWidth();

  useEffect(() => {
    if (!width) return;
    if (width > 978) onToggle(false);
    if (width > 1278) onToggle(true);
  }, [width]);

  return (
    <Box
      py={isOpen ? 5 : 6}
      w={isOpen ? '244px' : '94px'}
      h="100vh"
      top={0}
      left={0}
      zIndex={10}
      bg="primary.navy"
      position="absolute"
      display="flex"
      flexDirection="column"
      transition="all 0.2s"
      justifyContent={'space-between'}
    >
      <Box>
        <SideMenuHeader
          isOpen={isOpen}
          onOpenButtonClick={() => onToggle(prev => !prev)}
        />

        <SideMenuLinkList small={!isOpen} />
      </Box>

      <Hide above="lg">
        <SideMenuFooter isOpen={isOpen} />
      </Hide>
    </Box>
  );
};

export default SideMenu;
