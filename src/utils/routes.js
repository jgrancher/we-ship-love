// Components
import Delivery from '../containers/Delivery';
import Message from '../containers/Message';
import Orders from '../containers/Orders';
import Page from '../containers/Page';
import Payment from '../containers/Payment';
import PaymentMethod from '../containers/PaymentMethod';
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
      props: {
        step: {
          number: 1,
          title: 'Choisissez votre ballon !',
        },
      },
    },
    {
      component: Variants,
      props: {
        step: {
          number: 2,
          title: 'Choisissez un supplément',
        },
      },
    },
    {
      component: Message,
      props: {
        step: {
          number: 3,
          title: 'Rédigez votre message',
          text: '(anonyme si vous ne signez pas)',
        },
      },
    },
    {
      component: Delivery,
      props: {
        step: {
          number: 4,
          title: 'C\'est pour qui?',
        },
      },
    },
    {
      component: Shipping,
      props: {
        step: {
          number: 5,
          title: 'Frais de port',
        },
      },
    },
    {
      component: PaymentMethod,
      props: {
        step: {
          number: 6,
          title: 'Mode de paiement',
        },
      },
    },
    {
      component: Payment,
      props: {
        step: {
          number: 7,
        },
      },
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
