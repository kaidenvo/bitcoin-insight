import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchBlockInfo } from './controller/blockAPI';
import Moment from 'react-moment';

class BlockDetail extends PureComponent {
    componentDidMount() {
        const { dispatch, match: { params } = {} } = this.props;
        const { id } = params || {};
        dispatch(fetchBlockInfo(id));
    }

    render() {
        const { match: { params } = {} } = this.props;
        const { id } = params || {};
        const data = this.props[id];
        const {
            hash,
            height,
            reward,
            time,
            merkleroot,
            previousblockhash,
            nextblockhash,
            difficulty,
            version,
            nonce,
            bits,
            isMainChain,
            poolInfo,
            size
        } =
            data || {};

        const { poolName, url } = poolInfo || {};

        return (
            <section className="container ng-scope">
                <h1 className="ng-binding">
                    Block #{height}
                </h1>
                <div data-ng-if="block.hash" className="ng-scope">
                    <div className="well well-sm ellipsis">
                        <strong>BlockHash</strong>
                        <span className="txid text-muted ng-binding">
                            {hash}
                        </span>
                    </div>
                    <h2>
                        <span className="ng-scope">Summary</span>
                    </h2>
                    <div className="row">
                        <div className="col-md-6">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="ng-scope">
                                                    Number Of Transactions
                                                </span>
                                            </strong>
                                        </td>
                                        <td className="text-right text-muted ng-binding">
                                            1
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="ng-scope">
                                                    Height
                                                </span>
                                            </strong>
                                        </td>
                                        <td className="text-right text-muted ng-binding">
                                            {height}
                                            {isMainChain
                                                ? <span className="text-success">
                                                      (Mainchain)
                                                  </span>
                                                : <span className="text-danger ng-hide">
                                                      <span className="glyphicon glyphicon-warning-sign" />
                                                      (Orphaned)
                                                  </span>}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="ng-scope">
                                                    Block Reward
                                                </span>
                                            </strong>
                                        </td>
                                        <td className="text-right text-muted ng-binding">
                                            {reward}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="ng-scope">
                                                    Timestamp
                                                </span>
                                            </strong>
                                        </td>
                                        <td className="text-right text-muted ng-binding">
                                            <Moment>
                                                {time * 1000}
                                            </Moment>
                                        </td>
                                    </tr>
                                    <tr className="">
                                        <td>
                                            <strong>
                                                <span className="ng-scope">
                                                    Mined by
                                                </span>
                                            </strong>
                                        </td>
                                        <td className="text-right text-muted">
                                            <a
                                                href={url}
                                                target="_blank"
                                                title=""
                                                className="ng-binding"
                                            >
                                                {poolName}
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Merkle Root</strong>
                                        </td>
                                        <td className="text-right text-muted">
                                            <div className="ellipsis">
                                                <span className="ng-binding">
                                                    {merkleroot}
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr
                                        data-ng-show="block.previousblockhash"
                                        className=""
                                    >
                                        <td>
                                            <strong>
                                                <span className="ng-scope">
                                                    Previous Block
                                                </span>
                                            </strong>
                                        </td>
                                        <td className="text-right">
                                            <a
                                                href={`/block/${previousblockhash}`}
                                                className="ng-binding"
                                            >
                                                {height - 1}
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-6">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="ng-scope">
                                                    Difficulty
                                                </span>
                                            </strong>
                                        </td>
                                        <td className="text-right text-muted ng-binding">
                                            {difficulty}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Bits</strong>
                                        </td>
                                        <td className="text-right text-muted ng-binding">
                                            {bits}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="ng-scope">
                                                    Size (bytes)
                                                </span>
                                            </strong>
                                        </td>
                                        <td className="text-right text-muted ng-binding">
                                            {size}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="ng-scope">
                                                    Version
                                                </span>
                                            </strong>
                                        </td>
                                        <td className="text-right text-muted ng-binding">
                                            {version}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Nonce</strong>
                                        </td>
                                        <td className="text-right text-muted ng-binding">
                                            {nonce}
                                        </td>
                                    </tr>
                                    <tr
                                        data-ng-show="block.nextblockhash"
                                        className=""
                                    >
                                        <td>
                                            <strong>
                                                <span className="ng-scope">
                                                    Next Block
                                                </span>
                                            </strong>
                                        </td>
                                        <td className="text-right">
                                            <a
                                                href={`/block/${nextblockhash}`}
                                                className="ng-binding"
                                            >
                                                {height + 1}
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

function mapStateToProps(state) {
    const { blockReducers } = state || {};
    return blockReducers;
}

export default connect(mapStateToProps)(BlockDetail);
