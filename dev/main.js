// @ts-check
'use strict'

import {mazu, fastify, log} from '../index.js';
import {handler as getHandler} from './handlers/get_handler.js';
import { handler as postHandler } from './handlers/post_handler.js';

try {
    mazu.init();
    mazu.get('/', getHandler);
    mazu.post('/', postHandler);

    const port = 3000;
    await fastify.listen({port});
} catch (error) {
    log.error(error);
    process.exit(1);
}
