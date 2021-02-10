import { all, takeEvery, getContext, call, put } from 'redux-saga/effects';

import { boardActions } from './boardActions';
import { IApi } from '../../API';
import { IPoint } from '../../interfaces';

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

export function* toggleActivePointSaga({
  payload: { id, isActive },
}: ReturnType<typeof boardActions.toggleActivePoint>) {
  const api: IApi = yield getContext('api');

  try {
    const updatedPoint: IPoint = yield call(
      api.pointService.toggleIsActive,
      id,
      isActive,
    );

    yield put(boardActions.setPoint(updatedPoint));
  } catch (e) {
    console.error(e);
  }
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
