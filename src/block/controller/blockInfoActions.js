export const REQUEST_BLOCK_INFO = 'REQUEST_BLOCK_INFO';
export const RECEIVE_BLOCK_INFO = 'RECEIVE_BLOCK_INFO';
export const ERROR_REQUEST_BLOCK_INFO = 'ERROR_REQUEST_BLOCK_INFO';

export function requestBlockInfo() {
    return { type: REQUEST_BLOCK_INFO, loading: true };
}

export function receiveBlockInfo(info) {
    return { type: RECEIVE_BLOCK_INFO, loading: false, data: info };
}

export function errorReceiveBlockInfo(error) {
    return { type: ERROR_REQUEST_BLOCK_INFO, loading: false, error };
}
