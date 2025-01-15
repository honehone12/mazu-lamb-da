// @ts-check
'use strict'

const server = require('./lib/server');

/**
 * @returns {void}
 */
function init() {
    server.initContentTypeParsers();
}

const mazu = {
    init,
    get: server.get,
    post: server.post,
    serve: server.serve
};

module.exports = mazu;
