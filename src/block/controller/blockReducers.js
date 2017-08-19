import {
    REQUEST_BLOCKS,
    RECEIVE_BLOCKS,
    ERROR_REQUEST_BLOCKS
} from './blocksActions';

import {
    REQUEST_BLOCK_INFO,
    RECEIVE_BLOCK_INFO,
    ERROR_REQUEST_BLOCK_INFO
} from './blockInfoActions';

import { SET_CURRENCY, SET_CURRENCY_EXCHANGE } from './currencyActions';

export function blockReducers(state = {}, action) {
    switch (action.type) {
        case SET_CURRENCY:
            return {
                ...state,
                currency: action.currency
            };

        case RECEIVE_BLOCKS:
            return {
                ...state,
                loading: false,
                blocks: action.blocks
            };

        case RECEIVE_BLOCK_INFO:
            return {
                ...state,
                loading: false,
                [action.block]: action.data
            };

        case ERROR_REQUEST_BLOCKS:
        case REQUEST_BLOCKS:
        case ERROR_REQUEST_BLOCK_INFO:
        case REQUEST_BLOCK_INFO:
            return {
                ...state,
                loading: !!action.loading
            };

        case SET_CURRENCY_EXCHANGE:
            return {
                ...state,
                rate: action.rate
            };

        default:
            return state;
    }
}
