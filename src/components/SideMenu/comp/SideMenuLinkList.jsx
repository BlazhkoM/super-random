import { Box, VStack } from '@chakra-ui/react';
import MenuItem from './MenuItem';
import menuItemsData from '../../../menuItemsData';

const SideMenuLinkList = ({ small = false }) => {
  return (
    <Box pt={[10, null, 0]} color="grey.60">
      <VStack spacing={2}>
        {menuItemsData.map(({ id, icon, path, text }) => (
          <MenuItem
            key={id}
            isSmall={small}
            text={text}
            path={path}
            icon={icon}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default SideMenuLinkList;
