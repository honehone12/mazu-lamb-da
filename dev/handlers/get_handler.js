// @ts-check
'use strict'

import {log, OK} from '../../index.js';

/**
 * 
 * @param {{pathParameters: any, queryStringParameters: any}} event 
 * @param {any} context
 * @returns {Promise<{
 *  statusCode: number, 
 *  headers: any, 
 *  body: string
 * }>} 
 */
export async function handler(event, context) {
    if (event.pathParameters) {
        log.info(event.pathParameters);
    }

    if (event.queryStringParameters) {
        log.info(event.queryStringParameters);
    }

    return {
        statusCode: OK,
        headers: {
            'Content-Type': 'text/plain' 
        },
        body: 'ok'
    };
}
