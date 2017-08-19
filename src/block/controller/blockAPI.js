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

import { setCurrencyExchange } from './currencyActions';

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

export function fetchCurrencyExchange() {
    return dispatch =>
        fetch('https://insight.bitpay.com/api/currency')
            .then(response => response.json())
            .then(json => dispatch(setCurrencyExchange(json.data.bitstamp)));
}

export function search(query) {
    return fetch(`https://insight.bitpay.com/api/block/${query}`)
        .then(response => response.json())
        .then(json => `/block/${json.hash}`)
        .catch(() =>
            fetch(`https://insight.bitpay.com/api/tx/${query}`)
                .then(response => response.json())
                .then(json => `tx/${json.txid}`)
                .catch(() =>
                    fetch(`https://insight.bitpay.com/api/block-index/${query}`)
                        .then(response => response.json())
                        .then(json => `/block/${json.blockHash}`)
                        .catch(e => console.log(e))
                )
        );
}
