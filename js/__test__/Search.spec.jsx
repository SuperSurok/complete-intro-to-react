import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { shallow } from 'enzyme';
import Search from '../Search';

test('Search renders correctly', () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});
