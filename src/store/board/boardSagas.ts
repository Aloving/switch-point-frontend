import {
  all,
  takeLatest,
  getContext,
  call,
  put,
  select,
  delay,
} from 'redux-saga/effects';
import { v4 as uuid } from 'uuid';

import { boardActions } from './boardActions';
import { selectGroup } from './boardSelectors';

import { IApi } from '../../API';
import { IPoint, IPointGroup } from '../../interfaces';

export function* createGroupSaga({
  payload,
}: ReturnType<typeof boardActions.createGroupRequest>) {
  const { pointGroupService }: IApi = yield getContext('api');
  const temporaryGroup: IPointGroup = {
    ...payload,
    id: uuid(),
  };

  yield put(boardActions.pushGroup(temporaryGroup));

  try {
    const createdGroup: IPointGroup = yield call(
      pointGroupService.createGroup,
      payload,
    );

    yield delay(1000);

    yield put(
      boardActions.createGroupCompleted({
        initialGroup: temporaryGroup,
        swapGroup: createdGroup,
      }),
    );
  } catch (e) {
    yield put(boardActions.deleteGroup(temporaryGroup.id));

    console.error(e);
  }
}

export function* deleteGroupSaga({
  payload,
}: ReturnType<typeof boardActions.deleteGroup>) {
  const { pointGroupService }: IApi = yield getContext('api');
  const currentGroup: IPointGroup = yield select(selectGroup(payload.id));

  try {
    yield call(pointGroupService.deleteGroup, payload.id);
  } catch (e) {
    yield put(boardActions.setGroup(currentGroup));

    console.error(e);
  }
}

export function* toggleActivePointSaga({
  payload: { id, isActive },
}: ReturnType<typeof boardActions.toggleActivePoint>) {
  const { pointService }: IApi = yield getContext('api');

  try {
    const updatedPoint: IPoint = yield call(
      pointService.toggleIsActive,
      id,
      isActive,
    );

    yield put(boardActions.setPoint(updatedPoint));
  } catch (e) {
    console.error(e);
  }
}

export function* updateGroupSaga(
  action: ReturnType<typeof boardActions.updateGroupRequest>,
) {
  const { pointGroupService }: IApi = yield getContext('api');

  try {
    const updatedGroup: IPointGroup = yield call(
      pointGroupService.updateGroup,
      action.payload,
    );

    yield put(boardActions.setGroup(updatedGroup));
  } catch (e) {
    console.error(e);
  }
}

export function* getGroupsSaga() {
  const { pointGroupService }: IApi = yield getContext('api');

  try {
    const groups: IPointGroup[] = yield call(pointGroupService.getGroups);

    yield delay(1000);

    yield put(boardActions.fetchGroupsCompleted(groups));
  } catch (e) {
    console.error(e);
  }
}

export function* boardMainSaga() {
  yield all([
    takeLatest(boardActions.createGroupRequest, createGroupSaga),
    takeLatest(boardActions.deleteGroup, deleteGroupSaga),
    takeLatest(boardActions.toggleActivePoint, toggleActivePointSaga),
    takeLatest(boardActions.updateGroupRequest, updateGroupSaga),
    takeLatest(boardActions.fetchGroupsRequest, getGroupsSaga),
  ]);
}
