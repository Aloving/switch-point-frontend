import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';

import { rootReducer } from '../reducers/index';
import { rootSaga } from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
