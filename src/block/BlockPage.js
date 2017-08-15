import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchBlocks } from './controller/blockAPI';
import BlockRowRenderer from './BlockRowRenderer';

class BlockPage extends PureComponent {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchBlocks());
    }

    render() {
        const { blocks = [] } = this.props;

        return (
            <div>
                <h1>BlockPage</h1>
                <div className="block-table-header">
                    <span className="column block-height">Height</span>
                    <span className="column block-ts">Timestamp</span>
                    <span className="column block-transaction">
                        Transactions
                    </span>
                    <span className="column block-miner">Mined by</span>
                    <span className="column block-size">Size</span>
                </div>
                {blocks.map(BlockRowRenderer)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { blockReducers } = state || {};
    const { blocks = [] } = blockReducers || {};

    return { blocks };
}

export default connect(mapStateToProps)(BlockPage);
