import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {PureBoardGameListContainer} from './BoardGameListContainer';
import BoardGameList from '../components/BoardGameList';

// see when it comes to test redux connect

describe('<BoardGameListContainer />', () => {
  it('should renders same as <BoardGameList />', () => {
    const wrapperContainer = shallow(<PureBoardGameListContainer items={[]} />);
    const wrapper = shallow(<BoardGameList items={[]} />);
    expect(wrapperContainer.html()).to.equals(wrapper.html());
  });
});
