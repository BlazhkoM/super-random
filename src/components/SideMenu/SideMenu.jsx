import { useState } from 'react';
import { Box } from '@chakra-ui/react';

import SideMenuHeader from './comp/SideMenuHeader';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    >
      <SideMenuHeader
        isOpen={isOpen}
        onOpenButtonClick={() => setIsOpen(prev => !prev)}
      />
    </Box>
  );
};

export default SideMenu;
