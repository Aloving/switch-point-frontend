import React from 'react';
import { Field, FieldProps } from 'formik';
import { TextField, Box } from '@material-ui/core';

interface IGroupSubHeaderProps {
  disabled: boolean;
  isEditMode: boolean;
}

export const GroupSubHeader = ({
  disabled,
  isEditMode,
}: IGroupSubHeaderProps) => {
  return (
    <Field name="description">
      {({ field }: FieldProps<string>) => (
        <Box mt={1}>
          {isEditMode && (
            <TextField
              size="small"
              variant="outlined"
              placeholder="description"
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
