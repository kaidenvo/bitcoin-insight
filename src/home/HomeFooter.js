import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends PureComponent {
    render() {
        return (
            <div className="col-gray">
                <h2>
                    <span className="ng-scope">About</span>
                </h2>
                <p>
                    <strong className="ng-scope">insight</strong>
                    <span className="ng-scope">&nbsp;is an</span>
                    <Link to="https://insight.is/" className="ng-scope">
                        &nbsp;open-source Bitcoin blockchain explorer
                    </Link>
                    <span className="ng-scope">
                        &nbsp;with complete REST and websocket APIs that can be
                        used for writing web wallets and other apps that need
                        more advanced blockchain queries than provided by
                        bitcoind RPC. Check out the
                    </span>
                    <Link
                        to="https://github.com/bitpay/insight-ui"
                        className="ng-scope"
                    >
                        &nbsp;source code
                    </Link>
                    <span className="ng-scope">.</span>
                </p>
                <p>
                    <strong className="ng-scope">insight</strong>
                    <span className="ng-scope">
                        {' '}is still in development, so be sure to report any
                        bugs and provide feedback for improvement at our{' '}
                    </span>
                    <Link
                        to="https://github.com/bitpay/insight-ui/issues"
                        className="ng-scope"
                    >
                        github issue tracker
                    </Link>
                    <span className="ng-scope">.</span>
                </p>
                <div id="powered" className="row">
                    <div className="powered-text">
                        <small className="text-muted">
                            <span className="ng-scope">Powered by</span>
                        </small>
                    </div>
                    <Link
                        to="http://bitcore.io"
                        className="bitcore"
                        title="Bitcore"
                    />
                    <Link
                        to="https://facebook.github.io/react/"
                        className="reactjs"
                        title="ReactJS"
                    />
                    <Link
                        to="https://code.google.com/p/leveldb/"
                        className="leveldb"
                        title="LevelDB"
                    />
                    <Link
                        to="http://nodejs.org"
                        className="nodejs"
                        title="NodeJs"
                    />
                </div>
            </div>
        );
    }
}
