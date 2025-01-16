// @ts-check
'use strict'

export const OK = 200;
export const BAD_REQUEST = 400;
export const INTERNAL_SERVER_ERROR = 500;

export function badRequest() {
    return {
        statusCode: BAD_REQUEST,
        headers: {
            'Content-Type': 'application/json' 
        },
        body: {
            error: 'bad request'
        }
    };
}
