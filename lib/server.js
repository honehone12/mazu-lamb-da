// @ts-check
'use strict'

const fastify = require('fastify')({
    logger: true
}); 

/**
 * 
 * @returns {void}
 */
function initContentTypeParsers() {
    fastify.addContentTypeParser(
        'text/plain',
        {parseAs: 'buffer'},
        (_req, payload, done) => {
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
        (_req, payload, done) => {
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
        (_req, payload, done) => {
            try {
                const body = payload.toString();
                const b64Enc = Buffer.from(body).toString('base64');
                done(null, b64Enc);    
            } catch (error) {
                done(error);
            }
        }
    );
}

/**
 * 
 * @param {{body: string}} request 
 * @param {{statusCode: number, headers: any}} reply 
 * @param {(
 *  event: {isBase64Encoded: boolean, body: string}, 
 *  context: any
 * ) => {
 *  statusCode: number, 
 *  headers: any, 
 *  body: string
 * }} handler
 * @returns {string} 
 */
function runHandler(request, reply, handler) {
    const event = {
        isBase64Encoded: true,
        body: request.body
    };
    const context = {};

    const {
        statusCode,
        headers,
        body
    } = handler(event, context);

    reply.statusCode = statusCode;
    reply.headers = headers;

    return body;
}

/**
 * 
 * @param {string} path 
 * @param {(
 *  event: {isBase64Encoded: boolean, body: string}, 
 *  context: any
 * ) => {
 *  statusCode: number, 
 *  headers: any, 
 *  body: string
 * }} handler 
 * @returns {void}
 */
function get(path, handler) {
    fastify.get(path, async (request, reply) => {
        // @ts-ignore
        return runHandler(request, reply, handler);
    });
}

/**
 * 
 * @param {string} path 
 * @param {(
 *  event: {isBase64Encoded: boolean, body: string}, 
 *  context: any
 * ) => {
 *  statusCode: number, 
 *  headers: any, 
 *  body: string
 * }} handler 
 * @returns {void}
 */
function post(path, handler) {
    fastify.post(path, async (request, reply) => {
        // @ts-ignore
        return runHandler(request, reply, handler);
    });
}

/**
 * 
 * @param {number} port 
 * @returns {Promise<void>}
 */
async function serve(port) {
    try {
        await fastify.listen({
            port: 3000
        });
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
}

module.exports = {
    initContentTypeParsers,
    get,
    post,
    serve
};
