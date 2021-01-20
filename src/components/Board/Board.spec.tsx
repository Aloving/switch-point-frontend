import React from 'react';
import { shallow } from 'enzyme';
import { PointGroupContainer } from '../../containers/PointGroupContainer';

import { Board } from './Board';
import { IPoint, IPointGroup } from '../../interfaces';

const listsExample: IPointGroup[] = [
  {
    id: 1,
    name: 'Name #1',
    description: 'Description #1',
    points: [],
  },
  {
    id: 2,
    name: 'Name #2',
    description: 'Description #2',
    points: [],
  },
];

const getWrapper = (props = {}) => {
  return shallow(<Board lists={listsExample} {...props} />);
};

describe('<Board />', () => {
  it('should render point group for each object in data', () => {
    const wrapper = getWrapper();

    expect(wrapper.find(PointGroupContainer).length).toEqual(2);
  });
});
