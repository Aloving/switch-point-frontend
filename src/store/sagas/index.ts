import { all } from 'redux-saga/effects';

import { boardMainSaga } from '../reducers/board';

export const rootSaga = function* () {
  yield all([boardMainSaga()]);
};
