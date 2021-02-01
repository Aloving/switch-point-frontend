import { createAction, createAsyncAction } from 'typesafe-actions';

import {
  FETCH_GROUPS_COMPLETED,
  FETCH_GROUPS_FAILURE,
  FETCH_GROUPS_REQUEST,
  RESET_EDIT_MODE,
  SET_EDIT_MODE,
  TOGGLE_ACTIVE_POINT,
  UPDATE_GROUP,
} from './constants';
import { IPointGroup } from '../../../interfaces';

const setEditMode = createAction(SET_EDIT_MODE, (id: string) => ({ id }))<{
  id: string;
}>();
const resetEditMode = createAction(RESET_EDIT_MODE)();
const fetchGroups = createAsyncAction(
  FETCH_GROUPS_REQUEST,
  FETCH_GROUPS_COMPLETED,
  FETCH_GROUPS_FAILURE,
)<string, IPointGroup[], string>();
const updateGroup = createAction(UPDATE_GROUP)<IPointGroup>();
const toggleActivePoint = createAction(TOGGLE_ACTIVE_POINT)<{
  id: string;
  groupId: string;
  isActive: boolean;
}>();

export const boardActions = {
  setEditMode,
  resetEditMode,
  updateGroup,
  toggleActivePoint,
  fetchGroupsRequest: fetchGroups.request,
  fetchGroupsCompleted: fetchGroups.success,
  fetchGroupsFailure: fetchGroups.failure,
};
