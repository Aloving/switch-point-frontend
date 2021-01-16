import React from 'react';
import { Card, CardHeader, CardContent, Divider, Box } from '@material-ui/core';
import { ArrayHelpers, FieldArray } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { color } from '@material-ui/system';

import { IPointGroup } from '../../entities';
import { Point } from '../Point';
import { Avatar } from '../Avatar';
import { Actions } from './components';
import styles from './PointGroup.module.css';
import { GroupSubHeader } from '../GroupSubHeader';
import { GroupTitle } from '../GroupTitle';

export interface IPointGroupProps extends IPointGroup {
  isEditMode: boolean;
  onGroupUpdate?: (group: IPointGroup) => void;
}

export const PointGroup = ({
  points,
  description,
  name,
  isEditMode,
}: IPointGroupProps) => {
  return (
    <div>
      <Card variant={isEditMode ? 'elevation' : 'outlined'}>
        <Box boxShadow={isEditMode ? 3 : 0}>
          <CardHeader
            avatar={<Avatar isEditMode={isEditMode} />}
            action={<Actions isEditMode={isEditMode} />}
            title={<GroupTitle title={name} isEditMode={isEditMode} />}
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
              <GroupSubHeader
                isEditMode={isEditMode}
                description={description}
              />
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
        </Box>
      </Card>
    </div>
  );
};
