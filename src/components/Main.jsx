import React from 'react';
import MobileSideMenu from './MobileSideMenu/MobileSideMenu';
import { Button, Hide, useDisclosure } from '@chakra-ui/react';

const Main = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Hide above="md">
      <>
        <Button onClick={onOpen}>Open</Button>
        <MobileSideMenu isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      </>
    </Hide>
  );
};

export default Main;
