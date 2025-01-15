// @ts-check
'use strict'

const {log, OK} = require('../../index');

/**
 * 
 * @param {{isBase64Encoded: boolean, body: string}} event 
 * @param {any} context
 * @returns {Promise<{
 *  statusCode: number, 
 *  headers: any, 
 *  body: string
 * }>} 
 */
async function handler(event, context) {
    log.info(event.body);
    
    return {
        statusCode: OK,
        headers: {},
        body: "ok"
    };
}

module.exports.handler = handler;
