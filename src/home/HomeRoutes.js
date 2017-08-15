import React from 'react';
import { Route } from 'react-router';
import AsyncComponent from '../core/AsyncComponent';

export const HomePage = props =>
    <Route {...props} component={AsyncComponent(() => import('./HomePage'))} />;
