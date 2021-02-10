import { createSelector } from 'reselect';

import { IStoreState } from '../../interfaces';

export const selectBoardSlice = (state: IStoreState) => state.board;
export const selectEditId = createSelector(
  selectBoardSlice,
  (board) => board.editMode,
);
export const selectLists = createSelector(
  selectBoardSlice,
  (board) => board.lists,
);
export const selectIsLoading = createSelector(
  selectLists,
  (board) => board.isLoading,
);
export const selectPointGroups = createSelector(
  selectLists,
  (board) => board.data,
);
