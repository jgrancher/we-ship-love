// Forms styles and options declarations
import React, { StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import AccordionPicker from '../components/AccordionPicker';
import styles from '../styles/components/form';

/**
 * Global styles override of forms
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
            template: (data) => (
                <AccordionPicker
                    defaultValue={data.options.find((o) => o.value === data.value)}
                    onChange={data.onChange}
                    options={data.options}
                />
            ),
        },
    },
};
