import { Image, Flex, IconButton, ScaleFade } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import logo from '../../../icons/logo-inverse.png';
import logoFull from '../../../icons/logo-inverse-full.png';

const SideMenuHeader = ({ isOpen = false, onOpenButtonClick }) => {
  return (
    <Flex
      as="header"
      pl={isOpen ? 4 : 0}
      mb={isOpen ? 20 : 10}
      gap={isOpen ? 5 : 8}
      alignItems="center"
      justifyContent={isOpen ? 'flex-start' : 'center'}
      flexDir={isOpen ? 'row' : 'column'}
    >
      <IconButton
        aria-label="Open menu"
        colorScheme="greyButton"
        isRound
        w="34px"
        icon={<HamburgerIcon color="grey.60" />}
        onClick={onOpenButtonClick}
      />

      {isOpen ? (
        <ScaleFade initialScale={0.6} in={isOpen}>
          <Image alt="logo" src={logoFull} w={'140px'} h={'27px'} />
        </ScaleFade>
      ) : (
        <ScaleFade initialScale={0.6} in={!isOpen}>
          <Image alt="logo" src={logo} w={'32px'} h={'32px'} />
        </ScaleFade>
      )}
    </Flex>
  );
};

export default SideMenuHeader;
