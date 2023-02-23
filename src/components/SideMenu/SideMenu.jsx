import { useEffect } from 'react';
import { Box, Hide, useMediaQuery, useDisclosure } from '@chakra-ui/react';

import SideMenuHeader from './comp/SideMenuHeader';
import SideMenuLinkList from './comp/SideMenuLinkList';
import SideMenuFooter from './comp/SideMenuFooter';

const SideMenu = () => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const [isLargerThan978] = useMediaQuery('(min-width: 978px)');
  const [isLargerThan1278] = useMediaQuery('(min-width: 1278px)');

  useEffect(() => {
    if (isLargerThan978) onClose();
    if (isLargerThan1278) onOpen();
  }, [isLargerThan978, isLargerThan1278, onOpen, onClose]);

  return (
    <Box
      py={isOpen ? 5 : 6}
      w={[isOpen ? '244px' : '94px', null, null, null, '264px']}
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
        <SideMenuHeader isOpen={isOpen} onOpenButtonClick={onToggle} />

        <SideMenuLinkList small={!isOpen} />
      </Box>

      <Hide above="lg">
        <SideMenuFooter isOpen={isOpen} />
      </Hide>
    </Box>
  );
};

export default SideMenu;
