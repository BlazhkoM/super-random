import { Heading } from '@chakra-ui/react';

const Header = ({ children, ...props }) => {
  return (
    <Heading color="grey.60" letterSpacing="1px" fontWeight="700" {...props}>
      {children}
    </Heading>
  );
};

export default Header;
