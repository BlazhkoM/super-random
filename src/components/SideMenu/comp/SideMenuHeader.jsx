import { Image, Flex, IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import logo from '../../../icons/logo-inverse.png';
import logoFull from '../../../icons/logo-inverse-full.png';

const SideMenuHeader = ({ isOpen = false, onOpenButtonClick }) => {
  return (
    <Flex
      as="header"
      gap={isOpen ? 5 : 8}
      alignItems="center"
      justifyContent="center"
      flexDir={isOpen ? 'row' : 'column'}
    >
      <IconButton
        aria-label="Open menu"
        bg="rgba(152, 165, 183, 0.3)"
        borderRadius="50%"
        w="34px"
        icon={<HamburgerIcon color="grey.60" />}
        onClick={onOpenButtonClick}
      />

      <Image
        alt="logo"
        src={isOpen ? logoFull : logo}
        w={isOpen ? '140px' : '32px'}
        h={isOpen ? '27px' : '32px'}
      />
    </Flex>
  );
};

export default SideMenuHeader;
