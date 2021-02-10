import { createAction, createAsyncAction } from 'typesafe-actions';

import { IPoint, IPointGroup } from '../../interfaces';

import {
  CREATE_GROUP,
  DELETE_GROUP,
  FETCH_GROUPS_COMPLETED,
  FETCH_GROUPS_FAILURE,
  FETCH_GROUPS_REQUEST,
  RESET_EDIT_MODE,
  SET_EDIT_MODE,
  SET_POINT,
  TOGGLE_ACTIVE_POINT,
  UPDATE_GROUP,
} from './constants';

const createGroup = createAction(
  CREATE_GROUP,
  (payload: Omit<IPointGroup, 'id'>) => payload,
)<IPointGroup>();
const deleteGroup = createAction(DELETE_GROUP, (id: string) => ({
  id,
}))<{
  id: string;
}>();
const fetchGroups = createAsyncAction(
  FETCH_GROUPS_REQUEST,
  FETCH_GROUPS_COMPLETED,
  FETCH_GROUPS_FAILURE,
)<string, IPointGroup[], string>();
const setEditMode = createAction(SET_EDIT_MODE, (id: string) => ({ id }))<{
  id: string;
}>();
const resetEditMode = createAction(RESET_EDIT_MODE)();
const updateGroup = createAction(UPDATE_GROUP)<IPointGroup>();
const toggleActivePoint = createAction(TOGGLE_ACTIVE_POINT)<{
  id: string;
  groupId: string;
  isActive: boolean;
}>();
const setPoint = createAction(
  SET_POINT,
  (payload: IPoint) => payload,
)<IPoint>();

export const boardActions = {
  createGroup,
  deleteGroup,
  fetchGroupsCompleted: fetchGroups.success,
  fetchGroupsFailure: fetchGroups.failure,
  fetchGroupsRequest: fetchGroups.request,
  resetEditMode,
  setEditMode,
  setPoint,
  toggleActivePoint,
  updateGroup,
};
