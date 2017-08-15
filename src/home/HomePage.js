import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
// import Websocket from 'react-websocket';
import LatestBlocks from '../block/LatestBlocks';
import HomeFooter from './HomeFooter';

export default class Home extends PureComponent {
    render() {
        return (
            <div id="home">
                <MediaQuery
                    query="(max-width: 767px)"
                    className="mobile-search"
                >
                    <form role="search">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-controld"
                                placeholder="Search for block, transaction or address"
                            />
                        </div>
                    </form>
                </MediaQuery>
                <h1>Latest Blocks</h1>
                <LatestBlocks />
                <div className="btn-more">
                    <Link className="btn btn-default" to="/blocks">
                        <span>See all blocks</span>
                    </Link>
                </div>
                <HomeFooter />
            </div>
        );
    }

    handleData = data => {
        let result = JSON.parse(data);
        console.log(result);
    };
}
