import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import BoardGameList from './BoardGameList';
import BoardGame from './BoardGame';

const mockItemList = () => [
  {
    name: 'Earth Reborn'
  },
  {
    name: 'Dungeon Twister'
  }
];

describe('<BoardGameList />', () => {
  it('renders the entire list of items with <BoardGame>', () => {
    const items = mockItemList();
    const wrapper = shallow(<BoardGameList items = {items}/>);
    const boardGameWrappers = wrapper.find(BoardGame);
    expect(boardGameWrappers).to.have.length(items.length);
  });
  it('renders each <BoardGame> with a unique key>', () => {
    const items = mockItemList();
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
