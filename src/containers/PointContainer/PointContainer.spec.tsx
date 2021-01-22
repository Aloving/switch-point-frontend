import React from 'react';
import { mount } from 'enzyme';
import { Formik } from 'formik';

import { PointContainer } from './PointContainer';
import { IPointGroupForm } from '../../interfaces';
import { Point } from '../../components/Point';

const getWrapper = (props = {}) => {
  return mount(
    <Formik<Pick<IPointGroupForm, 'points'>>
      initialValues={{
        points: [
          {
            id: 1,
            isActive: true,
            name: 'testName',
            pointGroupId: '1',
          },
        ],
      }}
      onSubmit={jest.fn()}
    >
      <PointContainer
        disabled={false}
        index={0}
        isEditMode={false}
        {...props}
      />
    </Formik>,
  );
};

describe('<PointContainer />', () => {
  it('should call togglePoint with id and inverted isActive field', () => {
    const togglePointMock = jest.fn();
    const wrapper = getWrapper({
      togglePoint: togglePointMock,
    });

    wrapper.find(Point).prop<() => void>('onPointToggle')();

    expect(togglePointMock).toHaveBeenCalledWith(1, false);
  });

  it('should call deletePoint with point id and pointGroupId', () => {
    const deletePointMock = jest.fn();
    const wrapper = getWrapper({
      deletePoint: deletePointMock,
    });

    wrapper.find(Point).prop<() => void>('onPointDelete')();

    expect(deletePointMock).toHaveBeenCalledWith(1, '1');
  });

  it('should render Point with disabled and isEditMode and disabled', () => {
    const wrapper = getWrapper({
      disabled: true,
      isEditMode: true,
    });

    expect(wrapper.find(Point).prop<boolean>('disabled')).toBeTruthy();
    expect(wrapper.find(Point).prop<boolean>('isEditMode')).toBeTruthy();
  });
});
