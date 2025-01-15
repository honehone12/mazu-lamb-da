// @ts-check
'use strict'

const {mazu, fastify, log} = require('../index');
const {handler: getHandler} = require('./handlers/get_handler');

mazu.init();
mazu.get('/', getHandler);

try {
    fastify.listen({port: 3000});
} catch (error) {
    log.error(error);
    process.exit(1);
}
