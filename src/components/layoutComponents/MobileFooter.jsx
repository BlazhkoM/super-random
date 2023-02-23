import { Link, Text, Flex } from '@chakra-ui/react';
import mobileMenuItemsData from '../../shared/mobileMenuItemsData';
import getItemIcon from '../SideMenu/helpers/getItemIcon';

const MobileFooterItem = ({ text, path }) => {
  return (
    <Link href={path} style={{ textDecoration: 'none' }} p="2">
      <Flex direction="column" align="center" gap="2">
        {getItemIcon(text)}
        <Text whiteSpace="nowrap" fontSize="xs" lineHeight={4}>
          {text}
        </Text>
      </Flex>
    </Link>
  );
};

const MobileFooter = () => {
  return (
    <Flex
      px="6"
      justifyContent="space-between"
      bg="primary.navy"
      align="center"
      h="100%"
      color="grey.60"
    >
      {mobileMenuItemsData.map(({ id, text, path }) => (
        <MobileFooterItem key={id} text={text} path={path} />
      ))}
    </Flex>
  );
};

export default MobileFooter;
