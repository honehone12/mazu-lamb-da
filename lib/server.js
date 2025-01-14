// @ts-check
"use strict"

const fastify = require('fastify')({
    logger: true
}); 

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
    
fastify.get('/', async (req, res) => {
    req.query
    return {
        msg: 'ok'
    };
});

fastify.post('/', async (req, res) => {
    fastify.log.info(req.body);
    return {
        msg: 'ok'
    };
});

async function serve() {
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
    serve
};
