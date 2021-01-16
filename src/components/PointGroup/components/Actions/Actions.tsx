import React from 'react';
import { IconButton, Divider } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import DoneIcon from '@material-ui/icons/Done';

interface ActionsProps {
  onEdit?: () => void;
  onAdd?: () => void;
  onSave?: () => void;
  isEditMode: boolean;
}

export const Actions = ({ onAdd, onEdit, isEditMode }: ActionsProps) => {
  return isEditMode ? (
    <>
      <IconButton>
        <DoneIcon color="primary" />
      </IconButton>
      <IconButton onClick={onAdd}>
        <AddIcon />
      </IconButton>
    </>
  ) : (
    <>
      <IconButton onClick={onEdit}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={onAdd}>
        <AddIcon />
      </IconButton>
    </>
  );
};
