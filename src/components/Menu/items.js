// Utils
import routes from '../../utils/routes';

// Images
import iconFacebook from './icon-facebook.png';
import iconHeart from './icon-heart.png';
import iconInstagram from './icon-instagram.png';
import iconQuestionMark from './icon-questionmark.png';
import iconSettings from './icon-settings.png';
import iconSmiley from './icon-smiley.png';
import iconTwitter from './icon-twitter.png';

export const sections = [
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

export const socials = [
  {
    id: 'twitter',
    icon: iconTwitter,
    url: 'https://twitter.com/faitesmieux',
  },
  {
    id: 'facebook',
    icon: iconFacebook,
    url: 'https://www.facebook.com/mieuxquedesfleurs/',
  },
  {
    id: 'instagram',
    icon: iconInstagram,
    url: 'https://www.instagram.com/mieuxquedesfleurs',
  },
];
