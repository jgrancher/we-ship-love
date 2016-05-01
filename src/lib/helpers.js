import { FETCH_TIMEOUT } from '../data/constants';

/**
 * Timeout function to trigger Promise rejection after a specific time
 * @param  {Number} time        The maximum time in ms
 * @param  {Promise} promise    The promise to handle
 * @return {Promise}            The promise returned (either resolved or rejected by timeout)
 */
export const timeout = (promise, time = FETCH_TIMEOUT) =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('Timeout')), time);
        promise.then(resolve, reject);
    });
