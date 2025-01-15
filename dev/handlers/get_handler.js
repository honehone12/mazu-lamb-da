// @ts-check
'use strict'

const {log, OK} = require('../../index');

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
async function handler(event, context) {
    return {
        statusCode: OK,
        headers: {},
        body: "ok"
    };
}

module.exports.handler = handler;
