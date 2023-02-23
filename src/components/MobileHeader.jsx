import React from 'react';
import MobileSideMenu from './MobileSideMenu/MobileSideMenu';
import { IconButton, Flex, Image, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import logoFull from '../icons/logo-inverse-full-black.png';
import { FilterIcon, SearchIcon } from '../icons/menuIcons';
import { AddIcon } from '@chakra-ui/icons';

const Main = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex justifyContent="space-between" align="center" h="100%">
        <Flex align="center" gap="4">
          <IconButton
            aria-label="Open menu"
            colorScheme="transparent"
            w="5"
            h="5"
            icon={<HamburgerIcon color="grey.60" boxSize={6} />}
            onClick={onOpen}
          />

          <Image alt="logo" src={logoFull} w="140px" h="27px" />
        </Flex>

        <Flex align="center" gap="2">
          <IconButton
            aria-label="Search"
            colorScheme="transparent"
            size="xs"
            icon={<SearchIcon color="primary.navy" boxSize={6} />}
          />

          <IconButton
            aria-label="Filter"
            colorScheme="transparent"
            size="xs"
            icon={<FilterIcon color="primary.navy" boxSize={6} />}
          />

          <IconButton
            aria-label="Add button"
            colorScheme="greenButton"
            isRound
            size="sm"
            icon={<AddIcon color="primary.green" boxSize={4} />}
          />
        </Flex>
      </Flex>
      <MobileSideMenu isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
};

export default Main;
