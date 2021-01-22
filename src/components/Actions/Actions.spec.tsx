import React from 'react';
import { shallow } from 'enzyme';
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';

import { Actions } from './Actions';

const getWrapper = (props = {}) => {
  return shallow(<Actions disabled={false} isEditMode={false} {...props} />);
};

describe('<Actions />', () => {
  it('should render done and delete button if edit mode is on', () => {
    const wrapper = getWrapper({ isEditMode: true });

    expect(wrapper.find(DoneIcon).exists()).toBeTruthy();
    expect(wrapper.find(DeleteIcon).exists()).toBeTruthy();
    expect(wrapper.find(EditIcon).exists()).toBeFalsy();
  });

  it('should render edit icon if edit mode is on', () => {
    const wrapper = getWrapper({ isEditMode: false });

    expect(wrapper.find(EditIcon).exists()).toBeTruthy();
    expect(wrapper.find(DoneIcon).exists()).toBeFalsy();
    expect(wrapper.find(DeleteIcon).exists()).toBeFalsy();
  });

  it('should render buttons with disabled prop if disabled is passed', () => {
    const wrapper = getWrapper({ disabled: true });
    const buttons = wrapper.find(IconButton);

    buttons.forEach((button) => {
      expect(button.prop('disabled')).toBeTruthy();
    });
  });

  describe('add button should render if any state of edit mode', () => {
    it('should add button if edit mode is on', () => {
      const wrapper = getWrapper({ isEditMode: true });

      expect(wrapper.find(AddIcon).exists()).toBeTruthy();
    });

    it('should add button if edit mode is off', () => {
      const wrapper = getWrapper({ isEditMode: false });

      expect(wrapper.find(AddIcon).exists()).toBeTruthy();
    });
  });
});
