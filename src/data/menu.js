// Externals
import { View } from 'react-native';

// Containers & components
import Page from '../containers/Page';

// Images
import iconHeart from '../images/icon-heart.png';
import iconQuestionMark from '../images/icon-questionmark.png';
import iconSettings from '../images/icon-settings.png';
import iconSmiley from '../images/icon-smiley.png';

// Data
import {
  API_PAGE_ABOUT,
  API_PAGE_FAQ,
} from './constants';

import { orderRoutes } from './routes';

// Menu items
export const items = [
  {
    id: 'NewOrder',
    icon: iconHeart,
    title: 'Boutique',
    component: orderRoutes[0].component,
  },
  {
    id: 'FAQ',
    icon: iconQuestionMark,
    title: 'F.A.Q.',
    component: Page,
    props: {
      id: API_PAGE_FAQ,
    },
  },
  {
    id: 'About',
    icon: iconSmiley,
    title: 'Qui sommes-nous',
    component: Page,
    props: {
      id: API_PAGE_ABOUT,
    },
  },
  {
    id: 'MyOrders',
    icon: iconSettings,
    title: 'Mes commandes',
    component: View,
  },
];

export const socials = {
  facebook: 'https://www.facebook.com/mieuxquedesfleurs/',
  twitter: 'https://twitter.com/faitesmieux',
  instagram: 'https://www.instagram.com/mieuxquedesfleurs',
};

export const website = 'http://mieuxquedesfleurs.com/';
