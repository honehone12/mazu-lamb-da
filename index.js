// @ts-check
'use strict'

import * as server from './lib/server.js';
export * from './lib/handler.js';

/**
 * @returns {void}
 */
function init() {
    server.initErrorHandler();
    server.initContentTypeParsers();
}

export const mazu = {
    init,
    get: server.get,
    post: server.post
}
export const fastify = server.fastify;
export const log = server.fastify.log;
