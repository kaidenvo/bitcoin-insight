import 'react-select/dist/react-select.css';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Dropdown from 'react-select';
import { search, fetchCurrencyExchange } from './block/controller/blockAPI';
import {
    setCurrency,
    currencyOptions
} from './block/controller/currencyActions';

class Header extends PureComponent {
    state = {
        searchQuery: ''
    };

    render() {
        const { searchQuery } = this.state;
        const { currency } = this.props;

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
                                            value={searchQuery}
                                            onChange={this.handleSearch}
                                            onKeyDown={this.handleKeyDown}
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
                                    options={currencyOptions}
                                    value={currency || currencyOptions[0].label}
                                    onChange={this.handleDropdownChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    handleSearch = e => {
        this.setState({ searchQuery: e.target.value });
    };

    handleKeyDown = e => {
        if (e.keyCode === 13) {
            e.preventDefault();
            // enter
            const { props: { history }, state: { searchQuery } } = this;
            search(searchQuery)
                .then(url => history.replace(url))
                .catch(e => console.log(e));
        }
    };

    handleDropdownChange = e => {
        const { dispatch } = this.props;
        dispatch(setCurrency(e.value));

        if (e.value === 'USD') {
            dispatch(fetchCurrencyExchange());
        }
    };
}

function mapStateToProps(state) {
    const { blockReducers } = state || {};
    return blockReducers;
}

export default connect(mapStateToProps)(withRouter(Header));
