import React, { useEffect } from 'react';
import { Field, FieldProps } from 'formik';
import { TextField, Box, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import styles from './EditPoint.module.css';

interface IEditPointProps {
  disabled: boolean;
  index: number;
  onPointDelete?: () => void;
  name: string;
}

export const EditPoint = ({
  index,
  onPointDelete,
  name,
  disabled,
}: IEditPointProps) => {
  const fieldRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!name && fieldRef.current) {
      fieldRef.current.focus();
    }
  }, [fieldRef]);

  return (
    <Field name={`points.${index}.name`}>
      {({ field }: FieldProps<string>) => (
        <Box className={styles.root}>
          <TextField
            size="small"
            variant="outlined"
            fullWidth
            disabled={disabled}
            {...field}
            inputRef={fieldRef}
          />
          <IconButton
            aria-label="delete"
            onClick={onPointDelete}
            disabled={disabled}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>
      )}
    </Field>
  );
};
