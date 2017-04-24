// Components
import Delivery from '../containers/Delivery';
import Message from '../containers/Message';
// import Orders from '../containers/Orders';
import OrderConfirmation from '../containers/OrderConfirmation';
import Page from '../containers/Page';
import Payment from '../containers/Payment';
import PaymentMethod from '../containers/PaymentMethod';
import Products from '../containers/Products';
import Shipping from '../containers/Shipping';
import Variants from '../containers/Variants';

// Images
// import iconGear from '../components/Menu/icon-gear.png';
import iconHeart from '../components/Menu/icon-heart.png';
import iconQuestionMark from '../components/Menu/icon-questionmark.png';
import iconSmiley from '../components/Menu/icon-smiley.png';

// Data
import {
  API_PAGE_ABOUT,
  API_PAGE_FAQ,
} from './constants';

export default {
  order: {
    icon: iconHeart,
    title: 'Boutique',
    scenes: [
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
            title: 'Valider et payer',
          },
        },
      },
      {
        component: OrderConfirmation,
        props: {
          step: {
            title: 'Retour à l\'écran principal',
          },
        },
      },
    ],
  },
  faq: {
    icon: iconQuestionMark,
    title: 'F.A.Q',
    scenes: [
      {
        component: Page,
        props: {
          id: API_PAGE_FAQ,
        },
      },
    ],
  },
  about: {
    icon: iconSmiley,
    title: 'Qui sommes-nous',
    scenes: [
      {
        component: Page,
        props: {
          id: API_PAGE_ABOUT,
        },
      },
    ],
  },
  // orders: {
  //   icon: iconGear,
  //   title: 'Mes commandes',
  //   scenes: [
  //     {
  //       component: Orders,
  //     },
  //   ],
  // },
};
