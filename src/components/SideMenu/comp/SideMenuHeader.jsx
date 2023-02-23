import {
  Image,
  Flex,
  IconButton,
  ScaleFade,
  Hide,
  useMediaQuery,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import logo from '../../../icons/logo-inverse.png';
import logoFull from '../../../icons/logo-inverse-full.png';
import logoFullMax from '../../../icons/logo-inverse-full-max.png';

const SideMenuHeader = ({ isOpen = false, onOpenButtonClick }) => {
  const [isLargerThan1278] = useMediaQuery('(min-width: 1278px)');

  return (
    <Flex
      as="header"
      pl={[isOpen ? 4 : 0, null, null, null, 0]}
      mb={isOpen ? 20 : 10}
      gap={isOpen ? 5 : 8}
      alignItems="center"
      justifyContent={[isOpen ? 'flex-start' : 'center', null, null, 'center']}
      flexDir={isOpen ? 'row' : 'column'}
    >
      <Hide above="lg">
        <IconButton
          aria-label="Open menu"
          colorScheme="greyButton"
          isRound
          w="34px"
          icon={<HamburgerIcon color="grey.60" />}
          onClick={onOpenButtonClick}
        />
      </Hide>

      {isOpen ? (
        <ScaleFade initialScale={0.6} in={isOpen}>
          <Image
            alt="logo"
            src={isLargerThan1278 ? logoFull : logoFullMax}
            w={isLargerThan1278 ? '184px' : '140px'}
            h={isLargerThan1278 ? '35px' : '27px'}
          />
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
