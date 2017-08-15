import React, { PureComponent } from 'react';

export default class Header extends PureComponent {
    render() {
        return (
            <div
                className="navbar navbar-default navbar-fixed-top"
                role="navigation"
            >
                <div className="container">
                    <div>
                        <div className="navbar-header">
                            <a className="insight navbar-brand" href="/">
                                insight
                            </a>
                        </div>
                        <div className="navbar-collapse collapse">
                            <span className="hidden-xs navbar-form navbar-left ng-scope">
                                <form
                                    id="search-form"
                                    role="search"
                                    className="ng-scope ng-pristine ng-valid"
                                >
                                    <div className="form-group">
                                        <input
                                            id="search"
                                            type="text"
                                            className="form-control ng-isolate-scope ng-pristine ng-valid"
                                            placeholder="Search for block, transaction or address"
                                        />
                                    </div>
                                </form>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
