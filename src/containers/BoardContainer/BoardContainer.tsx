import React from 'react';
import { connect } from 'react-redux';

import { boardActions, selectEditId, selectPointGroups } from '../../store';
import { Board } from '../../components';
import { IPointGroup, IStoreState } from '../../interfaces';

interface IBoardContainerPureProps {
  setEditMode: (id: string) => void;
  editId: string | null;
  lists: IPointGroup[];
}

export const BoardContainerPure = ({
  setEditMode,
  editId,
  lists,
}: IBoardContainerPureProps) => {
  return <Board lists={lists} setEditMode={setEditMode} editId={editId} />;
};

const mapStateToProps = (state: IStoreState) => ({
  editId: selectEditId(state),
  lists: selectPointGroups(state),
});
const mapDispatchToProps = {
  setEditMode: boardActions.setEditMode,
};

export const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoardContainerPure);
