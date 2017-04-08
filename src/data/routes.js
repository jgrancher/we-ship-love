// Components
import Delivery from '../containers/Delivery';
import Message from '../containers/Message';
import Orders from '../containers/Orders';
import Page from '../containers/Page';
import Payment from '../containers/Payment';
import Products from '../containers/Products';
import Shipping from '../containers/Shipping';
import Variants from '../containers/Variants';

// Data
import {
  API_PAGE_ABOUT,
  API_PAGE_FAQ,
} from './constants';

export default {
  order: [
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
    {
      component: Payment,
      index: 5,
    },
  ],
  faq: [
    {
      component: Page,
      props: {
        id: API_PAGE_FAQ,
      },
    },
  ],
  about: [
    {
      component: Page,
      props: {
        id: API_PAGE_ABOUT,
      },
    },
  ],
  orders: [
    {
      component: Orders,
      index: 0,
    },
  ],
};
