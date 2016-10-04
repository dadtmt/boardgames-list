import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import BoardGameListContainer from './BoardGameListContainer';
import BoardGameList from '../components/BoardGameList';

describe('<BoardGameListContainer />', () => {
  it('should contain <BoardGameList />', () => {
    const wrapper = shallow(<BoardGameListContainer />);
    expect(wrapper.find(BoardGameList)).to.be.length(1);
  });
});
