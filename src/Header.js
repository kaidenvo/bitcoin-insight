import 'react-select/dist/react-select.css';
import React, { PureComponent } from 'react';
import Dropdown from 'react-select';

const options = ['USD', 'BTC', 'mBTC', 'bits'].map(lbl => {
    return { label: lbl, value: lbl, clearableValue: false };
});

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
                            <ul className="nav navbar-nav">
                                <li className="ng-scope">
                                    <a href="/blocks" className="ng-binding">
                                        Blocks
                                    </a>
                                </li>
                            </ul>
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
                            <div
                                className="nav navbar-form navbar-nav navbar-right"
                                style={{
                                    width: 100
                                }}
                            >
                                <Dropdown
                                    clearable={false}
                                    options={options}
                                    value={options[0].label}
                                    onValuesChange={this.handleDropdownChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    handleDropdownChange = e => {};
}
