import React from 'react';
import { Field, FieldProps } from 'formik';
import { Box, TextField } from '@material-ui/core';

interface IGroupTitleProps {
  disabled: boolean;
  title: string;
  isEditMode: boolean;
}

export const GroupTitle = ({
  isEditMode,
  title,
  disabled,
}: IGroupTitleProps) => {
  return isEditMode ? (
    <Field
      name="name"
      render={({ field }: FieldProps<string>) => (
        <Box mb={1}>
          <TextField
            size="small"
            variant="outlined"
            disabled={disabled}
            {...field}
          />
        </Box>
      )}
    />
  ) : (
    <>{title}</>
  );
};
