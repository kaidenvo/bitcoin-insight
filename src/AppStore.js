import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { blockReducers } from './block/controller/blockReducers';

const reducer = combineReducers({ blockReducers });
const logger = createLogger();

export default () =>
    createStore(
        reducer,
        applyMiddleware(
            thunkMiddleWare, // this provides dispatch()
            logger
        )
    );
