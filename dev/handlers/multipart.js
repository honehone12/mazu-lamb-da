// @ts-check
'use strict'

import { OK, TEXT } from "../../lib/handler.js";

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
    return {
        statusCode: OK,
        headers: {
            'Content-Type': TEXT 
        },
        body: 'ok'
    };
}