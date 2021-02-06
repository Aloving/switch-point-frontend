import React, { useCallback, useRef } from 'react';
import { Formik, Form, FormikProps } from 'formik';
import { connect } from 'react-redux';

import { useGroupFormHelpers } from '../../helpers';
import { boardActions } from '../../store';
import { PointGroup } from '../../components';

import { IPointGroup, IPointGroupForm } from '../../interfaces';

export interface IPointGroupContainerProps extends IPointGroup {
  isEditMode: boolean;
  isLoading: boolean;
  resetEditMode: () => void;

  applyChanges?: (group: IPointGroup) => void;
  deleteGroup: (groupId: IPointGroup['id']) => void;
  setEditMode: (groupId: IPointGroup['id']) => void;
}

export const PointGroupContainerPure = ({
  applyChanges,
  description,
  id,
  isEditMode,
  isLoading,
  name,
  points,
  resetEditMode,
  setEditMode,
  deleteGroup,
  ...props
}: IPointGroupContainerProps) => {
  const formikRef = useRef<FormikProps<IPointGroupForm>>(null);
  const { addNewPoint } = useGroupFormHelpers(formikRef);

  const handleDeleteGroup = useCallback(() => {
    deleteGroup(id);
  }, [deleteGroup, id]);
  const handleSetEditMode = useCallback(() => {
    setEditMode && setEditMode(id);
  }, [id, setEditMode]);
  const handleSubmit = useCallback(
    (values) => {
      resetEditMode();
      applyChanges && applyChanges({ ...values, id });
    },
    [applyChanges, resetEditMode],
  );
  const handleOnAddPoint = useCallback(() => {
    handleSetEditMode();
    addNewPoint();
  }, [handleSetEditMode, addNewPoint]);

  return (
    <Formik<IPointGroupForm>
      initialValues={{ name, description, points }}
      onSubmit={handleSubmit}
      innerRef={formikRef}
      enableReinitialize
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <PointGroup
            {...props}
            isEditMode={isEditMode}
            applyChanges={handleSubmit}
            onAddPoint={handleOnAddPoint}
            onEdit={handleSetEditMode}
            disabled={isLoading}
            onDelete={handleDeleteGroup}
          />
        </Form>
      )}
    </Formik>
  );
};

const mapDispatchToProps = {
  applyChanges: boardActions.updateGroup,
  deleteGroup: boardActions.deleteGroup,
  resetEditMode: boardActions.resetEditMode,
  setEditMode: boardActions.setEditMode,
};

export const PointGroupContainer = connect(
  null,
  mapDispatchToProps,
)(PointGroupContainerPure);
