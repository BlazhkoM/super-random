import {
  DashboardIcon,
  ProductsIcon,
  OrdersIcon,
  CustomersIcon,
  ReportsIcon,
} from '../../../icons/menuIcons';

const BOX_SIZE = 5;

const getItemIcon = itemName => {
  switch (itemName) {
    case 'Dashboard':
      return <DashboardIcon boxSize={BOX_SIZE} />;

    case 'Customers':
      return <CustomersIcon boxSize={BOX_SIZE} />;

    case 'Orders':
      return <OrdersIcon boxSize={BOX_SIZE} />;

    case 'Products & Pricing':
      return <ProductsIcon boxSize={BOX_SIZE} />;

    case 'Reports':
      return <ReportsIcon boxSize={BOX_SIZE} />;

    default:
      break;
  }
};

export default getItemIcon;
