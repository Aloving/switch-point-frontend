import React from 'react';
import { Field, FieldProps } from 'formik';
import { Box, TextField } from '@material-ui/core';

interface IGroupTitleProps {
  disabled: boolean;
  isEditMode: boolean;
}

export const GroupTitle = ({ isEditMode, disabled }: IGroupTitleProps) => {
  return (
    <Field name="name">
      {({ field }: FieldProps<string>) => (
        <Box mb={1}>
          {isEditMode && (
            <TextField
              size="small"
              variant="outlined"
              disabled={disabled}
              {...field}
            />
          )}
          {!isEditMode && <>{field.value}</>}
        </Box>
      )}
    </Field>
  );
};
