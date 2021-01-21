import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Box,
  CardActions,
} from '@material-ui/core';
import { FieldArray } from 'formik';

import { IPointGroup } from '../../interfaces';
import { Point } from '../Point';
import { GroupSubHeader } from '../GroupSubHeader';
import { GroupTitle } from '../GroupTitle';
import { Actions } from '../Actions';
import styles from './PointGroup.module.css';

export interface IPointGroupProps extends IPointGroup {
  disabled: boolean;
  isEditMode: boolean;
  onAddPoint?: () => void;
  onEdit?: () => void;
  applyChanges: () => void;
  onGroupUpdate?: (group: IPointGroup) => void;
}

export const PointGroup = ({
  applyChanges,
  description,
  disabled,
  isEditMode,
  name,
  onAddPoint,
  onEdit,
  points,
}: IPointGroupProps) => {
  const renderActions = () => (
    <Actions
      isEditMode={isEditMode}
      disabled={disabled}
      onAdd={onAddPoint}
      onEdit={onEdit}
      onSave={applyChanges}
    />
  );

  return (
    <Card variant={isEditMode ? 'elevation' : 'outlined'}>
      <Box boxShadow={isEditMode ? 3 : 0}>
        <CardHeader
          action={renderActions()}
          title={
            <GroupTitle
              title={name}
              isEditMode={isEditMode}
              disabled={disabled}
            />
          }
          titleTypographyProps={{
            align: 'left',
          }}
          subheaderTypographyProps={{
            align: 'left',
          }}
          style={{
            alignItems: 'end',
          }}
          subheader={
            <GroupSubHeader isEditMode={isEditMode} disabled={disabled} />
          }
        />
        <Divider variant="middle" />
        <CardContent>
          <FieldArray
            name="points"
            render={(arrayHelpers) => {
              return points.map((point, index) => (
                <div className={styles.point}>
                  <Point
                    {...point}
                    disabled={disabled}
                    key={point.id}
                    index={index}
                    isEditMode={isEditMode}
                    onPointDelete={() => arrayHelpers.remove(index)}
                  />
                </div>
              ));
            }}
          />
        </CardContent>
        {isEditMode && (
          <>
            <Divider variant="middle" />
            <CardActions
              style={{
                justifyContent: 'flex-end',
              }}
            >
              {renderActions()}
            </CardActions>
          </>
        )}
      </Box>
    </Card>
  );
};
