import { Box, useDisclosure } from '@chakra-ui/react';

import SideMenuHeader from './comp/SideMenuHeader';
import SideMenuLinkList from './comp/SideMenuLinkList';
import SideMenuFooter from './comp/SideMenuFooter';

const SideMenu = () => {
  const { isOpen, onToggle } = useDisclosure();

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
        <SideMenuHeader isOpen={isOpen} onOpenButtonClick={onToggle} />

        <SideMenuLinkList small={!isOpen} />
      </Box>

      <SideMenuFooter isOpen={isOpen} />
    </Box>
  );
};

export default SideMenu;
