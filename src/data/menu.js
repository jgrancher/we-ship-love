import OrderStep1 from '../screens/OrderStep1';

// Icons
import iconHeart from '../images/icon-heart.png';
import iconQuestionMark from '../images/icon-questionmark.png';
import iconSettings from '../images/icon-settings.png';
import iconSmiley from '../images/icon-smiley.png';
import iconUser from '../images/icon-user.png';

import { View } from 'react-native';

// Menu items
export const items = [
    {
        id: 'NewOrder',
        icon: iconHeart,
        title: 'Boutique',
        component: OrderStep1,
    },
    {
        id: 'FAQ',
        icon: iconQuestionMark,
        title: 'F.A.Q.',
        component: View,
    },
    {
        id: 'About',
        icon: iconSmiley,
        title: 'Qui sommes-nous',
        component: View,
    },
    {
        id: 'MyOrders',
        icon: iconSettings,
        title: 'Mes commandes',
        component: View,
    },
    {
        id: 'Pro',
        icon: iconUser,
        title: 'Espace Pro',
        component: View,
    },
];

export const socials = {
    facebook: 'https://www.facebook.com/mieuxquedesfleurs/',
    twitter: 'https://twitter.com/faitesmieux',
    instagram: 'https://www.instagram.com/mieuxquedesfleurs',
};

export const website = 'http://mieuxquedesfleurs.com/';
