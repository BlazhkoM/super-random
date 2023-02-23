import { Box, VStack } from '@chakra-ui/react';
import MenuItem from './MenuItem';
import menuItemsData from '../../../shared/menuItemsData';

const SideMenuLinkList = () => {
  return (
    <Box pt={10} color="grey.60">
      <VStack spacing={2}>
        {menuItemsData.map(({ id, icon, path, text }) => (
          <MenuItem key={id} text={text} path={path} icon={icon} />
        ))}
      </VStack>
    </Box>
  );
};

export default SideMenuLinkList;
