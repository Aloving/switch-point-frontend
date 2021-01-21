import React from 'react';
import { Card, CardProps } from '@material-ui/core';

interface IGroupCardProps extends CardProps {
  isEditMode: boolean;
}

export const GroupCard: React.FC<IGroupCardProps> = ({
  isEditMode,
  children,
  ...props
}) => {
  return (
    <Card variant={isEditMode ? 'elevation' : 'outlined'} {...props}>
      {children}
    </Card>
  );
};
