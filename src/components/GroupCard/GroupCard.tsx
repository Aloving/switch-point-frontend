import React from 'react';
import { Card, CardProps } from '@material-ui/core';

enum VariantEnum {
  ELEVATION = 'elevation',
  OUTLENED = 'outlined',
}

interface IGroupCardProps extends CardProps {
  isEditMode: boolean;
}

export const GroupCard: React.FC<IGroupCardProps> = ({
  isEditMode,
  children,
  ...props
}) => {
  return (
    <Card
      variant={isEditMode ? VariantEnum.ELEVATION : VariantEnum.OUTLENED}
      {...props}
    >
      {children}
    </Card>
  );
};
