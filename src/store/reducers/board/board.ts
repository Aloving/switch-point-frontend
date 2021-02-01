import { createReducer } from 'typesafe-actions';

import { boardActions } from './boardActions';

import { BoardState } from './interfaces';
import { combineReducers } from 'redux';

const initialState: BoardState = {
  editMode: null,
  lists: {
    isLoading: false,
    completed: false,
    error: false,
    data: [
      {
        id: '10',
        name: 'name',
        description: 'descriptions',
        points: [
          {
            id: '1',
            isActive: true,
            pointGroupId: '10',
            name: 'first point',
          },
          {
            id: '2',
            isActive: false,
            pointGroupId: '10',
            name: 'second point',
          },
        ],
      },
      {
        id: '111',
        name: 'name',
        description: 'descriptions',
        points: [
          {
            id: '1',
            isActive: true,
            pointGroupId: '111',
            name: 'first point',
          },
          {
            id: '2',
            isActive: false,
            pointGroupId: '111',
            name: 'second point',
          },
          {
            id: '3',
            isActive: false,
            pointGroupId: '111',
            name: 'second point',
          },
          {
            id: '4',
            isActive: false,
            pointGroupId: '111',
            name: 'second point',
          },
        ],
      },
    ],
  },
};

const editModeReducer = createReducer(initialState.editMode)
  .handleAction(boardActions.setEditMode, (state, action) => action.payload.id)
  .handleAction(boardActions.resetEditMode, () => initialState.editMode);

const listsReducer = createReducer(initialState.lists)
  .handleAction(boardActions.deleteGroup, (state, { payload }) => ({
    ...state,
    data: state.data.filter((group) => group.id !== payload.id),
  }))
  .handleAction(boardActions.fetchGroupsRequest, (state) => ({
    ...state,
    isLoading: true,
  }))
  .handleAction(boardActions.fetchGroupsCompleted, (state, action) => ({
    ...state,
    isLoading: false,
    completed: true,
    data: action.payload,
  }))
  .handleAction(boardActions.fetchGroupsFailure, (state) => ({
    ...state,
    error: true,
  }))
  .handleAction(boardActions.updateGroup, (state, action) => ({
    ...state,
    data: state.data.map((group) =>
      group.id === action.payload.id ? action.payload : group,
    ),
  }))
  .handleAction(boardActions.toggleActivePoint, (state, { payload }) => ({
    ...state,
    data: state.data.map((group) => {
      if (group.id === payload.groupId) {
        return {
          ...group,
          points: group.points.map((point) =>
            point.id === payload.id
              ? { ...point, isActive: payload.isActive }
              : point,
          ),
        };
      }

      return group;
    }),
  }));

export const boardReducer = combineReducers({
  editMode: editModeReducer,
  lists: listsReducer,
});
