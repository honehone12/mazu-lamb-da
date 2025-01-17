// @ts-check
'use strict'

import Fastify from 'fastify';

export const fastify = Fastify({
    logger: true,
}); 

/**
 * 
 * @returns {void}
 */
export function initErrorHandler() {
    if (process.env.PRODUCTION_MODE) {
        fastify.setErrorHandler((_error, _request, reply) => {
            reply.status(500).send('internal server error');
        });
    }
}

/**
 * 
 * @returns {void}
 */
export function initContentTypeParsers() {
    fastify.addContentTypeParser(
        'text/plain',
        {parseAs: 'buffer'},
        (_request, payload, done) => {
            try {
                const body = payload.toString();
                const b64Enc = Buffer.from(body).toString('base64');
                done(null, b64Enc);
            } catch (error) {
                done(error);
            }
        }
    );
    
    fastify.addContentTypeParser(
        'application/json',
        {parseAs: 'buffer'},
        (_request, payload, done) => {
            try {
                const body = payload.toString();
                const b64Enc = Buffer.from(body).toString('base64');
                done(null, b64Enc);
            } catch (error) {
                done(error);
            }
        }
    );
    
    fastify.addContentTypeParser(
        'application/x-www-form-urlencoded',
        {parseAs: 'buffer'}, 
        (_request, payload, done) => {
            try {
                const body = payload.toString();
                const b64Enc = Buffer.from(body).toString('base64');
                done(null, b64Enc);    
            } catch (error) {
                done(error);
            }
        }
    );

    fastify.addContentTypeParser(
        'multipart/form-data',
        {parseAs: 'buffer'},
        (_request, payload, done) => {
            try {
                fastify.log.info(payload);
                const b64Enc = Buffer.from(payload).toString('base64');
                done(null, b64Enc);
            } catch (error) {
                done(error);
            }
        }
    );
}

/**
 * 
 * @param {string} path 
 * @param {(
 *  event: {
 *   headers: any,
 *   pathParameters: any, 
 *   queryStringParameters: any
 *  }, 
 *  context: any
 * ) => Promise<{
 *  statusCode: number, 
 *  headers: any, 
 *  body: any
 * }>} handler 
 * @returns {void}
 */
export function get(path, handler) {
    fastify.get(path, async (request, reply) => {
        const event = {
            headers: request.headers,
            pathParameters: request.params,
            queryStringParameters: request.query
        };
        const context = {};
    
        const {
            statusCode,
            headers,
            body
        } = await handler(event, context);
    
        reply.statusCode = statusCode;
        reply.headers = headers;
    
        return body;
    });
}

/**
 * 
 * @param {string} path 
 * @param {(
 *  event: {
 *   headers: any,
 *   isBase64Encoded: boolean, 
 *   body: string
 *  }, 
 *  context: any
 * ) => Promise<{
 *  statusCode: number, 
 *  headers: any, 
 *  body: any
 * }>} handler 
 * @returns {void}
 */
export function post(path, handler) {
    fastify.post(path, async (request, reply) => {
        const event = {
            headers: request.headers,
            isBase64Encoded: true,
            body: request.body
        };
        const context = {};
    
        const {
            statusCode,
            headers,
            body
        // @ts-ignore
        } = await handler(event, context);
    
        reply.statusCode = statusCode;
        reply.headers = headers;
    
        return body;
    });
}
