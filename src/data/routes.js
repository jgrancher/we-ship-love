import Delivery from '../containers/Delivery';
import Message from '../containers/Message';
import Products from '../containers/Products';
import Shipping from '../containers/Shipping';
import Variants from '../containers/Variants';

export const orderRoutes = [
  {
    component: Products,
    index: 0,
  },
  {
    component: Variants,
    index: 1,
  },
  {
    component: Message,
    index: 2,
  },
  {
    component: Delivery,
    index: 3,
  },
  {
    component: Shipping,
    index: 4,
  },
];
