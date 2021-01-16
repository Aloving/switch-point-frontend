import React from 'react';
import { Field, FieldProps } from 'formik';
import { TextField, Box } from '@material-ui/core';

interface IGroupSubHeaderProps {
  description?: string;
  isEditMode: boolean;
}

export const GroupSubHeader = ({
  isEditMode,
  description,
}: IGroupSubHeaderProps) => {
  return isEditMode ? (
    <Field
      name="description"
      render={({ field }: FieldProps<string>) => (
        <Box mt={1}>
          <TextField size="small" variant="outlined" {...field} />
        </Box>
      )}
    />
  ) : (
    <div>{description}</div>
  );
};

GroupSubHeader.defaulProps = {
  description: '',
};
