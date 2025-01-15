// @ts-check
'use strict'

import { OK } from "../../index.js";

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
    return {
        statusCode: OK,
        headers: {},
        body: "ok"
    };
}