import React from 'react';
import { Field, FieldProps } from 'formik';
import { Box, TextField } from '@material-ui/core';

interface IGroupTitleProps {
  title: string;
  isEditMode: boolean;
}

export const GroupTitle = ({ isEditMode, title }: IGroupTitleProps) => {
  return isEditMode ? (
    <Field
      name="name"
      render={({ field }: FieldProps<string>) => (
        <Box mb={1}>
          <TextField size="small" variant="outlined" {...field} />
        </Box>
      )}
    />
  ) : (
    <div>{title}</div>
  );
};
