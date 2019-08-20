import React from 'react';
import { shallow } from 'enzyme';
import NameTag2 from './NameTag2';

describe('NameTag2 component', () => {
  it('renders App', () => {
    const wrapper = shallow(<NameTag2 />);
    expect(wrapper).toMatchSnapshot();
  });
});
