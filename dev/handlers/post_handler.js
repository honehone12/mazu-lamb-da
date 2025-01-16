// @ts-check
'use strict'

import { log, OK, badRequest } from "../../index.js";
import querystring from "node:querystring";

/**
 * @param {{isBase64Encoded: boolean, body: string}} event 
 * @param {any} context,
 * @returns {Promise<{
 *  statusCode: number, 
 *  headers: any, 
 *  body: any
 * }>} 
 */
export async function handler(event, context) {
    if (!event.body) {
        return badRequest();
    }

    try {
        log.info('raw: %s', event.body);
        let body = event.body;
        if (event.isBase64Encoded) {
            const b64Dec = Buffer.from(event.body, 'base64')
                .toString('utf-8');
            log.info("b64 decoded: %s", b64Dec);
            body = b64Dec;
        }

        const query = querystring.parse(body);
        log.info('query: %o', query);    
    } catch (error) {
        return badRequest();
    }
    
    return {
        statusCode: OK,
        headers: {
            'Content-Type': 'text/plain' 
        },
        body: 'ok'
    };
}
