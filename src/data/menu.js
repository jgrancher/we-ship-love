// Screens & components
import { View } from 'react-native';
import OrderStep1 from '../screens/OrderStep1';
import Page from '../screens/Page';

// Images
import iconHeart from '../images/icon-heart.png';
import iconQuestionMark from '../images/icon-questionmark.png';
import iconSettings from '../images/icon-settings.png';
import iconSmiley from '../images/icon-smiley.png';
import iconUser from '../images/icon-user.png';

// Data
import {
    API_PAGE_ABOUT,
    API_PAGE_FAQ,
    API_PAGE_PRO,
} from '../config/API';

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
    {
        id: 'Pro',
        icon: iconUser,
        title: 'Espace Pro',
        component: View,
        props: {
            id: API_PAGE_PRO,
        },
    },
];

export const socials = {
    facebook: 'https://www.facebook.com/mieuxquedesfleurs/',
    twitter: 'https://twitter.com/faitesmieux',
    instagram: 'https://www.instagram.com/mieuxquedesfleurs',
};

export const website = 'http://mieuxquedesfleurs.com/';
