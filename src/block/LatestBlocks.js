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
                <div className="block-table-header">
                    <span className="block-height">Height</span>
                    <span className="block-ts">Age</span>
                    <span className="block-transaction">Transactions</span>
                    <span className="block-miner">Mined by</span>
                    <span className="block-size">Size</span>
                </div>
                {blocks.slice(0, 5).map(BlockRowRenderer)}
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
