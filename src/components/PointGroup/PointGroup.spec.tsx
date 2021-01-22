import React from 'react';
import { mount } from 'enzyme';
import { Formik } from 'formik';

import { PointGroup } from './PointGroup';
import { Actions } from '../Actions';
import { GroupTitle } from '../GroupTitle';
import { GroupSubHeader } from '../GroupSubHeader';
import { Points } from '../Points';
import { GroupCard } from '../GroupCard';
import { GroupBox } from '../GroupBox';

import { IPointGroup } from '../../interfaces';

const getWrapper = (props = {}) => {
  return mount(
    <Formik<Omit<IPointGroup, 'id'>>
      initialValues={{
        points: [],
        name: 'testName',
        description: 'testDescription',
      }}
      onSubmit={jest.fn()}
    >
      <PointGroup
        disabled={false}
        isEditMode={false}
        applyChanges={jest.fn()}
        {...props}
      />
    </Formik>,
  );
};

describe('<PointGroup />', () => {
  it('should render components with disabled flag if it is passed', () => {
    const wrapper = getWrapper({ disabled: true });

    wrapper.find(Actions).map((actionsWrapper) => {
      expect(actionsWrapper.prop('disabled')).toBeTruthy();
    });
    expect(wrapper.find(GroupTitle).prop('disabled')).toBeTruthy();
    expect(wrapper.find(GroupSubHeader).prop('disabled')).toBeTruthy();
    expect(wrapper.find(Points).prop('disabled')).toBeTruthy();
  });

  it('should render components with isEditMode flag if it is passed', () => {
    const wrapper = getWrapper({ isEditMode: true });

    wrapper.find(Actions).map((actionsWrapper) => {
      expect(actionsWrapper.prop('isEditMode')).toBeTruthy();
    });
    expect(wrapper.find(GroupBox).prop('isEditMode')).toBeTruthy();
    expect(wrapper.find(GroupCard).prop('isEditMode')).toBeTruthy();
    expect(wrapper.find(GroupSubHeader).prop('isEditMode')).toBeTruthy();
    expect(wrapper.find(Points).prop('isEditMode')).toBeTruthy();
  });
});
