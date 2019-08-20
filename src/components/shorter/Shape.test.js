import React from 'react';
import { shallow } from 'enzyme';
import Shape from './Short';

describe('Shape component', () => {
  it('renders App', () => {
    const wrapper = shallow(<Shape />);
    expect(wrapper).toMatchSnapshot();
  });
});
