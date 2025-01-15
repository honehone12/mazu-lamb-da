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
    return {
        statusCode: OK,
        headers: {},
        body: "ok"
    };
}
