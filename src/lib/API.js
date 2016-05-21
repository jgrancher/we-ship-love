/**
 * API object - Helper to build requests like this
 * https://apikey:password@hostname/admin/resource.json
 */

import { timeout } from './helpers';
import {
    API_HOSTNAME,
    API_KEY,
    API_PASSWORD,
} from '../config/API';

const API = {

    get(endpoint) {
        return this.request(endpoint, 'GET');
    },

    post(endpoint, data) {
        return this.request(endpoint, 'POST', data);
    },

    request(endpoint, method) {
        const url = `https://${API_KEY}:${API_PASSWORD}@${API_HOSTNAME}/admin/${endpoint}`;
        return timeout(fetch(url, { method })).then(this.handleResponse);
    },

    handleResponse(response) {
        if (!response.ok) {
            return Promise.reject('An error occured. Please try again.');
        }

        return Promise.resolve(response.json());
    },

};

export default API;
