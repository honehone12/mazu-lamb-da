// @ts-check
'use strict'

const {server, fastify} = require('./lib/server');
const {
    OK, 
    BAD_REQUEST,
    INTERNAL_SERVER_ERROR 
} = require('./lib/handler');

/**
 * @returns {void}
 */
function init() {
    server.initContentTypeParsers();
}

const mazu = {
    init,
    log: fastify.log,
    get: server.get,
    post: server.post,
};

const log = fastify.log;

module.exports = {
    mazu,
    log,
    fastify,
    OK,
    BAD_REQUEST,
    INTERNAL_SERVER_ERROR
};
