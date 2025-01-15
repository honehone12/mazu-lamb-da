// @ts-check
'use strict'

import {mazu, fastify, log} from '../index.js';
import {handler as getHandler} from './handlers/get_handler.js';

mazu.init();
mazu.get('/', getHandler);

try {
    fastify.listen({port: 3000});
} catch (error) {
    log.error(error);
    process.exit(1);
}
