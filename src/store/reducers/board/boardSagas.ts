import { all, takeEvery } from 'redux-saga/effects';

import { boardActions } from './boardActions';

export function* createGroupSaga(
  action: ReturnType<typeof boardActions.createGroup>,
) {
  console.log(action);
}

export function* deleteGroupSaga(
  action: ReturnType<typeof boardActions.deleteGroup>,
) {
  console.log(action);
}

export function* toggleActivePointSaga(
  action: ReturnType<typeof boardActions.toggleActivePoint>,
) {
  console.log(action);
}

export function* updateGroupSaga(
  action: ReturnType<typeof boardActions.updateGroup>,
) {
  console.log(action);
}

export function* boardMainSaga() {
  yield all([
    takeEvery(boardActions.createGroup, createGroupSaga),
    takeEvery(boardActions.deleteGroup, deleteGroupSaga),
    takeEvery(boardActions.toggleActivePoint, toggleActivePointSaga),
    takeEvery(boardActions.updateGroup, updateGroupSaga),
  ]);
}
