import React, { PureComponent } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';

import { fetchBlockInfo, fetchCurrencyExchange } from './controller/blockAPI';
import { currencyOptions } from './controller/currencyActions';

class BlockDetail extends PureComponent {
    componentDidMount() {
        const { dispatch, rate, currency, match: { params } = {} } = this.props;
        const { id } = params || {};
        dispatch(fetchBlockInfo(id));

        if (!rate || !currency || currency === 'USD') {
            dispatch(fetchCurrencyExchange());
        }
    }

    render() {
        const { currency, rate, loading, match: { params } = {} } = this.props;
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

        const unit = currency || currencyOptions[0].value;
        let unitValue = reward;
        if (unit === 'mBTC') {
            unitValue = reward * 1000;
        } else if (unit === 'bits') {
            unitValue = reward * 1000000;
        } else if (unit === 'USD') {
            unitValue = Math.round(reward * (rate || 1) * 100) / 100;
        }

        const value = `${unitValue}${unit}`;
        const { poolName, url } = poolInfo || {};

        return loading
            ? <div className="loader-gif" />
            : <section className="container ng-scope">
                  <h1 className="ng-binding">
                      Block #{height}
                  </h1>
                  <div className="ng-scope">
                      <div className="well well-sm ellipsis">
                          <strong>BlockHash</strong>&nbsp;
                          <span className="txid text-muted ng-binding">
                              {hash}
                          </span>
                      </div>
                      <h2>
                          <span className="ng-scope">Summary</span>
                      </h2>
                      <div className="row">
                          <div className="col-md-6">
                              <table
                                  className="table"
                                  style={{
                                      tableLayout: 'fixed'
                                  }}
                              >
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
                                                        &nbsp;(Mainchain)
                                                    </span>
                                                  : <span className="text-danger ng-hide">
                                                        <span className="glyphicon glyphicon-warning-sign" />
                                                        &nbsp;(Orphaned)
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
                                              {value}
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
                                      {previousblockhash
                                          ? <tr className="">
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
                                          : null}
                                  </tbody>
                              </table>
                          </div>
                          <div className="col-md-6">
                              <table
                                  className="table"
                                  style={{
                                      tableLayout: 'fixed'
                                  }}
                              >
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
                                      {nextblockhash
                                          ? <tr className="">
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
                                          : null}
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </section>;
    }
}

function mapStateToProps(state) {
    const { blockReducers } = state || {};
    return blockReducers;
}

export default connect(mapStateToProps)(BlockDetail);
