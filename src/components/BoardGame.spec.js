import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import BoardGame from './BoardGame';

const mockItem = () => ({
  name: 'Dungeon'
});

describe('<BoardGame />', () => {
  it('should have a h4 containing game name', () => {
    const item = mockItem();
    const wrapper = shallow(<BoardGame {...item} />);
    const actual = wrapper.find('h4').text();
    const expected = item.name;

    expect(actual).to.equal(expected);
  });
});
