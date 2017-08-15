import React from 'react';
import { Route } from 'react-router';
import AsyncComponent from '../core/AsyncComponent';

export const TransactionDetail = props =>
    <Route
        {...props}
        component={AsyncComponent(() => import('./TransactionDetail'))}
    />;
