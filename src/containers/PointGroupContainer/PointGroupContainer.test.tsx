import React from 'react';
import { mount } from 'enzyme';
import { Formik, FormikProps } from 'formik';
import { act } from 'react-dom/test-utils';

import { IPointGroup, IPointGroupForm } from '../../interfaces';
import { PointGroup } from '../../components/PointGroup';
import {
  PointGroupContainer,
  IPointGroupContainerProps,
} from './PointGroupContainer';

type IWrapperProps = Partial<IPointGroupContainerProps>;

const pointsExample = [
  {
    id: 1,
    isActive: false,
    name: 'testName',
    pointGroupId: '1',
  },
];

const pointGroupExample: IPointGroup = {
  name: 'testName',
  points: pointsExample,
  description: 'testDescription',
  id: '1',
};

const getWrapper = (props: IWrapperProps) => {
  return mount(
    <PointGroupContainer
      isEditMode={false}
      isLoading={false}
      setEditMode={jest.fn()}
      {...pointGroupExample}
      {...props}
    />,
  );
};

describe('<PointGroupContainer />', () => {
  it('should render PointGroup with disabled if isLoading passed', () => {
    const wrapper = getWrapper({ isLoading: true });

    expect(wrapper.find(PointGroup).prop('disabled')).toBeTruthy();
  });

  it('should render PointGroup with isEditMode if it is passed', () => {
    const wrapper = getWrapper({ isEditMode: true });

    expect(wrapper.find(PointGroup).prop('isEditMode')).toBeTruthy();
  });

  it('should add new point and set edit mode by onAddPoint calling', () => {
    const setEditModeMock = jest.fn();
    const wrapper = getWrapper({
      setEditMode: setEditModeMock,
    });
    const formikRef = wrapper
      .find(Formik)
      .prop<React.RefObject<FormikProps<IPointGroupForm>>>('innerRef');

    act(() => {
      wrapper.find(PointGroup).prop<() => void>('onAddPoint')();
      wrapper.update();
    });

    expect(formikRef.current?.values.points).toHaveLength(2);
    expect(setEditModeMock).toHaveBeenCalledWith('1');
  });

  it('should call setEditMode by onEdit calling', () => {
    const setEditModeMock = jest.fn();
    const wrapper = getWrapper({
      setEditMode: setEditModeMock,
    });

    act(() => {
      wrapper.find(PointGroup).prop<() => void>('onEdit')();
    });

    expect(setEditModeMock).toHaveBeenCalledWith('1');
  });
});
