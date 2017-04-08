// Routes
import routes from '../../data/routes';

// Images
import iconHeart from './icon-heart.png';
import iconQuestionMark from './icon-questionmark.png';
import iconSettings from './icon-settings.png';
import iconSmiley from './icon-smiley.png';

// Menu items
export default [
  {
    id: 'NewOrder',
    icon: iconHeart,
    title: 'Boutique',
    ...routes.order[0],
  },
  {
    id: 'FAQ',
    icon: iconQuestionMark,
    title: 'F.A.Q.',
    ...routes.faq[0],
  },
  {
    id: 'About',
    icon: iconSmiley,
    title: 'Qui sommes-nous',
    ...routes.about[0],
  },
  {
    id: 'MyOrders',
    icon: iconSettings,
    title: 'Mes commandes',
    ...routes.orders[0],
  },
];
