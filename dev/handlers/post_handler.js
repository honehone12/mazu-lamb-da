// @ts-check
'use strict'

import { log, OK } from "../../index.js";

/**
 * @param {{isBase64Encoded: boolean, body: string}} event 
 * @param {any} context,
 * @returns {Promise<{
 *  statusCode: number, 
 *  headers: any, 
 *  body: string
 * }>} 
 */
export async function handler(event, context) {
    if (event.body) {
        log.info(event.body);
        log.info(event.isBase64Encoded);
    }

    return {
        statusCode: OK,
        headers: {
            'Content-Type': 'text/plain' 
        },
        body: 'ok'
    };
}
