import React from 'react';
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/core/SvgIcon/SvgIcon';
import AddIcon from '@material-ui/icons/Add';

interface ActionsProps {
  onEdit?: () => void;
  onAdd?: () => void;
}

export const Actions = ({ onAdd, onEdit }: ActionsProps) => {
  return (
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
