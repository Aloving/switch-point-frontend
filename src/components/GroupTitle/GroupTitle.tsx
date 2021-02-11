import React, { useEffect, useRef } from 'react';
import { useField } from 'formik';
import { Box, TextField, Typography } from '@material-ui/core';

import styles from './GroupTitle.module.css';

interface IGroupTitleProps {
  disabled: boolean;
  isEditMode: boolean;
}

export const GroupTitle = ({ isEditMode, disabled }: IGroupTitleProps) => {
  const [nameFormField] = useField('name');
  const textFieldRef = useRef<HTMLInputElement>(null);
  const nameValue = nameFormField.value;

  useEffect(() => {
    if (!nameValue && textFieldRef.current) {
      textFieldRef.current.focus();
    }
  }, [nameValue, textFieldRef]);

  return (
    <Box mb={1}>
      {isEditMode && (
        <TextField
          size="small"
          variant="outlined"
          placeholder="name"
          disabled={disabled}
          inputRef={textFieldRef}
          {...nameFormField}
        />
      )}
      {!isEditMode && (
        <div className={styles.textWrapper}>
          <Typography variant="h4" component="h3">
            {nameValue}
          </Typography>
        </div>
      )}
    </Box>
  );
};
