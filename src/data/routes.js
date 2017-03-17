import Delivery from '../containers/Delivery';
import Message from '../containers/Message';
import Products from '../containers/Products';
import Shipping from '../containers/Shipping';

export const orderRoutes = [
  {
    component: Products,
    index: 0,
  },
  {
    component: Message,
    index: 1,
  },
  {
    component: Delivery,
    index: 2,
  },
  {
    component: Shipping,
    index: 3,
  },
];
