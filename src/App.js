import './Legacy.css';
import './App.css';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { Provider } from 'react-redux';

import NotFound from './NotFound';
import Header from './Header';
import Footer from './Footer';

import { HomePage } from './home/HomeRoutes';
import { BlockPage, BlockDetail } from './block/BlockRoutes';
import { TransactionDetail } from './transaction/TransactionRoutes';

export default ({ store }) =>
    <Provider store={store}>
        <Router>
            <div id="wrap" className="app">
                <Header />
                <section className="container">
                    <Switch>
                        <HomePage exact path="/" />
                        <BlockPage path="/blocks" />
                        <BlockDetail path="/block/:id" />
                        <TransactionDetail path="/tx/:id" />
                        <Route component={NotFound} />
                    </Switch>
                </section>
                <Footer />
            </div>
        </Router>
    </Provider>;
