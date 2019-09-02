import * as actionTypes from '../constants/actionTypes';

export function ping () {
    return {
        type: 'PING'
    }
};

export function pong () {
    return {
        type: 'PONG'
    }
};
