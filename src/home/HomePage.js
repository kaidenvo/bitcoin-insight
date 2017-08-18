import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
// import MediaQuery from 'react-responsive';
// import Websocket from 'react-websocket';
import LatestBlocks from '../block/LatestBlocks';
import HomeFooter from './HomeFooter';

export default class Home extends PureComponent {
    render() {
        return (
            <div id="home">
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
}
