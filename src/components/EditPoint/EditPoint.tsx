import React from 'react';
import { Field, FieldProps } from 'formik';
import { TextField, Box, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import styles from './EditPoint.module.css';

interface IEditPointProps {
  index: number;
  onPointDelete?: () => void;
}

export const EditPoint = ({ index, onPointDelete }: IEditPointProps) => {
  return (
    <Field
      name={`points.${index}.name`}
      render={({ field }: FieldProps<string>) => (
        <Box className={styles.root}>
          <TextField size="small" variant="outlined" fullWidth {...field} />
          <IconButton aria-label="delete" onClick={onPointDelete}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>
      )}
    />
  );
};
