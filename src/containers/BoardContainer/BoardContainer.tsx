import React from 'react';
import { connect } from 'react-redux';

import {
  boardActions,
  selectEditId,
  selectPointGroups,
} from '../../store/board';
import { Board } from '../../components';

import { IPointGroup, IStoreState } from '../../interfaces';

interface IBoardContainerPureProps {
  editId: string | null;
  lists: IPointGroup[];

  setEditMode: (id: string) => void;
  resetEditMode: () => void;
}

export const BoardContainerPure = ({
  editId,
  lists,
  resetEditMode,
}: IBoardContainerPureProps) => {
  return <Board lists={lists} editId={editId} resetEditMode={resetEditMode} />;
};

const mapStateToProps = (state: IStoreState) => ({
  editId: selectEditId(state),
  lists: selectPointGroups(state),
});
const mapDispatchToProps = {
  setEditMode: boardActions.setEditMode,
  resetEditMode: boardActions.resetEditMode,
};

export const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoardContainerPure);
