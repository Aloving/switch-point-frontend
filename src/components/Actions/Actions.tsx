import React from 'react';
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';

interface ActionsProps {
  disabled: boolean;
  isEditMode: boolean;
  onAdd?: () => void;
  onEdit?: () => void;
  onSave?: () => void;
}

export const Actions = ({
  disabled,
  isEditMode,
  onAdd,
  onEdit,
  onSave,
}: ActionsProps) => {
  return (
    <>
      {isEditMode && (
        <IconButton onClick={onSave} disabled={disabled}>
          <DoneIcon color="primary" />
        </IconButton>
      )}
      {!isEditMode && (
        <IconButton onClick={onEdit} disabled={disabled}>
          <EditIcon />
        </IconButton>
      )}
      {isEditMode && (
        <IconButton onClick={onSave} disabled={disabled}>
          <DeleteIcon color="secondary" />
        </IconButton>
      )}
      <IconButton onClick={onAdd} disabled={disabled}>
        <AddIcon />
      </IconButton>
    </>
  );
};
