/**
 * API object - Helper to build requests like this
 * https://apikey:password@hostname/admin/resource.json
 */

// Modules
import Config from 'react-native-config';

// Data
import { timeout } from './helpers';
import { API_HOSTNAME } from '../data/constants';

const URL = `https://${Config.SHOPIFY_KEY}:${Config.SHOPIFY_PASSWORD}@${API_HOSTNAME}/admin/`;

const API = {

    get(endpoint) {
        return this.request(endpoint, 'GET');
    },

    post(endpoint, data) {
        return this.request(endpoint, 'POST', data);
    },

    request(endpoint, method) {
        return timeout(fetch(`${URL}${endpoint}`, { method })).then(this.handleResponse);
    },

    handleResponse(response) {
        if (!response.ok) {
            return Promise.reject('An error occured. Please try again.');
        }

        return Promise.resolve(response.json());
    },

};

export default API;
