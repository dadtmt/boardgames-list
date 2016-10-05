import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import BoardGame from './BoardGame';

export const mockItem = () => ({
  name: 'Dungeon Twister'
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

describe('<BoardGame />', () => {
  it('should have a remove button that call onRemove function', () => {
    const item = mockItem();
    const onRemove = sinon.spy();
    const wrapper = shallow(<BoardGame {...item} onRemove={onRemove} />);
    const removeButtonWrapper = wrapper.find('button');
    const expected = 'remove';

    expect(removeButtonWrapper.text()).to.equal(expected);
    removeButtonWrapper.simulate('click');
    expect(onRemove.calledOnce).to.be.true;
  });
});
