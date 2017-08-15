import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends PureComponent {
    render() {
        return (
            <div id="footer" role="navigation">
                <div className="container ng-scope">
                    <div className="links m20t pull-left">
                        <span className="languages" />
                        &nbsp; [
                        <Link to="messages/verify">
                            <span className="ng-scope">verify message</span>
                        </Link>
                        <span> · </span>
                        <Link to="tx/send">
                            <span className="ng-scope">
                                broadcast transaction
                            </span>
                        </Link>
                        ]
                    </div>
                    <Link
                        className="insight m10v pull-right"
                        to="http://insight.is"
                    >
                        insight <small className="ng-binding">API v0.4.3</small>
                    </Link>
                </div>
            </div>
        );
    }
}
