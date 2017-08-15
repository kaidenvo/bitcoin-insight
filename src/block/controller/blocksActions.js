export const REQUEST_BLOCKS = 'REQUEST_BLOCKS';
export const RECEIVE_BLOCKS = 'RECEIVE_BLOCKS';
export const ERROR_REQUEST_BLOCKS = 'ERROR_REQUEST_BLOCKS';

export function requestBlocks() {
    return {
        type: REQUEST_BLOCKS,
        loading: true
    };
}

export function receiveBlocks(json) {
    return {
        type: RECEIVE_BLOCKS,
        loading: false,
        ...json
    };
}

export function errorReceiveBlocks(error) {
    return {
        type: ERROR_REQUEST_BLOCKS,
        loading: false,
        error
    };
}
