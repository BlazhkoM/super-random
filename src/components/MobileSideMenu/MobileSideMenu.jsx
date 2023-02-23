import { useRef } from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerCloseButton,
} from '@chakra-ui/react';
import SideMenuLinkList from '../SideMenu/comp/SideMenuLinkList';
import MobileMenuFooter from '../SideMenu/comp/SideMenuFooter';

function MobileSideMenu({ isOpen, onOpen, onClose }) {
  const btnRef = useRef();

  return (
    <>
      {/* <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button> */}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="primary.navy">
          <DrawerHeader>
            <DrawerCloseButton bg="grey.40" />
          </DrawerHeader>

          <DrawerBody p={0}>
            <SideMenuLinkList />
          </DrawerBody>

          <DrawerFooter p={0}>
            <MobileMenuFooter isOpen={true} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MobileSideMenu;
