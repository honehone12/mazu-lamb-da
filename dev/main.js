// @ts-check
'use strict'

import {mazu, fastify, log} from '../index.js';
import {handler as getHandler} from './handlers/get.js';
import { handler as formHandler } from './handlers/form.js';
import {handler as multipartHandler} from './handlers/multipart.js';

try {
    mazu.init();
    mazu.get('/', getHandler);
    mazu.post('/form', formHandler);
    mazu.post('/multipart', multipartHandler);

    const port = 3000;
    await fastify.listen({port});
} catch (error) {
    log.error(error);
    process.exit(1);
}
