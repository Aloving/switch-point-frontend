import React from 'react';
import { connect } from 'react-redux';

import { IPointGroup, IStoreState } from '../../interfaces';

import { boardActions, selectEditId, selectPointGroups } from '../../store';
import { Board } from '../../components';

interface IBoardContainerPureProps {
  setEditMode: (id: string) => void;
  editId: string | null;
  lists: IPointGroup[];
}

export const BoardContainerPure = ({
  editId,
  lists,
}: IBoardContainerPureProps) => {
  return <Board lists={lists} editId={editId} />;
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
