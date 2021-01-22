import React, { useEffect } from 'react';
import { TextField, Box, IconButton } from '@material-ui/core';
import { FieldInputProps } from 'formik';
import DeleteIcon from '@material-ui/icons/Delete';

import styles from './EditPoint.module.css';

interface IEditPointProps extends FieldInputProps<string> {
  disabled: boolean;
  onPointDelete?: () => void;
  pointName: string;
}

export const EditPoint = ({
  onPointDelete,
  pointName,
  disabled,
  ...fieldProps
}: IEditPointProps) => {
  const fieldRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!pointName && fieldRef.current) {
      fieldRef.current.focus();
    }
  }, [fieldRef]);

  return (
    <Box className={styles.root}>
      <TextField
        size="small"
        variant="outlined"
        fullWidth
        disabled={disabled}
        inputRef={fieldRef}
        {...fieldProps}
      />
      <IconButton
        aria-label="delete"
        onClick={onPointDelete}
        disabled={disabled}
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};
