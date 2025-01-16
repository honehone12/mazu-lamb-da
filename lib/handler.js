// @ts-check
'use strict'

export const OK = 200;
export const BAD_REQUEST = 400;
export const INTERNAL_SERVER_ERROR = 500;
export const TEXT = 'text/plain; charset=utf-8';
export const JSON = 'application/json';
export const FORM = 'application/x-www-form-urlencoded';

export function badRequest() {
    return {
        statusCode: BAD_REQUEST,
        headers: {
            'Content-Type': TEXT
        },
        body: 'invalid request'
    };
}

export function internalServerError() {
    return {
        statusCode: INTERNAL_SERVER_ERROR,
        headers: {
            'Content-Type': TEXT
        },
        body: 'internal server error'
    };
}
