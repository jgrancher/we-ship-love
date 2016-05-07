// Forms styles and options declarations
import t from 'tcomb-form-native';
import { StyleSheet } from 'react-native';
import styles from '../styles/components/form';

/**
 * Override global styles of forms
 */
const formStyles = Object.assign({}, t.form.Form.stylesheet, {
    textbox: {
        normal: StyleSheet.flatten(styles.input),
        error: Object.assign({},
            StyleSheet.flatten(styles.input),
            StyleSheet.flatten(styles.inputError),
        ),
    },
});

/**
 * Define the Message form structure
 * @return {Object}
 */
export const MessageForm = t.struct({
    message: t.maybe(t.String),
});

/**
 * Message form options
 * @type {Object}
 */
export const messageOptions = {
    auto: 'none',
    stylesheet: formStyles,
    fields: {
        message: {
            multiline: true,
            stylesheet: Object.assign({}, t.form.Form.stylesheet, {
                textbox: {
                    normal: StyleSheet.flatten(styles.message),
                },
            }),
        },
    },
};

/**
 * Define the Delivery Address form structure
 * @return {Object}
 */
export const DeliveryForm = t.struct({
    name: t.String,
    firstname: t.String,
    address: t.String,
    address2: t.maybe(t.String),
    zipcode: t.Number,
    city: t.String,
    email: t.String,
    phone: t.Number,
});

/**
 * Delivery form options
 * @type {Object}
 */
export const deliveryOptions = {
    auto: 'none',
    stylesheet: formStyles,
    fields: {
        name: {
            placeholder: 'Nom',
        },
        firstname: {
            placeholder: 'Prénom',
        },
        address: {
            placeholder: 'Adresse',
        },
        address2: {
            placeholder: 'Complément d\'adresse',
        },
        zipcode: {
            placeholder: 'Code postal',
            keyboardType: 'numeric',
        },
        city: {
            placeholder: 'Ville',
        },
        email: {
            placeholder: 'Email',
            keyboardType: 'email-address',
        },
        phone: {
            placeholder: 'Téléphone',
            keyboardType: 'phone-pad',
        },
        country: {
            nullOption: false,
            order: 'asc',
        },
    },
};
