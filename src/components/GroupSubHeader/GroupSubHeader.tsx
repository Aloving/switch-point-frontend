import React from 'react';
import { Field, FieldProps } from 'formik';
import { TextField, Box } from '@material-ui/core';

interface IGroupSubHeaderProps {
  disabled: boolean;
  isEditMode: boolean;
  description?: string;
}

export const GroupSubHeader = ({
  description,
  disabled,
  isEditMode,
}: IGroupSubHeaderProps) => {
  return isEditMode ? (
    <Field
      name="description"
      render={({ field }: FieldProps<string>) => (
        <Box mt={1}>
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
    <>{description}</>
  );
};

GroupSubHeader.defaulProps = {
  description: '',
};
