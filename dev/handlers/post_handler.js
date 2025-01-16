// @ts-check
'use strict'

import { log, OK, badRequest, TEXT, FORM } from "../../index.js";
import querystring from "node:querystring";

/**
 * @param {{
 *  headers: any,
 *  isBase64Encoded: boolean, 
 *  body: string
 * }} event 
 * @param {any} context,
 * @returns {Promise<{
 *  statusCode: number, 
 *  headers: any, 
 *  body: any
 * }>} 
 */
export async function handler(event, context) {
    if (!event.body || !event.headers) {
        return badRequest();
    }

    if (event.headers['content-type'] !== FORM) {
        return badRequest();
    }

    let form = {};
    try {
        let body = event.body;
        if (event.isBase64Encoded) {
            const b64Dec = Buffer.from(event.body, 'base64')
                .toString('utf-8');
            body = b64Dec;
        }

        form = querystring.parse(body);
        log.info('form: %o', form);    
    } catch (error) {
        return badRequest();
    }
    
    return {
        statusCode: OK,
        headers: {
            'Content-Type': TEXT 
        },
        body: 'ok'
    };
}
