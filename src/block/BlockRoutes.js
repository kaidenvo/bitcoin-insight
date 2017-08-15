import React from 'react';
import { Route } from 'react-router';
import AsyncComponent from '../core/AsyncComponent';

export const BlockPage = props =>
    <Route
        {...props}
        component={AsyncComponent(() => import('./BlockPage'))}
    />;

export const BlockDetail = props =>
    <Route
        {...props}
        component={AsyncComponent(() => import('./BlockDetail'))}
    />;
