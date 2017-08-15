import './BlockRowRenderer.css';

import React from 'react';
import Moment from 'react-moment';

export default (item, index) => {
    const {
        hash,
        height,
        size,
        time,
        poolInfo: { poolName, url } = {},
        txlength
    } =
        item || {};

    return (
        <div
            className={`${index % 2 === 0 ? 'even' : 'odd'} block-table-row`}
            key={hash}
        >
            <span className="column block-height">
                <a href={`block/${hash}`}>
                    {height}
                </a>
            </span>
            <span className="column block-ts">
                <Moment fromNow>
                    {time * 1000}
                </Moment>
            </span>
            <span className="column block-transaction">
                {txlength}
            </span>
            <span className="column block-miner">
                <a href={url}>
                    {poolName}
                </a>
            </span>
            <span className="column block-size">
                {size}
            </span>
        </div>
    );
};
