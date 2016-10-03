import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import BoardGameList from './BoardGameList';
import BoardGame from './BoardGame';
import {mockItem} from './BoardGame.spec';

describe('<BoardGameList />', () => {
  it('renders the entire list of items with <BoardGame>', () => {
    const items = [mockItem(), mockItem()];
    const wrapper = shallow(<BoardGameList items = {items}/>);
    const boardGameWrappers = wrapper.find(BoardGame);
    expect(boardGameWrappers).to.have.length(items.length);
  });
  it('renders each <BoardGame> with a unique key>', () => {
    const items = [mockItem(), mockItem()];
    const wrapper = shallow(<BoardGameList items = {items}/>);
    const boardGameWrappers = wrapper.find(BoardGame);
    let seen = new Set();
    const boardGameKeys = boardGameWrappers.map(node => node.key());
    const boardGameKeysHasDuplicates = boardGameKeys.some((key) => (
        seen.size === seen.add(key).size
    ));
    expect(boardGameKeysHasDuplicates).to.false;
  });
});
