import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  boardActions,
  selectEditId,
  selectListsCompleted,
  selectListsLoading,
  selectPointGroups,
} from '../../store/board';
import { Board } from '../../components';

import { IPointGroup, IStoreState } from '../../interfaces';

interface IBoardContainerPureProps {
  editId: string | null;
  lists: IPointGroup[];
  areListsLoading: boolean;
  areListsLoaded: boolean;

  getGroups: () => void;
  setEditMode: (id: string) => void;
  resetEditMode: () => void;
}

export const BoardContainerPure = ({
  areListsLoaded,
  areListsLoading,
  editId,
  getGroups,
  lists,
  resetEditMode,
}: IBoardContainerPureProps) => {
  useEffect(() => {
    if (!areListsLoading && !areListsLoaded) {
      getGroups();
    }
  }, [areListsLoading, areListsLoaded, getGroups]);

  return <Board lists={lists} editId={editId} resetEditMode={resetEditMode} />;
};

const mapStateToProps = (state: IStoreState) => ({
  editId: selectEditId(state),
  lists: selectPointGroups(state),
  areListsLoading: selectListsLoading(state),
  areListsLoaded: selectListsCompleted(state),
});
const mapDispatchToProps = {
  setEditMode: boardActions.setEditMode,
  resetEditMode: boardActions.resetEditMode,
  getGroups: boardActions.fetchGroupsRequest,
};

export const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoardContainerPure);
