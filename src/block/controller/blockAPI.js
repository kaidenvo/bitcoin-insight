import fetch from 'isomorphic-fetch';

import {
    requestBlocks,
    receiveBlocks,
    errorReceiveBlocks
} from './blocksActions';

import {
    requestBlockInfo,
    receiveBlockInfo,
    errorReceiveBlockInfo
} from './blockInfoActions';

export function fetchBlocks() {
    return dispatch => {
        dispatch(requestBlocks());
        return fetch('https://insight.bitpay.com/api/blocks')
            .then(response => response.json())
            .then(json => dispatch(receiveBlocks(json)))
            .catch(e => dispatch(errorReceiveBlocks(e)));
    };
}

export function fetchBlockInfo(block) {
    return dispatch => {
        dispatch(requestBlockInfo());
        return fetch(`https://insight.bitpay.com/api/block/${block}`)
            .then(response => response.json())
            .then(json => dispatch(receiveBlockInfo(block, json)))
            .catch(e => dispatch(errorReceiveBlockInfo));
    };
}
